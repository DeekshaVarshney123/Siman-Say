function levelUP(){
    userSeq=[];
    let para=document.querySelector("p");
    para.innerText=`level ${++level}`;
    let randNum=Math.floor(Math.random()*3);
        let randColor=colors[randNum];
        let randbtn=document.querySelector(`.${randColor}`);
        gameSeq.push(randColor);
        console.log(gameSeq);
        flash_btn(randbtn);
}


function flash_btn(rand_btn){
    rand_btn.classList.add("flash")
    setTimeout(function(){
        rand_btn.classList.remove("flash")
    },250);
}

function pressBtn(){
    let btn=this;
    flash_btn(btn);
    let btnColor=btn.getAttribute("id");
    userSeq.push(btnColor);
    console.log(userSeq);
    checkSeq(userSeq.length-1);
}

function reset(){
    userSeq=[];
    gameSeq=[];
    level=0;
    start=false;
}


function checkSeq(idx){
        if(gameSeq[idx]===userSeq[idx]){
           if(userSeq.length==gameSeq.length){
            levelUP(); 
           }

        }else{
            
            if(high_score<level){
                high_score=level;
            }

            let para=document.querySelector("p");
           para.innerText="game over!! press any key to start again.";
           let head=document.querySelector("h2");
            para1.innerText=`high score =${high_score}`;
            head.insertAdjacentElement("afterend",para1);
           reset();
        }
    }


let userSeq=[];
let gameSeq=[];
let level=0;
let high_score=0;
let colors=["red","yellow","green","blue"];
let start=false;
let para1=document.createElement("h5");
document.addEventListener("keypress",function(){
    if(start==false){
        console.log("game start");
        start=true;
        levelUP();
    }

});

let allbtns=document.querySelectorAll(".btn");
for(allbtn of allbtns){
    allbtn.addEventListener("click",pressBtn);
}
