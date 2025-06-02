let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","green"];
let started=false;
let level=0;

let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game started");
    started=true;
     }
     levelup();
});

function gameflash(btn){
  btn.classList.add("gameflash");
  setTimeout(function(){
  btn.classList.remove("gameflash");
  },250);
}

function userflash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
  btn.classList.remove("userflash");
  },250);
}

function levelup(){
     userseq=[];
    level++;
    h3.innerText=`Level ${level}`;

    let randInd=Math.floor(Math.random()*3);
    let randColor=btns[randInd];
    let randbtn=document.querySelector(`.${randColor}`);
    // console.log(randInd);
    // console.log(randColor);
    // console.log(randbtn);
    gameseq.push(randColor);
    console.log(gameseq);
    gameflash(randbtn);
}

function checkAns(idx){
if(userseq[idx]===gameseq[idx]){
    if(userseq.length==gameseq.length){
        setTimeout(levelup,1000);
    }
}
else{
    h3.innerHTML=`Game Over! your score was <b>${level} <br> Press any key to start Game`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
document.querySelector("body").style.backgroundColor="white";
    },200)
    reset();
}
}

function pressbtn(){
    let btn=this;
    userflash(btn);

    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkAns(userseq.length-1);

}

let allBtn=document.querySelectorAll(".btn");
 for(btn of allBtn){
    btn.addEventListener("click",pressbtn);
    }


    function reset(){
        started=false;
        userseq=[];
        gameseq=[];
        level=0;

    }