import renderOutput from '../src/output.js';
import renderDresses from '../src/dress-display.js';

const test = QUnit.test;

QUnit.module('render output');

test('render output', (assert) => {
    const clickId = { id: 'casual-black-dress', image: 'assets/dress1.jpg', clicks: 0, percentage: 0 };
    const dress = { name: 'Casual Black Dress' };
    const expected = '<li><label class="data"><p>Image:</p><img class="image-clicks" src="assets/dress1.jpg" alt="Casual Black Dress Image"></label><label class="data label1">Clicked: <span class="clicked">0</span></label><label class="data label2">Percentage Clicked When Shown: <span class="percentage">0</span></label></li>';

    const dom = renderOutput(clickId, dress);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});

test('render three dresses', (assert) => {
    const item1 = {
        id: 'casual-black-dress',
        image: 'assets/dress1.jpg',
    };
    const item2 = {
        id: 'casual-black-red-dress',
        image: 'assets/dress2.jpg',
    };
    const item3 = {
        id: 'colorful-dress',
        image: 'assets/dress3.jpg'
    };
    const dresses = [
        {
            name: 'Casual Black Dress'
        },
        {
            name: 'Casual Black and Red Dress'
        },
        {
            name: 'Colorful Party Dress'
        }
    ];

    const expected = '<label><input name="dress" type="radio"></input><img class="image" src="assets/dress1.jpg"></label><label><input name="dress" type="radio"></input><img class="image" src="assets/dress2.jpg"></label><label><input name="dress" type="radio"></input><img class="image" src="assets/dress3.jpg"></label>';

    const dom = renderDresses(item1, item2, item3, dresses);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});
