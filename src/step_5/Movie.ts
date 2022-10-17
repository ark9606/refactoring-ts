export class Movie {
  public static CHILDREN = 2;
  public static REGULAR = 0;
  public static NEW_RELEASE = 1;

  constructor(private title: string, private priceCode: number) {}

  public getPriceCode(): number {
    return this.priceCode;
  }

  public getTitle(): string {
    return this.title;
  }

  getChargeFor(daysRented: number): number {
    let charge = 0;
    // determine amount for each rental
    // const daysRented: number = this.getDaysRented();
    switch (this.getPriceCode()) {
      case Movie.REGULAR: {
        charge += 2;
        if (daysRented > 2) {
          charge += (daysRented - 2) * 1.5;
        }
        break;
      }
      case Movie.NEW_RELEASE: {
        charge += daysRented * 3;
        break;
      }
      case Movie.CHILDREN: {
        charge += 1.5;
        if (daysRented > 3) {
          charge += (daysRented - 3) * 1.5;
        }
        break;
      }
    }
    return charge;
  }

  public getFrequentPoints(daysRented: number): number {
    // add frequent renter points
    let frequentRenterPoints = 1;

    // add bonus for two days of new release rental
    if (this.getPriceCode() === Movie.NEW_RELEASE && daysRented > 1) {
      frequentRenterPoints++;
    }
    return frequentRenterPoints;
  }
}
