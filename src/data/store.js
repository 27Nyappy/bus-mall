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

        if(!dresses) {
            store.get('dress', dresses);
            dresses = dressData;
        }
        return dresses;
    }
};

export default store;