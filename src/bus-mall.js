import store from './data/store.js';
import dresses from './data/dresses.js';
import DressCombination from './dress-combination.js';
import { getRandom, findDress } from './util.js';
import renderOutput from './output.js';
import renderDresses from './dress-display.js';

const dressInputs = document.querySelectorAll('.dressInput');

const dressChoices = document.getElementById('img-div');
const statistics = document.getElementById('click-data');
const clickCount = document.getElementById('clicked');
const percentageDisplay = document.getElementById('percentage');

let turns = 25;
let count = 0;

const products = store.getDresses();

pageLoad();


function pageLoad() {
    window.onload = shuffle();
}

// function showDresses() {
//     const radioInputs = document.getElementsByClassName('dressy');
//     console.log(radioInputs);
//     for (let i = 0; i < radioInputs.length; i++) {
//         radioInputs[i].addEventListener('click', () => {
//             console.log('event listener');
//             turns--;
//             removeDresses();
//             shuffle();
            
//         })
//     }
// }  

function shuffle () {
    const newDress = new DressCombination(dresses);
    
        for (let i = 0; i < 3; i++) {
           
            const product = newDress.getRandomDress();
            const dress = renderDresses(product);
            dressChoices.appendChild(dress);
            newDress.removeById(product.id);
        }
        const radioInputs = document.getElementsByClassName('dressy');
    console.log(radioInputs);
    for (let i = 0; i < radioInputs.length; i++) {
        radioInputs[i].addEventListener('click', () => {
            console.log('event listener');
            turns--;
            removeDresses();
            shuffle();
            
        })
    }
    }

function removeDresses() {
    while(dressChoices.firstChild) {
    dressChoices.removeChild(dressChoices.firstChild);
    }
}