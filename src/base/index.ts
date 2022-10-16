import { Movie } from './Movie';
import { Rental } from './Rental';
import { Customer } from './Customer';

(async function () {
  const rembo = new Movie('Rembo', Movie.REGULAR);
  const lotr = new Movie('Lord of the ring', Movie.NEW_RELEASE);
  const hp = new Movie('Harry Potter', Movie.CHILDREN);

  const rentals = [
    new Rental(rembo, 1),
    new Rental(lotr, 4),
    new Rental(hp, 5),
  ];

  const customer = new Customer('Petro', rentals);

  console.log(customer.statement());
})();
