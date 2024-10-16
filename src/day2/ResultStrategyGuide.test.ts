import { expect, test } from 'bun:test';
import { ResultStrategyGuide } from './ResultStrategyGuide';

// rock draw
// paper loss
// scissors win

const TEXT = `A Y
B X
C Z`;

test('that strategy guide is parsed', () => {
  const guide = ResultStrategyGuide.fromText(TEXT);
  expect(guide.rounds.length).toBe(3);
  expect(guide.rounds[0].points).toBe(4);
  expect(guide.rounds[1].points).toBe(1);
  expect(guide.rounds[2].points).toBe(7);
});

test('that points are totaled', () => {
  const guide = ResultStrategyGuide.fromText(TEXT);
  expect(guide.totalScore).toBe(12);
});
