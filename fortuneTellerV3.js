//javascript
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
    ": (",
    "Careful!",
    "Be aware!",
    "I'm sorry...",
  ],
  badFortunes: [
    "A betreyal is approaching",
    "A harsh fight will come",
    "A recession is coming",
    "You will be broke",
  ],
  timeFrame: [
    "today",
    "tomorrow",
    "during this week",
    "over the next month",
    "during this season",
    "this year",
  ],
};

const output = [];

const random = function (array) {
  return Math.floor(Math.random() * array.length);
};

const fortuneFunction = function () {
  const luck = Math.random() < 0.5; //true or false
  const news = luck ? fortunes.goodNews : fortunes.badNews;
  const fortune = luck ? fortunes.goodFortunes : fortunes.badFortunes;
  const time = random(fortunes.timeFrame);

  output.push(news[random(news)]);
  output.push(fortune[random(fortune)]);
  output.push(fortunes.timeFrame[time]);

  return output.join(" ");
};

console.log(fortuneFunction());
