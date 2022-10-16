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
}
