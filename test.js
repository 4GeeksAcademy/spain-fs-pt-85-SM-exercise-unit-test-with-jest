test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})


test("One dollar should be 146.26168224299064 yen", function(){
        const {fromDollarToYen} = require('./app.js');
        const yens = fromDollarToYen(2.56);
        const expected = 2.56 * 156.5 / 1.07;
        expect(fromDollarToYen(2.56)).toBe(374.429906542056)
    })
    
    
    test("One yen should be 0.005559105431309904 pounds", function(){
        const {fromYenToPound} = require('./app.js');
        const pounds = fromYenToPound(23105);
        const expected = 23105 * 0.87 / 156.5
        expect(fromYenToPound(23105)).toBe(128.4431309904153)
    })