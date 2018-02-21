import breakCsv from "./src/breakCsv";
import decrypt from "./src/decrypt";
import getData from "./src/getData";
import sendTransaction from "./src/sendTransaction";

const tokenContractAddress = "0x946f98c4c6e3e7631ea4d96689c81ad748e69dde";
const automatedPayrollAddress = "0x67f2cd43de6a5adfa5543ce6ecffe5d0221479f7";
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/7RU8T58C7rBMPgXjluUm"));

const start = async function () {
  const privateKey = decrypt('./src', "0xb1f46af04e8e99310b46c60e87eef05d736b7054", "techracers");
  const params = await breakCsv('./src/mocks/params.csv');
  const data = getData(web3, automatedPayrollAddress, 'payout', params);
  const txHash = await sendTransaction(web3, "0xb1f46af04e8e99310b46c60e87eef05d736b7054", automatedPayrollAddress, data, privateKey);
  return txHash;
}

export { start };
