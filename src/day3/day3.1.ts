import { getInputForDay } from '../input';
import { Rucksack } from './Rucksack';

const input = getInputForDay(3);
const rucksacks = input.split('\n').map(Rucksack.fromText);
const prioritySum = rucksacks.reduce(
  (total, sack) => total + sack.getCommonItem().priority,
  0
);
console.log(prioritySum);
