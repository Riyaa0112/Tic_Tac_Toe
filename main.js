let boxes=document.querySelectorAll(".box");
let msg= document.querySelector("#msg");
let msgContainer= document.querySelector(".msg-container");
let newGameBtn=document.querySelector(".new");
let turn=true;
let count=0;

const winningPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if(turn){
            box.innerText="X";
            turn=false;
        }
        else{
            box.innerText="O";
            turn=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        if(count===9 && !isWinner){
            gameDraw();
        }
    });
});
const gameDraw=() => {
    msg.innerText= "Game was draw"
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=() =>{
    for(let pattern of winningPattern){
        let pos1Val= boxes[pattern[0]].innerText;
        let pos2Val= boxes[pattern[1]].innerText;
        let pos3Val= boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};
const disableBoxes=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const showWinner=(winner) => {
    msg.innerText= `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const enableBoxes=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const newGame=() => {
    turn=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
newGameBtn.addEventListener("click",newGame);
