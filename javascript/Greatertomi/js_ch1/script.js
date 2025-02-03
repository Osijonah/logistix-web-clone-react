// # Javascript Challenges 1

// ## Challenge 1
// Write a function that counts the number of vowels in a string and returns the number of vowels.

// ### Testcases
// js
// // Testcase 1
// const string = 'Hello World';
// // Expected output: 3

// // Testcase 2
// const string = 'The quick brown fox jumps over the lazy dog';
// // Expected output: 11

// // Testcase 3
// const string = 'aeiou';
// // Expected output: 5

// // Testcase 4
// const string = 'bcdfghjklmnpqrstvwxyz';
// // Expected output: 0
// ```


const vowelCounter = ( string ) => {

    let vowelCounter = 0;
    for ( let letter of string ) {
        if ( letter === `a` || letter === `e` || letter === `i` || letter === `o` || letter === `u` ) {
            vowelCounter += 1;
        }
    }
    console.log(`challenge 1: ${vowelCounter}`);
}

vowelCounter(`team is coming here`);


// ## Challenge 2
// Write a javascript function that receives an array of 10 numbers and prints the two largest number entered by the user. 

// ### Testcases
// ```js
// // Testcase 1
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // Expected output: 10, 9

// // Testcase 2
// const numbers = [4, -2, 0, 20, 14, 6, 7, -4, 24, 10];
// // Expected output: 24, 20
// ```

const twoLargestNumbers = ( array ) => {
    let largestNumber1 = 0, largestNumber2 = 0;
    for ( let number of array ) {
        if ( number > largestNumber1 ) {
            largestNumber1 = number;
        }
        for ( number of array ) {
        if ( largestNumber2 < number && number < largestNumber1 ) {
            largestNumber2 = number;
        }
    }
    
    }
    console.log(`challenge 2: ${largestNumber1}, ${largestNumber2}`);
    
}

twoLargestNumbers([4, -2, 0, 20, 14, 6, 7, -4, 24, 10])

// ## Challenge 3
// Write a javascript function that receives an array of numbers and prints the sum of all the numbers.

// ### Testcases
// ```js
// // Testcase 1
// const numbers = [1, 2, 3, 4, 5];
// // Expected output: 15

// // Testcase 2
// const numbers = [4, -2, 0, 20, 14, 6, 7, -4, 24, 10];
// // Expected output: 79

// // Testcase 3
// const numbers = [];
// // Expected output: 0

// // Testcase 4
// const numbers = [1];
// // Expected output: 1

// // Testcase 5
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 30, -20, -10, 34, 56, 78, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
// // Expected output: 6034
// ```

const sumOfArray = ( array ) => {
    let sum = 0;
    for ( number of array ) {
        sum += number;
    }
    console.log(`challenge 3: ${sum}`);
    
}

sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 30, -20, -10, 34, 56, 78, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000])

// ## Challenge 4
// Print all prime numbers between 1 and 100.

// ### Testcases
// ```js
// // Testcase 1
// // Expected output: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 ,37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79 ,83, 89, 97
// ```


const primeNumber1_100 = () => {
    let primeNumbers = '';
    for ( num = 0; num <= 100; num++) {
        if ( num === 2 || num === 3 || num === 5 || num === 7 || num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0 ) {
            primeNumbers += `${num}, `;
          
        }
    }
    let newstr = primeNumbers.slice(0, primeNumbers.length - 2);
          console.log(`challenge 4: ${newstr}`);
    
} 
primeNumber1_100();

// ## Challenge 5
// Write a javascript function that receives a string and prints it in reverse, all in lower case, without spaces and special characters.

// ### Testcases
// ```js
// // Test case 1:
// const string = "Hello, I’m Jappy-Lappy-Happy";
// // Expected output: yppahyppalyppajmiolleh

// // Test case 2:
// const string = 'welcome to the jungle';
// // Expected output: elgnujotemoclew

// // Test case 3:
// const string = "B@r$ 1s th3 b3$t";
// // Expected output: t3b3hts1rb

// // Test case 4:
// const string = "@#%$&*"
// // Expected output:  - In this case print an empty string

// ```

const reverseString = ( string ) => {
    let newString = ``;
    let cleanString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, ``);
    for ( let letter of cleanString ) {
        newString = letter + cleanString;
    }
    console.log(`challenge 5: ${newString}`);
    
}

reverseString("@#%$&")


// ## Challenge 6
// A large company pays its salespeople on a commission basis. The salespeople receive
// $200 per week plus 9% of their gross sales for that week. For example, a salesperson
// who sells $5,000 worth of merchandise in a week receives $200 plus 9% of $5000, or
// a total of $650. You’ve been supplied with a list of the items sold by each
// salesperson. The values of these items are as follows:

// | Item | Value  |
// |------|--------|
// | a    | 239.99 |
// | b    | 129.75 |
// | c    | 99.95  |
// | d    | 350.89 |

// Write a javascript function that receives one salesperson’s items sold for last week and calculates and displays that salesperson’s earnings.

// ### Testcases
// ```js
// // Testcase 1
// const sales = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
// };
// Expected output
// total sales: 239.99 + 259.5 + 299.85 + 1403.56 = 2202.9
// total earnings: 200 + 198.26 = 398.26

// // Testcase 2
// const sales = {
//   a: 12,
//   b: 20,
//   d: 2,
// };
// Expected output
// total sales: 2879.88 + 2595 + 701.78 = 6176.66
// total earnings: 200 + 555.89 = 755.89

// // Testcase 3
// const sales = {
//   a: 23,
//   d: 15
// }
// Expected output
// total sales: 5519.77 + 5263.35 = 10783.12
// total earnings: 200 + 970.48 = 1170.48
// ```

