import React, { useRef } from "react";

const LotteryForm = (props) => {
  const etherInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const ether = etherInputRef.current.value;

    const etherInNum = +ether;

    props.onEnteringEther(etherInNum);
    etherInputRef.current.value = "";
  };

  return (
    <React.Fragment>
      <h2>Want to try your luck?</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="ether">Amount of ether to enter: </label>
          <input
            type="number"
            id="ether"
            ref={etherInputRef}
            min="0"
            step="0.01"
          ></input>
        </div>

        <button>Enter</button>
      </form>
    </React.Fragment>
  );
};

export default LotteryForm;
