const Keyboard = require('pixi.js-keyboard');
const Mouse = require('pixi.js-mouse');

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

function setupControls() {

    Keyboard.events.on('pressed', null, (keyCode, event) => {
        console.log("O teclado esta funcionando");
    });
}


export {
    Keyboard,
    Mouse,
    setupControls
}