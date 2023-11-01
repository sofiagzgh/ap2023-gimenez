// JavaScript para mostrar el estado seleccionado

// Atrapar el nodo del select
const selectEstado = document.getElementById("inputState");
// Obtener elemento html
const estadoSeleccionadoLabel = document.getElementById("outputState");

// Funcion para cambiar el estado
function cambiarEstado() {
  // Atrapar el valor del select
  let estadoSeleccionado = selectEstado.value;
  estadoSeleccionadoLabel.textContent = estadoSeleccionado;
}

// Ejecutar el evento "change"
selectEstado.addEventListener("change", cambiarEstado);