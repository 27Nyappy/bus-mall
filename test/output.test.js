import renderOutput from '../src/output.js';

const test = QUnit.test;

QUnit.module('render output');

test('render', assert => {
    const clickId = { id: 'casual-black-dress', image: 'assets/dress1.jpg', clicks: 0, percentage: 0 };
    const dress = { name: 'Casual Black Dress' };
    const expected = '<li><label class="data"><p>Image:</p><img class="image-clicks" src="assets/dress1.jpg" alt="Casual Black Dress Image"></label><label class="data label1">Clicked: <span class="clicked">0</span></label><label class="data label2">Percentage Clicked When Shown: <span class="percentage">0</span></label></li>';

    const dom = renderOutput(clickId, dress);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});
