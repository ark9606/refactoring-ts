import { Price } from './Price';

export class RegularPrice extends Price {
  getChargeFor(daysRented: number): number {
    const charge = 2;
    if (daysRented > 2) {
      return charge + (daysRented - 2) * 1.5;
    }
    return charge;
  }
}
