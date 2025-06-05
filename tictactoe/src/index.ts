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
    this.checkWin();
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
    return result;
  }

  checkWin(): boolean {
    this.checkHorizontalWin();
    this.checkVerticalWin();
    this.checkDiagionalWin();
    const gameWon = this.gameState == GameState.WIN_X || this.gameState == GameState.WIN_O;
    if (gameWon) {
      return true;
    }
    return false;
  }

  checkDiagionalWin(): void {
    const brd = this.Board;
    if (this.isSame([brd[0], brd[4], brd[8]]) && brd[0] != ' ') {
      this.gameState = brd[0] == 'X' ? GameState.WIN_X : GameState.WIN_O;
    }
    if (this.isSame([brd[2], brd[4], brd[6]]) && brd[2] != ' ') {
      this.gameState = brd[2] == 'X' ? GameState.WIN_X : GameState.WIN_O;
    }
  }

  checkVerticalWin(): void {
    const brd = this.Board;
    if (this.isSame([brd[0], brd[3], brd[6]]) && brd[0] != ' ') {
      this.gameState = brd[0] == 'X' ? GameState.WIN_X : GameState.WIN_O;
    }
    if (this.isSame([brd[1], brd[4], brd[7]]) && brd[1] != ' ') {
      this.gameState = brd[1] == 'X' ? GameState.WIN_X : GameState.WIN_O;
    }
    if (this.isSame([brd[2], brd[5], brd[8]]) && brd[2] != ' ') {
      this.gameState = brd[2] == 'X' ? GameState.WIN_X : GameState.WIN_O;
    }
  }

  checkHorizontalWin(): void {
    const brd = this.Board;
    if (this.isSame([brd[0], brd[1], brd[2]]) && brd[0] != ' ') {
      this.gameState = brd[0] == 'X' ? GameState.WIN_X : GameState.WIN_O;
    }
    if (this.isSame([brd[3], brd[4], brd[5]]) && brd[3] != ' ') {
      this.gameState = brd[3] == 'X' ? GameState.WIN_X : GameState.WIN_O;
    }
    if (this.isSame([brd[6], brd[7], brd[8]]) && brd[6] != ' ') {
      this.gameState = brd[6] == 'X' ? GameState.WIN_X : GameState.WIN_O;
    }
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

  // ticTacToe.pickRandomSpot('O');
  // if (ticTacToe.checkWin() != ' ') {
  //   ticTacToe.showScreen();
  //   console.log('PLAYER ' + ticTacToe.checkWin() + ' WON!');
  //   return;
  // }
  // ticTacToe.showScreen();
  // //sleep(2000);

  // ticTacToe.pickRandomSpot('X');
  // if (ticTacToe.checkWin() != ' ') {
  //   ticTacToe.showScreen();
  //   console.log('PLAYER ' + ticTacToe.checkWin() + ' WON!');
  //   return;
  // }
  // ticTacToe.showScreen();
}

main();
