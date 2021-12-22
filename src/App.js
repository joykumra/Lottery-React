import lottery from "./lottery";
import React, { useEffect, useState } from "react";
import web3 from "./web3";
import LotteryForm from "./LotteryForm";

function App() {
  const defaultContract = {
    manager: "",
    players: [],
    totalBalance: 0,
  };

  const [lotteryContract, setLottery] = useState(defaultContract);

  const [isValidAmount, setIsValidAmount] = useState(true);
  const [transactionMessage, setTransactionMessage] = useState("");

  useEffect(() => {
    const lotteryFunctions = async () => {
      const manager = await lottery.methods.manager().call((err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      });

      const players = await lottery.methods.allPlayers().call();
      const totalBalance = await web3.eth.getBalance(lottery.options.address);

      setLottery({
        manager: manager,
        players: players,
        totalBalance: totalBalance,
      });
    };
    lotteryFunctions();
  }, []);

  const enterEtherHandler = async (ether) => {
    if (ether > 0.01) {
      setIsValidAmount(true);

      const accounts = await web3.eth.getAccounts();

      setTransactionMessage("Waiting on Transaction Success");

      try {
        await lottery.methods.enter().send({
          from: accounts[0],
          value: web3.utils.toWei(`${ether}`, "ether"),
        });
        setTransactionMessage("You have been entered");
      } catch (err) {
        setTransactionMessage(
          "You have been declined to enter. Please try again."
        );
        return;
      }

      setLottery((prevLottery) => {
        return {
          manager: prevLottery.manager,
          players: prevLottery.players.concat(accounts[0]),
          totalPlayers: prevLottery.totalPlayers + 1,
          totalBalance: prevLottery.totalBalance + ether,
        };
      });
    } else {
      setIsValidAmount(false);
    }
  };

  const winnerButtonHandler = async () => {
    setTransactionMessage("Picking Winner... Wait!");

    try {
      const accounts = await web3.eth.getAccounts();
      await lottery.methods.pickWinner().send({ from: accounts[0] });
      const winner = await lottery.methods
        .lastWinner()
        .call({ from: accounts[0] });
      setTransactionMessage(`Winner: ${winner}`);
      setLottery({ ...defaultContract });
    } catch (err) {
      setTransactionMessage(
        "You have been declined to enter. Please try again."
      );
    }
  };

  return (
    <React.Fragment>
      <h2>Lottery Contract</h2>
      <p>This contract is managed by {lotteryContract.manager}</p>
      <p>
        There are currently {lotteryContract.players.length} players entered,
        competing to win {lotteryContract.totalBalance} ether!
      </p>
      <LotteryForm onEnteringEther={enterEtherHandler}></LotteryForm>
      {!isValidAmount && <p>Error: Amount of ether must be more than 0.01</p>}

      <h3>Time to pick the winner?</h3>
      <button onClick={winnerButtonHandler}>Enter</button>
      <hr></hr>
      <h2>{transactionMessage}</h2>
    </React.Fragment>
  );
}

export default App;
