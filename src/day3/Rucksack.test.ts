import { expect, test } from 'bun:test';
import { Rucksack } from './Rucksack';
import { Item } from './Item';

test('that common item is returned', () => {
  const sack = Rucksack.fromText('vJrwpWtwJgWrhcsFMMfFFhFp');
  const item = sack.getCommonItem();
  expect(item.type).toBe('p');
  expect(item.priority).toBe(16);
});

test('that all items are returned', () => {
  const sack = Rucksack.fromText('vJrwpWtwJgWrhcsFMMfFFhFp');
  expect(sack.getAllItems().length).toBe(24);
});

test('that sack contains item', () => {
  const sack = Rucksack.fromText('vJrwpWtwJgWrhcsFMMfFFhFp');
  expect(sack.contains(new Item('v'))).toBe(true);
  expect(sack.contains(new Item('x'))).toBe(false);
});
