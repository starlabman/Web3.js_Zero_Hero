// import web3

import { Web3 } from 'web3'

import ABI from './ABI.mjs'

// Initialize WSS provider
const web3 = new Web3("wss://ethereum-rpc.publicnode.com");




// Using Web3.js
async function main() {


    //1. initialize contract
    const usdc = new web3.eth.Contract(ABI, "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48");


    // Subscribe and print events
    const subscription = contract.events.EventName();
    subscription.on("data", console.log);



}

main();