let nombreAmigos = [];
var listaDeAmigos = document.getElementById('listaAmigos');

function agregarAmigo() {
    nombreAmigos.push(document.getElementById('amigo').value);

    if (document.getElementById('amigo').value === '') {
        return alert('Por favor ingrese un nombre valido');
    }

    // Esto vacía la lista para evitar duplicados.
    listaDeAmigos.innerHTML = '';
    // Crea elementos <li> para que los nombres agregados no esten en la misma linea.
    nombreAmigos.forEach(amigo => {
        let listaPrueba = document.createElement('li');
        listaPrueba.textContent = amigo;
        listaDeAmigos.append(listaPrueba);
    });
    // Vacía el campo de texto al agregar un nombre.
    document.getElementById('amigo').value="";
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    listaDeAmigos.innerHTML = '';

    let sorteo = nombreAmigos[Math.floor(Math.random() * nombreAmigos.length)];
    let li = document.createElement('li');
    
    li.textContent = `El amigo sorteado es ${sorteo}`;
    resultado.appendChild(li);

}
