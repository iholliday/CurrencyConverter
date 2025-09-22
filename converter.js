//inputs
let input = "5";
let startCurrency = 'GBP';
let endCurrency = 'EUR';

console.log('Input: ',input)

const GBPtoEUR = 1.15;
const GBPtoUSD = 1.35;


if (startCurrency = 'EUR') {
    GBP = input / GBPtoEUR;
}
else if (startCurrency = 'USD') {
    GBP = input / GBPtoUSD;
}
else if (startCurrency = 'GBP') {
    GBP = input;
}
else {
    console.log('should stop here');
    console.log('Currency not recognised.')
}

if (endCurrency = 'EUR') {
    result = input * GBPtoEUR;
}
else if (endCurrency = 'USD') {
    result = input * GBPtoUSD;
}
else if (endCurrency = 'GBP') {
    result = input;
}
else {
    console.log('should stop here');
    console.log('Currency not recognised.')
}

//output
console.log(output);