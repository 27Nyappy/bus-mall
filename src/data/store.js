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
            store.save('dress', dressesData)
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
        const arr = store.getDressArr();
        const item = store.getById(arr, id);

        if (item) {
            item.shown++;
        } else {
            const item = {
                id: id,
                shown: 1,
                clicks: 0
            };
            arr.push(item);
        }
        store.save('arr', arr);
    },

    getDress(id) {
        const dresses = store.getDresses();
        const dress = store.getById(dresses, id);

        return dress;
    },

    getById(dressesData, id) {
        for (let i = 0; i < dressesData.length; i++) {
            const dress = dressesData[i];

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