import { gameInfo } from "./gameInfo";

function changeTurn() {
    if (gameInfo.turn === 'X') {
        gameInfo.turn = 'O';
    } else {
        gameInfo.turn = 'X'
    };
}

export { changeTurn };