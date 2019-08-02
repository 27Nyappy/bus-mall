import store from './data/store.js';
import dresses from './data/dresses.js';
import DressCombination from './dress-combination.js';
import { getRandom, findDress } from './util.js';
import renderOutput from './output.js';
import renderDresses from './dress-display.js';

const dressInputs = document.querySelectorAll('.dressInput');
const radioInputs = document.getElementsByClassName('dressy');
const dressChoices = document.getElementById('img-div');
const statistics = document.getElementById('click-data');
const clickCount = document.getElementById('clicked');
const percentageDisplay = document.getElementById('percentage');

let turns = 25;
let count = 0;

const products = store.getDresses();
const newDress = new DressCombination(dresses);

showDresses();

function showDresses() {
    let tinyDressSet = newDress;
    
    for(let i = 0; i < 3; i++) {
        const product = tinyDressSet.getRandomDress();
        tinyDressSet.removeById(product.id);
        const dress = renderDresses(product);
        dressChoices.appendChild(dress);
    }
    
    for(let i = 0; i < radioInputs.length; i++) {
        radioInputs[i].addEventListener('click', () => {
            turns--;
        })
    }
}