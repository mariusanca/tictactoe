let turn = 1; //turn 1 means X player, turn 2 means O player
let click = 0;
let found = 0;
const zero = '0', one = '1', two = '2';
let number = 3; //setting all elements of the matrix with different value starting from 3 to be able to difference player X (1) and player O (2)
let matrix = [];
for (let lineIndex = 0; lineIndex <= 2; ++lineIndex) {
    matrix[lineIndex] = [];
    for(let columnIndex = 0; columnIndex <= 2; ++columnIndex) {
        matrix[lineIndex][columnIndex] = number;
        ++number;  
    }
}

function changeTurn() { //this function changes player turn
    if (turn === 1) {
        document.getElementById('player').innerHTML = 'O player turn';
        turn = 2;
    } else {
        document.getElementById('player').innerHTML = 'X player turn';
        turn = 1;
    }
    for (let lineIndex = 0; lineIndex <= 2; ++lineIndex) {
        for(let columnIndex = 0; columnIndex <= 2; ++columnIndex) {
        }
    }
}

function checkWinner() { //this function checks all matrix rows, columns and diagonals for 3 elements with same value
    for (let lineIndex = 0; lineIndex <= 2; ++lineIndex) {
        if (matrix[lineIndex][0] === matrix[lineIndex][1] && matrix[lineIndex][1] === matrix[lineIndex][2]) {
            foundWinner(lineIndex, zero, lineIndex, one, lineIndex, two);
            break;
        }
    }
    for (let columnIndex = 0; columnIndex <= 2; ++columnIndex) {
        if (matrix[0][columnIndex] === matrix[1][columnIndex] && matrix[1][columnIndex] === matrix[2][columnIndex]) {
            foundWinner(zero, columnIndex, one, columnIndex, two, columnIndex);
            break;
        }
    }
    if (matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2]) {
        foundWinner(zero, zero, one, one, two, two);
        return;
    }
    if (matrix[2][0] === matrix[1][1] && matrix[1][1] === matrix[0][2]) {
        foundWinner(two, zero, one, one, zero, two);
    }
}

function foundWinner(line1, column1, line2, column2, line3, column3) { //this function display the winner of the game
    if (matrix[line1][column1] === 1) {
        document.getElementById('player').innerHTML = '<h4 id="player-win">Player X won!</h2>';
    } else {
        document.getElementById('player').innerHTML = '<h4 id="player-win">Player O won!</h2>';
    }
    document.getElementById('title').innerHTML = '<h1 class="congrats" id="title">CONGRATULATIONS!</h1>';
    document.getElementById('' + line1 + column1).className = "winner-button";
    document.getElementById('' + line2 + column2).className = "winner-button";
    document.getElementById('' + line3 + column3).className = "winner-button";
    found = 1;
}

function insert(line, column) { //this function inserts X or O on the selected grid
    if(matrix[line][column] >= 3 && found === 0) {
        matrix[line][column] = turn;
        if (turn === 1) {
            document.getElementById('' + line + column).innerHTML = '<div class="player">X</div>';
        } else {
            document.getElementById('' + line + column).innerHTML = '<div class="player">O</div>';
        }
        ++click;
        changeTurn();
        if (click >= 5) {
            checkWinner();
        }
        if (click === 9 && found === 0) {
            document.getElementById('player').innerHTML = '<h4 class="no-winner">There is no winner! Please try again!</h2>';
        }
    }
}

function reload() {
    location.reload();
}
