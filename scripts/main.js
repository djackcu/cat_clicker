// clear the screen for testing


var model = {
    current: null,
    cats: [{
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
    ]
};

var octopus = {
    init() {
        this.setCurrent(1);
        //adminCat.init();
        viewButtons.init();
        viewCats.init();
    },
    setCurrent(id) {
        model.current = id;
    },
    getCurrentCat() {
        return model.cats.find(cat => cat.id == model.current);
    },
    countClick() {
        this.getCurrentCat().count++;
        viewCats.render();
    },
    getAllName() {
        return model.cats.map((cat) => ({ id: cat.id, name: cat.name }));
    },
    setCurrentCat(name, src, count) {
        let currentCat = this.getCurrentCat();
        currentCat.name = name;
        currentCat.src = src;
        currentCat.click = count;
       /* viewCats.render();
        adminCat.render();*/
    }

};

var viewButtons = {
    init() {
        this.buttons = document.getElementById('buttons');
        this.adminBtn = document.getElementById('adminBtn');
        this.adminForm = document.getElementById('adminForm');
        this.adminBtn.addEventListener('click', function() {
            viewButtons.adminForm.classList.toggle('hidden');
        });
        this.changeBtn = document.getElementById('changeBtn');
        this.cancelBtn = document.getElementById('cancelBtn');
        this.adminCatName = document.getElementById('adminCatName');
        this.adminCatUrl = document.getElementById('adminCatUrl');
        this.adminCatClick = document.getElementById('adminCatClick');
       
        this.cancelBtn.addEventListener('click',function() {
            viewButtons.adminForm.classList.toggle('hidden');
        });
        this.render();
    },
    render() {

        octopus.getAllName().forEach(function(cat) {
            let button = document.createElement('div');
            button.id = cat.id;
            button.textContent = cat.name;
            button.addEventListener('click', (function(idCat) {
                return function() {
                    octopus.setCurrent(cat.id);
                    viewCats.render();
                    //adminCat.render();
                };
            })(cat.id));
            this.buttons.appendChild(button);
        });

        let cat = octopus.getCurrentCat();
        this.adminCatName.value = cat.name;
        this.adminCatClick.value = cat.count;
        this.adminCatUrl.value = cat.src;
        this.changeBtn.addEventListener('click', (function(catText, octopus) {
            octopus.setCurrentCat(catText.adminCatName.value, catText.adminCatUrl.value, catText.adminCatClick.value);
        })(this, octopus));
    }
};

var viewCats = {
    init() {
        this.catName = document.getElementById('catName');
        this.catCount = document.getElementById('catCount');
        this.catImg = document.getElementById('catImg');
        this.catImg.addEventListener('click', (function(octopus) {
            return function() {
                octopus.countClick();
            };
        })(octopus));
        this.render();
    },
    render() {
        let cat = octopus.getCurrentCat();
        this.catName.textContent = cat.name;
        this.catCount.textContent = cat.count;
        this.catImg.src = cat.src;

    }
};

octopus.init();