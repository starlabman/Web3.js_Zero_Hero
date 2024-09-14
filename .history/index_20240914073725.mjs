// import web3

import {Web3} from 'web3'

// initialize RPC endpoint

// const web3 = new  Web3() // default RPC
const web3 = new  Web3("https://arbitrum.drpc.org") 


// Using Web3.js
async function main() {

    const result = await web3.eth.getBlockNumber();

    console.log("The lastest Block Number is :" , result);



    const myBalane = web3.eth.getBalance("0x…");

    console.log("My balance is :" , myBalane);


    const 

    
}

main();