const salesEarningsCalc = ( obj ) => {
    let itemASales, itemBSales, itemCSales, itemDSales, totalSales = 0;
    for ( let item in obj ) {
       if ( item === `a` ) {
        itemASales = obj[item] * 239.99;
        totalSales += itemASales;
       } else if ( item === `b`) {
        itemBSales = obj[item] * 129.75;
        totalSales += itemBSales;
       } else if ( item === `c`) {
        itemCSales = obj[item] * 99.95;
        totalSales += itemCSales;
       } else if ( item === `d`) {
        itemDSales = obj[item] * 350.89;
        totalSales += itemDSales;
       }

    }

    let printTotalSales = `total sales:`;
    if ( itemASales ) {
     printTotalSales += ` ${ itemASales }`;
    } if ( itemBSales ) {
     printTotalSales += ` + ${ itemBSales }`;
    } if ( itemCSales ) {
     printTotalSales += ` + ${ itemCSales }`;
    } if ( itemDSales ) {
     printTotalSales += ` + ${ itemDSales.toFixed(2) }`;

    }

    let totalEarning = Number(totalSales.toFixed(2) * 0.09) + 200;
    console.log(`challenge 6: ${printTotalSales} = ${totalSales.toFixed(2)}
total earning: 200 + ${(Number(totalSales.toFixed(2) * 0.09)).toFixed(2)} = ${totalEarning.toFixed(2)}`);
    
    
}

salesEarningsCalc({
    a: 12,
    b: 20,
    d: 2,
  })


// ## Challenge 7
// Write a javascript function that receives a number, calculate and returns its factorial.

// ### Testcases
// ```js
// // Testcase 1
// const number = 5;
// // Expected output: 120

// // Testcase 2
// const number = 10;
// // Expected output: 3628800

// // Testcase 3
// const number = 0;
// // Expected output: 1

// // Testcase 4
// const number = -4;
// // Expected output: 1
// ```

const factorialCalc = ( number ) => {
    let factorial = 1;
    for ( count = number; count >= 1; count --) {
        factorial *= number;
        number--;
    }
    console.log(`challenge 7: ${factorial}`);
    
}

factorialCalc(-4)

// ## Challenge 8
// The price of fruits in two shops are shown below

// ```js
const shop1 = {
  mango: 20,
  banana: 30.4,
  apple: 15.40,
  orange: 40.12
}

const shop2 = {
  mango: 50,
  banana: 26,
  apple: 35.71,
  orange: 15.78
}
// ```
// Solve the following challenges with the objects above.
// - Print the total cost of 5 oranges from shop2 and 7 apples from shop1

const orangePrice2 = shop2.orange;
const applePrice1 = shop1.apple;

const totalPrice = applePrice1 * 7 + orangePrice2 * 5;
console.log(`challenge 8.1: the total cost of 5 oranges from shop2 and 7 apples from shop1 is: ${totalPrice}`);


// - Add a new fruit to both shops and specify any price you want.

shop1.pineapple = 20;
shop2.pineapple = 30;


// - Create a new object that comprises the sum of the fruit of the same type from both shops, then printing the result to the screen.

const shop3 = {};

const createNewShop = (shop1, shop2, shop3) => {
    for ( fruit in shop1 ) {
        shop3[`${fruit}`] = shop1[`${fruit}`] + shop2[`${fruit}`];
    }
    console.log(`challenge 8.3: `);
    console.log(shop3);
}

createNewShop(shop1, shop2, shop3);

// ## Challenge 9
// Write a javascript function that receives a string and returns the string without duplicates.

// ### Testcases
// ```js
// // Testcase 1
// const string = 'aabbbcccdeeeee';
// // Expected output: abcde

// // Testcase 2
// const string = 'ghiiikkkl';
// // Expected output: ghikl
// ```

const removeDuplicate = ( string ) => {
    let newString = ``,index=0,letter;
    for ( index; index < string.length; index++ ) {
        if ( !newString.includes(string[index]) ) {
            newString += string[index];
        }
    }
    console.log(`challenge 9: ${newString}`);
}

removeDuplicate('aabbbcccdeeeee')

// ## Challenge 10
// Write a javascript function that receives two arrays and returns the common elements between them.

// ### Testcases
// ```js
// // Testcase 1
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [4, 5, 6, 7, 8];
// // Expected output: [4, 5]

// // Testcase 2
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [6, 7, 8];
// // Expected output: []

// // Testcase 3
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [];
// // Expected output: []

// // Testcase 4
// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11 ,12 ,13 ,14 ,15 ,16 ,17 ,18 ,19 ,20 ,21 ,22 ,23 ,24 ,25 ,26 ,27 ,28 ,29 ,30];
// const array2 = [10, 11, 12, 13, 14 ,30, 31, 32, 33, 34, 35, 36, 37, 38, 39];
// // Expected output: [10, 11, 12, 13, 14, 30]
// ```

const findCommonElements = ( arr1, arr2 ) => {
    let commonElements = [];
    for ( let index = 0; index < arr1.length; index++ ) {
        if ( arr2.includes(arr1[index]) ) {
            commonElements.push(arr1[index])
        }
    }
    console.log(`challenge 10: ${commonElements}`);
}

findCommonElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11 ,12 ,13 ,14 ,15 ,16 ,17 ,18 ,19 ,20 ,21 ,22 ,23 ,24 ,25 ,26 ,27 ,28 ,29 ,30], [10, 11, 12, 13, 14 ,30, 31, 32, 33, 34, 35, 36, 37, 38, 39])