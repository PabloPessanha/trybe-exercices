const listaEstados = document.querySelector('#states');
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
