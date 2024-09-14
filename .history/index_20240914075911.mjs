// import web3

import { Web3 } from 'web3'

// initialize RPC endpoint

const web3 = new  Web3("https://hardworking-hardworking-sailboat.avalanche-testnet.discover.quiknode.pro/e5cf8d5721fb8a84c07fee21f23a98870007950d/ext/bc/C/rpc/") // default RPC
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
    const wallet = web3.eth.wallet.add("0xaae42b1706ef4e208908e6297feea82cd9e055f7d48b5335c4034fe3ca40e936");

    // Access the first account within the wallet
    // wallet[0].address
    // wallet[0].privateKey
    // wallet[0].sign(“data”)
    // wallet[0].signTransaction(“txObject”)

    console.log(wallet)

    const tx = {

        from : ""
        to: "",
        value: "",
    }



}

main();