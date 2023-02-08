
//creates an array of 99 symbols
function createSymbols() {
    let symbols = ['&', '@', '#', '$', '%', '^', '&', '*', '~'];
    let symbols99Arr = [];
    for (let i = 0; i < 100; i++) {
        symbols99Arr.push(symbols[i % 9]);
    }
};