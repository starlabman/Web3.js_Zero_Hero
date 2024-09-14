// import web3

import {  Web3 } from 'web3'

import ABI from './ABI.mjs'

// Initialize WSS provider
const web3 = new Web3("wss://ethereum-rpc.publicnode.com");




// Using Web3.js
async function main() {

    const result = await web3.eth.getBlockNumber();

    console.log("The lastest Block Number is :", result);



    // const myBalane = web3.eth.getBalance("0x…");

    // console.log("My balance is :" , myBalane);


    const response = web3.utils.toWei("1", "ether")

    console.log("1 ether is : ", response, "in wei")

    // Initialize a Wallet with a private key
    // const wallet = web3.eth.wallet.add("0xaae42b1706ef4e208908e6297feea82cd9e055f7d48b5335c4034fe3ca40e936");


    // console.log(wallet)
    // console.log(wallet[0].address)

    // const tx = {

    //     from: "",
    //     to: "",
    //     value: web3.utils.toWei("", ""),
    // }

    // const receipt = await web3.sendTransaction(tx);

    // console.log(receipt.transactionHash);

    //1. initialize contract
    const usdc = new web3.eth.Contract(ABI, "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48");
// Initialize contract
const contract = new web3.eth.Contract(ABI, ADDRESS);

// Subscribe and print events
const subscription = contract.events.EventName();
subscription.on("data", console.log);



}

main();