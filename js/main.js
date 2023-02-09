//variables needed
// let visible = document.getElementById("element").style.visibility = "visible";
// let invisible = document.getElementById("element").style.visibility = "hidden";




// creates an object to store the state

let setState = {
    symbols: ['&', '@', '#', '$', '%', '^', '!', '*', '~'],
    pages: [
        {
            page: 1,
            headerText: "I can read your mind",
            subText1: "",
            subText2: "",
            nextButtonText: "Go",
        },
        {
            page: 2,
            headerText: "Pick a number from 01 - 99",
            subText1: "when you have your number",
            subText2: "click next",
            // nextButtonStatus: document.getElementById("element").style.visibility = "visible",
            nextButtonText: "Next",
            // resetButton: document.getElementById("element").style.visibility = "visible"
        },
        {
            page: 3,
            headerText: "Add both digits together to get a new number",
            subText1: "Ex: 14 is 1 + 4 = 5",
            subText2: "click next to proceed",
            // nextButtonStatus: document.getElementById("element").style.visibility = "visible",
            nextButtonText: "Next",
            // resetButton: document.getElementById("element").style.visibility = "visible"
        },
        {
            page: 4,
            headerText: "Subtract your new number from the original number",
            subText1: "Ex: 14 - 5 = 9",
            subText2: "click next to proceed",
            // nextButtonStatus: document.getElementById("element").style.visibility = "visible",
            nextButtonText: "Next",
            // resetButton: document.getElementById("element").style.visibility = "visible"
        },
        {
            page: 5,
            headerText: createSymbols(),
            subText1: "Find your new number.",
            subText2: "Note the symbol beside the number",
            // nextButtonStatus: document.getElementById("element").style.visibility = "visible",
            nextButtonText: "Reveal",
            // resetButton: document.getElementById("element").style.visibility = "visible"
        },
        {
            page: 6,
            headerText: "&",
            subText1: "Your symbol is:",
            subText2: "&",
            // nextButtonStatus: document.getElementById("element").style.visibility = "hidden",
            nextButtonText: "",
            // resetButton: document.getElementById("element").style.visibility = "visible"
        }
    ]
};

let currentPage = 0;
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
// function setPage() {
//     let page = currentPage;
//     if (page < 6) {
//         page++;
//     } else {
//         page = 1;
//     }
// };

//resets current page to first page
function reset() {
    currentPage = 0;
    document.getElementById("appHeader").innerHTML = setState.pages[currentPage].headerText;
    document.getElementById("appSubText1").innerHTML = setState.pages[currentPage].subText1;
    document.getElementById("appSubText2").innerHTML = setState.pages[currentPage].subText2;
    document.getElementById("nextBtn").innerHTML = setState.pages[currentPage].nextButtonText;
};

//moves the page up by one
function nextPage() {
//     if (currentPage === setState.pages[0]) {
//         currentPage = setState.pages[1];
//     } else if (currentPage === setState.pages[1]) {
//         currentPage === setState.pages[2];
//     } else if (currentPage === setState.pages[2]) {
//         currentPage === setState.pages[3];
//     } else if (currentPage === setState.pages[3]) {
//         currentPage === setState.pages[4];
//     } else if (currentPage === setState.pages[4]) {
//         currentPage === setState.pages[5];
//     } else if (currentPage === setState.pages[5]) {
//         currentPage === setState.pages[6];
//     } else if (currentPage === setState.pages[6]) {
//         currentPage === setState.pages[6];
//     }
};

function setPage() {
    currentPage++
    document.getElementById("appHeader").innerHTML = setState.pages[currentPage].headerText;
    document.getElementById("appSubText1").innerHTML = setState.pages[currentPage].subText1;
    document.getElementById("appSubText2").innerHTML = setState.pages[currentPage].subText2;
    document.getElementById("nextBtn").innerHTML = setState.pages[currentPage].nextButtonText;
    document.getElementById("appResetBtn").style.display = 'block';
};
