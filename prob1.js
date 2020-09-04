const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//find the first letter that is not repeated

/*
rewrite the string in order of number of occurrences 
and order from the inputted string. 
In the above example ‘Bubble’ would then be 
rewritten as ‘uleBbb’. Display this to the user.

b: 3
u: 1
l: 1
e: 1
*/


function charCount(str) {
  const count = {};
  for (let c of str) {
    count[c.toLowerCase()] = (count[c.toLowerCase()] || 0) + 1;
  }

  return count;
}

function firstNonRepeated(str, count) {
  for (let c of str) {
    if (count[c.toLowerCase()] === 1) {
      return c;
    }
  }
  return "All characters are repeated";
}

function stringSorter(str, count) {
  return str
    .split("")
    .map((char, i) => ({
      char,
      i
    }))
    .sort((a, b) => {
      if (count[a.char.toLowerCase()] < count[b.char.toLowerCase()]) {
        return -1;
      } else if (count[a.char.toLowerCase()] > count[b.char.toLowerCase()]) {
        return 1;
      } else {
        if (a.i < b.i) {
          return -1;
        } else if (a.i > b.i) {
          return 1;
        } else {
          return 0;
        }
      }
    })
    .map(el => el.char)
    .join("");

}

rl.question("What is your string ? ", function (string) {
  const count = charCount(string);
  const nonRepeatedChar = firstNonRepeated(string, count);
  const rearrangedString = stringSorter(string, count);

  console.log(`First non-repeated character: ${nonRepeatedChar}`);
  console.log(`Rearranged string by character occurrence then index: ${rearrangedString}`);

  rl.close();
});

rl.on("close", function () {
  console.log("\nBYE BYE !!!");
  process.exit(0);
});