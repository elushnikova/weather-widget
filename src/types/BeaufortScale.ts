type BeaufortScaleItem = {
  description: string;
  minSpeed: number;
  maxSpeed: number;
};

const BeaufortScale: Readonly<Map<number, BeaufortScaleItem>> = new Map([
  [0, { description: "Calm", minSpeed: 0, maxSpeed: 0.4 }],
  [1, { description: "Light air", minSpeed: 0.5, maxSpeed: 1.5 }],
  [2, { description: "Light breeze", minSpeed: 1.6, maxSpeed: 3.3 }],
  [3, { description: "Gentle breeze", minSpeed: 3.4, maxSpeed: 5.5 }],
  [4, { description: "Moderate breeze", minSpeed: 5.6, maxSpeed: 7.9 }],
  [5, { description: "Fresh breeze", minSpeed: 8, maxSpeed: 10.7 }],
  [6, { description: "Strong breeze", minSpeed: 10.8, maxSpeed: 13.8 }],
  [7, { description: "Near gale", minSpeed: 13.9, maxSpeed: 17.1 }],
  [8, { description: "Gale", minSpeed: 17.2, maxSpeed: 20.7 }],
  [9, { description: "Strong gale", minSpeed: 20.8, maxSpeed: 24.4 }],
  [10, { description: "Storm", minSpeed: 24.5, maxSpeed: 28.4 }],
  [11, { description: "Violent storm", minSpeed: 28.5, maxSpeed: 32.6 }],
  [12, { description: "Hurricane", minSpeed: 32.7, maxSpeed: Infinity }],
]);

export default BeaufortScale;
export { BeaufortScaleItem };
