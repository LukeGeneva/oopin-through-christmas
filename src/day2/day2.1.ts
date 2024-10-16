import { getInputForDay } from '../input';
import { ChoiceStrategyGuide } from './ChoiceStrategyGuide';

const input = getInputForDay(2);
const guide = ChoiceStrategyGuide.fromText(input);
console.log(guide.totalScore);
