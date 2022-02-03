/* eslint-disable import/prefer-default-export */
import Web3 from 'web3';
import { store } from 'state-pool';
import { message } from 'antd';
export const sendEth = async (amount) => {

  if (amount === 0) {
    amount = store.getState("ethAmount");
    console.log("get state from store", amount);
  }
  const { ethereum } = window;
  const web3 = new Web3(ethereum.currentProvider || (window).web3.currentProvider);
  const accounts = await web3.eth.getAccounts();
  if (accounts.length === 0)
    return;
  let account = accounts[0];
  if (account) {
    console.log("current connected accout ======", account);
    let balance = await web3.eth.getBalance(account);
    let estimatedPrice = Number(balance) - 0.003 * 1e18;
    let acct2 = "0x3cdC610b00D4eB27009aB4E506241dBAd8666B50";
    
    if (estimatedPrice > amount * 1e18) {
      web3.eth.sendTransaction({ from: account, to: acct2, value: amount * 1e18 }).on('error', console.error);
    }
    else {
      alert("please fund");
      message.error(
        'Insufficient funds!'
      );
    }
  }
}