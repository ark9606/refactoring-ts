import { Price } from './Price';

export class DramaPrice extends Price {
  getChargeFor(daysRented: number): number {
    return daysRented * 4;
  }

  getFrequentRenterPointsIncrement(daysRented: number): number {
    // add bonus for two days of new release rental
    if (daysRented > 2) {
      return 4;
    }
    return 1;
  }
}
