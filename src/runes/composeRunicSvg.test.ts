import { composeRunicSvg } from '@/runes/composeRunicSvg'
import { RUNE_MAP } from '@/runes/runeMap';

describe('composeRunicSvg', () => {
   it('returns SVG string containing lines', () => {
      const runes = [RUNE_MAP[1], RUNE_MAP[10]];
      const svg = composeRunicSvg(runes);
      expect(svg).toMatch(/^<svg/);
      expect(svg).toMatch(/<line/);
      expect(svg).toContain('stroke="black"');
   });
});
