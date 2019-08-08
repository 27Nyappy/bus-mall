import { getRandom } from './util.js';

class dressCombination {
    constructor(dresses) {
        this.list = dresses.slice();
    }

    getRandomDress() {
        const index = getRandom(this.list.length);
        const dress = this.list[index];
        return dress;
    }

    removeById(dressId) {
        const list = this.list;
        for (let i = 0; i < list.length; i++) {
            const dress = list[i];
            if (dress.id === dressId) {
                list.splice(i, 1);
                return;
            }
        }
    }

    hasDresses() {
        return this.list.length > 0;
    }

}

export default dressCombination;