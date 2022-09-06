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
            this.modeBtns.forEach(e => e.addEventListener('click', ticTacToe.modeSelect));
            this.symbolBtns.forEach(e => e.addEventListener('click', ticTacToe.symbolSelect));
            this.gameSquares.forEach(e => e.addEventListener('click', ticTacToe.userPick));
            this.resetBtn.addEventListener('click', ticTacToe.resetGame);
        },
        populateGameBoard: function() {
            for (let i=0; i<9; i++) {
                this.gameSquares[i].innerHTML = this.gameBoard[i];
            };
        },
        userPick: function() {
            if (this.innerHTML === '' && ticTacToe.winner === false) {
                let index = this.getAttribute('value');
                ticTacToe.gameBoard[index] = ticTacToe.turn;
                ticTacToe.populateGameBoard();
                ticTacToe.switchTurn();
            }
        },
        symbolSelect: function() {
            ticTacToe.turn = this.value;
            console.log(ticTacToe.turn);
        },
        modeSelect: function() {
            ticTacToe.mode = this.value;
            ticTacToe.opponent.innerHTML = this.innerHTML;
        },
        switchTurn: function() {
            ticTacToe.turn == 'X' ? ticTacToe.turn = 'O' : ticTacToe.turn = 'X';
        },
        resetGame: function() {
            ticTacToe.gameBoard = ['','','','','','','','',''];
            ticTacToe.populateGameBoard();
        }
    }
    ticTacToe.init();
})();