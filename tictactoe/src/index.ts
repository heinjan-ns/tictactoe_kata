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
    //const result = ' | | \n-+-+-\n | | \n-+-+-\n | |';
    const div = '-+-+-\n';
    const brd = this.Board;
    const topRow = brd[0] + '|' + brd[1] + '|' + brd[2];
    const middleRow = brd[3] + '|' + brd[4] + '|' + brd[5];
    const bottomRow = brd[6] + '|' + brd[7] + '|' + brd[8];
    const result = topRow + '\n' + div + middleRow + '\n' + div + bottomRow;
    console.log(result);
    return result;
  }
  checkWin(): string {
    const brd = this.Board;

    const horizontalWin = this.checkHorizontalWin();
    if (horizontalWin != ' ') {
      return horizontalWin;
    }

    const verticalWin = this.checkVerticalWin();
    if (verticalWin != ' ') {
      return verticalWin;
    }

    // diagonal
    if (this.isSame([brd[0], brd[4], brd[8]]) && brd[0] != ' ') {
      return brd[0];
    }
    if (this.isSame([brd[2], brd[4], brd[6]]) && brd[2] != ' ') {
      return brd[0];
    }

    return ' ';
  }
  checkVerticalWin(): string {
    // vertical
    const brd = this.Board;

    if (this.isSame([brd[0], brd[3], brd[6]]) && brd[0] != ' ') {
      return brd[0];
    }
    if (this.isSame([brd[1], brd[4], brd[7]]) && brd[1] != ' ') {
      return brd[1];
    }
    if (this.isSame([brd[2], brd[5], brd[8]]) && brd[2] != ' ') {
      return brd[2];
    }
    return ' ';
  }
  checkHorizontalWin(): string {
    const brd = this.Board;
    // horizontal
    if (this.isSame([brd[0], brd[1], brd[2]]) && brd[0] != ' ') {
      return brd[0];
    }
    if (this.isSame([brd[3], brd[4], brd[5]]) && brd[3] != ' ') {
      return brd[3];
    }
    if (this.isSame([brd[6], brd[7], brd[8]]) && brd[6] != ' ') {
      return brd[6];
    }
    return ' ';
  }

  isSame(fields: [string, string, string]): boolean {
    const output = fields[0] == fields[1] && fields[1] == fields[2];
    return output;
  }
}
