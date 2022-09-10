(function(){
    var ticTacToe = {
        winner: false,
        winningSymbol: '',
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
                ticTacToe.gameOver();
            }
        },
        symbolSelect: function() {
            ticTacToe.turn = this.value;
            ticTacToe.resetGame();
            ticTacToe.displayTurn();
        },
        modeSelect: function() {
            ticTacToe.mode = this.value;
            ticTacToe.opponent.innerHTML = this.innerHTML;
            ticTacToe.resetGame();
        },
        switchTurn: function() {
            ticTacToe.turn == 'X' ? ticTacToe.turn = 'O' : ticTacToe.turn = 'X';
            ticTacToe.displayTurn();
        },
        displayTurn: function() {
            if (this.symbolBtns[0].value === ticTacToe.turn) {
                this.symbolBtns[0].style.backgroundColor = 'lightgreen';
                this.symbolBtns[1].style.backgroundColor = 'lightgray';
            } else {
                this.symbolBtns[1].style.backgroundColor = 'lightgreen';
                this.symbolBtns[0].style.backgroundColor = 'lightgray';
            }
            this.annoucements.innerHTML = 'It is ' + this.turn + "'s turn!";
        },
        resetGame: function() {
            console.log('reset!');
            ticTacToe.gameBoard = ['','','','','','','','',''];
            ticTacToe.winner = false;
            ticTacToe.populateGameBoard();
        },
        gameOver: function() {
            if (ticTacToe.winCheck(0,1,2) // check for row win
            || ticTacToe.winCheck(3,4,5)
            || ticTacToe.winCheck(6,7,8)
            || ticTacToe.winCheck(0,3,6) // check for column win
            || ticTacToe.winCheck(1,4,7)
            || ticTacToe.winCheck(2,5,8)
            || ticTacToe.winCheck(0,4,8) //check for diagonal win
            || ticTacToe.winCheck (2,4,6)) {
                ticTacToe.winner = true;
                this.annoucements.innerHTML = ticTacToe.winningSymbol + ' wins!';
            }
        },
        winCheck: function(s1,s2,s3) {
            if (ticTacToe.gameBoard[s1] == '') return false;
            if (ticTacToe.gameBoard[s1] != ticTacToe.gameBoard[s2]) return false;
            if (ticTacToe.gameBoard[s1] != ticTacToe.gameBoard[s3]) return false;
            ticTacToe.winningSymbol = ticTacToe.gameBoard[s1];
            return true;
        }
    }
    ticTacToe.init();
})();