import store from '../src/data/store.js';

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