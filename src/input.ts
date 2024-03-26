import fs from 'fs';
import path from 'path';

export function getInputForDay(day: number) {
  return fs
    .readFileSync(path.join(import.meta.dir, `../input/day${day}.txt`))
    .toString()
    .trim();
}

export function getInputLinesForDay(day: number) {
  return getInputForDay(day).split('\n');
}
