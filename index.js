// ['Villanueva', 15.316, -88.000],
//   ['Tokio', 35.689, 139.691],
//   ['Amsterdan', 52.374, 4.889]

let marker1, marker2, marker3, map
let posicion1, posicion2, posicion3

function initMap() {
  posicion1 = {
    lat: 15.316,
    lng: -88.000
  }

  posicion2 = {
    lat: 35.689,
    lng: 139.691
  }

  posicion3 = {
    lat: 52.374,
    lng: 4.889
  }

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: posicion1
  })

  marker1 = new google.maps.Marker({
    position: posicion1,
    map
  })

  marker2 = new google.maps.Marker({
    position: posicion2,
    map
  })

  marker3 = new google.maps.Marker({
    position: posicion3,
    map
  })

  // Obtener la Geolocalización
  geoPosicion()
}

function geoPosicion() {
  if (navigator.geolocation) {
    const geoLoc = navigator.geolocation
    const options = { timeout: 60000 }
    const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
  } else {
    alert("Tu navegador no admite geolocalización")
  }
}

function centraMapa(position) {
  const nuevaPos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  }
  console.log(nuevaPos);
  marker1.setPosition(nuevaPos)
  map.setCenter(nuevaPos)

}

function onError(error) {
  console.error(error);
}