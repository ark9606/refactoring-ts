export abstract class Price {
  abstract getChargeFor(daysRented: number): number;

  public getFrequentRenterPointsIncrement(daysRented: number): number {
    return 1;
  }
}
