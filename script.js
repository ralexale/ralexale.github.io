const btnSubmit = document.getElementById('submit');
const segundoContainer = document.getElementById('container-thanks');
const primerContainer = document.getElementById('container-card');

const btnUno = document.getElementById('uno');
const btnDos = document.getElementById('dos');
const btnTres = document.getElementById('tres');
const btnCuatro = document.getElementById('cuatro');
const btnCinco = document.getElementById('cinco');

segundoContainer.style.display = 'none';

btnSubmit.addEventListener('click', Eleccion);

let numero;
obtener_localstorage();

function obtener_localstorage() {
  let obtener = localStorage.getItem('Eleccion');
  console.log(obtener);
}

function Eleccion() {
  if (btnUno.checked) {
    numero = 1;
  } else if (btnDos.checked) {
    numero = 2;
  } else if (btnTres.checked) {
    numero = 3;
  } else if (btnCuatro.checked) {
    numero = 4;
  } else if (btnCinco.checked) {
    numero = 5;
  }

  render();
  localStorage.setItem('Eleccion', numero);
}

const render = () => {
  primerContainer.style.display = 'none';
  segundoContainer.style.display = 'flex';
  segundoContainer.innerHTML += `
        <img src="/images/illustration-thank-you.svg" alt="">
        <div class="selected">
            <h2>You selected ${numero} out of 5</h2>
        </div>
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
  `;
};
