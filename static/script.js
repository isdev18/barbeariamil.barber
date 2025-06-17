const fotos = [
    "{{ url_for('static', filename='foto1.jpg') }}",
    "{{ url_for('static', filename='foto2.jpg') }}",
    "{{ url_for('static', filename='foto3.jpg') }}"
];
let indice = 0;
const img = document.getElementById('carousel-img');

function mostrarFoto(i) {
    img.src = fotos[i];
}

setInterval(() => {
    indice = (indice + 1) % fotos.length;
    mostrarFoto(indice);
}, 3000);