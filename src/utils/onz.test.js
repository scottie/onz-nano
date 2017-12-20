import { expect } from 'chai';
import { fromRawOnz, toRawOnz } from './onz';

describe('onz', () => {
  describe('fromRawOnz', () => {
    it('should convert 100000000 to "1"', () => {
      expect(fromRawOnz(100000000)).to.be.equal('1');
    });

    it('should convert 0 to "0"', () => {
      expect(fromRawOnz(0)).to.be.equal('0');
    });
  });

  describe('toRawOnz', () => {
    it('should convert 1 to 100000000', () => {
      expect(toRawOnz(1)).to.be.equal(100000000);
    });

    it('should convert 0 to 0', () => {
      expect(toRawOnz(0)).to.be.equal(0);
    });
  });
});
