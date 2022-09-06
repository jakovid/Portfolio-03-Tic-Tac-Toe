(function(){
    var ticTacToe = {
        winner: false,
        gameBoard: ['','','','','','','','',''],
        turn: 'X',
        mode: 'human',
        init: function() {
            this.cacheDom();
            this.bindEvents();
        },
        cacheDom: function() {
            this.el = document.getElementById('contentContainer');
            this.annoucements = this.el.querySelector('#announcements');
            this.modeBtns = this.el.querySelectorAll('.modeBtn');
            this.symbolBtns = this.el.querySelectorAll('.symbolBtn');
            this.gameSquares = this.el.querySelectorAll('.gameSquare');
            this.resetBtn = this.el.querySelector('#resetBtn');
            this.opponent = this.el.querySelector('#oppenentSelected');
        },
        bindEvents: function() {
            for (let i=0; i < this.modeBtns.length; i++) {
                this.modeBtns[i].addEventListener('click', this.modeSelect);
            }
        },
        populateGameBoard: function() {
            for (let i=0; i<9; i++) {
                this.gameSquares[i].innerHTML = this.gameBoard[i];
            };
        },
        userPick: function() {

        },
        symbolSelect: function() {

        },
        modeSelect: function() {
            ticTacToe.mode = this.value;
            ticTacToe.opponent.innerHTML = this.innerHTML;
        }
    }
    ticTacToe.init();
})();