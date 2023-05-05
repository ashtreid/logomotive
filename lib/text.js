class Text {
    constructor(letters, textColor) {
      this.letters = letters;
      this.textColor = textColor;
    }

    render() {
        throw new Error("We're running out of steam here! Child class needs a render() method!");
    }
};
  
class TextSVG extends Text {
    constructor(letters, textColor) {
      super(letters, textColor);
    }

    render() {
        return `<text x='50%' y='50%' font-size='60' text-anchor='middle' alignment-baseline='middle' fill='${this.textColor}'>${this.letters}</text>`;
    }
};
  
module.exports = {
    Text,
    TextSVG
};


  