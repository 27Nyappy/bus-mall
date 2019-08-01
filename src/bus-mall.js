import store from './data/store.js';
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

