const {fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    // const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

// al tener que realizar varias llamadas al archivo ./app.js para validar lasfunciones
// ya que todas se encuentran en el mismo archivo lo que hacemos es llamarlo una sola vez
// al inicio del archivo en vez de llamarlo en cada test, se mantiene línea de llamada comentada
// para futura referencia, el primer test no se modicia ya que es el dado por el ejercicio
test("One dollar should be 146.26168224299064 yen", function(){
        // const {fromDollarToYen} = require('./app.js');
        const yens = fromDollarToYen(2.56);
        const expected = 2.56 * 156.5 / 1.07;
        expect(yens).toBe(expected)
    })

test("one yen should be 0.005555 pounds", function(){
    // const {fromYenToPound} = require('./app.js');
    const pounds = fromYenToPound(2068);
    const expected = 2068 * 0.87 / 156.5;
    expect(pounds).toBe(expected)
})