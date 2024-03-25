import { expect, test } from 'bun:test';
import { Elf } from './Elf';

test("that elf's inventory tracks Calories", () => {
  const elf = new Elf();
  elf.addToInventory(2000);
  elf.addToInventory(1000);
  expect(elf.totalCalories).toBe(3000);
});
