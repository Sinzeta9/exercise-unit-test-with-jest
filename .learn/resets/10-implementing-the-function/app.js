let oneEuroIs = {
    "JPY":156.5,
    "USD":1.07,
    "GBP":0.87,
}

const fromEuroToDollar = (euro) => euro * oneEuroIs.USD;
const fromYenToPound = (yen) =>  (oneEuroIs.GBP / oneEuroIs.JPY);
const fromDollartoYen = (dollars) => dollars * (oneEuroIs.JPY / oneEuroIs.USD);
module.exports = {fromEuroToDollar,fromDollartoYen,fromYenToPound};


   
