import { GRID_WIDTH, STROKE_WIDTH, GRID_HEIGHT, OFFSET } from '@/runes/grid';
import { RuneLine } from '@/runes/runeTypes';
import { ReactElement } from 'react';

const composeRunicSvg = (lines: RuneLine[]): ReactElement | null => {
  if (!lines.length) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={GRID_WIDTH + STROKE_WIDTH}
      height={GRID_HEIGHT + STROKE_WIDTH}
      viewBox={`0 0 ${GRID_WIDTH + STROKE_WIDTH} ${GRID_HEIGHT + STROKE_WIDTH}`}
    >
      {lines.map((val, i) => (
        <line
          key={i}
          x1={val.x1 + OFFSET}
          y1={val.y1 + OFFSET}
          x2={val.x2 + OFFSET}
          y2={val.y2 + OFFSET}
          stroke="black"
          strokeWidth={STROKE_WIDTH}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

export default composeRunicSvg;