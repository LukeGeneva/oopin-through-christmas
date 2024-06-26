import { Round } from './Round';
import { Shape } from './Shape';

export class StrategyGuide {
  public rounds: Array<Round>;

  constructor() {
    this.rounds = new Array<Round>();
  }

  static fromText = (text: string) => {
    const guide = new StrategyGuide();
    const lines = text.split('\n');
    for (let line of lines) {
      const [opponent, you] = line.split(' ');
      const opponentShape = decryptChoice(opponent);
      const yourShape = decryptChoice(you);
      guide.rounds.push(new Round(opponentShape, yourShape));
    }
    return guide;
  };
}

function decryptChoice(choice: string) {
  switch (choice) {
    case 'A':
      return Shape.Rock;
    case 'B':
      return Shape.Paper;
    case 'C':
      return Shape.Scissors;
    case 'X':
      return Shape.Rock;
    case 'Y':
      return Shape.Paper;
    case 'Z':
      return Shape.Scissors;
    default:
      throw new Error(`Invalid choice ${choice}`);
  }
}
