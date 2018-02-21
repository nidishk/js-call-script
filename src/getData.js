const Automated_Payroll_ABI = [{"constant":true,"inputs":[],"name":"tokenAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"balanceOf","outputs":[{"name":"etherBalance","type":"uint256"},{"name":"ethosBalance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"receipient","type":"address"},{"indexed":false,"name":"amountEther","type":"uint256"}],"name":"EtherTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":false,"inputs":[{"name":"_nextContract","type":"address"}],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_receipientsEther","type":"address[]"},{"name":"_amountEther","type":"uint256[]"},{"name":"_receipientsEthos","type":"address[]"},{"name":"_amountEthos","type":"uint256[]"}],"name":"payout","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_tokenAddr","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"}]

const getData = function(web3, address, method, params) {
  const contract = web3.eth.contract(Automated_Payroll_ABI);
  const contractInstance = contract.at(address);
  return contractInstance[method].getData(...params);
}

export default getData;
