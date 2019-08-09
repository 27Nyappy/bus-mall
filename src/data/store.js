import dressesData from './dresses.js';

const store = {
    storage: window.localStorage,

    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },

    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },

    getDresses() {
        let dress = store.get('dress');

        if (!dress) {
            store.save('dress', dressesData);
            dress = dressesData;
        }
        return dress;
    },

    getDressArr() {
        let arr = store.get('arr');

        if (!arr) {
            arr = [];
        }
        return arr;
    },

    addToResultsList(id) {
        let dresses = store.getDresses();
        for (let i = 0; i < dresses.length; i++) {
            if (dresses[i].id === id) {
                dresses[i].shown++;
            }
        }
        store.save('dress', dresses);
    },

    addClicks(id) {
        let dresses = store.getDresses();
        for (let i = 0; i < dresses.length; i++) {
            if (dresses[i].id === id) {
                dresses[i].clicks++;
            }
        }
        store.save('dress', dresses);
    },
};

export default store;