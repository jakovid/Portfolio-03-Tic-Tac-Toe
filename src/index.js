import { resetGame } from "./modules/resetGame";

(function(){
    var ticTacToe = {
        init: function() {
            this.cacheItems();
            this.bindEvents();
        },
        cacheItems: function() {
            this.el = document.getElementById('main');
            this.resetBtn = this.el.querySelector('#gameZoneBottom');
        },
        bindEvents: function() {
            this.resetBtn.onclick = resetGame;
        }
    }
    ticTacToe.init();
})();