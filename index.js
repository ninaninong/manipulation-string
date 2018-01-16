//LEVEL 0
const sentenceA = "Hello World!"
const sentenceB = "Good Bye!"

console.log(sentenceA)
console.log(sentenceB)

//LEVEL 1
const sentenceC = sentenceA + " " + sentenceB
console.log(sentenceC);

const sentenceD = `${sentenceA} ${sentenceB}`
console.log(sentenceC);

//LEVEL 2
console.log(sentenceA.toUpperCase());
console.log(sentenceB.toUpperCase());
console.log(sentenceA.toLowerCase());
console.log(sentenceB.toLowerCase());

//LEVEL 3
function toTitleCase(sentenceA) {
  return sentenceA.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
console.log(toTitleCase(sentenceA))

//output
console.log(sentenceA)
console.log(sentenceB)
console.log(sentenceC)