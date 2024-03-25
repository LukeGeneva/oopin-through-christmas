import { getInputForDay } from '../input';
import { Elf } from './Elf';
import { parseInventoryList } from './parseInventoryList';

const input = getInputForDay(1);
const elves = parseInventoryList(input);
const top3 = findTop3ElvesWithMostCalories(elves);
const total = sumElfCalories(top3);
console.log(total);

function findTop3ElvesWithMostCalories(elves: Array<Elf>) {
  return elves
    .sort((a, b) => (a.totalCalories < b.totalCalories ? 1 : -1))
    .slice(0, 3);
}

function sumElfCalories(elves: Array<Elf>) {
  return elves.reduce((sum, elf) => sum + elf.totalCalories, 0);
}
