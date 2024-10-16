import { Result } from './Result';
import { Shape } from './Shape';

const shapeScores = {
  [Shape.Rock]: 1,
  [Shape.Paper]: 2,
  [Shape.Scissors]: 3,
};

const resultScores = {
  [Result.Win]: 6,
  [Result.Draw]: 3,
  [Result.Loss]: 0,
};

export class Round {
  private _points: number;

  get points() {
    return this._points;
  }

  constructor(opponentShape: Shape, yourShape: Shape) {
    const result = getResult(opponentShape, yourShape);
    this._points = shapeScores[yourShape] + resultScores[result];
  }
}

function getResult(opponentShape: Shape, yourShape: Shape) {
  if (opponentShape === yourShape) return Result.Draw;
  if (opponentShape === Shape.Rock && yourShape === Shape.Paper)
    return Result.Win;
  if (opponentShape === Shape.Paper && yourShape === Shape.Scissors)
    return Result.Win;
  if (opponentShape === Shape.Scissors && yourShape === Shape.Rock)
    return Result.Win;
  return Result.Loss;
}
