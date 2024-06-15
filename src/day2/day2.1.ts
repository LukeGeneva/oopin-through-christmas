import { getInputForDay } from '../input';
import { StrategyGuide } from './StrategyGuide';

const input = getInputForDay(2);
const guide = StrategyGuide.fromText(input);
const totalScore = guide.rounds.reduce(
  (total, round) => total + round.points,
  0
);
console.log(totalScore);
