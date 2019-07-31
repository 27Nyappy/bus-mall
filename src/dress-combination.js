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
}

export default dressCombination;