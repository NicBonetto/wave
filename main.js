var $slide = document.querySelector('li')
$slide.classList.add('showing')

function carousel() {
  $currentSlide = document.querySelector('.showing')

  if ($currentSlide.nextElementSibling !== null) {
    $currentSlide.classList.remove('showing')
    $currentSlide.nextElementSibling.classList.add('showing')
  }
  else {
    $currentSlide.classList.remove('showing')
    $slide.classList.add('showing')
  }

}

var interval = setInterval(carousel, 4000)
