import MathHandler from '../../lib/MathHandler';

describe('lib/MathHandler', () => {
  describe('sum(a, b)', () => {
    it('(1, 2) => 3', () => {
      expect(MathHandler.sum(1, 2)).toEqual(3);
    });
  });
});
