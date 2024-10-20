import { expect, test } from 'bun:test';
import { Group } from './Group';

const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg`;

test('that groups are parsed from text', () => {
  const groups = Group.parseMany(input);
  expect(groups.length).toBe(1);
});

test('that group contains three rucksacks', () => {
  const [group] = Group.parseMany(input);
  expect(group.rucksacks.length).toBe(3);
});

test('that badges are found', () => {
  const [group] = Group.parseMany(input);
  const badge = group.findBadge();
  expect(badge.type).toEqual('r');
  expect(badge.priority).toEqual(18);
});
