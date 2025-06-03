import { TicTacToe } from '@/index';

describe('Tictactoe should', () => {
  test('place a X on an empty board for player X', () => {
    // _ _ _
    // X _ _
    // _ _ _
    const ticTacToe = new TicTacToe(['_', '_', '_', '_', '_', '_', '_', '_', '_']);

    ticTacToe.pickSpot(3, 'X'); // middle left spot

    expect(ticTacToe.getSpot(3)).toStrictEqual('X');
  });
});
