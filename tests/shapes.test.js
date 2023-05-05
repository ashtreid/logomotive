const { TextSVG } = require('../lib/text');
const { Triangle, Circle, Square } = require('../lib/shapes');

const keywordColors = ['blue', 'violet', 'pink', 'red', 'black', 'green', 'yellow'];
const hexColors = ['#CCCCFF', '#E97451', '#B2BEB5', '#DFFF00', '#FFB6C1', '#D2042D', '#F9F6EE'];


const randomKeyColors = keywordColors[Math.floor(Math.random() * keywordColors.length)];

const randomHexColors = hexColors[Math.floor(Math.random() * hexColors.length)];

// Triangle tests
describe('Triangle', () => {
  const triangleKey = new Triangle('triangle', randomKeyColors);

  test('renders a triangle SVG element with keyword color', () => {
    expect(triangleKey.render()).toBe(
      `<polygon points='150, 0 300, 200 0, 200' fill='${randomKeyColors}' />`
      );
  });

  const triangleHex = new Triangle('triangle', randomHexColors);

  test('renders a triangle SVG element with hexidecimal color', () => {
    expect(triangleHex.render()).toBe(
      `<polygon points='150, 0 300, 200 0, 200' fill='${randomHexColors}' />`
      );
  });
});

// Circle tests
describe('Circle', () => {
  const circleKey = new Circle('circle', randomKeyColors);

  test('renders a circle SVG element with keyword color', () => {
    expect(circleKey.render()).toBe(
      `<circle cx="150" cy="100" r="100" fill='${randomKeyColors}' />`
      );
  });

  const circleHex = new Circle('triangle', randomHexColors);

  test('renders a circle SVG element with hexidecimal color', () => {
    expect(circleHex.render()).toBe(
      `<circle cx="150" cy="100" r="100" fill='${randomHexColors}' />`
      );
  });
});

// Square tests
describe('Square', () => {
  const squareKey = new Square('square', randomKeyColors);

  test('renders a square SVG element with keyword color', () => {
    expect(squareKey.render()).toBe(
      `<rect width="100%" height="100%" fill='${randomKeyColors}' />`
      );
  });

  const squareHex = new Square('square', randomHexColors);

  test('renders a square SVG element with hexidecimal color', () => {
    expect(squareHex.render()).toBe(
      `<rect width="100%" height="100%" fill='${randomHexColors}' />`
      );
  });
});

// Text tests
describe('Text', () => {
  const textLetters = ['ASH', 'PRG', 'WEV', 'QRR', 'MBY', 'POL', 'CVR'];
  const randomText = textLetters[Math.floor(Math.random() * textLetters.length)];

  const textKey = new TextSVG(randomText, randomKeyColors);

  test('renders a text SVG element with keyword color', () => {
    expect(textKey.render()).toBe(
      `<text x='50%' y='50%' font-size='60' text-anchor='middle' alignment-baseline='middle' fill='${randomKeyColors}'>${randomText}</text>`
      );
  });

  const textHex = new TextSVG(randomText, randomHexColors);

  test('renders a text SVG element with hexidecimal color', () => {
    expect(textHex.render()).toBe(
      `<text x='50%' y='50%' font-size='60' text-anchor='middle' alignment-baseline='middle' fill='${randomHexColors}'>${randomText}</text>`
      );
  });
});






