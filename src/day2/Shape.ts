export enum Shape {
  Rock,
  Paper,
  Scissors,
}

export const getShapeForWin = (opponentShape: Shape) => {
  if (opponentShape === Shape.Rock) return Shape.Paper;
  if (opponentShape === Shape.Paper) return Shape.Scissors;
  return Shape.Rock;
};

export const getShapeForDraw = (opponentShape: Shape) => opponentShape;

export const getShapeForLoss = (opponentShape: Shape) => {
  if (opponentShape === Shape.Rock) return Shape.Scissors;
  if (opponentShape === Shape.Paper) return Shape.Rock;
  return Shape.Paper;
};
