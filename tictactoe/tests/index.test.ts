import { TicTacToe } from '@/index';

describe('Tictactoe should', () => {
  test('place a X on an empty board for player X', () => {
    // _ _ _
    // x _ _
    // _ _ _
    const ticTacToe = new TicTacToe(['_', '_', '_', '_', '_', '_', '_', '_', '_']);

    ticTacToe.pickSpot(3, 'X'); // middle left spot

    expect(ticTacToe.getSpot(3)).toStrictEqual('X');
  });

  test('place a O on a populated board for player O', () => {
    // X _ _
    // X O _
    // _ _ o
    const ticTacToe = new TicTacToe(['X', '_', '_', 'X', 'O', '_', '_', '_', '_']);

    ticTacToe.pickSpot(8, 'O'); // top left spot

    expect(ticTacToe.getSpot(8)).toStrictEqual('O');
  });

  test('place the last X to a vertical line with X-es, player X wins', () => {
    // X _ _
    // X O _
    // x _ O
    const ticTacToe = new TicTacToe(['X', '_', '_', 'X', 'O', '_', '_', '_', 'O']);

    ticTacToe.pickSpot(7, 'X'); // bottom left spot

    expect(ticTacToe.checkWin()).toStrictEqual('X');
  });

  test('place the last O to a horizontal line with O-es, player O wins', () => {
    // X _ X
    // O O o
    // X _ _
    const ticTacToe = new TicTacToe(['X', '_', 'X', 'O', 'O', '_', 'X', '_', '_']);

    ticTacToe.pickSpot(5, 'O'); // middle right spot

    expect(ticTacToe.checkWin()).toStrictEqual('O');
  });
});
