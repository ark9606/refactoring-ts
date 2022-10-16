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
}
