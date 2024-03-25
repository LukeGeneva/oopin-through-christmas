import { expect, test } from 'bun:test';
import { parseInventoryList } from './parseInventoryList';

const TEXT = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

test('that list is created', () => {
  const elves = parseInventoryList(TEXT);
  expect(elves.length).toBe(5);
  expect(elves[0].totalCalories).toBe(6000);
  expect(elves[1].totalCalories).toBe(4000);
});
