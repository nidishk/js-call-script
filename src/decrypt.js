import keythereum from "keythereum";
import secp256k1 from "secp256k1"


const decrypt = function(datadir, address, password) {

  const keyObject = keythereum.importFromFile(address, datadir);
  let privateKey = keythereum.recover(password, keyObject);
  return privateKey.toString('hex');
}

export default decrypt;
