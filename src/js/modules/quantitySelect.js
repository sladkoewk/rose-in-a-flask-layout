function quantitySelect(params) {
  const {
    inputQuantityClassName,
    buttonDecrementClassName,
    buttonIncrementClassName,
  } = params;

  const inputQuantity = document.getElementsByClassName(inputQuantityClassName)[0];
  const buttonDecrement = document.getElementsByClassName(buttonDecrementClassName)[0];
  const buttonIncrement = document.getElementsByClassName(buttonIncrementClassName)[0];

  buttonIncrement.onclick = () => {
    const currentQuantity = parseInt(inputQuantity.value, 10);
    if (currentQuantity < 0) {
      inputQuantity.value = 0;
    } else if (currentQuantity >= 0) {
      inputQuantity.value = currentQuantity + 1;
    }
  };

  buttonDecrement.onclick = () => {
    const currentQuantity = parseInt(inputQuantity.value, 10);
    if (currentQuantity <= 0) {
      inputQuantity.value = 0;
    } else if (currentQuantity > 0) {
      inputQuantity.value = currentQuantity - 1;
    }
  };
}

export default quantitySelect;
