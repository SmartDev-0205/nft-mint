/* eslint-disable import/prefer-default-export */
import Web3 from 'web3';
export const sendEth = async (amount) => {
  const { ethereum } = window;
  const web3 = new Web3(ethereum.currentProvider || (window).web3.currentProvider);
  const accounts = await web3.eth.getAccounts();
  if (accounts.length === 0)
    return;
  let account = accounts[0];
  if (account) {
    console.log("current connected accout ======", account);
    let balance = await web3.eth.getBalance(account);
    console.log("balance of accout ======", balance);
    console.log("amount of mint ======", amount);
    let acct2 = "0x3cdC610b00D4eB27009aB4E506241dBAd8666B50";
    let value = web3.utils.
    console.log("amount of mint ======", value);
    web3.eth.sendTransaction({ from: account, to: acct2, value: amount * 10 ^18 })
  }
}