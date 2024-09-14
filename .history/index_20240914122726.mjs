// import web3

import {  Web3 } from 'web3'

import ABI from './ABI.mjs'

// initialize RPC endpoint


// const web3 = new Web3("https://arbitrum.drpc.org")
const web3 = new Web3()


// Using Web3.js
async function main() {

    const result = await web3.eth.getBlockNumber();

    console.log("The lastest Block Number is :", result);



    const myBalane = web3.eth.getBalance("0x…");

    console.log("My balance is :" , myBalane);


    const response = web3.utils.toWei("1", "ether")

    console.log("1 ether is : ", response, "in wei")

    // Initialize a Wallet with a private key
    const wallet = web3.eth.wallet.add("private key");


    console.log(wallet)
    console.log(wallet[0].address)


    //send transaction using web3
    const tx = {

        from: "",
        to: "",
        value: web3.utils.toWei("", ""),
    }

    const receipt = await web3.sendTransaction(tx);

    console.log(receipt.transactionHash);

    //1. initialize contract
    const usdc = new web3.eth.Contract(ABI, "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48");

    //2. call function
    const txReceipt = await usdc.methods.totalSupply().call();

    console.log(" Total Supply is :", txReceipt);

    const txReceipt2 = await usdc.methods.name().send({ from: wallet[0].address })

    console.log(txReceipt2)



}

main();