const openPopUp = document.querySelector('#open_pop_up');
const closePopUp = document.querySelector('.pop_up_close');
const popUp = document.querySelector('.pop_up');

openPopUp.addEventListener('click', (e) => {
    e.preventDefault();
    popUp.classList.toggle('active')
})

closePopUp.addEventListener('click', (e) => {
    e.preventDefault();
    popUp.classList.toggle('active')
})
