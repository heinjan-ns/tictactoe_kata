import { TicTacToe, GameState, Field, Winner } from '../src/index';

describe('Tictactoe should', () => {
  test('place a X on an empty board for player X', () => {
    // _ _ _
    // x _ _
    // _ _ _
    const ticTacToe = new TicTacToe();

    ticTacToe.pickSpot(3); // middle left spot

    expect(ticTacToe.getSpot(3)).toStrictEqual(Field.X);
  });

  test('place a O on a populated board for player O', () => {
    // X _ _
    // X O _
    // _ _ o
    const ticTacToe = new TicTacToe();

    ticTacToe.pickSpot(0);
    ticTacToe.pickSpot(4);
    ticTacToe.pickSpot(3);
    ticTacToe.pickSpot(8); // top left spot

    expect(ticTacToe.getSpot(8)).toStrictEqual(Field.O);
    expect(ticTacToe.checkGameState()).toStrictEqual(GameState.IN_PROGRESS);
  });

  test('place the last X to a vertical line with X-es, player X wins', () => {
    // X _ _
    // X O _
    // x _ O
    const ticTacToe = new TicTacToe();
    ticTacToe.pickSpot(0);
    ticTacToe.pickSpot(4);
    ticTacToe.pickSpot(3);
    ticTacToe.pickSpot(8);

    ticTacToe.pickSpot(6); // bottom left spot

    expect(ticTacToe.checkGameState()).toStrictEqual(GameState.WIN);
    expect(ticTacToe.checkWinner()).toStrictEqual(Winner.X);
  });

  test('place the last X to a diagonal line with X-es, player X wins', () => {
    // X _ _
    // O X _
    // O _ x
    const ticTacToe = new TicTacToe();

    ticTacToe.pickSpot(0);
    ticTacToe.pickSpot(3);
    ticTacToe.pickSpot(4);
    ticTacToe.pickSpot(6);

    ticTacToe.pickSpot(8); // bottom right spot

    expect(ticTacToe.checkGameState()).toStrictEqual(GameState.WIN);
    expect(ticTacToe.checkWinner()).toStrictEqual(Winner.X);
  });

  test('place X to the last empty spot, play is draw', () => {
    // X X O
    // O X X
    // X O O
    const ticTacToe = new TicTacToe();
    ticTacToe.pickSpot(0); // X
    ticTacToe.pickSpot(2); // O
    ticTacToe.pickSpot(1); // X
    ticTacToe.pickSpot(3); // O
    ticTacToe.pickSpot(4); // X
    ticTacToe.pickSpot(7); // O
    ticTacToe.pickSpot(5); // X
    ticTacToe.pickSpot(8); // O

    ticTacToe.pickRandomSpot(); // player X

    expect(ticTacToe.getSpot(6)).toStrictEqual(Field.X);
    expect(ticTacToe.checkGameState()).toStrictEqual(GameState.DRAW);
  });

  test('show an empty game board to the screen', () => {
    // _ _ _
    // _ _ _
    // _ _ _
    const ticTacToe = new TicTacToe();
    const result = ' | | \n-+-+-\n | | \n-+-+-\n | | ';

    expect(ticTacToe.getBoard()).toStrictEqual(result);
  });

  test('show a populated game board to the screen', () => {
    // X _ _
    // X O _
    // X _ O
    const ticTacToe = new TicTacToe();
    const result = 'X| | \n-+-+-\nX|O| \n-+-+-\nX| |O';
    ticTacToe.pickSpot(0);
    ticTacToe.pickSpot(4);
    ticTacToe.pickSpot(3);
    ticTacToe.pickSpot(8);
    ticTacToe.pickSpot(6);

    expect(ticTacToe.getBoard()).toStrictEqual(result);
  });

  // test('run main()', () => {
  //   // X _ _
  //   // X O _
  //   // X _ O
  //   main();
  // });
});
