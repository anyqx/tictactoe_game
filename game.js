
const boxes = Array.from(document.getElementsByClassName('box'));
const board = document.getElementsByClassName('board');
const announceResult = document.getElementById('announce-result');
const ttt_board = new Array(9).fill(null);
const O_PLAYER = 'o';
const X_PLAYER = 'x';

let currentPlayer = O_PLAYER;
// console.log(typeof boxes);
// console.log(boxes)

const swapPlayer = () => {
     if (currentPlayer === O_PLAYER) { //swap currentPlayer
        currentPlayer = X_PLAYER;
    } else {
        currentPlayer = O_PLAYER;
    }
}

const detectWin = () => {
    //horizontal win
    if (ttt_board[0] === currentPlayer && ttt_board[1] === currentPlayer && ttt_board[2] === currentPlayer) {console.log('win');return true};
    if (ttt_board[3] === currentPlayer && ttt_board[4] === currentPlayer && ttt_board[5] === currentPlayer) return true;
    if (ttt_board[6] === currentPlayer && ttt_board[7] === currentPlayer && ttt_board[8] === currentPlayer) return true;
    
    //vertical win
    if (ttt_board[0] === currentPlayer && ttt_board[3] === currentPlayer && ttt_board[6] === currentPlayer) return true;
    if (ttt_board[1] === currentPlayer && ttt_board[4] === currentPlayer && ttt_board[7] === currentPlayer) return true;
    if (ttt_board[2] === currentPlayer && ttt_board[5] === currentPlayer && ttt_board[8] === currentPlayer) return true;

    //diagonal
    if (ttt_board[0] === currentPlayer && ttt_board[4] === currentPlayer && ttt_board[8] === currentPlayer) {console.log('win');return true};
    if (ttt_board[2] === currentPlayer && ttt_board[4] === currentPlayer && ttt_board[6] === currentPlayer) return true;

};


const handleClick = (e) => {
    const id = e.target.id;
    
    //if space is blank -> place the marker -> swap currentPlayer
    if (!ttt_board[id]) {
        ttt_board[id] = currentPlayer;
        e.target.innerText = currentPlayer; //place marker

        if (detectWin()) {
            console.log("yes!!!")
            announceResult.innerHTML = `Player ${currentPlayer} just won!!`;
            return;
        }
        swapPlayer();
    }
}

boxes.forEach((box) => {
    box.addEventListener('click', handleClick); //{once: true}
})