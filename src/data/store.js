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
    },

    createClickList(key) {
        let list = store.get(key);
        if(!list) {
            list = [];
        }
        return list;
    },

    addToList(clickValue, key) {
        const list = store.createClickList(key);
        let chosenDress = store.getDresses(list, clickValue);

        if(chosenDress) {
            chosenDress.quantity++;
        } else {
            chosenDress = {
                id: clickValue,
                quantity: 1
            };
            list.push(chosenDress);
        }
        store.save(key, list);
    },

    seen(key) {
        let list = store.get(key);

        if(list) {
            list = {};
        }
        return list;
    },

    addToSeen(array, key) {
        const seenList = store.seen(key);
    
        for(let i = 0; i < array.length; i++) {
            let seenDress = array[i];

            if(seenList[seenDress.id] === 'undefined') {
                seenList[seenDress.id] = 1;
                seenList[seenDress.id]++;
            } else {
                seenList[seenDress.id]++;
            }
        }
        store.save(key, seenList);
    },
    addToLastSeen(input1, input2, input3) {
        store.save('last-shown', [{ id:input1, quantity: 1 }, { id: input2, quantity: 1 }, { id: input3, quantity: 1 }]);
    }
};

export default store;