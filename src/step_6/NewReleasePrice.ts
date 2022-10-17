import { Price } from './Price';

export class NewReleasePrice extends Price {
  getChargeFor(daysRented: number): number {
    return daysRented * 3;
  }

  getFrequentRenterPointsIncrement(daysRented: number): number {
    // add bonus for two days of new release rental
    if (daysRented > 1) {
      return 2;
    }
    return 1;
  }
}
