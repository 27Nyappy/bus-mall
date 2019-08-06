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

pageLoad();


function pageLoad() {
    window.onload = shuffle();
}

function shuffle() {

    if (turns <= 0) {
        statistics.classList.remove('hidden');
        dressChoices.classList.add('hidden');

        const list = store.get('clicks-list');

        for(let i = 0; i < list.length; i++) {
            const clickedDress = list[i];
            const dress = renderOutput(clickedDress);
            seen.appendChild(dress);
        }
        
    }

    if (newDress.list.length < 3) {
        newDress = new DressCombination(dresses);
    }

    for (let i = 0; i < 3; i++) {
        let product = newDress.getRandomDress();
        const dress = renderDresses(product);
        dressChoices.appendChild(dress);
        newDress.removeById(product.id);
    }


    for (let i = 0; i < radioInputs.length; i++) {
        radioInputs[i].addEventListener('click', (event) => {
            event.preventDefault();
            store.addToList(radioInputs[i].value, 'clicks-list');
            turns--;
            removeDresses();
            shuffle();
        });
        clickData(radioInputs);
        function clickData(radioInputs) {
            let shown = [];
            shown.push(radioInputs[i].value);
        }
    }

}

function removeDresses() {
    while (dressChoices.firstChild) {
        dressChoices.removeChild(dressChoices.firstChild);
    }
}