export enum GameState {
  IN_PROGRESS = 'In progress',
  WIN_X = 'Player X won',
  WIN_O = 'Player O won',
  TIE = 'TIE',
}

export enum Field {
  X = 'X',
  O = 'O',
  EMPTY = ' ',
}

export class TicTacToe {
  private Board: Field[];
  private gameState: GameState;
  private currentplayer: Field;

  constructor() {
    this.Board = [
      // empty 3x3 board
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,

      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,

      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
    ];
    this.gameState = GameState.IN_PROGRESS;
    this.currentplayer = Field.X; // player X always starts
  }
  checkGameState(): GameState {
    return this.gameState;
  }

  pickSpot(spot: number) {
    this.Board[spot] = this.currentplayer;
    this.currentplayer = this.currentplayer == Field.X ? Field.O : Field.X;

    this.checkWinOrTie();
    return;
  }

  pickRandomSpot() {
    var spotPicked = false;
    while (!spotPicked) {
      const randomSpot = Math.floor(Math.random() * 9); // spot between 0 and 8
      if (this.getSpot(randomSpot) == Field.EMPTY) {
        this.pickSpot(randomSpot);
        spotPicked = true;
        console.log('randomspot: ' + randomSpot + this.getSpot(randomSpot));
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

  checkWinOrTie(): void {
    this.checkHorizontalWin();
    this.checkVerticalWin();
    this.checkDiagionalWin();
    if (!this.Board.includes(Field.EMPTY)) {
      this.gameState = GameState.TIE;
    }
  }

  checkDiagionalWin(): void {
    const brd = this.Board;
    if (this.isSame([brd[0], brd[4], brd[8]]) && brd[0] != Field.EMPTY) {
      this.setWinner(brd[0]);
    }
    if (this.isSame([brd[2], brd[4], brd[6]]) && brd[2] != Field.EMPTY) {
      this.setWinner(brd[2]);
    }
  }

  checkVerticalWin(): void {
    const brd = this.Board;
    if (this.isSame([brd[0], brd[3], brd[6]]) && brd[0] != Field.EMPTY) {
      this.setWinner(brd[0]);
    }
    if (this.isSame([brd[1], brd[4], brd[7]]) && brd[1] != Field.EMPTY) {
      this.setWinner(brd[1]);
    }
    if (this.isSame([brd[2], brd[5], brd[8]]) && brd[2] != Field.EMPTY) {
      this.setWinner(brd[2]);
    }
  }

  checkHorizontalWin(): void {
    const brd = this.Board;
    if (this.isSame([brd[0], brd[1], brd[2]]) && brd[0] != Field.EMPTY) {
      this.setWinner(brd[0]);
    }
    if (this.isSame([brd[3], brd[4], brd[5]]) && brd[3] != Field.EMPTY) {
      this.setWinner(brd[3]);
    }
    if (this.isSame([brd[6], brd[7], brd[8]]) && brd[6] != Field.EMPTY) {
      this.setWinner(brd[6]);
    }
  }

  private setWinner(winner: string): void {
    this.gameState = winner == Field.X ? GameState.WIN_X : GameState.WIN_O;
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
  const ticTacToe = new TicTacToe();

  //   ticTacToe.pickRandomSpot(Field.O);
  //   if (ticTacToe.checkWin() != Field.EMPTY) {
  //     ticTacToe.showScreen();
  //     console.log('PLAYER ' + ticTacToe.checkWin() + ' WON!');
  //     return;
  //   }
  //   ticTacToe.showScreen();
  //   //sleep(2000);

  //   ticTacToe.pickRandomSpot(Field.X);
  //   if (ticTacToe.checkWin() != Field.EMPTY) {
  //     ticTacToe.showScreen();
  //     console.log('PLAYER ' + ticTacToe.checkWin() + ' WON!');
  //     return;
  //   }
  //   ticTacToe.showScreen();
}

main();
