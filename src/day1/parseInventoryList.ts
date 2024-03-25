import { Elf } from './Elf';

export function parseInventoryList(text: string): Array<Elf> {
  const elves = new Array<Elf>();
  const elfInventories = text.split('\n\n');
  for (let inventory of elfInventories) {
    const elf = new Elf();
    inventory
      .split('\n')
      .map((n) => Number.parseInt(n, 10))
      .forEach(elf.addToInventory);
    elves.push(elf);
  }
  return elves;
}
