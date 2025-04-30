const parametrosExtras = document.getElementById('parametrosExtras');
const resultado = document.getElementById('resultado');
const aviso = document.querySelectorAll('span');

function mostrarParametrosExtras() {
  parametrosExtras.innerHTML = '';
}

function sortear() {
  const nomes = document.getElementById('nomes').value.trim().split('\n').map(n => n.trim()).filter(n => n);
  const quantia = parseInt(document.getElementById('quantia').value, 10);

  if (nomes.length < 2 || isNaN(quantia) || quantia < 1 || quantia > nomes.length) {
    aviso.forEach(aviso => {
        aviso.style.display = 'block'
    })
    return;
  }

  aviso.forEach(aviso => {
    aviso.style.display = 'none'
})
  resultado.innerHTML = '';

  const sorteados = [];
  const nomesDisponiveis = [...nomes];

  for (let i = 0; i < quantia; i++) {
    const index = Math.floor(Math.random() * nomesDisponiveis.length);
    sorteados.push(nomesDisponiveis.splice(index, 1)[0]);
  }

  resultado.innerHTML = `🎉 Sorteados: <br> <strong>${sorteados.join('<br>')}</strong>`;
}