import { expect, test } from 'bun:test';
import { ChoiceStrategyGuide } from './ChoiceStrategyGuide';

// rock paper
// paper rock
// scissors scissors

const TEXT = `A Y
B X
C Z`;

test('that strategy guide is parsed', () => {
  const guide = ChoiceStrategyGuide.fromText(TEXT);
  expect(guide.rounds.length).toBe(3);
  expect(guide.rounds[0].points).toBe(8);
  expect(guide.rounds[1].points).toBe(1);
  expect(guide.rounds[2].points).toBe(6);
});

test('that points are totaled', () => {
  const guide = ChoiceStrategyGuide.fromText(TEXT);
  expect(guide.totalScore).toBe(15);
});
