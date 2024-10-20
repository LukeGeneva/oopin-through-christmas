import { Rucksack } from './Rucksack';

export class Group {
  private _rucksacks: Array<Rucksack>;

  get rucksacks() {
    return Array.from(this._rucksacks);
  }

  private constructor() {
    this._rucksacks = [];
  }

  findBadge() {
    const [a, b, c] = this._rucksacks;
    for (const item of a.getAllItems())
      if (b.contains(item) && c.contains(item)) return item;
    throw new Error('No badge found.');
  }

  static parseMany(text: string) {
    const groups = new Array<Group>();
    const lines = text.split('\n');
    let i = 0;
    while (i < lines.length) {
      const group = new Group();
      const endIndex = i + 3;
      while (i < endIndex) {
        const line = lines[i];
        group._rucksacks.push(Rucksack.fromText(line));
        i += 1;
      }
      groups.push(group);
    }
    return groups;
  }
}
