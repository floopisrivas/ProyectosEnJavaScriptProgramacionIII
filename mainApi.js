let apiRandom = "https://randomuser.me/api/";

imag = document.getElementById("photo"); nomb = document.getElementById("nombre");email1 = document.getElementById("correo");
pais1 = document.getElementById("pais"); telefono1 = document.getElementById("tel");
fechaNac = document.getElementById("fechaNac");

fetch(apiRandom) .then((response) => response.json()).then(traerDatos).catch((error) => console.log(error));

function traerDatos(reg) {photo.innerHTML = "<img src='" + reg.results[0].picture.large + "'/>"; 
nombre.innerHTML = reg.results[0].name.first + " " + reg.results[0].name.last;
correo.innerHTML = reg.results[0].email; 
pais.innerHTML = reg.results[0].location.country; 
tel.innerHTML = reg.results[0].phone; 
fechaNac.innerHTML = reg.results[0].dob.date;
}
