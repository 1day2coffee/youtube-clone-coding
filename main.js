const moreButton = document.querySelector('.info .metadata .titleAndButton .moreButton');
const title = document.querySelector('.info .metadata .title');

moreButton.addEventListener('click', () => {
    moreButton.classList.toggle('clicked');
    title.classList.toggle('clamp');
})