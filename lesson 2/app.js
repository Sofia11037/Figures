class Box {
    constructor(width, color, typeOfFigure) {
        this.width = width + 'px';
        this.color = color;
        this.typeOfFigure = typeOfFigure;

        this.container = document.createElement('div');
        this.container.classList.add('container');
        document.body.appendChild(this.container);
    }

    renderBox() {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.height = this.width;
        box.style.width = this.width;
        box.style.backgroundColor = this.color;
        box.style.marginBottom = 20 + 'px';
        if (this.typeOfFigure == 'circle') {
            box.style.borderRadius = '50%';
        } else if (this.typeOfFigureypeOfFigure == 'square') {
            this.width == this.height;
        }
        this.container.appendChild(box);
    }
}

const form = document.querySelector('.form');
const infoBox = document.querySelector('.info-box');


form.addEventListener('submit', event => {
    event.preventDefault();
    const arrBox = infoBox.value.split(' ');
    if (arrBox.length == 3) {
        const box1 = new Box(arrBox[0], arrBox[1], arrBox[2]);
        box1.renderBox();
    }
    infoBox.value = '';
})