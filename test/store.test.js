import store from '../src/data/store.js';
import dressData from '../src/data/dresses.js';

const test = QUnit.test;

QUnit.module('Data Store');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});

test('get and save', (assert) => {
    const key = 'dress';
    const dress = { name: 'black dress' };

    store.save(key, dress);
    const got = store.get(key);

    assert.deepEqual(got, dress);
});

test('gets products with bootstrapped default', (assert) => {
    const dresses = store.getDresses();

    assert.deepEqual(dresses, dressData);
});

test('gets dress array', assert => {
    const arr = store.getDressArr();

    assert.deepEqual(arr, []);
});

test('adds dress to result list', assert => {
    const id = 'casual-black-dress';
    const expected = [{
        id: 'casual-black-dress',
        shown: 1,
    }];

    store.addToResultsList(id);
    const arr = store.getDressArr();

    assert.deepEqual(arr, expected);
});

test('adds dress to result list', assert => {
    const id = 'casual-black-dress';
    const expected = [{
        id: 'casual-black-dress',
        shown: 2,
    }];

    store.addToResultsList(id);
    store.addToResultsList(id);
    const arr = store.getDressArr();

    assert.deepEqual(arr, expected);
})

test('get dress', assert => {
    const id = 'casual-black-dress';
    const expected = dressData[0];

    const dress = store.getDress(id);

    assert.deepEqual(dress, expected);
});

test('get by id', assert => {
    const id = 'casual-black-dress';

    const expected = {
        id: 'casual-black-dress',
        name: 'Casual Black Dress',
        image: 'assets/dress1.jpg',
        shown: 0,
        clicks: 0
    };

    const gotDress = store.getById(dressData, id);

    assert.deepEqual(gotDress, expected);
});

test('adds dress to result list', assert => {
    const id = 'casual-black-dress';
    const expected = [{
        id: 'casual-black-dress',
        shown: 1,
        clicks: 1,
    }];

    store.addClicks(id);
    const arr = store.getDressArr();

    assert.deepEqual(arr, expected);
});