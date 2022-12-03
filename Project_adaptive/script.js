
let btn = document.querySelector('.hidden-button'),
    block = document.querySelector('.intro');

btn.addEventListener('click', () => {
   if (block.classList.contains('hidden')) {
    show();
   } else {
    hidden ();
   }
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
