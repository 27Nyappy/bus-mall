import store from './data/store.js';
import dresses from './data/dresses.js';
import DressCombination from './dress-combination.js';
import { getRandom, findDress } from './util.js';
import renderOutput from './output.js';
import renderDresses from './dress-display.js';

const radioInputs = document.getElementsByClassName('dressy');
const dressChoices = document.getElementById('img-div');
const statistics = document.getElementById('click-data');
const clickCount = document.getElementById('clicked');
const percentageDisplay = document.getElementById('percentage');

let turns = 25;

const products = store.getDresses();
let newDress = new DressCombination(dresses);

pageLoad();


function pageLoad() {
    window.onload = shuffle();
}

function shuffle() {

    if (turns <= 0) {
        statistics.classList.remove('hidden');
        dressChoices.classList.add('hidden');
    }

    if(newDress.list.length === 0) {
        newDress = new DressCombination(dresses);
    }

    for (let i = 0; i < 3; i++) {
        const product = newDress.getRandomDress();
        const dress = renderDresses(product);
        product.views++;
        dressChoices.appendChild(dress);
        newDress.removeById(product.id);
    }

    for (let i = 0; i < radioInputs.length; i++) {
        radioInputs[i].addEventListener('click', (event) => {
            event.preventDefault();
            console.log(radioInputs[i].value);
            turns--;
            removeDresses();
            shuffle();
        })
    }

}

const arr = [];



function removeDresses() {
    while (dressChoices.firstChild) {
        dressChoices.removeChild(dressChoices.firstChild);
    }
}