import { Price } from './Price';

export class ChildrenPrice extends Price {
  getChargeFor(daysRented: number): number {
    const charge = 1.5;
    if (daysRented > 3) {
      return charge + (daysRented - 3) * 1.5;
    }
    return charge;
  }
}
