// Jest tests for shapes
// example: UofU/01-Activities/28-Stu_Mini-Project/Main/tests/taskListItem.test.js

// Example test
// const shape = new Triangle();

// shape.setColor('blue');
// expect(shape.render()).toEqual(
//     '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>'
// );

const Shapes = require('./shapes');

describe('Shapes', () => {
    // TODO: Test triangle class for a `render()` method that returns a string for the corresponding SVG file with the given shape color.
    test('should render the correct TRIANGLE SVG with given color', () => {
        // Not sure if this is the right way to do it or not
        const shape = new Shapes([triangle]);
        // TODO: update expectedSVG
        const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="green"/>';
        shape.setColor('green');

        expect(shape.render()).toEqual(expectedSVG);
    });
    
    // TODO: Test circle class for a `render()` method that returns a string for the corresponding SVG file with the given shape color.
    test('should render the correct CIRCLE SVG with given color', () => {
        // Not sure if this is the right way to do it or not
        const shape = new Shapes([circle]);
        // TODO: update expectedSVG
        const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>';
        shape.setColor('blue');

        expect(shape.render()).toEqual(expectedSVG);
    });

    // TODO: Test square class for a `render()` method that returns a string for the corresponding SVG file with the given shape color.
    test('should render the correct SQUARE SVG with given color', () => {
        // Not sure if this is the right way to do it or not
        const shape = new Shapes([square]);
        // TODO: update expectedSVG
        const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="violet"/>';
        shape.setColor('violet');

        expect(shape.render()).toEqual(expectedSVG);
    });
});








