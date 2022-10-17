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

  public getCharge() {
    return this.getMovie().getPrice().getChargeFor(this.getDaysRented());
  }

  public getFrequentRenterPointsIncrement(): number {
    return this.getMovie()
      .getPrice()
      .getFrequentRenterPointsIncrement(this.getDaysRented());
  }
}
