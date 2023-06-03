function togglemenu() {
	document.getElementsByClassName('navigation')[0].classList.toggle('responsive');
  }
  const now = new Date();
  const nowDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full"
  }).format(now);
  document.getElementById('header-date')
    .innerText = nowDate; 

function displayChange(){
  document.querySelector(".banner").style.display="block";
}
const clsBan = document.querySelector(".bannerbtn");
clsBan.addEventListener('click', () => {
  document.querySelector(".banner").style.display="none";
});

// Days Visit

const today = Date.now();

if (!localStorage.getItem("visitDate")) {
	localStorage.setItem("visitDate", today);
}

console.log(localStorage.getItem("visitDate"));

const toSet = parseInt(today) - parseInt(localStorage.getItem("visitDate"));

localStorage.setItem("visitDate", today);

const days = toSet*1.1574e-8

const lastVisit = document.getElementsByClassName("lastVisit")[0]
lastVisit.innerHTML = "Days Since Last Visit: " + days.toFixed(0) + " Days"
console.log(localStorage.getItem("visitDate"))
