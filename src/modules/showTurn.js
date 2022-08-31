import { gameInfo } from "./gameInfo";

function showTurn() {
let buttons = document.querySelectorAll('.symbolBtn');
let announcement = document.getElementById('announcements');

if (buttons[0].value === gameInfo.turn) {
    buttons[0].style.backgroundColor = 'green';
    buttons[1].style.backgroundColor = 'gray';
    announcement.innerHTML = "It is X's turn";
} else {
    buttons[0].style.backgroundColor = 'gray';
    buttons[1].style.backgroundColor = 'green';
    announcement.innerHTML = "It is O's turn";
}

}

export { showTurn };