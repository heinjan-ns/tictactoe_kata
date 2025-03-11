describe('emptyTest', () => {
    it('should just succeed', () => {
        const result = 1;
    expect(result).toEqual(1);
    });
});

describe('noWin', () => {
    it('should return 0: start array so nobody has won', () => {
        const tictac = [[0, 0, 0],
                        [0, 0, 0], 
                        [0, 0, 0]];
        const result = checkWin(tictac);
        expect(result).toEqual(0);
    });
  });