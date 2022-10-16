import { Rental } from './Rental';

export class Customer {
  constructor(
    private readonly name: string,
    private readonly rentals: Rental[],
  ) {}

  public getName() {
    return this.name;
  }

  public statement(): string {
    return '';
  }
}
