import { expect, test } from 'bun:test';
import { Round } from './Round';
import { Shape } from './Shape';

test('that points are correct for win', () => {
  const round = new Round(Shape.Rock, Shape.Paper);
  expect(round.points).toBe(8);
});

test('that points are correct for loss', () => {
  const round = new Round(Shape.Rock, Shape.Scissors);
  expect(round.points).toBe(3);
});

test('that points are correct for draw', () => {
  const round = new Round(Shape.Rock, Shape.Rock);
  expect(round.points).toBe(4);
});
