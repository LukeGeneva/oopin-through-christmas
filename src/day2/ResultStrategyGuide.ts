import { Result } from './Result';
import { Round } from './Round';
import {
  Shape,
  getShapeForDraw,
  getShapeForLoss,
  getShapeForWin,
} from './Shape';

export class ResultStrategyGuide {
  public rounds: Array<Round>;
  private _totalScore: number = 0;

  get totalScore() {
    return this._totalScore;
  }

  constructor() {
    this.rounds = new Array<Round>();
  }

  static fromText = (text: string) => {
    const guide = new ResultStrategyGuide();
    const lines = text.split('\n');
    for (let line of lines) {
      const [opponent, resultChar] = line.split(' ');
      const opponentShape = decryptShape(opponent);
      const desiredResult = decryptResult(resultChar);
      const yourShape = getShapeToPlay(opponentShape, desiredResult);
      const round = new Round(opponentShape, yourShape);
      guide.rounds.push(round);
      guide._totalScore += round.points;
    }
    return guide;
  };
}

function decryptShape(choice: string) {
  switch (choice) {
    case 'A':
      return Shape.Rock;
    case 'B':
      return Shape.Paper;
    case 'C':
      return Shape.Scissors;
    default:
      throw new Error(`Invalid choice ${choice}`);
  }
}

function decryptResult(char: string) {
  switch (char) {
    case 'X':
      return Result.Loss;
    case 'Y':
      return Result.Draw;
    case 'Z':
      return Result.Win;
    default:
      throw new Error(`Invalid result string ${char}`);
  }
}

function getShapeToPlay(opponentShape: Shape, desiredResult: Result) {
  if (desiredResult === Result.Win) return getShapeForWin(opponentShape);
  if (desiredResult === Result.Draw) return getShapeForDraw(opponentShape);
  return getShapeForLoss(opponentShape);
}
