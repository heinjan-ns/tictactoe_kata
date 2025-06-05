import { TicTacToe, GameState, Field } from '../src/index';

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

    expect(ticTacToe.checkGameState()).toStrictEqual(GameState.WIN_X);
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

    expect(ticTacToe.checkGameState()).toStrictEqual(GameState.WIN_X);
  });

  test('place X to the last empty spot, play is draw', () => {
    // X X O
    // O X X
    // O O x
    const ticTacToe = new TicTacToe();
    ticTacToe.pickSpot(0);
    ticTacToe.pickSpot(2);
    ticTacToe.pickSpot(1);
    ticTacToe.pickSpot(3);
    ticTacToe.pickSpot(4);
    ticTacToe.pickSpot(6);
    ticTacToe.pickSpot(5);
    ticTacToe.pickSpot(7);

    ticTacToe.pickRandomSpot(Field.X); // player X

    expect(ticTacToe.getSpot(8)).toStrictEqual(Field.X);
  });

  test('show an empty game board to the screen', () => {
    // _ _ _
    // _ _ _
    // _ _ _
    const ticTacToe = new TicTacToe();
    const result = ' | | \n-+-+-\n | | \n-+-+-\n | | ';

    expect(ticTacToe.showScreen()).toStrictEqual(result);
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

    expect(ticTacToe.showScreen()).toStrictEqual(result);
  });

  // test('run main()', () => {
  //   // X _ _
  //   // X O _
  //   // X _ O
  //   main();
  // });
});
