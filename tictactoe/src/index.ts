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
  showScreen(): string {
    throw new Error('Method not implemented.');
  }
  checkWin(): string {
    const brd = this.Board;

    // horizontal
    if (brd[0] == brd[1] && brd[1] == brd[2] && brd[0] != '_') {
      return brd[0];
    }
    if (brd[3] == brd[4] && brd[4] == brd[5] && brd[3] != '_') {
      return brd[3];
    }
    if (brd[6] == brd[7] && brd[7] == brd[8] && brd[6] != '_') {
      return brd[6];
    }

    // vertical
    if (brd[0] == brd[3] && brd[3] == brd[6] && brd[0] != '_') {
      return brd[0];
    }
    if (brd[1] == brd[4] && brd[4] == brd[7] && brd[1] != '_') {
      return brd[1];
    }
    if (brd[2] == brd[5] && brd[5] == brd[8] && brd[2] != '_') {
      return brd[2];
    }
    return '_';
  }
}
