## Add new types of Movie (1)

Don't add a new code like `static NEW_RELEASE = 1;` in the Movie class.

Code-smell: switch/case
- It breaks Open-Closed principle of SOLID.
- It leads to code duplication
- It will grow

Move all references of `Movie.SMTH` to the `Movie` class.

Updated methods: `Rental.getCharge`, `Rental.getFrequentRenterPointsIncrement`.

