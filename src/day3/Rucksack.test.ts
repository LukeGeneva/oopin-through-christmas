import { expect, test } from 'bun:test';
import { Rucksack } from './Rucksack';

test('that compartments are filled', () => {
  const sack = Rucksack.fromText('vJrwpWtwJgWrhcsFMMfFFhFp');
  expect(sack.compartmentA).toEqual('vJrwpWtwJgWr');
  expect(sack.compartmentB).toEqual('hcsFMMfFFhFp');
});

test('that common item is returned', () => {
  const sack = Rucksack.fromText('vJrwpWtwJgWrhcsFMMfFFhFp');
  const item = sack.getCommonItem();
  expect(item.type).toBe('p');
  expect(item.priority).toBe(16);
});
