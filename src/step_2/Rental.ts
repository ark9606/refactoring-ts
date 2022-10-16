import { Movie } from './Movie';

export class Rental {
  constructor(
    private readonly movie: Movie,
    private readonly daysRented: number,
  ) {}

  public getMovie(): Movie {
    return this.movie;
  }

  public getDaysRented(): number {
    return this.daysRented;
  }

  public getCharge(): number {
    let charge = 0;
    // determine amount for each rental
    switch (this.getMovie().getPriceCode()) {
      case Movie.REGULAR: {
        charge += 2;
        if (this.getDaysRented() > 2) {
          charge += (this.getDaysRented() - 2) * 1.5;
        }
        break;
      }
      case Movie.NEW_RELEASE: {
        charge += this.getDaysRented() * 3;
        break;
      }
      case Movie.CHILDREN: {
        charge += 1.5;
        if (this.getDaysRented() > 3) {
          charge += (this.getDaysRented() - 3) * 1.5;
        }
        break;
      }
    }
    return charge;
  }
}
