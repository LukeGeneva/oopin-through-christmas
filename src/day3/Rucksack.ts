import { Item } from './Item';

export class Rucksack {
  private _compartmentA = '';
  private _compartmentB = '';

  get compartmentA() {
    return this._compartmentA;
  }

  get compartmentB() {
    return this._compartmentB;
  }

  private constructor() {}

  getCommonItem() {
    for (let i = 0; i < this._compartmentA.length; i++) {
      const itemType = this._compartmentA[i];
      const item = new Item(itemType);
      if (this.hasItem(this._compartmentB, item)) return item;
    }
    throw new Error('No common item found.');
  }

  private hasItem(compartment: string, item: Item) {
    return compartment.includes(item.type);
  }

  static fromText(text: string) {
    if (text.length % 2 !== 0) throw new Error('Unexpected text length.');
    const midpoint = text.length / 2;
    const rucksack = new Rucksack();
    rucksack._compartmentA = text.slice(0, midpoint);
    rucksack._compartmentB = text.slice(midpoint);
    return rucksack;
  }
}
