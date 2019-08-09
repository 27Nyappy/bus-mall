import renderOutput from '../src/output.js';
import renderDresses from '../src/dress-display.js';

const test = QUnit.test;

QUnit.module('render output');

test('render output', (assert) => {
    const clickId = { id: 'casual-black-dress', image: 'assets/dress1.jpg', shown: 0, clicks: 0 };
    const dress = { name: 'Casual Black Dress', image: 'assets/dress1.jpg' };
    const expected = '<li><label class="data"><p>Image:</p><img class="image-clicks" src="assets/dress1.jpg" alt="Casual Black Dress Image"></label><label class="data label1">Shown: <span id="shown">0</span></label><label class="data label2">Clicked: <span id="clicks">0</span></label></li>';

    const dom = renderOutput(clickId, dress);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});

test('render three dresses', (assert) => {
    const item = {
        id: 'casual-black-dress',
        image: 'assets/dress1.jpg',
    };

    const expected = '<li class="dress-input"><label><input name="dress" type="radio" class="dressy" value="casual-black-dress"><img class="image" src="assets/dress1.jpg"></label></li>';

    const dom = renderDresses(item);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});
