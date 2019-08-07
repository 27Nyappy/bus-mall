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
        const dataList = store.getDresses()
        const item = store.getById(dataList, id);

        if (item) {
            item.shown++;
        } else {
            const item = {
                id: id,
                shown: 1,
                clicks: 0
            };
            dataList.push(item);
        }
        store.save('dress', dataList);
    },

    getDress(id) {
        const dresses = store.getDresses();
        const dress = getById(dresses, id);
    },

    getById(dresses, id) {
        for (let i = 0; i < dresses.length; i++) {
            const product = dresses[i];

            if (product.id === id) {
                return product;
            }
        }
    },

    incrementSelectedCount(dataList, id) {
        let item = store.getById(dataList, id);
        console.log(dataList)
        item.clicks++;
    }
};

export default store;