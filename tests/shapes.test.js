// // Jest tests for shapes
// // example: UofU/01-Activities/28-Stu_Mini-Project/Main/tests/taskListItem.test.js

// // Example test
// // const shape = new Triangle();

// // shape.setColor('blue');
// // expect(shape.render()).toEqual(
// //     '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>'
// // );

// const Shapes = require('../lib/shapes');

// describe('Shapes', () => {
//     // TODO: Test triangle class for a `render()` method that returns a string for the corresponding SVG file with the given shape color.
//     test('should render the correct TRIANGLE SVG with given color', () => {
//         // Not sure if this is the right way to do it or not
//         const shape = new Shapes([triangle]);
//         // TODO: update expectedSVG
//         const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="green"/>';
//         shape.setColor('green');

//         expect(shape.render()).toEqual(expectedSVG);
//     });
    
//     // TODO: Test circle class for a `render()` method that returns a string for the corresponding SVG file with the given shape color.
//     test('should render the correct CIRCLE SVG with given color', () => {
//         // Not sure if this is the right way to do it or not
//         const shape = new Shapes([circle]);
//         // TODO: update expectedSVG
//         const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>';
//         shape.setColor('blue');

//         expect(shape.render()).toEqual(expectedSVG);
//     });

//     // TODO: Test square class for a `render()` method that returns a string for the corresponding SVG file with the given shape color.
//     test('should render the correct SQUARE SVG with given color', () => {
//         // Not sure if this is the right way to do it or not
//         const shape = new Shapes([square]);
//         // TODO: update expectedSVG
//         const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="violet"/>';
//         shape.setColor('violet');

//         expect(shape.render()).toEqual(expectedSVG);
//     });

//     test('should only have 3 letters', () => {
//         // TODO: add test to make sure only 3 letters can be accepted
//     });
// });

// Import child classes
const { Triangle, Circle, Square } = require('../lib/shapes');

const keywordColors = ['blue', 'violet', 'pink', 'red', 'black', 'green', 'yellow'];
const hexColors = ['#CCCCFF', '#E97451', '#B2BEB5', '#DFFF00', '#FFB6C1', '#D2042D', '#F9F6EE'];

const randomKeyColors = Math.floor(Math.random() * keywordColors.length);
console.log(randomKeyColors, months[keywordColors]);

const randomHexColors = Math.floor(Math.random() * hexColors.length);
console.log(randomHexColors, months[hexColors]);

// Triangle tests
describe('Triangle', () => {
  const triangleKey = new Triangle('triangle', 'randomKeyColors');

  test('renders a triangle SVG element with keyword color', () => {
    expect(triangleKey.render()).toBe(
      `<polygon points="150, 0 300, 200 0, 200" fill="red" />`
      
      );
  });

  const triangleHex = new Triangle('triangle', 'randomHexColors');

  test('renders a triangle SVG element with hexidecimal color', () => {
    expect(triangle.render()).toBe('<polygon points="150, 0 300, 200 0, 200" fill="red" />');
  });
});

// Circle tests
describe('Circle', () => {
  const circle = new Circle('circle', 'blue');

  test('has type property', () => {
    expect(circle.type).toBe('circle');
  });

  test('has color property', () => {
    expect(circle.color).toBe('blue');
  });

  test('renders a circle SVG element', () => {
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="100" fill="blue" />');
  });
});

// Square tests
describe('Square', () => {
  const square = new Square('square', 'green');

  test('has type property', () => {
    expect(square.type).toBe('square');
  });

  test('has color property', () => {
    expect(square.color).toBe('green');
  });

  test('renders a square SVG element', () => {
    expect(square.render()).toBe('<rect width="100%" height="100%" fill="green" />');
  });
});







