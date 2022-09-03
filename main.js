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
                    if (gameInfo.gameBoard[i] != ' ') {
                        return;
                    }
                    gameInfo.gameBoard[i] = gameInfo.turn;
                    changeTurn();
                    showTurn();
                    renderBoard();
                })
            }
        }
    }
    ticTacToe.init();
})();