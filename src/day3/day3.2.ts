import { getInputForDay } from '../input';
import { Group } from './Group';

const input = getInputForDay(3);
const groups = Group.parseMany(input);
const prioritySum = groups.reduce(
  (total, group) => total + group.findBadge().priority,
  0
);
console.log(prioritySum);
