import { sum } from '@/index';

describe('Tictactoe should', () => {
  test('place a X on an empty board for player X', () => {
    // _ _ _
    // _ _ _
    // _ _ _
    const ticTacToe = new ticTacToe(['_', '_', '_', '_', '_', '_', '_', '_', '_']);

    let ticTacToe.pickSpot('X', 3); // middle left spot

    expect(ticTacToe.getSpot(3)).toStrictEqual('X');
  });
});
