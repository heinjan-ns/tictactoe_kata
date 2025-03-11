export function checkWin(tictac: number[][]):  number {
    
    for (var i = 0; i <3; i++) {
        const row = tictac[i];
        if ((row[0] != 0) &&
            (row[0] == row[1]) &&
            (row[0] == row[2])) {
            return row[0]
         }
    }
    return 0
}