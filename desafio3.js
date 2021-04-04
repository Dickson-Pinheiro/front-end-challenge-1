/*adicionar select no formulário com javascript*/

/*selecionando os elementos que servem como referência para inserir o item*/
const fieldset = document.querySelectorAll('div.form-conversion__body fieldset');
const fieldsetOne = fieldset[0];
const selectForm = document.querySelectorAll('div.form-conversion__body fieldset div.form-group')[1]

/*criando e adicionando as classes no container do novo elemento*/
const newElement = document.createElement('div')
const div1 = document.createElement('div')
div1.classList.add('choices__inner')

/*criando e adicionando as classes referente a tag select */
const select = document.createElement('select')
select.classList.add('choices__input')
select.classList.add('form-control')
/*adicionando estilo para que comportamento seja semelhante ao item já existente no site*/
select.style.cursor='pointer'
newElement.classList.add('form-group')

/*criando e adicionando os options no select*/
const options = ['SUV', 'Senda', 'Hatch', 'Pickup']
let option;
for(c in options){
    option = document.createElement('option')
    option.innerText = `${options[c]}`
    option.setAttribute('value', `${options[c]}`)
    select.appendChild(option)
}

/*adicionando os elementos na posição correta no DOM*/
div1.appendChild(select)
newElement.appendChild(div1)
fieldsetOne.insertBefore(newElement, selectForm)


/*adicionar textarea no formulário já existente no site*/

const divFormgroup = document.createElement('div')
const div2 = document.createElement('div')
const newTextarea = document.createElement('textarea')
newTextarea.setAttribute('placeholder', 'Mensagem')
newTextarea.style.resize = 'none'

divFormgroup.classList.add('form-group')
newTextarea.classList.add('choices-input')
newTextarea.classList.add('form-control')

div2.appendChild(newTextarea)
divFormgroup.appendChild(div2)
fieldsetOne.appendChild(divFormgroup)