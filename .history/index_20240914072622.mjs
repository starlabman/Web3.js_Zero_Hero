// import web3

import {Web3} from 'web3'

// initialize RPC endpoint

const web3 = new  Web3() 



async function main() {

    const result = await web3.eth.getBlockNumber();

    console.log("The lastest Block Number is :" , result);
    
}