let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector("#reset");
let newbutt=document.querySelector(".msg-conainer");
let msg=document.querySelector("#msg");
let newgameb=document.querySelector("#newgame");
let resetb=document.querySelector("#reset");
let turn0= true;
//winning patterns use arrays 

  const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [2,5,8]
  ];
  
  const resetGame=()=> {
  turn0=true;
  enable();
  newbutt.classList.add("hide");
}
boxes.forEach((value)=> {
  value.addEventListener("click",()=>{
  if(turn0) {
    value.innerText="O"
    turn0=false;
  }
  else {
    value.innerText="X";
    turn0=true;
  }
  value.disabled=true;
  checkwinner();
  });
}) ;
const disable=()=> {
  for(let box of boxes ) {
    box.disabled=true;
  }
}

const enable=()=> {
  for(let box of boxes ) {
    box.disabled=false;
    box.innerText="";
  }
}
const showWinner=(winner)=> {
msg.innerText=`Congratulations Winner is ${winner} `;
newbutt.classList.remove("hide");
disable();
}

const checkwinner=()=> {
  for(let pattern of winPatterns) {
     let pos1=boxes[pattern[0]].innerText;
     let pos2= boxes[pattern[1]].innerText;
     let pos3= boxes[pattern[2]].innerText; 
   
     if(pos1!="" &&pos2!="" &&pos3!="") {
      if(pos1===pos2&&pos2===pos3) {
        console.log("winner is",pos1);
        showWinner(pos1);

      }
      
     }

  }
};

newgameb.addEventListener("click", resetGame);
resetb.addEventListener("click",resetGame);