import { Item } from './Item';

export class Rucksack {
  private _compartmentA: Item[];
  private _compartmentB: Item[];

  get compartmentA() {
    return this._compartmentA;
  }

  get compartmentB() {
    return this._compartmentB;
  }

  private constructor() {
    this._compartmentA = [];
    this._compartmentB = [];
  }

  getCommonItem() {
    for (let i = 0; i < this._compartmentA.length; i++) {
      const item = this._compartmentA[i];
      if (this.hasItem(this._compartmentB, item)) return item;
    }
    throw new Error('No common item found.');
  }

  getAllItems() {
    return this._compartmentA.concat(this._compartmentB);
  }

  contains = (item: Item) => {
    if (this._compartmentA.find(item.equals)) return true;
    if (this._compartmentB.find(item.equals)) return true;
    return false;
  };

  private hasItem(compartment: Item[], item: Item) {
    const foundItem = compartment.find(item.equals);
    return !!foundItem;
  }

  static fromText(text: string) {
    if (text.length % 2 !== 0) throw new Error('Unexpected text length.');
    const midpoint = text.length / 2;
    const rucksack = new Rucksack();
    rucksack._compartmentA = text
      .slice(0, midpoint)
      .split('')
      .map((type) => new Item(type));
    rucksack._compartmentB = text
      .slice(midpoint)
      .split('')
      .map((type) => new Item(type));
    return rucksack;
  }
}
