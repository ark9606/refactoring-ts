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
    let totalAmount = 0;
    let frequentRenterPoints = 0;
    let result = `Rental record for ${this.getName()}\n`;
    this.rentals.forEach((rental) => {
      let thisAmount = rental.getCharge();
      frequentRenterPoints += rental.getFrequentRenterPointsIncrement();
      // add info about rental to the statement
      result += `\t${rental.getMovie().getTitle()}\t${thisAmount}\n`;
      totalAmount += thisAmount;
    });

    result += `Amount owed is ${totalAmount}\n`;
    result += `You earned ${frequentRenterPoints} frequent renter points`;

    return result;
  }
}
