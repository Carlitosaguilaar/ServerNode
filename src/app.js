function lista() {

    const API_URL = 'http://localhost:3000/lista';
    api(API_URL);
}

function id_usuario() {

    var id = document.querySelector("input").value;
    const API_URL = 'http://localhost:3000/usuarios?id_usuario='+id;
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
  .then(data => {let texto = "";

    if (api_url == "http://localhost:3000/usuarios?id_usuario=51") {

        var subtitle = document.createElement("h3");
        subtitle.textContent = "Se ha creado el nuevo usuario";
        document.querySelectorAll("div")[1].appendChild(subtitle);
    } 
    else {

        var id = document.querySelector("input").value;

        var subtitle = document.createElement("h3");
        document.querySelectorAll("div")[1].appendChild(subtitle);
    }

    for (let i = 0; i<data.length; i++){

        var diiv = document.createElement("div");

        diiv.id="Caja"

        var nuevo_parrafo = document.createElement("p");
        nuevo_parrafo.textContent = "Nombre: "+data[i].Nombre+", teléfono: "+data[i].Telefono+", email: "+data[i].Email;
        nuevo_parrafo.className="nuevoTexto";
        diiv.appendChild(nuevo_parrafo);


        document.querySelectorAll("div")[1].appendChild(diiv);
    }

    var dedo = document.querySelector("input");
    dedo.disabled=true;


    });

}
function m_ID() {
    var dedo2 = document.getElementById("boton2");
    valor = dedo2.value;
    document.getElementById('contenedor').textContent = '';
    fetch('http://localhost:3000/usuarios/?id_usuario='+valor, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(result => result.json())
    .then(data => {
        for (const clave of data) {
            var div = document.createElement('div');
            for (const Interna in clave) {
                var parrafo = document.createElement('p')
                var newTexto = document.createTextNode(Interna+" : " + clave[Interna]);
                parrafo.appendChild(newTexto);
                div.appendChild(parrafo);
            }
            document.querySelector('#contenedor').appendChild(div);
        }
    }) 
    fetch('http://localhost:3000/usuarios/?id_usuario='+valor, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(result => result.json())
    .then(data => {
        for (const cl of data) {
            var div2 = document.createElement('div');
            for (const Interna in cl) {
                var parrafo = document.createElement('p');
                var nodoTexto = document.createTextNode(Interna+" : " + cl[Interna]);
                parrafo.appendChild(nodoTexto);
                div2.appendChild(parrafo);
            }
            document.querySelector('#contenedor').appendChild(div2);
        }
    }) 
}

function borrar() {

    var dedo = document.getElementById("cajaCentral");
    var deeedo2 = document.getElementById("Caja");

    dedo.remove(deeedo2);
   
}
