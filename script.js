const button = document.querySelector('.btn');
const input = document.querySelector('.cxtexto');
const resLista = document.querySelector('.lista-de-tarefas')


let ArrayLista = []

function adicionarLista(){
    input.value.length === 0 ? alert('[ERRO] Preencha o campo do texto!!!'):
    ArrayLista.push({
        tarefa: input.value,
        concluida: false
    })
    mostraLista()
    input.value = ''
  
}


function mostraLista(){

 let novaLI = ''

ArrayLista.forEach((lista,index) =>{

novaLI = novaLI +`
<li class="lista ${lista.concluida && 'ok'}">
<img src="marca-de-verificacao (1).png" alt="marca-de-verificao" onclick='concluida(${index})'>
  <p>${lista.tarefa}</p>
<img src="excluir (1).png" alt="imagem-excluir" onclick='excluir(${index})'>
</li>
`
})
resLista.innerHTML = novaLI
localStorage.setItem('lista',JSON.stringify(ArrayLista))
}


function excluir(index){
 ArrayLista.splice(index,1)
  mostraLista()
  
}

function concluida(index){
      ArrayLista[index].concluida = !ArrayLista[index].concluida
      mostraLista()
}

function guardarTarefa(){
    const local = localStorage.getItem('lista')
    if(local){
    ArrayLista = JSON.parse(local)
    }
    mostraLista()
}
guardarTarefa()
button.addEventListener('click', adicionarLista)