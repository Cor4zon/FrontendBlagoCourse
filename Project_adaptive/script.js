
let btn = document.querySelector('.hidden-button'),
    block = document.querySelector('.intro'),
    burger = document.querySelector('.burger'),
    nav = document.querySelector('.nav'),
    closeButton = document.querySelector('.close');

btn.addEventListener('click', () => {
   if (block.classList.contains('hidden')) {
    show();
   } else {
    hidden ();
   }
});

burger.addEventListener('click', () => {
     showSide();
 });

 closeButton.addEventListener('click', () => {
     hiddenSide();
 });

function show () {
    block.classList.remove('hidden', 'hiddens');
    block.classList.add('show');
    btn.classList.add('reverse');
}

function hidden () {
    block.classList.remove('show');
    block.classList.add('hiddens');
    btn.classList.remove('reverse');
    setTimeout(() => {
        block.classList.add('hidden');
    }, 1000);
}

function showSide () {
    nav.classList.remove('nav-hidden');
    nav.classList.add('nav-mobile-show');
    btn.classList.remove('hidden-button');
    btn.classList.add('cover-background');
}

function hiddenSide () {
    nav.classList.remove('nav-mobile-show');
    nav.classList.add('nav-hidden');
    btn.classList.remove('cover-background');
    btn.classList.add('hidden-button');
}