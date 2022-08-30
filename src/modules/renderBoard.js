import { gameInfo } from "./gameInfo";

function renderBoard() {
    let gameSquares = document.querySelectorAll('.gameSquare');
    for (let i=0; i<9; i++) {
        gameSquares[i].innerHTML = gameInfo.gameBoard[i];
    }
}

export { renderBoard };