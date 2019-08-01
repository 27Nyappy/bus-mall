function renderDresses(item1, item2, item3) {
    const ul = document.createElement('ul');
    ul.id = 'set-of-three';

    const li1 = document.createElement('li');
    li1.className = 'dress-input';
    ul.appendChild(li1);

    const label1 = document.createElement('label');
    li1.appendChild(label1);

    const input1 = document.createElement('input');
    input1.name = 'dress';
    input1.type = 'radio';
    input1.value = item1.id;
    label1.appendChild(input1);

    const img1 = document.createElement('img');
    img1.className = 'image';
    img1.src = item1.image;
    label1.appendChild(img1);

    const li2 = document.createElement('li');
    li2.className = 'dress-input';
    ul.appendChild(li2);

    const label2 = document.createElement('label');
    li2.appendChild(label2);

    const input2 = document.createElement('input');
    input2.name = 'dress';
    input2.type = 'radio';
    input2.value = item2.id;
    label2.appendChild(input2);

    const img2 = document.createElement('img');
    img2.className = 'image';
    img2.src = item2.image;
    label2.appendChild(img2);

    const li3 = document.createElement('li');
    li3.className = 'dress-input';
    ul.appendChild(li3);

    const label3 = document.createElement('label');
    li3.appendChild(label3);

    const input3 = document.createElement('input');
    input3.name = 'dress';
    input3.type = 'radio';
    input3.value = item3.id;
    label3.appendChild(input3);

    const img3 = document.createElement('img');
    img3.className = 'image';
    img3.src = item3.image;
    label3.appendChild(img3);

    return ul;
}

export default renderDresses;