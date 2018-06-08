// //------------------------THIS IS EXERCISE 1 -------------------------------------------
// //------------------------THIS IS EXERCISE 1 -------------------------------------------
// //------------------------THIS IS EXERCISE 1 -------------------------------------------
// let cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
// let y = 0

// for ( y = 0; y < cookies.length; y++) {
//     const currentCookie = cookies[y]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }

// //------------------------THIS IS EXERCISE 2 -------------------------------------------
// //------------------------THIS IS EXERCISE 2 -------------------------------------------
// //------------------------THIS IS EXERCISE 2 -------------------------------------------
// const conjunction = function (firstWord, secondWord) {
//     const conjoinedWord = `${firstWord} ${secondWord}`
//     console.log(conjoinedWord)
// }

// conjunction("Master", "Card")

// //------------------------THIS IS EXERCISE 3 -------------------------------------------
// //------------------------THIS IS EXERCISE 3 -------------------------------------------
// //------------------------THIS IS EXERCISE 3 -------------------------------------------
// let HTMLRepresentation = `<h1>The Mod Squad</h1>`

// const ModSquad = {
//         "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
//         "series": {
//             "start": "1968",
//             "end": "1973"
//         }
//     }



//     ModSquad.members.forEach(member => {
//     HTMLRepresentation += `<div>${member}</div>`
//     })


// document.querySelector(".show-info").innerHTML = HTMLRepresentation




// //------------------------THIS IS EXERCISE 4 -------------------------------------------
// //------------------------THIS IS EXERCISE 4 -------------------------------------------
// //------------------------THIS IS EXERCISE 4 -------------------------------------------
// const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

// let k; 

// for (k = 0; k < locations.length; k++) {
//     let currentLocation = locations[k];
//     let invalidLocation = false;

//     if (currentLocation[0] > 2) {
//         const invalidLocation = true
//     }

//     if (invalidLocation) {
//         console.log("This location is invalid")
//     }
// }

// console.log(`There were ${k} locations displayed`)


//--------------------------------Lambda Llama-----------------------
//================WORKING ON THIS==================================
const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)

    const namer = function () {
        const suffix = " the Llama"
        const name = possibleNames[randomizer]
        return name + suffix
    }

    // let newName = namer();
    return newName;
}

nameMaker = llamaNamer()
console.log(nameMaker())


// //----------------------------------LOOK AT THIS CODE LATER TO UNDERSTAND-------------------------------------------
// // Now do the reverse. Convert the dollar amount into the coins that make up that dollar amount.
// //  The final result is an object with the correct number of quarters, dimes, nickels, and pennies.


// // make a dollar amount divisible by all coins to be included
// const dollarAmount = 28.92

// //  make a piggy bank for us to store all of the various coins
// const piggyBank = {
//     "quarters": 0,
//     "nickels": 0,
//     "dimes": 0,
//     "pennies": 0
// }

// // create a function
// const ConvertedDollarAmount = (coins) => {
//         // convert the number to not havve decimal points. This makes it easier for javaScript to do math.
//         let remainder = Math.round(dollarAmount * 100)

//         // QUARTERS
//         // find how many times dollarAmount is divisible by a quarter
//         let numQuarters = Math.floor(remainder / 25)
//             // send to piggybBank
//         piggyBank.quarters = numQuarters
//             // get remainder of coins
//         remainder -= numQuarters * 25

//         // DIMES
//         let numDimes = Math.floor(remainder / 10)
//         piggyBank.dimes = numDimes
//         remainder -= numDimes * 10

//         // NICKELS
//         let numNickel = Math.floor(remainder / 5)
//         piggyBank.nickels = numNickel
//         remainder -= numNickel * 5

//         // PENNIES
//         let numPennies = Math.floor(remainder / 1)
//         piggyBank.pennies = numPennies
//         remainder -= numPennies * 1

//         // console.log to get the answer
//         console.log(piggyBank)
//     }
//     // call the function or it doesn't ever start the process
// ConvertedDollarAmount()