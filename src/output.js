function renderOutput(shows, dress) {

    const li = document.createElement('li');

    const label1 = document.createElement('label');
    label1.className = 'data';
    li.appendChild(label1);

    const p = document.createElement('p');
    p.textContent = 'Dress:';
    label1.appendChild(p);

    const img = document.createElement('img');
    img.className = 'image-clicks';
    img.src = dress.image;
    img.alt = dress.name + ' Image';
    label1.appendChild(img);

    const label2 = document.createElement('label');
    label2.className = 'data label1';
    label2.textContent = 'Shown: ';
    li.appendChild(label2);

    const span1 = document.createElement('span');
    span1.id = 'shown';
    span1.textContent = shows.shown;
    label2.appendChild(span1);

    const label3 = document.createElement('label');
    label3.className = 'data label2';
    label3.textContent = 'Clicked: ';
    li.appendChild(label3);

    const span2 = document.createElement('span');
    span2.id = 'clicks';
    span2.textContent = shows.clicks;
    label3.appendChild(span2);

    return li;
}

export default renderOutput;