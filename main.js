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
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Lionel_Richie_Hello.jpg',
    artist: 'Lionel Richie',
    title: 'Hello'
  },
  {
    image: 'http://www.pophistorydig.com//wp-content/uploads/2008/03/1973-goodbye-yellow-brk-rd-60.jpg',
    artist: 'Elton John',
    title: 'Candle in the Wind'
  },
  {
    image: 'https://images-na.ssl-images-amazon.com/images/I/41bKfBmcdRL.jpg',
    artist: 'Ben Howard',
    title: 'Promise'
  },
  {
    image: 'https://i.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg',
    artist: 'Queen',
    title: 'Bohemian Rhapsody'
  },
  {
    image: 'http://images.genius.com/592617e90a52c31a1e815e4b7fb37891.1000x1000x1.jpg',
    artist: 'Bon Iver',
    title: '8 Circle'
  },
  {
    image: 'https://images.genius.com/a025fa2ebf5dd7e5411b8e71f63ac395.1000x954x1.jpg',
    artist: 'Red Hot Chili Peppers',
    title: 'Tell Me Baby'
  },
  {
    image: 'https://images.genius.com/c8bc624ea7d430d81b33faec31b21bf7.640x640x1.jpg',
    artist: 'James Blake',
    title: 'I Need a Forest Fire'
  }

]

var users = []

var playlist = {
  title: '',
  songs: []
}

var userIndex = 0

function searchUsersName(name, list) {
  var found = false

  for (var i = 0; i < list.length; i++) {
    if (name === list[i].user) {
      found = true
    }
  }
  return found
}

function createNewUser(name, list) {
  var newUser = {
    user: '',
    playlists: []
  }

  newUser.user = name
  list.push(newUser)
}

function saveUserIndex(name, list) {
  var user = ''
  var index = 0

  while (user !== name) {
    user = list[index].user
    index++
  }
  index--

  return index
}

function showPlaylist(view) {
  for (var i = 0; i < view.length; i++) {
    if (view[i].id !== 'playlist-page') {
      view[i].classList.add('hidden-div')
    }
    else {
      view[i].classList.remove('hidden-div')
    }
  }
}

function savePlaylistName(pName, playlist) {
  playlist.title = pName
}

var $go = document.querySelector('.go')

$go.addEventListener('click', function () {
  var $views = document.querySelectorAll('.views')
  var $userName = document.querySelector('#user-name').value
  var $playlistName = document.querySelector('#playlist-name').value
  var foundName

  foundName = searchUsersName($userName, users)

  if (foundName !== true) {
    createNewUser($userName, users)
  }

  userIndex = saveUserIndex($userName, users)
  savePlaylistName($playlistName, playlist)

  showPlaylist($views)

})

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

  do {

    songCompare = songs[index].title
    index++

  } while (searchItem.toUpperCase() !== songCompare.toUpperCase() && index < songs.length)

  if (searchItem.toUpperCase() === songCompare.toUpperCase()) {
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

function addPlaylist(playlist, song) {
  playlist.songs.push(song)
}

var playIndex = 0

function renderPlaylist(playlist, index) {
  var $row = document.createElement('tr')

  var $tableArtist = document.createElement('td')
  $tableArtist.textContent = playlist.songs[index].artist

  var $tableTitle = document.createElement('td')
  $tableTitle.textContent = playlist.songs[index].title

  var $tableButton = document.createElement('td')
  var $deleteButton = document.createElement('span')
  $deleteButton.classList.add('glyphicon')
  $deleteButton.classList.add('glyphicon-remove')
  $deleteButton.classList.add('delete')
  $deleteButton.id = index
  $tableButton.appendChild($deleteButton)

  $row.appendChild($tableArtist)
  $row.appendChild($tableTitle)
  $row.appendChild($tableButton)

  return $row
}

var $add = document.querySelector('.add')

$add.addEventListener('click', function () {
  var $showing = document.querySelector('.showing')
  var $title = $showing.lastChild.textContent

  var song = search($title, songs)

  addPlaylist(playlist, song)

  var row = renderPlaylist(playlist, playIndex)

  var $tbody = document.querySelector('tbody')

  $tbody.appendChild(row)
  playIndex++
})

function deleteSong(i, playlist) {
  playlist.songs.splice(i, 1)
}

var $table = document.querySelector('table')

$table.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete')) {
    deleteSong(event.target.id, playlist)
    resetPlaylist()
    playIndex = 0

    for (playIndex = 0; playIndex < playlist.songs.length; playIndex++) {
      var $tbody = document.querySelector('tbody')

      var row = renderPlaylist(playlist, playIndex)

      $tbody.appendChild(row)
    }
  }
})

function savePlaylist() {
  users[userIndex].playlists.push(playlist)
}

function resetPlaylist() {
  var $table = document.querySelector('table')
  var $oldTbody = document.querySelector('tbody')
  var $newTbody = document.createElement('tbody')

  $table.replaceChild($newTbody, $oldTbody)
}

var $save = document.querySelector('.save')

$save.addEventListener('click', function () {
  var $community = document.querySelector('.community-wrapper')
  var $table = displayAllPlaylists(users, playlist, userIndex)
  $community.appendChild($table)
  savePlaylist()
  resetPlaylist()

  playlist = {
    title: '',
    songs: []
  }
  playIndex = 0
})

function showCommunity(view) {
  for (var i = 0; i < view.length; i++) {
    if (view[i].id !== 'community-page') {
      view[i].classList.add('hidden-div')
    }
    else {
      view[i].classList.remove('hidden-div')
    }
  }
}

var $playlistLink = document.querySelector('.playlist-link')

$playlistLink.addEventListener('click', function () {
  var $views = document.querySelectorAll('.views')

  showCommunity($views)
})

function showLogin(view) {
  for (var i = 0; i < view.length; i++) {
    if (view[i].id !== 'login-page') {
      view[i].classList.add('hidden-div')
    }
    else {
      view[i].classList.remove('hidden-div')
    }
  }
}

var $createLink = document.querySelector('.create-link')

$createLink.addEventListener('click', function () {
  var $views = document.querySelectorAll('.views')

  showLogin($views)

})

var $playlistLink2 = document.querySelector('.playlist-link2')

$playlistLink2.addEventListener('click', function () {
  var $views = document.querySelectorAll('.views')

  showCommunity($views)
})

function displayAllPlaylists(users, playlist, uindex) {
  var $table = document.createElement('table')
  var $div = document.createElement('div')
  $div.classList.add('col-xs-4')

  $table.classList.add('table')
  $table.classList.add('table-inverse')
  $table.classList.add('table-sm')

  var $thead = document.createElement('thead')
  var $trHead = document.createElement('tr')
  var $th1 = document.createElement('th')
  var $th2 = document.createElement('th')

  $th1.textContent = users[uindex].user
  $th2.textContent = playlist.title

  $trHead.appendChild($th1)
  $trHead.appendChild($th2)
  $thead.appendChild($trHead)
  $table.appendChild($thead)

  var $tbody = document.createElement('tbody')

  for (var i = 0; i < playlist.songs.length; i++) {
    var $trRow = document.createElement('tr')
    var $title = document.createElement('td')
    var $artist = document.createElement('td')

    $title.textContent = playlist.songs[i].title
    $artist.textContent = playlist.songs[i].artist

    $trRow.appendChild($title)
    $trRow.appendChild($artist)

    $tbody.appendChild($trRow)
  }

  $table.appendChild($tbody)
  $div.appendChild($table)

  return $div

}
