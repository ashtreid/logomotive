const { Triangle, Circle, Square } = require('./shapes');

// Creates an svg doc.
function createSVG(letters, textColor, shapeType, shapeColor) {
    const triangle = new Triangle(shapeType, shapeColor).render();
    const circle = new Circle(shapeType, shapeColor).render();
    const square = new Square(shapeType, shapeColor).render();

    const shape = shapeType === 'triangle' ? triangle : shapeType === 'circle' ? circle : shapeType === 'square' ? square : null; 

    return `
    <svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
       
        ${shape}

        <text x='50%' y='50%' font-size='60' text-anchor='middle' alignment-baseline='middle' fill='${textColor}'>${letters}</text>
    </svg>
    `;
}

module.exports = { createSVG };