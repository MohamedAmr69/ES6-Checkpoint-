//Fundmentals

// Vowel count 
function getCount(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

//Even Or Odd
function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}

//Get the Middle Character
function getMiddle(s) {
    if (s.length % 2 == 0) {
        const middleIndex = s.length / 2;
        return s.substring(middleIndex - 1, middleIndex + 1);
    } else {
        const middleIndex = s.length / 2;
        return s.substring(middleIndex, middleIndex + 1);
    }
}

// Opposite Number
function opposite(number) {
    return -number;
}

//Mumbling
function accum(s) {
    let arr = []
    for (let i = 0; i < s.length; i++) {
        arr.push(format(s[i], i + 1));
    }
    return arr.join('-');
}
function format(s, num) {
    let letter = s.toUpperCase()
    while (letter.length !== num) {
        letter += s.toLowerCase();
    }
    return letter;
}

//You are square
var isSquare = function (n) {
    if (n < 0) {
        return false;
    }
    for (let i = 0; i <= n; i++) {
        if (i ** 2 == n) {
            return true
        } else {
            continue
        }
    }
    return false;
}
//Another Solution
var isSquare = n => Math.sqrt(n) % 1 == 0

// Return Negative
function makeNegative(num) {
    if (num <= 0) {
        return num;
    } else {
        return -num;
    }
}

// Remove First and Last Character 
function removeChar(str) {
    return str.slice(1, -1);
};

//FIXME: Get Full Name
class Dinglemouse {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        if (this.firstName && this.lastName) {
            return `${this.firstName} ${this.lastName}`;
        } else {
            return this.firstName || this.lastName || '';
        }
    }
}

//Century from Year 
function century(year) {
    let result = 0;
    for (let i = 0; i < year; i++) {
        if (i % 100 === 0) {
            result++;
        }
    }
    return result;
}

// Convert boolean values to strings 'Yes' or 'No'.
function boolToWord(bool) {
    const str = bool === true ? "Yes" : "No";
    return str;
}

// Remove the minimum
function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

// Basic Mathematical Operations
function basicOp(operation, value1, value2) {
    if (operation === '+') {
        return value1 + value2;
    } else if (operation === '-') {
        return value1 - value2;
    } else if (operation === '*') {
        return value1 * value2;
    } else if (operation === '/') {
        return value1 / value2;
    } else {
        console.log('Wrong operator!')
    }
}

// Multiples of 3 or 5
function solution(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    return sum;
}

// Sum of digits/Digital Root
function digitalRoot(n) {
    if (n < 10) return n;

    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return digitalRoot(sum);
}

// Who likes it?
function likes(names) {
    names = names || [];
    switch (names.length) {
        case 0: return 'no one likes this'; break;
        case 1: return names[0] + ' likes this'; break;
        case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
        case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
        default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
}

// Switch/Case - Bug Fixing #6
function evalObject(value) {
    var result = 0;
    switch (value.operation) {
        case '+': return value.a + value.b;
        case '-': return value.a - value.b;
        case '/': return value.a / value.b;
        case '*': return value.a * value.b;
        case '%': return value.a % value.b;
        case '^': return Math.pow(value.a, value.b);
    }
    return result;
}

//Make a function that does arithmetic!
function arithmetic(a, b, operator) {
    if (operator === 'add') return a + b;
    else if (operator === 'subtract') return a - b;
    else if (operator === 'multiply') return a * b;
    else if (operator === 'divide') return a / b;
    else console.log('Wrong Operator!');
}

//Stop gninnipS My sdroW!
function spinWords(string) {
    const words = string.split(' ');
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length >= 5) {
            words[i] = [...word].reverse().join('');
        }
    }
    return words.join(' ')
}

// cumulative triangle
let arr = [];
const place = () => {
    let num = 0;
    for (let i = 1; i <= 10000; i++) {
        let templateArray = []
        for (let j = 0; j < i; j++) {
            num++
            templateArray.push(num)
        }
        arr.push(templateArray)
    }
}
place();
function cumulativeTriangle(n) {
    return arr[n - 1].reduce((a, b) => a + b, 0)
}

// Good vs. Evil
const goodWorth = [
    1, // Hobbits
    2, // Men
    3, // Elves
    3, // Dwarves
    4, // Eagles
    10, // Wizards
];

const evilWorth = [
    1, // Orcs
    2, // Men
    2, // Wargs
    2, // Goblins
    3, // Uruk Hai
    5, // Trolls
    10, // Wizards
];

const calculateWorth = (points, force) =>
    points.split(' ').reduce((total, value, index) =>
        force === 'good' ? Number(total) + goodWorth[index] * Number(value)
            : Number(total) + evilWorth[index] * Number(value), 0)

function goodVsEvil(good, evil) {
    const goodTotalWorth = calculateWorth(good, 'good');
    const evilTotalWorth = calculateWorth(evil, 'evil');

    if (evilTotalWorth > goodTotalWorth)
        return 'Battle Result: Evil eradicates all trace of Good';
    else if (goodTotalWorth > evilTotalWorth)
        return 'Battle Result: Good triumphs over Evil';
    else return 'Battle Result: No victor on this battle field';
}

// Leap years
function isLeapYear(year) {
    return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}

// Moving zeros to the end
function moveZeros(arr) {
    for (var i = arr.length; i--;) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0);
        }
    } return arr;
}

// Convert string to camel case
function toCamelCase(str) {
    let arr = str.split('');
    for (i = 0; i < arr.length; i++) {
        let letter = arr[i];
        if (letter == '_' || letter == '-') {
            arr[i + 1] = arr[i + 1].toUpperCase();
            arr[i] = '';
        }
    }
    return arr.join('');
}

// Square every digit
function squareDigits(num) {
    let newNum = new Array();
    ('' + num).split('').map(n => {
        newNum.push(n ** 2);
    })

    return parseInt(newNum.join(''));
}