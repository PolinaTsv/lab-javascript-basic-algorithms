// Iteration 1: Names and Input
let hacker1 = "XXX";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Polina";
console.log(`The navigator's name is` + " " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if ((hacker1.length = hacker2.length)) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops
let hacker11 = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker11 += hacker1[i].toUpperCase() + " ";
}
console.log(hacker11);

let hacker22 = "";
for (let i = (hacker2.length-1); i >= 0; i--) {
  hacker22 += hacker2[i];
}
console.log(hacker22);

//#### Bonus 1:
//  - Generate 3 paragraphs. Store the text in a variable type of string.
let phrase = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium pulvinar metus, eget ullamcorper arcu pulvinar ut. Nam at pharetra ligula. Ut vulputate pharetra felis a vestibulum. Nam porta, nulla eu efficitur porttitor, lacus nulla placerat turpis, a porttitor erat diam at nunc. Suspendisse at luctus mauris. Vestibulum diam odio, feugiat at dolor at, luctus sagittis est. Vestibulum felis orci, malesuada sagittis dictum id, tincidunt in sapien. Curabitur vitae erat ornare, tincidunt mi et, tempor nisi. Etiam lobortis aliquet feugiat. Pellentesque porttitor sapien felis, vel consectetur libero feugiat sit amet. Nam bibendum dui eu nibh vehicula, ut efficitur nisi venenatis. Cras pharetra tortor et erat vulputate, vel pulvinar dolor commodo. In hendrerit turpis at lorem hendrerit iaculis.

Donec eget nisl elit. Nulla eu blandit enim. Pellentesque mi dolor, placerat interdum quam ut, aliquam egestas dui. Curabitur semper enim ipsum, eu sollicitudin purus pellentesque vel. Vestibulum vitae tempor justo, non facilisis nisl. In non accumsan elit. Sed eget tempor sapien, at tempor ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer et auctor arcu. Integer eget erat velit. Aenean dictum placerat arcu at venenatis. Nam orci libero, suscipit et eleifend sed, suscipit vitae dolor. Maecenas suscipit id nunc non eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed hendrerit urna mauris, a lacinia purus interdum eget. Praesent convallis, risus vitae suscipit fermentum, ante orci efficitur est, non mattis turpis libero id velit.

Praesent tempus libero quis nunc elementum interdum. Suspendisse fermentum leo ut tempus fringilla. Aenean tellus lectus, ultricies malesuada ullamcorper nec, commodo eu turpis. Mauris pharetra ex neque, quis commodo nulla congue in. Donec lacinia in tortor ac tristique. Praesent dictum quam eu mi dapibus, quis cursus mauris mattis. Morbi eu maximus ipsum, ac laoreet nisl. Nullam et elementum arcu. Maecenas vel eleifend quam. In hac habitasse platea dictumst. Sed et suscipit nisi. Morbi sodales sit amet sapien dignissim iaculis.` ;

//- Make your program count the number of words in the string.
let count = 0;
for (let i=0; i<=phrase.length; i++){
  if (phrase[i] !== " "){
    count++;
  }
}
console.log(count);
console.log(phrase.length);

//- Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears.
let countEt = 0;
splitPh = phrase.split(' ');
for (let i=0; i<=splitPh.length; i++){
  if (splitPh[i] === 'et' || splitPh[i] === 'et,' ){
    countEt++;
  } 
}
console.log(countEt);

//#### Bonus 2:
let phraseToCheck = "arace car";
let phraseWithoutSpace = '';
for (let i = 0; i < phraseToCheck.length; i++){
  if (phraseToCheck[i] === ' '){
    continue;
  } else {
    phraseWithoutSpace += phraseToCheck[i];
  }
}
console.log(phraseWithoutSpace);
let reversePhraseToCheck = '';
for (let i = phraseWithoutSpace.length - 1; i >= 0; i--){
  reversePhraseToCheck += phraseWithoutSpace[i];
}
console.log(reversePhraseToCheck);