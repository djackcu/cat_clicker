// clear the screen for testing
document.body.innerHTML = '';

var cats = [{
        id: 1,
        name: 'Iumi',
        src: 'images/cat1.jpg',
        count: 0
    },
    {
        id: 2,
        name: 'Sasha',
        src: 'images/cat2.jpg',
        count: 0
    }, {
        id: 3,
        name: 'Kiko',
        src: 'images/cat3.jpg',
        count: 0
    },
    {
        id: 4,
        name: 'Kikas',
        src: 'images/cat4.jpg',
        count: 0
    }, {
        id: 5,
        name: 'Sombra',
        src: 'images/cat5.jpg',
        count: 0
    }
];

// Let's loop over the numbers in our array
for (let cat of cats) {
    let view = `<ul><li>Name: ${cat.name}</li>
        <li><img class="cat" src="${cat.src}"></li>
        <li>Click</li>
        <li id="${cat.id}">${cat.count}</li>
      </ul>`;

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.innerHTML = view;

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', (function(count,idCat) {
        return function() {
            count++;
            let id = idCat.toString();
            let countCat = document.getElementById(id);
            countCat.textContent = count;
        };
    })(cat.count, cat.id));

    document.body.appendChild(elem);
};