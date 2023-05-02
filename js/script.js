window.addEventListener('scroll', function() {
    const header = document.getElementById('Header');
    const nav = document.getElementById('Nav');
    const rolar = window.pageYOffset || document.documentElement.scrollTop;
  
    if (rolar > 0) {
      header.classList.add('fixed');
      nav.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
      nav.classList.remove('fixed');
    }
  });
  
  const carousel = document.querySelector('.carousel');
  const slides = carousel.querySelectorAll('.slide');
  const pontos = document.querySelectorAll('#pontos button');
  
  let currentSlide = 0;
  
  function showSlide(index) {
    slides.forEach((slide) => {
      slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
  }
  
  function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  
  function showPrevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }
  
  function showSlideByIndex(index) {
    currentSlide = index;
    showSlide(currentSlide);
  }
  
  function setActiveButton(index) {
    const activeButton = document.querySelector('#pontos button.active');
    if (activeButton) {
      activeButton.classList.remove('active');
    }
    pontos[index].classList.add('active');
  }
  
  pontos.forEach((button, index) => {
    button.addEventListener('click', () => {
      showSlideByIndex(index);
      setActiveButton(index);
    });
  });
  
  carousel.addEventListener('slide.bs.carousel', (event) => {
    if (event.to === 0) {
      setActiveButton(0);
    } else if (event.to === 1) {
      setActiveButton(1);
    } else if (event.to === 2) {
      setActiveButton(2);
    }
  });
  
  showSlide(currentSlide);
  setActiveButton(currentSlide);
  