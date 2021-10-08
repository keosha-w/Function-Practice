// Practice Calculate age in dog years

const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7
    return ageInDogYears
}

const dogAge = calculateAgeInDogYears(45)
console.log(dogAge)

// Practice: Best in show
const dogBreed = (breedOfDog) => {
    if (breedOfDog === "schnauzer") {
        const favDogBreed = "My favorite dog breed is " + breedOfDog
        return favDogBreed
    } else if (breedOfDog === "meow") {
        const meowCat = "I like cats"
        return meowCat
    } else {
        const otherFavDogBreed = "My favorite dog breed is " + breedOfDog
    }
}

const favBreed = dogBreed("schnauzer")
console.log(favBreed)


// Practice Addition
const add = (num1, num2, num3) => {
    const addNums = num1 + num2 + num3
    return addNums
}

const addition = add(17, 4, 11)
console.log(addition)

// Practice: Self Driving Cars

const go = (direction, speed) => {
    if (speed > 75) {
        console.log(`The car is moving ${direction} at ${speed} mph. SLOW DOWN`)
    } else {
        console.log(`The car is moving ${direction} at ${speed} mph.`)
    }
}

go("forward", 25)

//Practice: Evens or Odds

const evenOrOdd = (number) => {
    if (number % 2 === 0) {
        console.log("Even")
    } else {
        console.log("Odd")
    }
}

evenOrOdd(25)

const allNumbers = [0, 2, 3, 4, 5, 6, 7, 8]

for (const num of allNumbers) {
    evenOrOdd(num)
}

//Practice: Double Functions

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

/*
    Function to filter out `k` words
    (Google 'javascript startswith' to get started)
 */
const filter = (array) => {
    const wordsToKeep = []
    for (const word of array) {
        if (word.startsWith("k") === false) {
            wordsToKeep.push(word)
        }
    }
    return wordsToKeep
}
/*
    Function to build a single string from the array
    (Google 'javascript combine all items in array' to get started)
 */
const joinWords = (array) => {
    const sentenceArray = array.join(" ")
    return sentenceArray
}

/*
    Invoke the filtering function and store its return value
 */

    const printedNewArray = filter(words)
/*
    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/
const sentence = joinWords(printedNewArray)



console.log(sentence)
