import { checkWin, pickRandomSpot } from '../src/index';

describe('noWinStartBoard', () => {
    it('should return 0: start array so nobody has won', () => {
        const tictac = [[0, 0, 0],
                        [0, 0, 0],
                        [0, 0, 0]];
        const result = checkWin(tictac);
        expect(result).toEqual(0);
    });
});

describe('noWinPartlyFilledBoard', () => {
    it('should return 0: partly filled, but noone wins', () => {
        const tictac = [[0, 0, 1],
                        [0, 1, 0],
                        [0, 2, 0]];
        const result = checkWin(tictac);
        expect(result).toEqual(0);
    });
});

describe('noWinFilledBoard', () => {
    it('should return -1: completely filled, noone wins', () => {
        const tictac = [[1, 2, 1],
                        [2, 1, 1],
                        [2, 1, 2]];
        const result = checkWin(tictac);
        expect(result).toEqual(-1);
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

describe('bottomRowWins', () => {
    it('should return player 2 wins', () => {
        const tictac = [[0, 0, 0],
                        [0, 1, 1], 
                        [2, 2, 2]];
        const result = checkWin(tictac);
        expect(result).toEqual(2);
    });
});

describe('firstColumnWins', () => {
    it('should return player 1 wins', () => {
        const tictac = [[1, 0, 0],
                        [1, 0, 2], 
                        [1, 2, 2]];
        const result = checkWin(tictac);
        expect(result).toEqual(1);
    });
});

describe('diagonalWin', () => {
    it('should return player 2 wins', () => {
        const tictac = [[2, 0, 0],
                        [1, 2, 1], 
                        [1, 2, 2]];
        const result = checkWin(tictac);
        expect(result).toEqual(2);
    });
});

describe('diagonalWin2', () => {
    it('should return player 1 wins', () => {
        const tictac = [[2, 0, 1],
                        [1, 1, 2], 
                        [1, 2, 2]];
        const result = checkWin(tictac);
        expect(result).toEqual(1);
    });
});

describe('pickRandomLastSpot', () => {
    it('should return the tictactoe board with player 2 on the last spot', () => {
        const tictacIn = [[2, 0, 1],
                        [1, 1, 2], 
                        [1, 2, 2]];
        const tictacOut = [[2, 2, 1],
                        [1, 1, 2], 
                        [1, 2, 2]];
        const result = pickRandomSpot(tictacIn, 2);
        expect(result).toEqual(tictacOut);
    });
});

