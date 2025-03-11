export function checkWin(tictac: number[][]):  number {
    
    // check if there is a winner in a row
    for (var i = 0; i <3; i++) {
        const row = tictac[i];
        if ((row[0] != 0) &&
            (row[0] == row[1]) &&
            (row[0] == row[2])) {
            return row[0];
         }
    }

    // check if there is a winner in a column
    for (var i = 0; i <3; i++) {
        const column = [tictac[0][i], tictac[1][i], tictac[2][i]];
        if ((column[0] != 0) &&
            (column[0] == column[1]) &&
            (column[0] == column[2])) {
            return column[0];
         }
    }

    // check if there is a winner diagonally
    const diag1 = [tictac[0][0], tictac[1][1], tictac[2][2]];
    const diag2 = [tictac[0][2], tictac[1][1], tictac[2][0]];

    if ((diag1[0] != 0) && (diag1[0] == diag1[1]) && (diag1[0] == diag1[2])){
        return diag1[0];
    }

    if ((diag2[0] != 0) && (diag2[0] == diag2[1]) && (diag2[0] == diag2[2])) {
        return diag2[0];
    }

    // if the board isn't full
    for (let row of tictac) {
        for (let value of row) {
          if (value === 0) {
            return 0; 
          }
        }
    }

    // the board is full, and it's a tie
    return -1
}

function generateRandomNumber(): number {
    // generate a random number 0, 1 or 2
    return Math.floor(Math.random() * 3);
  }

export function pickRandomSpot(tictac: number[][], player: number):  number[][] {
    var spotPicked = false;
    while(spotPicked == false) {
        const i = generateRandomNumber();
        const j = generateRandomNumber();
        if (tictac[i][j] == 0) {
            tictac[i][j] = player;
            // console.log('picked spot:', i, j)
            spotPicked = true
        }
    }
    
    // console.log('board out:', tictac);
    return (tictac)
}

function showBoard(tictac: number[][]): void {
    console.log(tictac[0]);
    console.log(tictac[1]);
    console.log(tictac[2]);
}

function showResult(tictac: number[][], result: number): void {
    showBoard(tictac);
    if (result == -1) {
        console.log('It is a tie, nobody won.');
    } else {
        console.log('Player', result, 'won the game!');
    }
}

function play(): void {
    var board = [ [0,0,0], [0, 0, 0], [0, 0, 0]];

    for (var i = 0; i < 5; i++) {
        board = pickRandomSpot(board, 1);
        var win = checkWin(board);
        if (win != 0) {
            showResult(board, win);
            return;
        }
        board = pickRandomSpot(board, 2);
        var win = checkWin(board)
        if (win != 0) {
            showResult(board, win);
            return;
        }
    }
}

play();