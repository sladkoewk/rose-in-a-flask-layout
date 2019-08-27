function accessorySelect(params) {
  const {
    optionsClassName,
    selectButtonClassName,
    containerClassName,
    clearClassName,
  } = params;

  const clearSelect = document.getElementsByClassName(clearClassName)[0];
  const selectButton = document.getElementsByClassName(selectButtonClassName)[0];
  const options = document.getElementsByClassName(optionsClassName);
  const containerElements = document.getElementsByClassName(containerClassName)[0];

  selectButton.onclick = () => {
    containerElements.style.display = 'block';
  };

  clearSelect.onclick = () => {
    selectButton.innerHTML = 'Не выбрано';
  };

  document.addEventListener('click', (e) => {
    const { target } = e;
    const isContainer = target === containerElements || containerElements.contains(target);
    const isSelectButton = target === selectButton;
    if (!isContainer && !isSelectButton) {
      containerElements.style.display = 'none';
    }
  });

  for (let i = 0; i < options.length; i++) {
    const size = options[i].firstChild.textContent.trim();

    options[i].onclick = () => {
      selectButton.innerHTML = size;
      containerElements.style.display = 'none';
    };
  }
}

export default accessorySelect;
