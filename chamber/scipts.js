function togglemenu() {
	document.getElementsByClassName('navigation')[0].classList.toggle('responsive');
  }
  const now = new Date();
  const nowDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full"
  }).format(now);
  document.getElementById('header-date')
    .innerText = nowDate; 

    
