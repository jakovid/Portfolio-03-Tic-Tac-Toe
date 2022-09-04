(function(){
    var ticTacToe = {
        winner: false,
        gameBoard: ['','','','','','','','',''],
        turn: 'X',
        mode: 'human',
        init: function() {
            this.cacheDom();
        },
        cacheDom: function() {
            this.el = document.getElementById('gameZone');
            this.annoucements = this.el.querySelector('#announcements');
            this.symbolBtns = this.el.querySelectorAll('.symbolBtn');
            this.gameSquares = this.el.querySelectorAll('.gameSquare');
            this.resetBtn = this.el.querySelector('#resetBtn');
        },
        bindEvents: function() {

        },
        populateGameBoard: function() {
            for (let i=0; i<9; i++) {
                this.gameSquares[i].innerHTML = this.gameBoard[i];
            }
        },
        userPick: function() {

        },
        symbolSelect: function() {

        }
    }
    ticTacToe.init();
})();