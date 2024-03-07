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

llenarTinaco(50); // Ejemplo de llenado al 50%
