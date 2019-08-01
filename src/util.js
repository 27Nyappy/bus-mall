// based on the example from class that was modeled after the one found at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
export function getRandom(length) {
    return Math.floor(Math.random() * length);
}

export function findDress(dress, id) {
    for(let i = 0; i < dress.length; i++) {
        const dress = dress[i];

        if(dress.id === id) {
            return dress;
        }
    }
}