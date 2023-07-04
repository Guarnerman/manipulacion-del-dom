const h1 = document.querySelector('h1')
const form = document.querySelector('#formulario')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#boton-calcular');
const pResult = document.querySelector('#resultado')

form.addEventListener('submit', sumasInputValues);

function sumasInputValues(event) {
  /* onsole.log({event}); */
  event.prevenDafault();
  const sumaInput = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInput; 
}