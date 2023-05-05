const { Triangle, Circle, Square } = require('./shapes');
const { TextSVG } = require('./text')

// Creates an svg doc.
function createSVG(letters, textColor, shapeType, shapeColor) {
    const triangle = new Triangle(shapeType, shapeColor).render();
    const circle = new Circle(shapeType, shapeColor).render();
    const square = new Square(shapeType, shapeColor).render();
    const text = new TextSVG(letters, textColor).render();

    const shape = shapeType === 'triangle' ? triangle : shapeType === 'circle' ? circle : shapeType === 'square' ? square : null; 
    return `
    <svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
        ${shape}
        ${text}
    </svg>
    `;
}

module.exports = { createSVG };
