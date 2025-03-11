export function checkWin(tictac: number[][]):  number {
    
    // check if there is a winner in a row
    for (var i = 0; i <3; i++) {
        const row = tictac[i];
        if ((row[0] != 0) &&
            (row[0] == row[1]) &&
            (row[0] == row[2])) {
            return row[0]
         }
    }

    // check if there is a winner in a column
    for (var i = 0; i <3; i++) {
        const column = [tictac[0][i], tictac[1][i], tictac[2][i]];
        console.log(column);
        if ((column[0] != 0) &&
            (column[0] == column[1]) &&
            (column[0] == column[2])) {
            return column[0]
         }
    }
    return 0
}