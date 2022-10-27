// Menù a scomparsa
var hiddeBtn = document.getElementById('hidden-list');
var menuBotton = document.getElementById('menu-btn');

menuBtn = () => {
    menuBotton.classList.toggle('menu-botton')
    hiddeBtn.classList.toggle('hidden-list')
}

//hover lista menu
let navMenuLista = document.querySelectorAll('.navMenu');

for (i = 0; i < navMenuLista.length; i++) {
    navMenuLista[i].addEventListener('mouseover', function () {
        this.classList.add('onNavMenu');
    });
    navMenuLista[i].addEventListener('mouseout', function () {
        this.classList.remove('onNavMenu');
    });
};


/* Altro modo
let click = false;
menuBtn = () => {
    if (!click) {
        hiddeBtn.classList.add('hidden-list');
        click = true;
    } else {
        hiddeBtn.classList.remove('hidden-list');
        click = false;
    }
}*/

// MAIN (bottoni)//

var title = document.getElementById('title');
bigger = () => {
    title.classList.add('bigger-btn');
};
color = () => {
    title.classList.add('color-btn');
};
upper = () => {
    title.classList.add('upper-btn');
};
hide = () => {
    title.classList.add('hidden-btn');
    title.classList.remove('show-btn');
};
show = () => {
    title.classList.add('show-btn');
    title.classList.remove('hidden-btn');
};

//Lista//
let listItems = document.querySelectorAll('.list-items');

for (i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('mouseover', function () {
        this.classList.add('overText');
    });
    listItems[i].addEventListener('mouseout', function () {
        this.classList.remove('overText');
    });
    listItems[i].addEventListener('click', function () {
        this.classList.add('line');
    });
    listItems[i].addEventListener('dblclick', function () {
        this.classList.remove('line');
    });
};

