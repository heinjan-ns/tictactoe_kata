export enum GameState {
  IN_PROGRESS,
  WIN_X,
  WIN_O,
  TIE,
}

export class TicTacToe {
  private Board: [string, string, string, string, string, string, string, string, string];
  private gameState: GameState;

  constructor(
    TicTacToeBoard: [string, string, string, string, string, string, string, string, string]
  ) {
    this.Board = TicTacToeBoard;
    this.gameState = GameState.IN_PROGRESS;
  }
  checkGameState(): GameState {
    return this.gameState;
  }

  pickSpot(spot: number, player: string) {
    this.Board[spot] = player;
    return;
  }

  pickRandomSpot(player: string) {
    var spotPicked = false;
    while (!spotPicked) {
      const randomSpot = Math.floor(Math.random() * 9); // spot between 0 and 8
      if (this.getSpot(randomSpot) == ' ') {
        this.pickSpot(randomSpot, player);
        spotPicked = true;
      }
    }
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
    const horizontalWin = this.checkHorizontalWin();
    const verticalWin = this.checkVerticalWin();
    const diagonalWin = this.checkDiagionalWin();

    if (horizontalWin != ' ') {
      return horizontalWin;
    }

    if (verticalWin != ' ') {
      return verticalWin;
    }

    if (diagonalWin != ' ') {
      return diagonalWin;
    }

    return ' ';
  }

  checkDiagionalWin(): string {
    const brd = this.Board;
    if (this.isSame([brd[0], brd[4], brd[8]]) && brd[0] != ' ') {
      if (brd[0] == 'X') {
        this.gameState = GameState.WIN_X;
      } else {
        this.gameState = GameState.WIN_O;
      }
      return brd[0];
    }
    if (this.isSame([brd[2], brd[4], brd[6]]) && brd[2] != ' ') {
      if (brd[0] == 'X') {
        this.gameState = GameState.WIN_X;
      } else {
        this.gameState = GameState.WIN_O;
      }
      return brd[0];
    }
    return ' ';
  }

  checkVerticalWin(): string {
    const brd = this.Board;
    if (this.isSame([brd[0], brd[3], brd[6]]) && brd[0] != ' ') {
      if (brd[0] == 'X') {
        this.gameState = GameState.WIN_X;
      } else {
        this.gameState = GameState.WIN_O;
      }
      return brd[0];
    }
    if (this.isSame([brd[1], brd[4], brd[7]]) && brd[1] != ' ') {
      if (brd[1] == 'X') {
        this.gameState = GameState.WIN_X;
      } else {
        this.gameState = GameState.WIN_O;
      }
      return brd[1];
    }
    if (this.isSame([brd[2], brd[5], brd[8]]) && brd[2] != ' ') {
      if (brd[2] == 'X') {
        this.gameState = GameState.WIN_X;
      } else {
        this.gameState = GameState.WIN_O;
        return brd[2];
      }
    }
    return ' ';
  }

  checkHorizontalWin(): string {
    const brd = this.Board;
    if (this.isSame([brd[0], brd[1], brd[2]]) && brd[0] != ' ') {
      if (brd[0] == 'X') {
        this.gameState = GameState.WIN_X;
      } else {
        this.gameState = GameState.WIN_O;
      }
      return brd[0];
    }
    if (this.isSame([brd[3], brd[4], brd[5]]) && brd[3] != ' ') {
      if (brd[3] == 'X') {
        this.gameState = GameState.WIN_X;
      } else {
        this.gameState = GameState.WIN_O;
      }
      return brd[0];
    }
    if (this.isSame([brd[6], brd[7], brd[8]]) && brd[6] != ' ') {
      if (brd[6] == 'X') {
        this.gameState = GameState.WIN_X;
      } else {
        this.gameState = GameState.WIN_O;
      }
      return brd[0];
    }
    return ' ';
  }

  isSame(fields: [string, string, string]): boolean {
    const output = fields[0] == fields[1] && fields[1] == fields[2];
    return output;
  }
}

// copied from https://www.webdevtutor.net/blog/typescript-how-to-sleep
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ugly gameplay
export function main() {
  const ticTacToe = new TicTacToe([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);

  ticTacToe.pickRandomSpot('O');
  if (ticTacToe.checkWin() != ' ') {
    ticTacToe.showScreen();
    console.log('PLAYER ' + ticTacToe.checkWin() + ' WON!');
    return;
  }
  ticTacToe.showScreen();
  //sleep(2000);

  ticTacToe.pickRandomSpot('X');
  if (ticTacToe.checkWin() != ' ') {
    ticTacToe.showScreen();
    console.log('PLAYER ' + ticTacToe.checkWin() + ' WON!');
    return;
  }
  ticTacToe.showScreen();
}

main();
