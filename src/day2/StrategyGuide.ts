import { Round } from './Round';
import { Shape } from './Shape';

export class StrategyGuide {
  public rounds: Array<Round>;
  private _totalScore: number = 0;

  get totalScore() {
    return this._totalScore;
  }

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
      const round = new Round(opponentShape, yourShape);
      guide.rounds.push(round);
      guide._totalScore += round.points;
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
