function renderDresses(item) {
    const li = document.createElement('li');
    li.className = 'dress-input';

    const label = document.createElement('label');
    li.appendChild(label);

    const input = document.createElement('input');
    input.name = 'dress';
    input.type = 'radio';
    input.className = 'dressy'
    input.value = item.id;
    label.appendChild(input);

    const img = document.createElement('img');
    img.className = 'image';
    img.src = item.image;
    label.appendChild(img);

    return li;
}

export default renderDresses;