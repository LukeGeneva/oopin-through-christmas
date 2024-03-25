import { getInputForDay } from '../input';
import { Elf } from './Elf';
import { parseInventoryList } from './parseInventoryList';

const input = getInputForDay(1);
const elves = parseInventoryList(input);
const elf = findElfWithMostCalories(elves);
console.log(elf.totalCalories);

function findElfWithMostCalories(elves: Array<Elf>) {
  return elves.reduce((max, curr) =>
    curr.totalCalories > max.totalCalories ? curr : max
  );
}
