console.log(`Method 1 : Using Slice and Length Methods\n`);

function recursiveReverseStringSlice1(inputString)
{
   // Base case: If the string has one character or is empty, return it as is.  
  if(inputString.length <= 1)
  {
   return inputString;
  }
  // Recursive case: Concatenate the last character with the reversed 
  return inputString[inputString.length-1] + recursiveReverseStringSlice1(inputString.slice(0, -1));
  
 }

// Test cases
console.log(`"hello" reversed: ${recursiveReverseStringSlice1("hello")}`); // Outputs: "olleh"
console.log(`"recursion" reversed: ${recursiveReverseStringSlice1("recursion")}`); // Outputs: "noisrucer"
console.log(`"a" reversed: ${recursiveReverseStringSlice1("a")}`); // Outputs: "a"
console.log(`"" reversed: ${recursiveReverseStringSlice1("")}`); // Outputs: ""

console.log(`\nMethod 2 : Using Slice Method\n`);

function recursiveReverseStringSlice2(inputString) {
  //Base case
  if (inputString === "") {
    return "";
  }
  //Recursive case
 else {
    return recursiveReverseStringSlice2(inputString.slice(1)) + inputString[0];
  }
}

//Test cases
console.log(`"hello" reversed: ${recursiveReverseStringSlice2("hello")}`); // Outputs: "olleh" 
console.log(`"recursion" reversed: ${recursiveReverseStringSlice2("recursion")}`); // Outputs: "noisrucer"
console.log(`"a" reversed: ${recursiveReverseStringSlice2("a")}`); // Outputs: "a"
console.log(`"" reversed: ${recursiveReverseStringSlice2("")}`); // Outputs: ""

console.log(`\nMethod 3 : Using SubString Method\n`);

function recursiveReverseStringSubString(inputString) {
  // Base case: If the string is empty or contains only one character,
  
  if (inputString.length <= 1) {
    return inputString;
  }

  /* Recursive case: Concatenate the last character of the string
   with the result of the recursive call on the remaining part of the string.*/

  return inputString[inputString.length - 1] +recursiveReverseStringSubString(inputString.substring(0, inputString.length - 1));
}

// Test cases
console.log(`"hello" reversed: ${recursiveReverseStringSubString("hello")}`); // outputs: "olleh"
console.log(`"JavaScript" reversed: ${recursiveReverseStringSubString("JavaScript")}`); // outputs: "tpircSavaJ"
console.log(`"a" reversed: ${recursiveReverseStringSubString("a")}`); // ouputs: "a"
console.log(`"" reversed: ${recursiveReverseStringSubString("")}\n`); // outputs: ""

console.log(`\nMethod 4 : Using Length Method\n`);

function recursiveReverseStringLength(inputString, stringLength)
{
    if (stringLength < 1) {
        return
    }

    // base case
    if (stringLength === 1) {
        return inputString[0];
    }

    // recursive case
    return inputString[stringLength - 1] + recursiveReverseStringLength(inputString, stringLength - 1);
}

// Test Cases

let str1 = "Launch Code";
console.log(`"Launch Code" reversed: ${recursiveReverseStringLength(str1, str1.length)}`);//outputs: edoC hcnuaL
let str2 = "Java Script";
console.log(`"JavaScript" reversed: ${recursiveReverseStringLength(str2, str2.length)}`);//outputs : tpircS avaJ
let str3 = "hello";
console.log(`"hello" reversed: ${recursiveReverseStringLength(str3, str3.length)}`);// Outputs: olleh 


console.log(`\nMethod 5 : Using swap technique\n`);
/*The idea is to begin with both corners, swap the corner characters and 
then make recursive call for the remaining string.*/

function recursiveReverseStringSwap(str) {
  // Base case: If the string is empty or has one character, it's already reversed.
  if (str.length <= 1) {
    return str;
  }

  // Get the first and last characters
  const firstChar = str[0];
  const lastChar = str[str.length - 1];

  // Get the substring excluding the first and last characters
  const middleString = str.substring(1, str.length - 1);

  // Recursively call the function for the middle string
  const reversedMiddle = recursiveReverseStringSwap(middleString);

  // Combine the swapped corner characters with the reversed middle string
  return lastChar + reversedMiddle + firstChar;
}

// Test cases:

console.log(`"Hello" reversed: ${ recursiveReverseStringSwap("Hello")}`);// Outputs: "olleH" 
console.log(`"recursive" reversed: ${ recursiveReverseStringSwap("recursion")}`);// Outputs: "noisrucer"
console.log(`"a" reversed: ${ recursiveReverseStringSwap("a")}`);// Outputs: "a"

