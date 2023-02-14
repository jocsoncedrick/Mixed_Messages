//fortuneTeller

console.log("Your fortune today is:");

const fortune = [
  [
    //0
    [
      //0,0,
      "Good news!",
      "Congratulations!",
      "Hooray!",
      "Look at you!",
      "Fantastic!",
      "Wink Wink!",
    ],
    [
      //0,1
      "A long awaited opportunity is coming",
      "The desired change will fall from the sky",
      "The monetary wish is finally approaching",
      "A romantic adventure will entice you",
    ],
  ],
  [
    //1
    [
      //1,0
      "Bad news.",
      "Oh no!",
      "dam dam daaaaam",
      ": (",
      "Careful!",
      "Be aware!",
      "I'm sorry...",
    ],
    [
      //1,1
      "A betreyal is approaching",
      "A harsh fight will come",
      "A recession is coming",
      "You will be broke",
    ],
  ],
  [
    //2
    "today",
    "tomorrow",
    "during this week",
    "over the next month",
    "during this season",
    "this year",
  ],
];

/*const beginning = Math.floor(Math.random() * 3);
const middle = Math.floor(Math.random() * 3);*/

const fortuneFunction = function () {
  const num = Math.floor(Math.random() * 2);
  const output = [];

  if (num === 0) {
    //good array beginning
    //for (let i = 0; i < fortune[0][0].length; i++) {
    output.push(
      fortune[0][0][Math.floor(Math.random() * fortune[0][0].length)]
    );
    output.push(
      fortune[0][1][Math.floor(Math.random() * fortune[0][1].length)]
    );
    //output.push(fortune[2][Math.floor(Math.random() * fortune[2].length)]);
    //}
  } else if (num === 1) {
    //bad array beginning
    output.push(
      fortune[1][0][Math.floor(Math.random() * fortune[1][0].length)]
    );
    output.push(
      fortune[1][1][Math.floor(Math.random() * fortune[1][1].length)]
    );
  }

  output.push(fortune[2][Math.floor(Math.random() * fortune[2].length)]);

  return output.join(" ");
};

console.log(fortuneFunction());
