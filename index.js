function printBadges(badgeList) {
  for (let i = 0; i < badgeList.length; i++) {
    console.log(`Welcome ${badgeList[i]}! You are employee #${i+1}.`);
  }
  return badgeList;
}

function tailsNeverFails() {
  let i = 0
  while (Math.random() >=0.5) {
    i++;
  }
  console.log(`You got ${i} tails in a row!`);
  return `You got ${i} tails in a row!`;
}
