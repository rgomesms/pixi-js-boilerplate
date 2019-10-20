import * as PIXI from 'pixi.js';
import { Keyboard, setupControls } from "./keyboard";

const game = new PIXI.Application({
    //   width: 800,
    //   height: 800,
    //   backgroundColor: 0x9e9e9e,
    //   resolution: window.devicePixelRatio,
    //   autoDensity: true,
    //   legacy: true
});
document.body.appendChild(game.view);

let mainContainer = new PIXI.Container();
game.stage.addChild(mainContainer);

// Declare as variaveis aqui
let bunny;

function bunnySetup() {
    // This creates a texture from a 'bunny.png' image
    bunny = new PIXI.Sprite(PIXI.Texture.from("bunny"))

    // Setup the position of the bunny
    bunny.x = game.renderer.width / 2;
    bunny.y = game.renderer.height / 2;

    // Rotate around the center
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    // Add the bunny to the scene we are building
    game.stage.addChild(bunny);

}

function setup() {
    setupControls();
    bunnySetup();

    // Listen for frame updates
    game.ticker.add(play);
}

function update() {
    bunny.rotation += 0.01;
}

let fps = 60;
let now;
let then = Date.now();
let interval = 1000 / fps;
let delta;
function play() {
    now = Date.now();
    delta = now - then;
    if (delta > interval) {
        update();
        Keyboard.update();
    }
    then = now - (delta % interval);
}


const loader = new PIXI.Loader();
loader.add('bunny', './assets/bunny.png');
loader.load(setup);
