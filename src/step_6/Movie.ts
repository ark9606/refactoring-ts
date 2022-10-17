import { Price } from './Price';

export class Movie {
  public static CHILDREN = 2;
  public static REGULAR = 0;
  public static NEW_RELEASE = 1;

  constructor(private readonly title: string, private readonly price: Price) {}

  public getPrice(): Price {
    return this.price;
  }

  public getTitle(): string {
    return this.title;
  }
}
