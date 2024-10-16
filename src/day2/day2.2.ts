import { getInputForDay } from '../input';
import { ResultStrategyGuide } from './ResultStrategyGuide';

const input = getInputForDay(2);
const guide = ResultStrategyGuide.fromText(input);
console.log(guide.totalScore);
