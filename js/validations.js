function validateEmptyFields(input, elements) {
    if(!input.value || input.value.length < 3) {
        addErrors(input, elements);
    } else {
        removeErrors(input, elements)
    }
}

function isCpfValid(input, elements) {
    const regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
  
    if(!regex.test(input.value)) {
      addErrors(input, elements);
    } else {
      removeErrors(input, elements);
    }
  } 