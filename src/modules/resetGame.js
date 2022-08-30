import { gameInfo } from "./gameInfo";
import { renderBoard } from "./renderBoard";

function resetGame() {
    for (let i=0; i<gameInfo.gameBoard.length; i++) {
        gameInfo.gameBoard[i] = ' ';
    }
    gameInfo.hasWinner = false;
    renderBoard();
}

export { resetGame };