let IntroMenu = document.getElementById('start');
let main = document.getElementById('main');
let cells = document.querySelectorAll('.cell');
let resetButton = document.querySelector('.resetButton');
const end = document.getElementById('endMessage');

resetButton.style.visibility = 'hidden';
IntroMenu.style.display = 'none';
let gameIsGoing = true;
let xTurn = true;

const arrX = [];
const arrO = [];

const winElements = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


cells.forEach(cell => {
    cell.addEventListener('click',clickHandle,{once:true});
});

function clickHandle(event){
    if(xTurn){
        event.target.className = 'cell X';
        console.log(event.target);
        xTurn = false;
        hover(xTurn);
        if(checkWinX()){
            console.log('winner');
            endGame('X');
        }
    }
    else{
        event.target.className = 'cell O';
        xTurn = true;
        hover(xTurn);
        if(checkWinO()){
            console.log('winner');
            endGame('O');
        }
    }
};

const hover = val => {
    if(val === true){
        document.getElementById('main').className = "board X";
    }
    else{
        document.getElementById('main').className = "board O";
    }
};


function checkWinX(){
    return winElements.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains('X');
        });
    });
}

function checkWinO(){
    return winElements.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains('O');
        });
    });
}

function endGame(str){
    main.style.visibility= 'hidden';
    resetButton.style.visibility = 'visible';
    if(str == 'X'){
        end.innerHTML = 'PLAYER X WINS!';
    }
    else{
        end.innerHTML = 'PLAYER O WINS!';
    }
}


resetButton.addEventListener('click',resetGame,{once:true});

function resetGame(){
    cells.forEach(cell => {
        cell.className = 'cell';
    });
    main.style.visibility = 'visible';
    end.innerHTML = '';
    resetButton.style.visibility = 'hidden';

}

 
hover(xTurn);









