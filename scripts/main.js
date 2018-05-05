// clear the screen for testing
document.body.innerHTML = '';

var model = [{
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

var octopus ={
	init(){
		viewButtons.init();
		viewCats.init();

	},
	getCurrentCat(id){
		return model.find(cat=>cat.id==id);
	},
	countClick(id){
		model[model.indexOf(this.getCurrentCat(id))].count++;
	},
	getAllName(){
		return model.map((cat)=>({id:cat.id,name:cat.name}));
	}
};

var viewButtons = {
	init(){
		this.buttons = document.getElementById('#buttons');
		
	},
	render(){
		octopus.getAllName().forEach(function(cats) {
			
		});
	}
};

var viewCats = {
	init(){
		th
	},
	render(){

	}
};

// Let's loop over the numbers in our array
for (let cat of model) {
    let showing = `<ul><li>Name: ${cat.name}</li>
        <li><img class="cat" src="${cat.src}"></li>
        <li>Click</li>
        <li id="${cat.id}">${cat.count}</li>
      </ul>`;

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.innerHTML = showing;

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