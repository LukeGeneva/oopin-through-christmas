export class Elf {
  private _totalCalories = 0;

  get totalCalories() {
    return this._totalCalories;
  }

  addToInventory = (calories: number) => {
    this._totalCalories += calories;
  }
}
