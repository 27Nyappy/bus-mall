function renderDresses(item1, item2, item3, dresses) {
    const label1 = document.createElement('label');

    const input1 = document.createElement('input');
    input1.name = 'dress';
    input1.type = 'radio';
    label1.appendChild(input1);

    const img1 = document.createElement('img');
    img1.className = 'image';
    img1.src = item1.image;
    label1.appendChild(img1);

    const label2 = document.createElement('label');

    const input2 = document.createElement('input');
    input2.name = 'dress';
    input2.type = 'radio';
    label2.appendChild(input2);

    const img2 = document.createElement('img');
    img2.className = 'image';
    img2.src = item2.image;
    label2.appendChild(img2);

    const label3 = document.createElement('label');

    const input3 = document.createElement('input');
    input3.name = 'dress';
    input3.type = 'radio';
    label3.appendChild(input3);

    const img3 = document.createElement('img');
    img3.className = 'image';
    img3.src = item3.image;
    label3.appendChild(img3);

    return label1, label2, label3;
};

export default renderDresses;