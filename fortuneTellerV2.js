//test

const fortunes = {
  goodNews: [
    "Good news!",
    "Congratulations!",
    "Hooray!",
    "Look at you!",
    "Fantastic!",
    "Wink Wink!",
  ],
  goodFortunes: [
    "A long awaited opportunity is coming",
    "The desired change will fall from the sky",
    "The monetary wish is finally approaching",
    "A romantic adventure will entice you",
  ],
  badNews: [
    "Bad news.",
    "Oh no!",
    "dam dam daaaaam",
    ":(",
    "Careful!",
    "Be aware!",
    "I'm sorry...",
  ],
  badFortunes: [
    "A betrayal is approaching",
    "A harsh fight will come",
    "A recession is coming",
    "You will be broke",
  ],
  timeFrames: [
    "today",
    "tomorrow",
    "during this week",
    "over the next month",
    "during this season",
    "this year",
  ],
};

const random = function (array) {
  return Math.floor(Math.random() * array.length); // array random element selector
};

const fortuneFunction = function () {
  const faith = Math.random() < 0.5; //generate true/false depending on randomness betweeb 0 to 0.9
  const output = [];

  const news = faith ? fortunes.goodNews : fortunes.badNews; //pass the array of object to this variable depending on the true/false value
  const fortune = faith ? fortunes.goodFortunes : fortunes.badFortunes; //pass the array of object to this variable depending on the true/false value
  const timeFrames = fortunes.timeFrames[random(fortunes.timeFrames)]; //passing the timeframe array to random function and store the element on this variable

  output.push(news[random(news)]); //push
  output.push(fortune[random(fortune)]); //push

  return output.join(""); //then return with the full output for fortune teller
};

console.log(fortuneFunction()); //displaying the full message output
