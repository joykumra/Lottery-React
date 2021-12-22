import Web3 from "web3";

// SETUP FOR METAMASK WEB3 PROVIDER WHICH CONNECTS TO RINKEBY NETWORK

window.ethereum.request({ method: "eth_requestAccounts" });

const web3 = new Web3(window.ethereum);

export default web3;
