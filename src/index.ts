export function checkWin(tictac: number[][]):  number {
    if ((tictac[0][0] == tictac[0][1]) &&
        (tictac[0][0] == tictac[0][2])) {
            return tictac[0][0]
         }
    return 0
}