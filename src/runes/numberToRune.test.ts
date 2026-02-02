import { splitNumberToRunicValues, translateRunicValuesToLines } from '@/runes/numberToRune';

describe('splitNumberToRunicValues', () => {
   it('splits numbers correctly', () => {
      expect(splitNumberToRunicValues(4350)).toEqual([4000, 300, 50]);
      expect(splitNumberToRunicValues(7)).toEqual([7]);
      expect(splitNumberToRunicValues(9999)).toEqual([9000, 900, 90, 9]);
   });

   it('throws error for numbers out of range', () => {
      expect(() => splitNumberToRunicValues(0)).toThrow();
      expect(() => splitNumberToRunicValues(10000)).toThrow();
   });
});

describe('translateRunicValuesToLines', () => {
   it('returns unique lines for given runic values', () => {
      const values = [1, 10];
      const lines = translateRunicValuesToLines(values);
      lines.forEach(line => {
         expect(line).toHaveProperty('x1');
         expect(line).toHaveProperty('y1');
         expect(line).toHaveProperty('x2');
         expect(line).toHaveProperty('y2');
      });

      const keys = lines.map(l => `${l.x1},${l.y1},${l.x2},${l.y2}`);
      const uniqueKeys = Array.from(new Set(keys));
      expect(uniqueKeys.length).toBe(keys.length);
   });

   it('throws error for unknown rune value', () => {
      expect(() => translateRunicValuesToLines([99999] as any)).toThrow();
   });
});
