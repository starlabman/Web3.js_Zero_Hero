// Import
import { ContractPlugin } from "web3-plugin-contracts";
import { Web3 } from "web3";
import ABI from "./ABI.mjs"

//Initialize provider and plugin
const web3 = new Web3("https://eth.llamarpc.com");
web3.registerPlugin(new ContractPlugin("API KEY"));

// using plugin



 async function main(){
    const USDT_ADDRESS = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

    //BEFORE

// const usdt = new web3.eth.Contract(ABI, USDT_ADDRESS);


// AFTER

const erc20 = await web3.ContractPlugin.contract(USDT_ADDRESS);
console.log( "name" , erc20);

const resp1 = await erc20.methods.name.call();
console.log( "name" , resp1);


const resp2 = erc20.methods.decimals.call();
console.log("decimals:", resp2);


}

export default main();