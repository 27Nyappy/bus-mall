function renderDresses(item1, item2, item3) {
    const ul = document.createElement('ul');
    ul.id = 'set-of-three';

    const li1 = document.createElement('li');
    ul.appendChild(li1);

    const input1 = document.createElement('input');
    input1.name = 'dress';
    input1.type = 'radio';
    li1.appendChild(input1);

    const img1 = document.createElement('img');
    img1.className = 'image';
    img1.src = item1.image;
    li1.appendChild(img1);

    const li2 = document.createElement('li');
    ul.appendChild(li2);

    const input2 = document.createElement('input');
    input2.name = 'dress';
    input2.type = 'radio';
    li2.appendChild(input2);

    const img2 = document.createElement('img');
    img2.className = 'image';
    img2.src = item2.image;
    li2.appendChild(img2);

    const li3 = document.createElement('li');
    ul.appendChild(li3);

    const input3 = document.createElement('input');
    input3.name = 'dress';
    input3.type = 'radio';
    li3.appendChild(input3);

    const img3 = document.createElement('img');
    img3.className = 'image';
    img3.src = item3.image;
    li3.appendChild(img3);

    return ul;
}

export default renderDresses;