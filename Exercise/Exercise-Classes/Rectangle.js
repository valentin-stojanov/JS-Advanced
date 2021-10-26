class Rectangle {
    constructor(width, height, color) {
        this.width = width
        this.height = height
        this.color = color
    }

    calcArea() {
        return this.width * this.height;
    }

    getcolor() {
        return this.color;
    }

    getwidth(){
        return this.width;
    }

    getheight(){
        return this.height;
    }
}

let rect = new Rectangle(4, 5, 'Red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
