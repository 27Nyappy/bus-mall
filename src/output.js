function renderOutput(clickId, dress) {
    const li = document.createElement('li');

    const label1 = document.createElement('label');
    label1.className = 'data';
    li.appendChild(label1);

    const p = document.createElement('p');
    p.textContent = 'Image:';
    label1.appendChild(p);

    const img = document.createElement('img');
    img.className = 'image-clicks';
    img.src = clickId.image;
    img.alt = dress.name + ' Image';
    label1.appendChild(img);

    const label2 = document.createElement('label');
    label2.className = 'data label1';
    label2.textContent = 'Clicked: ';
    li.appendChild(label2);

    const span1 = document.createElement('span');
    span1.className = 'clicked';
    span1.textContent = clickId.clicks;
    label2.appendChild(span1);

    const label3 = document.createElement('label');
    label3.className = 'data label2';
    label3.textContent = 'Percentage Clicked When Shown: ';
    li.appendChild(label3);

    const span2 = document.createElement('span');
    span2.className = 'percentage';
    span2.textContent = clickId.percentage;
    label3.appendChild(span2);

    return li;
}

export default renderOutput;