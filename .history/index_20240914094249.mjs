// import web3

import {  Web3 } from 'web3'

import ABI from './ABI.mjs'

// initialize RPC endpoint

const web3 = new Web3("https://hardworking-hardworking-sailboat.avalanche-testnet.discover.quiknode.pro/e5cf8d5721fb8a84c07fee21f23a98870007950d/ext/bc/C/rpc/") // default RPC
// const web3 = new Web3("https://arbitrum.drpc.org")


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
    const USCD = new web3.eth.Contract(ABI, "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48");

    //2. call function
    const txReceipt = await USCD.methods.totalSupply().call();

    console.log(txReceipt);




}

main();