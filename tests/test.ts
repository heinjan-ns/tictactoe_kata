import { checkWin } from '../src/index';

describe('noWin', () => {
    it('should return 0: start array so nobody has won', () => {
        const tictac = [[0, 0, 0],
                        [0, 0, 0],
                        [0, 0, 0]];
        const result = checkWin(tictac);
        expect(result).toEqual(0);
    });
  });

describe('topRowWins', () => {
    it('should return player 1 wins', () => {
        const tictac = [[1, 1, 1],
                        [0, 2, 0], 
                        [2, 2, 0]];
        const result = checkWin(tictac);
        expect(result).toEqual(1);
    });
  });