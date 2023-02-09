// create an object that stores the different states
let states = {
    symbols: ['&', '@', '#', '$', '%', '^', '!', '*', '~'],
    pages: [
        {
            page: 1,
            headerText: "I can read your mind",
            subText1: "",
            subText2: "",
            nextButtonText: "Go",
            nextButtonDisplay: "block",
            resetBtnDisplay: "none"
        },
        {
            page: 2,
            headerText: "Pick a number from 01 - 99",
            subText1: "when you have your number",
            subText2: "click next",
            nextButtonText: "Next",
            nextButtonDisplay: "block",
            resetBtnDisplay: "block"
        },
        {
            page: 3,
            headerText: "Add both digits together to get a new number",
            subText1: "Ex: 14 is 1 + 4 = 5",
            subText2: "click next to proceed",
            nextButtonText: "Next",
            nextButtonDisplay: "block",
            resetBtnDisplay: "block"
        },
        {
            page: 4,
            headerText: "Subtract your new number from the original number",
            subText1: "Ex: 14 - 5 = 9",
            subText2: "click next to proceed",
            nextButtonText: "Next",
            nextButtonDisplay: "block",
            resetBtnDisplay: "block"
        },
        {
            page: 5,
            headerText: createSymbols(),
            subText1: "Find your new number.",
            subText2: "Note the symbol beside the number",
            nextButtonText: "Reveal",
            nextButtonDisplay: "block",
            resetBtnDisplay: "block"
        },
        {
            page: 6,
            headerText: "&",
            subText1: "Your symbol is:",
            subText2: "&",
            nextButtonText: "",
            nextButtonDisplay: "none",
            resetBtnDisplay: "block"
        }
    ]
};

let currentPage = 0;
//if a page is greater than one make reset button visible

//if a page is less than 6 make the next button visible

//creates an array of 99 symbols
function createSymbols() {
    let symbols = ['&', '@', '#', '$', '%', '^', '!', '*', '~'];
    let symbolsArr = [];
    for (let i = 0; i < 100; i++) {
        symbolsArr.push(i + " - " + symbols[i % 9]);
    }
    return symbolsArr.toString().replaceAll(",", "<br>");
};

//resets current page to first page
function reset() {
    currentPage = 0;
    document.getElementById("appHeader").innerHTML = states.pages[currentPage].headerText;
    document.getElementById("appSubText1").innerHTML = states.pages[currentPage].subText1;
    document.getElementById("appSubText2").innerHTML = states.pages[currentPage].subText2;
    document.getElementById("appResetBtn").style.display = states.pages[currentPage].resetBtnDisplay;
    document.getElementById("nextBtn").style.display = states.pages[currentPage].nextButtonDisplay;
    document.getElementById("nextBtn").innerHTML = states.pages[currentPage].nextButtonText; 
};

//moves the page up by one
function setPage() {
    currentPage++
    document.getElementById("appHeader").innerHTML = states.pages[currentPage].headerText;
    document.getElementById("appSubText1").innerHTML = states.pages[currentPage].subText1;
    document.getElementById("appSubText2").innerHTML = states.pages[currentPage].subText2;
    document.getElementById("appResetBtn").style.display = states.pages[currentPage].resetBtnDisplay;
    document.getElementById("nextBtn").style.display = states.pages[currentPage].nextButtonDisplay;
    document.getElementById("nextBtn").innerHTML = states.pages[currentPage].nextButtonText;    
};
