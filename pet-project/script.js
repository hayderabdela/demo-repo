const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");
const linksContainer = document.querySelector(".links");

// Handle resizing of the window
window.onresize = function() {
  if (window.innerWidth > 992) {
    dropDownMenu.classList.remove("open");
    toggleBtnIcon.classList = 'fa-solid fa-bars';
  } else {
    dropDownMenu.classList.remove("open"); // Hide the menu on smaller screens
    toggleBtnIcon.classList = 'fa-solid fa-bars';
  }
};

// Initially hide the dropdown menu
dropDownMenu.classList.remove("open");

// Function to toggle the dropdown menu
function toggleDropdownMenu() {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars';
}

// Click event handler for the bar icon
toggleBtn.onclick = function() {
  toggleDropdownMenu();
};


// Close the dropdown menu when clicking outside of it
document.addEventListener('click', function(event) {
  if (!dropDownMenu.contains(event.target) && !toggleBtn.contains(event.target)) {
    dropDownMenu.classList.remove('open');
    toggleBtnIcon.classList = 'fa-solid fa-bars';
  }
});


  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }


  const scrollUpButton = document.querySelector('.scroll.top');
  const scrollDownButton = document.querySelector('.scroll.bottom');
  const maxScrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
  
  scrollUpButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
  
  scrollDownButton.addEventListener('click', () => {
    if (window.scrollY < maxScrollHeight - window.innerHeight) {
      window.scrollTo({
        top: maxScrollHeight,
        behavior: 'smooth',
      });
    }
  });
  
  window.addEventListener('scroll', () => {
    if (window.scrollY >= maxScrollHeight - window.innerHeight) {
      scrollDownButton.style.display = 'none';
      scrollUpButton.style.display = 'block';
    } else if (window.scrollY === 0) {
      scrollUpButton.style.display = 'none';
      scrollDownButton.style.display = 'block';
    } else {
      scrollDownButton.style.display = 'block';
      scrollUpButton.style.display = 'block';
    }
    
    // New condition to hide scroll-down button at the bottom
    if (window.scrollY >= maxScrollHeight - window.innerHeight) {
      scrollDownButton.style.display = 'none';
    }
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

