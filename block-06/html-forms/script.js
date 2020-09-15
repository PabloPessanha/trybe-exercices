const forms = document.querySelector('form');
const listaEstados = document.querySelector('#states');
const dia = document.querySelector('#day');
const mes = document.querySelector('#month');
const ano = document.querySelector('#year');

let estados = [
  'AC',
  'AL',
  'AM',
  'AP',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RO',
  'RS',
  'RR',
  'SC',
  'SE',
  'SP',
  'TO',
];

estados.forEach((item) => {
  let criarEstado = document.createElement('option');
  criarEstado.appendChild(document.createTextNode(item));

  listaEstados.appendChild(criarEstado);
});

dia.addEventListener('keyup', () => {
  if (isNaN(dia.value)) {
    dia.value = '';
  }
  if (dia.value > 31) {
    dia.value = 31;
  }
  dia.addEventListener('blur', () => {
    if (dia.value == 00) {
      dia.value = 01;
    }
  });
});

mes.addEventListener('keyup', () => {
  if (isNaN(mes.value)) {
    mes.value = '';
  }
  if (mes.value > 12) {
    mes.value = 12;
  }
  mes.addEventListener('blur', () => {
    if (mes.value == 00) {
      mes.value = 01;
    }
  });
});

ano.addEventListener('keyup', () => {
  if (isNaN(ano.value)) {
    ano.value = '';
  }
  if (ano.value > 2020) {
    ano.value = 2020;
  }
  ano.addEventListener('blur', () => {
    if (ano.value < 1910) {
      ano.value = 1910;
    }
  });
});
