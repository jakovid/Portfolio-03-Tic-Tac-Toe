(function(){
    var ticTacToe = {
        winner: false,
        gameBoard: [['','','']['','','']['','','']],
        turn: 'X',
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
    }
    ticTacToe.init();
})();