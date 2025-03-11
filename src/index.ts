export function checkWin(tictac: number[][]):  number {
    if ((tictac[0][0] != 0) &&
        (tictac[0][0] == tictac[0][1]) &&
        (tictac[0][0] == tictac[0][2])) {
            return tictac[0][0]
         }
    if ((tictac[1][0] != 0) &&
        (tictac[1][0] == tictac[1][1]) &&
        (tictac[1][0] == tictac[1][2])) {
            return tictac[1][0]
    }     
    if ((tictac[2][0] != 0) &&
        (tictac[2][0] == tictac[2][1]) &&
        (tictac[2][0] == tictac[2][2])) {
            return tictac[2][0]
    }     
    return 0
}