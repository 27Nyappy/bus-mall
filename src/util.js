// based on the example from class that was modeled after the one found at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
export function getRandom(length) {
    return Math.floor(Math.random() * length);
}

export function outputCalc(clickId) {
    const percentCalc = Math.floor((clickId.clicks / clickId.views) * 100);
    const percent = `${percentCalc}%`;

    const calc = {
        depiction: clickId.image,
        views: clickId.views,
        clicks: clickId.clicks,
        percent: percent
    };

    return calc;
}