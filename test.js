const { fromEuroToDollar } = require('./app.js')


test("One euro should be 1.07 dollars", function() {

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07;

    expect(fromEuroToDollar(3.5)).toBe(3.745);

})
