
const currentDate = new Date();

const day = currentDate.getDate();
const month = currentDate.getMonth();  
const year = currentDate.getFullYear();


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


const formattedDate = `${days[currentDate.getDay()]}, ${day} ${months[month]} ${year}`;


const dateElements = document.querySelectorAll("#current-date");
dateElements.forEach(function(element) {
  element.textContent = formattedDate;
});
