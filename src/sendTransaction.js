import Tx from "ethereumjs-tx";
import secp256k1 from "secp256k1";
import fs from "fs";
Object.assign(exports, require('ethereumjs-util'));

const sendTransaction = async function(web3, from, to, data, privateKey) {
  const estimate = web3.eth.estimateGas({
        from,
        data,
        to
    });
  const gasLimitHex = web3.toHex(estimate);

  const getNonce = () => {
    return new Promise((resolve, reject) => {
      web3.eth.getTransactionCount(from, (error, result) => {
        if(error) reject(error);
        resolve(web3.toHex(result));
      })
    })
  }

  const getGasPrice = () => {
    return new Promise((resolve, reject) => {
      web3.eth.getGasPrice((error, result) => {
        if(error) reject(error);
        resolve(web3.toHex(result.toNumber()));
      })
    })
  }

  const rawTx = {
    to,
    gasLimit: gasLimitHex,
    nonce: await getNonce(),
    gasPrice: await getGasPrice(),
    data
  };

  const tx = new Tx(rawTx);
  const privateKeyBuffer = Buffer.from(privateKey, 'hex');
  tx.sign(privateKeyBuffer);
  const serializedTx = tx.serialize();
  return new Promise((resolve, reject) => {
    web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), (error, res) => {
      if(error) reject(error);
      console.log("Hash: ", res);
      resolve(res);
    })
  })
}

export default sendTransaction;
