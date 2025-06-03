export class TicTacToe {
  private Board: [string, string, string, string, string, string, string, string, string];

  constructor(
    TicTacToeBoard: [string, string, string, string, string, string, string, string, string]
  ) {
    this.Board = TicTacToeBoard;
  }

  pickSpot(spot: number, player: string) {
    this.Board[spot] = player;
    return;
  }
  getSpot(spot: number): string {
    return this.Board[spot];
  }
  checkWin(): string {
    const brd = this.Board;
    if (brd[3] == brd[4] && brd[4] == brd[5] && brd[3] != '_') {
      return brd[4];
    }
    return 'X';
  }
}
