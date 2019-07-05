import "./styles/main.scss";

const addEventBtn = document.querySelector('.js-add-event-global');
const eventSearch = document.querySelector('.js-event-search');

  addEventBtn.addEventListener('click', function () {
    this.parentElement.classList.add('is-tooltip');
    this.classList.toggle('is-press');
  });

  eventSearch.addEventListener('focus', function () {
    this.parentElement.classList.add('is-tooltip');
  });