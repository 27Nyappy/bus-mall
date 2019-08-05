import store from './data/store.js';
import dresses from './data/dresses.js';
import DressCombination from './dress-combination.js';
import { outputCalc } from './util.js';
import renderOutput from './output.js';
import renderDresses from './dress-display.js';

const radioInputs = document.getElementsByClassName('dressy');
const dressChoices = document.getElementById('img-div');
const statistics = document.getElementById('click-data');
const seen = document.getElementById('seen');
const clickCount = document.getElementById('clicked');
const percentageDisplay = document.getElementById('percentage');

let turns = 25;

const products = store.getDresses();
let newDress = new DressCombination(dresses);
let shownDresses = {};
let chosenDresses = {};

pageLoad();


function pageLoad() {
    window.onload = shuffle();
}

function shuffle() {

    if (turns <= 0) {
        statistics.classList.remove('hidden');
        dressChoices.classList.add('hidden');

        renderDressSelections(chosenDresses, shownDresses, )
    }

    if(newDress.list.length < 3) {
        newDress = new DressCombination(dresses);
    }

    for (let i = 0; i < 3; i++) {
        let product = newDress.getRandomDress();
        const dress = renderDresses(product);
        count(shownDresses, dress.id);
        dressChoices.appendChild(dress);
        newDress.removeById(product.id);
    }

    for (let i = 0; i < radioInputs.length; i++) {
        radioInputs[i].addEventListener('click', (event) => {
            event.preventDefault();
            console.log(radioInputs[i].value);
            turns--;
            count(chosenDresses, radioInputs[i].value);
            removeDresses();
            shuffle();
        })
    }

}

function count(products, id) {
    if(products[id]) {
        products[id] += 1;
    } else {
        products[id] = 1;
    }
}

function removeDresses() {
    while (dressChoices.firstChild) {
        dressChoices.removeChild(dressChoices.firstChild);
    }
}