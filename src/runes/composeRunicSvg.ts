import { RuneLine } from './runeTypes';
import { GRID_WIDTH, GRID_HEIGHT, STROKE_WIDTH, OFFSET } from './grid';

/**
 * Tworzy string SVG z podanych linii runicznych
 */
export function composeRunicSvg(lines: RuneLine[]): string {
  if (!lines.length) return '';

  // Generujemy <line ... /> dla każdej linii
  const svgLines = lines
    .map(
      (l) =>
        `<line 
          x1="${l.x1 + OFFSET}" y1="${l.y1 + OFFSET}" 
          x2="${l.x2 + OFFSET}" y2="${l.y2 + OFFSET}" 
          stroke="black" 
          stroke-width="${STROKE_WIDTH}" 
          stroke-linecap="round"
        />`
    )
    .join('');

  // Zwracamy kompletny string SVG
  return `<svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="${GRID_WIDTH + OFFSET * 2}" 
    height="${GRID_HEIGHT + OFFSET * 2}" 
    viewBox="0 0 ${GRID_WIDTH + OFFSET * 5} ${GRID_HEIGHT + OFFSET * 5}"
  >
    ${svgLines}
  </svg>`;
}