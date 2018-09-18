// Faça seu exercício neste arquivo

// Alguns elementos importantes na página (index.html):
// #rolar: Botão rolar
//	 - você deve atribuir um handler de evento a ele para fazer o cálculo da rolagem dos dados
// #resultado: Elemento cujo conteúdo deve ser uma string com os resultados
//	 - você deve definir seu conteúdo (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados:
//	 - você deve torná-lo visível removendo a classe "oculto" dele
// .quantidade: todos os input[type=number] com a quantidade de dados a serem rolados
// #quantidadeD{4,6,8,10,12,20}: um ID para cada input[type=number] com a quantidade

const rollButton = document.querySelector('#rolar');
const resultOutput = document.querySelector('#resultado');
const resultContainer = document.querySelector('#recipienteResultados');

const rollDices = function() {
    const sides = [4, 6, 8, 10, 12, 20];
    resultContainer.classList.remove('oculto');
    for(let side of sides) {
        const currentDice = document.querySelector(`#quantidadeD${side}`);
        const rollTimes = currentDice.value;
        let rollResult = 0;
        for(let i=0; i<rollTimes; i++){
            rollResult += (Math.ceil(Math.random() * side));
        }        
        resultOutput.innerHTML += `<label>D${side}: <input type="text" value="${rollResult}" disabled></label>`;    
    }
}
rollButton.addEventListener('click', rollDices);