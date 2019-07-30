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
})