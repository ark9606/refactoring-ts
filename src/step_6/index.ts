import { Movie } from './Movie';
import { Rental } from './Rental';
import { Customer } from './Customer';
import { RegularPrice } from './RegularPrice';
import { NewReleasePrice } from './NewReleasePrice';
import { ChildrenPrice } from './ChildrenPrice';
import { DramaPrice } from './DramaPrice';

(async function () {
  const rembo = new Movie('Rembo', new RegularPrice());
  const lotr = new Movie('Lord of the ring', new NewReleasePrice());
  const hp = new Movie('Harry Potter', new ChildrenPrice());
  const escape = new Movie('Escape from the Shoushenk', new DramaPrice());

  const rentals = [
    new Rental(rembo, 1),
    new Rental(lotr, 4),
    new Rental(hp, 5),
    new Rental(escape, 2),
  ];

  const customer = new Customer('Petro', rentals);

  console.log(customer.statement());
  console.log(customer.HTMLStatement());
})();
