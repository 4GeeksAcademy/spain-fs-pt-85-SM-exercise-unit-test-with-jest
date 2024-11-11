// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar(euro){
    return euro * 1.07;
}



function fromDollarToYen(dollar){
    return dollar * 156.5 / 1.07;
}



function fromYenToPound(pound){
    return pound * 0.87 / 156.5;
}



module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};

