export const GRID_WIDTH = 150;
export const GRID_HEIGHT = 150;

export const GRID_ROWS = 3;
export const GRID_COLS = 2;

export const CELL_WIDTH = GRID_WIDTH / GRID_COLS;
export const CELL_HEIGHT = GRID_HEIGHT / GRID_ROWS;

export const STROKE_WIDTH = Math.min(CELL_WIDTH, CELL_HEIGHT) / 5;

export const OFFSET = STROKE_WIDTH / 2;
