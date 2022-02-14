function lista_u() {

    const API_URL = 'http://localhost:5000/lista';
    api(API_URL);
}

function id_usuario() {

    var identificador = document.querySelector("input").value;
    const API_URL = 'http://localhost:5000/usuarios?id_usuario='+identificador;
    api(API_URL);
}

function api(api_url) {

    fetch(api_url,{

        method: 'GET',
        mode: 'cors',
        headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'}
})
  .then(response => response.json())
  .then(data => console.log(data));
}