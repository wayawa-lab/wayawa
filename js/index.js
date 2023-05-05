let web3;
let address;
let abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"uint256","name":"newClipCost","type":"uint256"}],"name":"ClipUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"func","type":"string"},{"indexed":false,"internalType":"uint256","name":"gas","type":"uint256"}],"name":"Log","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"wywOwner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PrizePoolClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimPrizePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"clip","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"clipCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastClipUpdate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastMintTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastMintValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintWyw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"prizePool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"message","type":"string"}],"name":"setClip","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"teamSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wywOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
let contract = "0x7f22113BFB5AEbD6abA1b74523574b4aF079fD6C";
const chain_rpc = "https://arb1.arbitrum.io/rpc";

let countdownTime = 0;

window.onload = function() {
   getRefreshData();
}

async function connectWallet() {
    if (window.ethereum) {
        window.ethereum.on('accountsChanged',function(accounts) {
            if(address!=accounts)location.reload();
        });
        if((await new Web3(window.ethereum).eth.net.getId())!=42161){
            window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{chainId: Web3.utils.numberToHex(42161)}]
            });
            return;
        }
        let accounts = await window.ethereum.request({method:'eth_requestAccounts'});
        web3 = new Web3(chain_rpc);
        address = accounts[0];
       let str_a =address.substr(0, 5);
       let str_b = address.substr(address.length - 5);
       document.getElementById("showAddress").innerHTML = str_a + "..." + str_b;

       let pow18 = new BigNumber(10).exponentiatedBy(new BigNumber(18));
       let aContract = new web3.eth.Contract(abi,contract);
       let balance = await aContract.methods.balanceOf(address).call();
       document.getElementById("balance").innerHTML = mathDiv(balance, pow18);
    }else{
        alert('Please, Connect your wallet!');
    }
}

async function mint(){
    if(!address) {
        connectWallet();
        return;
    }
    let web = new Web3(window.ethereum);
    let c = new web.eth.Contract(abi,contract);
    await c.methods.mintWyw().send({from:address});
   setTimeout(() => {
       this.getRefreshData();
    }, 5000);
}

async function getRefreshData(){
   let pow18 = new BigNumber(10).exponentiatedBy(new BigNumber(18));
   let web = new Web3(chain_rpc);
   let aContract = new web.eth.Contract(abi,contract);
   let prizePool = await aContract.methods.prizePool().call();
   let pool = mathDiv(prizePool, pow18);
   document.getElementById("pool").innerHTML = pool;

   let clipOwner = await aContract.methods.wywOwner().call();
   let str_a =clipOwner.substr(0, 4);
   let str_b = clipOwner.substr(clipOwner.length - 4);
   document.getElementById("owner").innerHTML = str_a + "..." + str_b;

   let clip = await aContract.methods.clip().call();
   document.getElementById("clip").innerHTML = clip;

   let freeMintAmount = 0;
   if(address) {
      let lastMintTime = await aContract.methods.lastMintTime(address).call();
      if(lastMintTime > 0) {
         let time = Date.now()/1000 - lastMintTime - (24*60*60);
         if(time > 0) {
            let lastMintValue = await aContract.methods.lastMintValue(address).call();
            freeMintAmount = lastMintValue / 2
         }
      } else  {
         freeMintAmount = await aContract.methods.initialMintAmount().call();
      }
   } else {
      freeMintAmount  = await aContract.methods.initialMintAmount().call();
   }
   document.getElementById("free").innerHTML = mathDiv(freeMintAmount, pow18);

   let contractBalance = await aContract.methods.balanceOf(contract).call();
   if(new BigNumber(contractBalance).gt(new BigNumber(prizePool)) && freeMintAmount > 0) {
      document.getElementById("mintBtn").disabled = false;
   }

   let lastClipUpdata = await aContract.methods.lastClipUpdate().call();
   countdownTime = parseInt(lastClipUpdata) + (7*24*60*60) - Date.now()/1000;
   setInterval(() => {
      countdownShow();
   }, 1000);
}

async function setClip() {
   if(!address) {
      connectWallet();
      return;
   }
   let aContract = new web3.eth.Contract(abi,contract);
   let balance = await aContract.methods.balanceOf(address).call();
   let clipCost = await aContract.methods.clipCost().call();
   if(balance < clipCost) {
      alert('Insufficient WYW to set CLIP');
      return
   }
   let web = new Web3(window.ethereum);
   let c = new web.eth.Contract(abi,contract);
   let clip = document.getElementById("clip").value;
   await c.methods.setClip(clip).send({from:address});
   this.getRefreshData();
}

async function countdownShow() {
   let html = "";
   if(countdownTime > 0) {
      let h = countdownTime / 60 / 60;
      let m = (countdownTime - (h*60*60)) / 60;
      let s = countdownTime - (h*60*60) - (m*60);
      html = h + ":" + m + ":" + s;
      document.getElementById("time").innerHTML = html;
      countdownTime --;
   }
}


function mathDiv(a,b){
   let x = new BigNumber(a);
   let y = new BigNumber(b);
   if(y==0 || x==NaN || y==NaN)return 0;
   return x.dividedBy(y);
}

function mathMul(a,b){
   let x = new BigNumber(a);
   let y = new BigNumber(b);
   if(x==NaN || y==NaN)return 0;
   return x.multipliedBy(y);
}

function mathPow(a,b){
   let x = new BigNumber(a);
   let y = new BigNumber(b);
   if(x==NaN || y==NaN)return 0;
   return x.exponentiatedBy(y);
}

function mathFixed(val,decimals) {
   let x = new BigNumber(val);
   if(x==NaN)return 0;
   return x.toFixed(decimals,1);
}
