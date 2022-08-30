import { resetGame } from "./modules/resetGame";
import { gameInfo } from "./modules/gameInfo";
import { changeTurn } from "./modules/changeTurn";
import { renderBoard } from "./modules/renderBoard";

(function(){
    var ticTacToe = {
        init: function() {
            this.cacheItems();
            this.bindEvents();
        },
        cacheItems: function() {
            this.el = document.getElementById('main');
            this.gameSquares = this.el.querySelectorAll('.gameSquare');
            this.resetBtn = this.el.querySelector('#gameZoneBottom');
        },
        bindEvents: function() {
            this.resetBtn.onclick = resetGame;
            for (let i=0; i<9; i++) {
                this.gameSquares[i].addEventListener('click', e => {
                    gameInfo.gameBoard[i] = gameInfo.turn;
                    changeTurn();
                    renderBoard();
                })
            }
        }
    }
    ticTacToe.init();
})();