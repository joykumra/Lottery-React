import web3 from "./web3";

const address = "0x432fD06E0414ABf05F5f80d508C208B960B9C4Ae";

// GET ABI FROM ETHERSCAN
const abi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    inputs: [],
    name: "allPlayers",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "enter",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastWinner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pickWinner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "players",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
];

// Local copy of Contract
export default new web3.eth.Contract(abi, address);

// [
//   {
//     inputs: [],
//     stateMutability: "nonpayable",
//     type: "constructor",
//     signature: "constructor",
//   },
//   {
//     inputs: [],
//     name: "enter",
//     outputs: [],
//     stateMutability: "payable",
//     type: "function",
//     payable: true,
//     signature: "0xe97dcb62",
//   },
//   {
//     inputs: [],
//     name: "getPlayers",
//     outputs: [
//       {
//         internalType: "address[]",
//         name: "",
//         type: "address[]",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//     constant: true,
//     signature: "0x8b5b9ccc",
//   },
//   {
//     inputs: [],
//     name: "manager",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//     constant: true,
//     signature: "0x481c6a75",
//   },
//   {
//     inputs: [],
//     name: "pickWinner",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//     signature: "0x5d495aea",
//   },
//   {
//     inputs: [],
//     name: "winner",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//     constant: true,
//     signature: "0xdfbf53ae",
//   },
// ];
