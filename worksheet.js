// PART 0: Write a function called squareDance() that squares each number in an array.

var squareDance = function(arrayList) {
    var result = []            
    for (var i = 0; i < arrayList.length; i++) {
        var root = arrayList[i] * arrayList[i]
        result.push(root);
    }
    return result;
}

console.log(squareDance([9,3]))

// PART 1: write a function called nicer(). 
// It should clean up the language in its input sentence. 
// Forbidden words include heck, dang, crappy, and dang.


// // PART 2: write a function called capitalizeAll(). 
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence. 

var letterOneToUp = function(array) {
    var toUpp = array[0].toUpperCase()
    return toUpp
}

var capitalizeAll = function(sentence) {
    var capitalWord = ''
  
    var sentenceArray = sentence.split(' ')
    capitalWord = sentenceArray[0]
    for(var i = 0; i < sentenceArray.length; i++) {
    return letterOneToUp(sentenceArray[i])+sentenceArray[i].slice(1)
        }
}

console.log(capitalizeAll('coffee friday beer fries'))


// // PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)

var properSentences = function(sentence) {
    var sentenceArray = sentence.split('.')
    var sentenceToUp = ''
    for(var i = 0; i < sentenceArray.length; i ++) {

sentenceToUp = sentenceArray[i].charAt(0).toUpperCase()+sentenceArray[i].slice(1)
        }
    return sentenceToUp
}

console.log(properSentences('the dog. light. stars.'))

// // PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string. 

var iPutTheFunIn = function(input) {
    var evaluate = input[input.length/2]
    var resultv = input.replace(evaluate, ' FUN ')
       return resultv
}

console.log(iPutTheFunIn('tomorrow is zen saturday'))

// // HARD MODE

// // PART 5: write a function called split(). it should take two inputs: (1) a string and (2) a delimiter
var testStr = 'pasta, wine'

var split = function(stringSplit, separator) {
    for(var i=0; i<stringSplit.length; i++) {
        var arrayInSplit = []
        if(stringSplit[i] === separator) {
        arrayInSplit = stringSplit[i]
    }
        return arrayInSplit
    }
}

console.log(split(testStr, ','))

// // obviously, you may not use the native .split() method. your task here is to reverse-engineer .split() and write your own. 


// // PART 6: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).

// // visit test.js to see the tests that will be run against your code.

var functionOne = function(num1) {
    return num1 - 32 
}

var functionTwo = function(num2) {
    return num2 * .55
}

var pipeline = function (farenheit, rest, division) {
    var value = functionOne(farenheit)
    var celsius = functionTwo(value)
    return celsius
}

console.log(pipeline(74))

