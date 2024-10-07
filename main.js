
// Sum
function sum(a,b) {
    return a+b
}
sum(3,4)


// Average
function findAvg(numbers) {
    let sum = 0; 
    let count = numbers.length; 
    
    for (let i = 0; i < count; i++) {
        sum += numbers[i];
    }

    let average = sum / count;
    return average;
}

let groupOfNum = [10, 20, 30, 40, 50];
let average = findAvg(groupOfNum);
console.log(average);

// Longest String
function findLongestString(strings) {
    let longest = ""; 
    
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > longest.length) {
            longest = strings[i]; 
        }
    }

    return longest; 
}

let arrayOfStrings = ["itachi", "Luffy", "Levi", "Bakugo", "Naruto"];
let longestString = findLongestString(arrayOfStrings);
console.log("Longest string is:", longestString); 