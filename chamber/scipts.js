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

    
