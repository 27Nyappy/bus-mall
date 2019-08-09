import store from './data/store.js';
import dresses from './data/dresses.js';
import DressCombination from './dress-combination.js';
import renderOutput from './output.js';
import renderDresses from './dress-display.js';

const radioInputs = document.getElementsByClassName('dressy');
const dressChoices = document.getElementById('img-div');
const statistics = document.getElementById('click-data');
const seen = document.getElementById('seen');

let turns = 25;

let newDress = new DressCombination(dresses);

pageLoad();

function pageLoad() {
    window.onload = shuffle();
}

function shuffle() {

    if(turns <= 0) {
        renderClicks();
    }

    if(newDress.list.length < 3) {
        newDress = new DressCombination(dresses);
    }

    for(let i = 0; i < 3; i++) {
        let product = newDress.getRandomDress();
        const dress = renderDresses(product);
        store.addToResultsList(product.id);
        dressChoices.appendChild(dress);
        newDress.removeById(product.id);
    }

    for(let i = 0; i < radioInputs.length; i++) {
        radioInputs[i].addEventListener('click', () => {
            turns--;
            store.addClicks(radioInputs[i].value);
            removeDresses();
            shuffle();
        });
    }
}

function removeDresses() {
    while(dressChoices.firstChild) {
        dressChoices.removeChild(dressChoices.firstChild);
    }
}

function renderClicks() {
    statistics.classList.remove('hidden');
    dressChoices.classList.add('none');
    const vestido = store.getDresses();

    for(let i = 0; i < vestido.length; i++) {
        const item = vestido[i];
        const dom = renderOutput(item, item);
        seen.appendChild(dom);
    };
}