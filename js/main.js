//variables needed
let visible = document.getElementById("element").style.visibility = "visible";
let invisible = document.getElementById("element").style.visibility = "hidden";
let currentPage;



//creates an object to store the state
let setState = {
    symbols: ['&', '@', '#', '$', '%', '^', '!', '*', '~'],
    currentView: 1,
    pages: [
        {
            page: Page1,
            headerText: "I can read your mind",
            subText1: "",
            subText2: "",
            nextButtonStatus: invisible,
            nextButtonText: "Go",
            resetButton: invisible
        },
        {
            page: Page2,
            headerText: "Pick a number from 01 - 99",
            subText1: "when you have your number",
            subText2: "click next",
            nextButtonStatus: visible,
            nextButtonText: "Next",
            resetButton: visible
        },
        {
            page: Page3,
            headerText: "Add both digits together to get a new number",
            subText1: "Ex: 14 is 1 + 4 = 5",
            subText2: "click next to proceed",
            nextButtonStatus: visible,
            nextButtonText: "Next",
            resetButton: visible
        },
        {
            page: Page4,
            headerText: "Subtract your new number from the original number",
            subText1: "Ex: 14 - 5 = 9",
            subText2: "click next to proceed",
            nextButtonStatus: visible,
            nextButtonText: "Next",
            resetButton: visible
        },
        {
            page: Page5,
            headerText: createSymbols(this.symbols),
            subText1: "Find your new number.",
            subText2: "Note the symbol beside the number",
            nextButtonStatus: visible,
            nextButtonText: "Reveal",
            resetButton: visible
        },
        {
            page: Page6,
            headerText: "&",
            subText1: "Your symbol is:",
            subText2: "&",
            nextButtonStatus: invisible,
            nextButtonText: "",
            resetButton: visible
        }
    ]
};
//if a page is greater than one make reset button visible

//if a page is less than 6 make the next button visible

//creates an array of 99 symbols
function createSymbols() {
    let symbols = ['&', '@', '#', '$', '%', '^', '!', '*', '~'];
    let symbols99Arr = [];
    for (let i = 0; i < 100; i++) {
        symbols99Arr.push(symbols[i % 9]);
    }
    return symbols99Arr;
};

//function that sets current page
function setPage() {
    let page = currentPage;
    if (page < 6) {
        page++;
    } else {
        page = 1;
    }
};

//resets current page to first page
function reset() {

};

//moves the page up by one
function nextPage() {
    
};

