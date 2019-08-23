function colorSelect(optionsClassName, selectButtonClassName, containerClassName, clearClassName) {
  const clearSelect = document.getElementsByClassName(clearClassName)[0];
  const selectButton = document.getElementsByClassName(selectButtonClassName)[0];
  const options = document.getElementsByClassName(optionsClassName);
  const containerElements = document.getElementsByClassName(containerClassName)[0];

  selectButton.onclick = () => {
    containerElements.style.display = 'block';
  };

  clearSelect.onclick = () => {
    selectButton.innerHTML = 'Выберите цвет';
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
    const colorName = options[i].textContent.trim();
    const colorImgUrl = options[i].querySelector('img').getAttribute('src');
    const img = document.createElement('img');
    img.setAttribute('src', colorImgUrl);
    img.setAttribute('alt', colorName);
    img.setAttribute('class', 'rose-color__icon');

    options[i].onclick = () => {
      selectButton.innerHTML = colorName;
      selectButton.prepend(img);
      containerElements.style.display = 'none';
    };
  }
}

export default colorSelect;
