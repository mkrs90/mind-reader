# Mind Reader Pseudocode

## Questions
    Is page the same as state?
    How do we transition pages with only Javascript? - we make a nextPage or setPage function to update our state object. 
    Can I reuse the go button and change the click event on it to serve both purposes?
## HTML/CSS
#### Atoms
    - Header (1, 2, 3, 4, 6)
    - Paragraph Text (2, 3, 4, 5, 6)

#### Organism
    - Go Button (1) - Goes to the second page 
    - Reset Button (2, 3, 4, 5, 6) - Returns to the first page (has icon in it)
    - Next/Reveal Button (2, 3, 4, 5) - Goes to next page
    - Scrollable Numbers panel (5)
## Objectives
  - All multiples of 9 will get the same symbol to get the mind reader portion to work.
  - Only one single html element
  - Manage the state with JS
  - On a reload of the screen we should start at page 1

## Variables
   - resetButton 
   - currentView - which page we’re on in the application
   - symbols - array [‘&’, ‘@’, ‘#’, ‘$’. ‘%’, ‘^’, ‘!’, ‘*’, ‘~‘] (length of 9)
     -   we could write a function that randomizes them (this is a little stretch goal)
     -   expands to 99 total (for loop)
   - pages
     -   Array of objects
     -   Use the index of the array to pick the object in the array to match the page we’re on
     -   headerText - text content
     -   nextButton - visibility / text
     -   paragraphText - visibility / text

## Functions
    - setPage()
    - Could be used on page 1 as GO Button
    - Then used on Pages 2-5 on the next/reveal button
    - When a button is clicked we update the currentPage in the state object to reflect the intended. 
    - Click on next button will increment the currentPage in state by 1
    - Click on the reset button will set the currentPage back to 1
    - reset()
    - create99Symbols()
```let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(']; let arr = []; for (let i = 0; i < 100; i++) {   arr.push(i + " " + symbols[i % 9]);```


## Objects
    - State Object


## Procedures

INIT
    State is initialized
    Page renders with page 1 content
Start
       - User clicks "Go" on page 1
    2nd page is rendered - Updates to the page include(header, subtext, reset button, next button) 
        - User clicks "Next" on page 2 (selected Option)
        - User clicks "reset" on page 2
    3rd page is rendered - Updates to the page include(header, subtext, reset button, next button)
        - User clicks "Next" on page 3 (selected Option)
        - User clicks "reset" on page 3
    4th page is rendered - Updates to the page include(header, subtext, reset button, next button)
        - User clicks "Next" on page 4 (selected Option)
        - User clicks "reset" on page 4
    5th page is rendered - Updates to the page include(header, subtext, reset button, next button)
        - User clicks "Reveal" on page 5 (selected Option)
        - User clicks "reset" on page 5
    6th page is rendered - Updates to the page include(header, subtext, reset button, next button)
        - User clicks "reset" on page 6 (selected Option)
    1st page is rendered 
End


## How to update a page

You need to know what page your own. Check state. State says page one (how does state know this?) 

## Pseudocode

Set state = {
	Symbols = [ ];
	currentPage = #;
	Pages: [
{ page number: 1,
  pageHeader: “I can read your mind”,
  pageSubText: “”,
  buttonText: “GO”,
  resetButton = hidden
},
{ pageNumber: 2,
  pageHeader: “Pick a number from 01 - 99”
  pageSubText: “when you have your number click next”,
  buttonText: “NEXT”,
  resetButton = visible
},
{ pageNumber: 3,
  pageHeader: “Pick a number from 01 - 99”
  pageSubText: “when you have your number click next”,
  buttonText: “NEXT”,
  resetButton = visible
},
{ pageNumber: 4,
  pageHeader: “Pick a number from 01 - 99”
  pageSubText: “when you have your number click next”,
  buttonText: “NEXT”,
  resetButton = visible
},
{ pageNumber: 5,
  pageHeader: “Pick a number from 01 - 99”
  pageSubText: “when you have your number click next”,
  buttonText: “NEXT”,
  resetButton = visible
},
{ pageNumber: 6,
  pageHeader: “Pick a number from 01 - 99”
  pageSubText: “when you have your number click next”,
  buttonText: “NEXT”,
  resetButton = visible
},
 ],
};