import logo from './logo.svg';
// import './App.css';
import './index.css';

let numsarr = [];
let max = -1;
let swap;
let sorted = false;
let interval=-1;
function startSort(){
  //part to remove the button and write the array there
  {
    document.getElementById("outText").innerHTML = "";
    var bot = document.getElementById("bottom");
    bot.innerHTML = `
    <div id='arrDisplay'>
      <div id='orgArr'><i><b>Original Array:</b> [${numsarr}]</i></div>
      <div id='sortArr'></div>
    </div>
    `
  }
  
  if(interval==-1){
    interval = setInterval(sort,300);
    console.log("interval set");
  } else {
    clearInterval(interval);
    interval=-1;
  }
  // if(sorted==true) {
  //   console.log("trueeee");
  //   clearInterval(k);
  //   inn.disabled = false;
  // }
}

function update(i,j){
  let k = document.getElementById("innerContainer");
  k.childNodes[j].classList.add("actived");
  k.childNodes[j].classList.remove("box");
  // console.log(i,j,k.childNodes[i],k.childNodes[j]);
  k.insertBefore(k.childNodes[j],k.childNodes[i]);

}

function sort(){
  let k = document.getElementsByClassName("actived");
  for(let l=0;l<k.length;l++){
    k[l].classList.add("box");
    k[l].classList.remove("actived");
  }

  for(let i=0;i<19;i++){
    swap = false;
    for(let j=0;j<19-i;j++){
      if(numsarr[j]>numsarr[j+1]){
        let temp = numsarr[j];
        numsarr[j] = numsarr[j+1];
        numsarr[j+1] = temp;
        //swap
        update(j+1,j+2);        
        swap = true;
        return;
      }
    }
    if(swap==false) break;
  }
  sorted = true;
  clearInterval(interval);
  console.log("interval out");
  interval=-1;
  document.getElementById('in').disabled = false;
  document.getElementById('sortArr').innerHTML = 
  `<i><b>Sorted Array:</b> [${numsarr}]</i>`;
}

function renderShapes(){
  document.getElementById('outputContainer').innerHTML +=
  `<div id='innerContainer'>
      ${numsarr.map((value,index)=>{
        return `<div id ='num${index}' class='box' title='${value}'></div>`
      }).join('')}
  </div>
  <style>
      ${numsarr.map((value,index)=>{
        return `#num${index}{height:${(value/max)*35}rem;width:${(90/20)+0.3}rem;background-color:yellow;}`
      }).join('')}
  </style>`;
  console.log(numsarr);
  // sort();
  //console.log(numsarr)
  //update(4,9);
  //console.log(numsarr)
  console.log(numsarr);
}

function inNum(event){
  const str = event.target.value;
  const outText = document.getElementById("outText");
  const remNumText = document.getElementById("remNumText");
  if(numsarr.length==20){
    //remove items.
    numsarr = [];
    document.getElementById("outputContainer").innerHTML = "";
    document.getElementById("bottom").innerHTML = "";
    sorted=false;
    max=-1;
  } 
  if(str.charAt(str.length-1)==" "){
    if(str.substring(0,str.length-1)!="" && parseInt(str)<=200 && parseInt(str)>=1){
      numsarr.push(parseInt(str.substring(0,str.length-1)));
      if(numsarr[numsarr.length-1]>max) max=numsarr[numsarr.length-1];
      if(numsarr.length==1) outText.innerHTML += numsarr[numsarr.length-1];
      else outText.innerHTML += ", "+numsarr[numsarr.length-1];
    }
    event.target.value = "";
    remNumText.innerHTML=`${20-numsarr.length} remaining`;
    if(numsarr.length==20){
      //display items.
      sorted=false;
      remNumText.innerHTML = "";
      document.getElementById("bottom").innerHTML = `<div id='start'>Start!</div>`;
      document.getElementById("start").onclick =()=> startSort();
      var inn = document.getElementById("in");
      inn.disabled = true;
      renderShapes();
      //remNumText.innerHTML = `20 remaining`;
      
    }
    // console.log(numsarr);
  }

}

function App() {
  return ( 
    <div id='mainContainer'>
      <div id='inputContainer'>
        <div id='faaltu'>
          <span id='mainText'>Enter 20 numbers to sort (1&le;x&le;200): </span>&nbsp;<input id='in' type="text" onChange={inNum} />&nbsp;
          <span id='remNumText'>20 remaining</span><br />
        </div>
        <div id='msg'>(Press SpaceBar to automatically submit a number.)</div>
        <div id='outText'></div>
      </div>
      <div id='outputContainer'>
      </div>
      <div id='bottom'>
        {/* <div id="start" onClick={startSort}>Start!</div> */}
        {/* <div>jhbhjdbhj</div> */}
      </div>
    </div>
  );
}

export default App;
