const cep = document.querySelector("#cep")
const showData = (result) => {
    for(const campo in result){
       if(document.querySelector('#' + campo)){
        document.querySelector('#' + campo).value = result[campo]
      }
        
    }
}

const resetButton = document.querySelector('#reset')

resetButton.addEventListener('click', (e) => {
  e.preventDefault()
  cep.value = ''
  document.querySelector('#logradouro').value = ''
  document.querySelector('#complemento').value = ''
  document.querySelector('#bairro').value = ''
  document.querySelector('#localidade').value = ''
  document.querySelector('#uf').value = ''
  document.querySelector('#ibge').value = ''
  
})














const submitButton = document.querySelector('#submit')

submitButton.addEventListener('click', (e) => {
  e.preventDefault()
let search = cep.value.replace('-', '')
const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

fetch(`https://viacep.com.br/ws/${search}/json/`, options)
.then(response =>{response.json()
  .then(data => showData(data))
})
.catch(e => console.log('Deu erro: ' + e, message))

})