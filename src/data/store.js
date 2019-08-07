import dressData from './dresses.js';

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
        let dresses = store.get('dress');

        if (!dresses) {
            store.save('dress', dressData)
            dresses = dressData
        }
        return dresses;
    },

    getDressArr() {
        let arr = store.get('arr');

        if (!arr) {
            arr = [];
        }
        return arr;
    },

    addToResultsList(id) {
        let arr = store.getDressArr();
        let item = store.getById(arr, id);

        if (item) {
            item.shown++;
        } else {
            item = {
                id: id,
                shown: 1,
                clicks: 0
            };
            arr.push(item);
        }
        store.save('dress', arr);
    },

    getDress(id) {
        const dresses = store.getDresses();
        const dress = getById(dresses, id);

        return dress;
    },

    getById(dresses, id) {
        for (let i = 0; i < dresses.length; i++) {
            const dress = dresses[i];

            if (dress.id === id) {
                return dress;
            }
        }
    },

    incrementSelectedCount(id) {
        let dress = store.getDress(id);
        dress.clicks++;
    }
};

export default store;