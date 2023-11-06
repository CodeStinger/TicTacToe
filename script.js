console.log("welcomr to tictactoe");

let music = new Audio("music.mp3");
let gameover = new Audio("gameover.mp3");
let audioturn = new Audio("ting.mp3");
let turn="X";
let isgameover=false;

// Function to change turn every time
const changeTurn = ()=>{
    return turn==="X"?"O":"X";
}

// Function to check for win
const checkWin=()=>{
    let boxtext = document.getElementsByClassName("boxText");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        // console.log(boxtext[e[0]].innerText===boxtext[e[1]].innerText);
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="")){
            document.querySelector('.info').innerText= boxtext[e[0]].innerText+" Won";
            isgameover=true;
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width="200px";
        }
    })
}

// Game Logic
let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach((element)=>{
    let boxtext = element.querySelector(".boxText");
    element.addEventListener('click',()=>{
        if((boxtext.innerHTML=='') && (!isgameover) ){
            boxtext.innerHTML=turn;
            turn=changeTurn();
            audioturn.play();
            checkWin();
            // console.log(document.getElementsByClassName("info"));
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerHTML="Turn for "+turn;
            }
        }
    })
})

// Reset button 
let reset = document.getElementsByTagName('button')[0];
reset.addEventListener('click',()=>{
    // console.log("event occure");
    Array.from(boxes).forEach((element)=>{
        let boxtext=element.querySelector('.boxText');
        boxtext.innerText="";
    })
    turn = "X"; 
    isgameover = false
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})