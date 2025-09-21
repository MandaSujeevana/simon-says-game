let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;

let btns=["btn1", "btn2", "btn3", "btn4"];

let h2=document.querySelector("h2");

document.addEventListener("keypress",() =>{
    if(started == false){
        started = true;
        console.log("Game Started");

    levelUp();
    }

});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },150)
}



function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let rdmIdx = Math.floor(Math.random()*3);
    let rdmclr = btns[rdmIdx];
    let rdmBtn=document.querySelector(`.${rdmclr}`);
    //console.log(rdmIdx);
    //console.log(rdmclr);
    //console.log(rdmBtn);
    gameSeq.push(rdmclr);
    btnFlash(rdmBtn);
    
    
}
function checkAns(inx){
        if(userSeq[inx] === gameSeq[inx]){
           if(userSeq.length === gameSeq.length){
              setTimeout(levelUp,1000);
           }
        }
        else{
            h2.innerHTML = `Game Over! Your Score is <i>${level-1}</i>.<br>Press any key again to Start.</br> `;
            let body=document.querySelector("body");
            body.style.backgroundColor="rgb(227,123,118)"
            setTimeout(function(){
                body.style.backgroundColor = "White";

            },200);
            
            reset();
        }

    }
function btnPress(){
    let btn=this;
    btnFlash(btn);
    userClr= btn.getAttribute("id");
    userSeq.push(userClr);
    checkAns(userSeq.length-1);


}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started = false;
    gameSeq=[];
    level = 0;
    userseq = [];
}