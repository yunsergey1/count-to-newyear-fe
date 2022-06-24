// Определяем необходимые элементы на странице
const year = document.querySelector('#year');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const countdown = document.querySelector('#countdown');
const preloader = document.querySelector('#preloader');

// делаем расчеты

const currentYear = new Date().getFullYear(); // получаем текущий год
currentYear

const nextYear = new Date(`Jan 01 ${currentYear + 1} 00:00:00`); // получаем следующий год
nextYear


// Устанавливаем год на страницу
year.innerText = currentYear + 1;

updateCounter = () => {
    const currentTime = new Date(); // получаем текущую дату
    currentTime
    
    const differenceDate = nextYear - currentTime;
    differenceDate
    
    // переводим миллисекунды в дни
    const daysLeft = Math.floor(differenceDate / 1000 / 60 / 60 / 24);
    daysLeft
    
    // высчитываем остаток часов
    const hoursLeft = Math.floor(differenceDate / 1000 / 60 / 60) % 24;
    hoursLeft
    
    // высчитываем остаток минут
    const minutesLeft = Math.floor(differenceDate / 1000 / 60) % 60;
    minutesLeft
    
    // высчитываем остаток секунд
    const secondsLeft = Math.floor(differenceDate / 1000) % 60;
    secondsLeft
    
    console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft)
    
    // Выводим значения дней, часов, минут, секунд на страницу HTML
    days.innerText = daysLeft;
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

}

setInterval(updateCounter, 1000);

setTimeout(() => {
    preloader.remove();
    countdown.style.display = 'flex';
}, 2000);