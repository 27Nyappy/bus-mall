import dressData  from '../src/data/dresses.js';
import DressCombination from '../src/dress-combination.js';

const test = QUnit.test;

QUnit.module('dress combination');

test('copies main list', assert => {
    const dressCombination = new DressCombination(dressData);

    assert.notEqual(dressCombination.list, dressData);
    assert.deepEqual(dressCombination.list, dressData);
});

test('get random dress', (assert) => {
    const dressCombination = new DressCombination(dressData);

    const dress = dressCombination.getRandomDress();

    assert.ok(dressData.includes(dress));
});

test('remove dress from the list', (assert) => {
    const dressCombination = new DressCombination(dressData);
    const removeDress = dressData[0];

    dressCombination.removeById(removeDress.id);

    assert.notOk(dressCombination.list.includes(removeDress));
});