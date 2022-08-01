const nameUser = document.getElementById('nameUser');
const cpf = document.getElementById('cpf')
const numberCard = document.getElementById('numberCard');
const dateValidity = document.getElementById('dateValidity');
const numberCVV = document.getElementById('numberCVV');
const msgError = 'Enter a valid value for';

function initApp() {
    addEventInElements(nameUser, `${msgError} Name User`);
    addEventInElements(numberCard, `${msgError} Number Card`);
    addEventInElements(numberCVV, `${msgError} Number CVV`);
    addEventInElements(cpf, 'Look like this no an email');


}



function addEventInElements(element, message) {
    element.addEventListener('blur', function () {
        if (element.type === 'text' || element.type === 'number' || element.type === 'month') {
            validateEmptyFields(element, createObject(element, message));
        } else {
            isCpfValid(elements, createObject(elements, message));
        }
    })
}

function createObject(input, message) {
    return {
        containerErrors: input.parentNode.children[1],
        message: message
    }
}

function carregarDados(){       
        document.getElementById("nameCard").value = document.getElementById("nameUser").value
        document.getElementById("nuemroCpf").value = document.getElementById("cpf").value
        document.getElementById("numeroCartao").value = document.getElementById("numberCard").value
        document.getElementById("numeroCVV").value = document.getElementById("numberCVV").value
}

const numerCard = document.querySelector('numerCard')

numberCard.addEventListener('keypress', () => {
    let numerCardlenght = numerCard.value.lenght

    if (numerCardlenght === 4 || numerCardlenght === 9 || numerCardlenght === 14) {
        numerCard.value += ' '
    }
})

function mascara_cpf() {
    var cpf = document.getElementById('cpf')
    if(cpf.value.length === 3 || cpf.value.length === 7 ) {
        cpf.value += '.'
    }   else if (cpf.value.length === 11){
        cpf.value += '-'
    }
}

function mascara_cartao() {
    var numberCard = document.getElementById('numberCard')
    if(numberCard.value.length === 4 || numberCard.value.length === 10 || numberCard.value.length === 16) {
        numberCard.value += '  '
    }   
}

initApp();


