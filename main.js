/* eslint-disable no-unused-vars */

var songs = [
  {
    image: 'http://dis.resized.images.s3.amazonaws.com/540x540/98143.jpeg',
    artist: 'Ben Howard',
    title: 'I Forget Where We Were'
  },
  {
    image: 'https://images.genius.com/36fae5ad5057f8577a1a90f74a791a78.1000x1000x1.jpg',
    artist: 'Red Hot Chili Peppers',
    title: 'Snow (Hey Oh)'
  },
  {
    image: 'https://images.genius.com/cccae0354ab755c0a6e7949295bbe8bb.1000x1000x1.jpg',
    artist: 'Calvin Harris',
    title: 'Slide'
  },
  {
    image: 'http://d3mfoxizwrqdu.cloudfront.net/Artists/D/dean_lewis/dean_lewis_same_kind_of_different_0517.jpg',
    artist: 'Dean Lewis',
    title: 'Waves'
  },
  {
    image: 'http://static.spin.com/files/2016/09/francis-and-the-lights-farewell-starlight-stream-1474739400-640x639.png',
    artist: 'Francis and the Lights',
    title: 'May I Have This Dance'
  },
  {
    image: 'https://images.genius.com/2345cd474b18d751c83b414ca00b3f19.748x743x1.jpg',
    artist: 'Louis the Child',
    title: 'Love is Alive'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/en/4/4d/The_life_of_pablo_alternate.jpg',
    artist: 'Kanye West',
    title: 'FML'
  },
  {
    image: 'https://images-na.ssl-images-amazon.com/images/I/619%2BLn6ljcL._SS500.jpg',
    artist: 'Led Zeppelin',
    title: 'Over the Hills and Far Away'
  },
  {
    image: 'https://images.genius.com/84d4d7fa0f6d8474c61513fd88ec347a.1000x1000x1.jpg',
    artist: 'Mating Ritual',
    title: 'Game'
  },
  {
    image: 'https://pbs.twimg.com/media/C3h7e43VUAAxzQV.jpg',
    artist: 'Khalid',
    title: 'Location'
  },
  {
    image: 'https://images.genius.com/06d1aa0f3f55029815eeb515d5639fc9.1000x1000x1.jpg',
    artist: 'Lana Del Rey',
    title: 'Love'
  },
  {
    image: 'https://images.genius.com/be5fe24a47ad0c465004d529d74eb7d6.807x807x1.jpg',
    artist: 'The Japanese House',
    title: 'Face Like Thunder'
  }
]

var playlist = []

function createList() {
  var $ul = document.querySelector('ul')

  for (var i = 0; i < songs.length; i++) {
    var $newLi = document.createElement('li')
    $newLi.classList.add('slide')
    var $img = document.createElement('img')
    $img.classList.add('img-responsive')
    var $artist = document.createElement('div')
    $artist.classList.add('artist')
    $artist.classList.add('text-center')
    var $title = document.createElement('div')
    $title.classList.add('title')
    $title.classList.add('text-center')

    $img.src = songs[i].image
    $newLi.appendChild($img)

    $artist.textContent = songs[i].artist
    $newLi.appendChild($artist)

    $title.textContent = songs[i].title
    $newLi.appendChild($title)

    $ul.appendChild($newLi)
  }
}

createList()

var $slide = document.querySelector('li')
$slide.classList.add('showing')

function carousel() {
  var $currentSlide = document.querySelector('.showing')

  if ($currentSlide.nextElementSibling !== null) {
    $currentSlide.classList.remove('showing')
    $currentSlide.nextElementSibling.classList.add('showing')
  }
  else {
    $currentSlide.classList.remove('showing')
    $slide.classList.add('showing')
  }
}

var carouselInterval = setInterval(carousel, 3500)

function search(searchItem, songs) {
  var index = 0
  var songCompare

  while (searchItem !== songCompare && index < songs.length) {
    songCompare = songs[index].title
    index++
  }
  if (searchItem === songCompare) {
    songCompare = songs[index - 1]
  }
  else {
    songCompare = 'Sorry, we could not find that song.'
  }
  return songCompare
}

function renderElement(song) {
  var $li = document.createElement('li')
  $li.classList.add('showing')
  $li.classList.add('slide')

  if (song !== 'Sorry, we could not find that song.') {
    var $img = document.createElement('img')
    $img.classList.add('picture')
    $img.src = song.image
    var $artist = document.createElement('div')
    $artist.textContent = song.artist
    var $title = document.createElement('div')
    $title.textContent = song.title

    $li.appendChild($img)
    $li.appendChild($artist)
    $li.appendChild($title)
  }
  else {
    $li.textContent = song
  }
  return $li
}

var $form = document.querySelector('form')

$form.addEventListener('submit', function () {
  event.preventDefault()

  clearInterval(carouselInterval)

  var $searchItem = document.querySelector('#term').value
  var foundSong = search($searchItem, songs)
  var $song = renderElement(foundSong)

  var $ul = document.querySelector('ul')
  $ul.innerHTML = ''
  $ul.appendChild($song)

})

var $carousel = document.querySelector('.carousel')

$carousel.addEventListener('click', function () {

})
