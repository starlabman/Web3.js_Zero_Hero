// Import
import { ContractPlugin } from "web3-plugin-contracts";
import { Web3 } from "web3";

//Initialize provider and plugin
const web3 = new Web3("https://eth.llamarpc.com");
web3.registerPlugin(new ContractPlugin());

// using plugin

const USDT_ADDRESS = "";

//BEFORE

const usdt = web3.eth.Contract(ABI, USDT_ADDRESS);


// AFTER

const usdt2 = web3.ContractPlugin.c