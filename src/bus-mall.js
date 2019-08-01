import store from './data/store.js';
import dresses from './data/dresses.js';
import DressCombination from './dress-combination.js';
import { getRandom, findDress } from './util.js';
import renderOutput from './output.js';
import renderDresses from './dress-display.js';

const dressInput = document.querySelectorAll('.dressInput');
const radioInputs = document.querySelectorAll('input[name=dress');
const dressChoices = document.getElementById('img-div');
const statistics = document.getElementById('click-data');
const clickCount = document.getElementById('clicked');
const percentageDisplay = document.getElementById('percentage');

let turns = 0;
let count = 0;

const newDress = new DressCombination(dresses);


let arr = [];

for(let i = 0; i < 3; i++) {
    const product = newDress.getRandomDress();
    newDress.removeById(product.id);
    arr.push(product);
}
const dressRender = renderDresses(arr[0], arr[1], arr[2]);
dressChoices.appendChild(dressRender);