import { Rental } from './Rental';
import { Movie } from './Movie';

export class Customer {
  constructor(
    private readonly name: string,
    private readonly rentals: Rental[],
  ) {}

  public getName() {
    return this.name;
  }

  public statement(): string {
    let result = `Rental record for ${this.getName()}\n`;
    this.rentals.forEach((rental) => {
      // add info about rental to the statement
      result += `\t${rental.getMovie().getTitle()}\t${rental.getCharge()}\n`;
    });
    result += `Amount owed is ${this.getTotalCharge()}\n`;
    result += `You earned ${this.getTotalFrequentRenterPoints()} frequent renter points`;
    return result;
  }

  public HTMLStatement(): string {
    let result = `<H1>Rental record for ${this.getName()}</H1>\n`;
    this.rentals.forEach((rental) => {
      // add info about rental to the statement
      result += `\t${rental
        .getMovie()
        .getTitle()}\t${rental.getCharge()}<BR/>\n`;
    });
    result += `<P>Amount owed is ${this.getTotalCharge()}</P>\n`;
    result += `You earned <EM> ${this.getTotalFrequentRenterPoints()}</EM> frequent renter points`;
    return result;
  }

  private getTotalCharge(): number {
    return this.rentals.reduce(
      (charge, rental) => charge + rental.getCharge(),
      0,
    );
  }

  private getTotalFrequentRenterPoints(): number {
    return this.rentals.reduce(
      (total, rental) => total + rental.getFrequentRenterPointsIncrement(),
      0,
    );
  }
}
