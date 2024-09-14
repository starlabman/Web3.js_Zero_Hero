// Import
import { ContractPlugin } from "web3-plugin-contracts";
import { Web3 } from "web3";
import ABI from "./ABI.mjs"

//Initialize provider and plugin
const web3 = new Web3("https://eth.llamarpc.com");
web3.registerPlugin(new ContractPlugin());

// using plugin

const USDT_ADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";


