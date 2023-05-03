const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const { join } = require('path');
const { createSVG } = require('./svg-doc');

class Queries {
    constructor() {
        this.letters = '';
        this.textColor = '';
        this.shapeType = '';
        this.shapeColor = '';
    }

    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'letters',
                    message: 'Please enter only 3 letters for your logo.',
                    validate: input => {
                        const boundary = /^[a-zA-Z]{3}$/;
                        return boundary.test(input) ? true : 'Please enter only 3 letters.';
                    }
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Please enter a color for your text. This can be a CSS color keyword or a hexidecimal number.',
                    validate: value => {
                        const colorBoundary = /^([a-z]+)$/i;
                        const hexBoundary = /^#?([0-9A-F]{3}){1,2}$/i;
                        return colorBoundary.test(value) || hexBoundary.test(value) ? true : 'Please enter a valid CSS color keyword or hexidecimal number.';
                    }
                },
                {
                    type: 'list',
                    name: 'shapeType',
                    message: 'Please choose one of the following shapes:',
                    choices: ['triangle', 'circle', 'square']
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Please enter a color for your shape. This can be a CSS color keyword or a hexidecimal number.',
                    validate: value => {
                        const shapeColorBoundary = /^([a-z]+)$/i; 
                        const shapeHexBoundary = /^#?([0-9A-F]{3}){1,2}$/i;
                        return shapeColorBoundary.test(value) || shapeHexBoundary.test(value) ? true : 'Please enter a valid CSS color keyword or hexidecimal number.';
                    }
                }
            ])
            .then(({letters, textColor, shapeType, shapeColor}) => {
                console.log("queries | letters:", this.letters);
                console.log("queries | textColor:", this.textColor);
                console.log("queries | shapeType:", this.shapeType);
                console.log("queries | shapeColor:", this.shapeColor);
                return writeFile(
                    join(__dirname, '..', 'output', 'logo.svg'),
                    createSVG(letters, textColor, shapeType, shapeColor)
                );
            })
            .then(() => console.log('Logomotive has generated logo.svg! Choo! Choo!'))
            .catch((err) => {
                console.log(err);
                console.log('Logomotive has been derailed.');
            });
    }
}

module.exports = Queries;
