## Remove long methods


  Long methods (> 20 lines of code):
- it is harder to understand them
- they will grow


  Short methods (3-5 lines of code):
- it is easier to understand them
- convenient navigation
- it is easier to reuse them

What to extract?
- loops
- conditions (if, switch)
- commented part of code
- part of code, where specific local var is used a lot

Example:
`Customer.getCharge` method