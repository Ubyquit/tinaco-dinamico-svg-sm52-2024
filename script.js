const tinaco = document.getElementById('agua');

function llenarTinaco(porcentaje) {
  const alturaTotal = 200; // Altura total del tinaco
  const alturaLlenado = (porcentaje / 100) * alturaTotal;
  tinaco.style.height = alturaLlenado + 'px';
  tinaco.style.y = 250 - alturaLlenado;
  
  if (porcentaje < 100) {
    tinaco.classList.remove('lleno');
  } else {
    tinaco.classList.add('lleno');
  }
}

let i = 0;
function llenarConIntervalo() {
  llenarTinaco(i);
  console.log(i);
  i++;
  
  if (i <= 50) {
    setTimeout(llenarConIntervalo, 1000); // Llenar cada segundo (1000ms)
  }
}

llenarConIntervalo();
