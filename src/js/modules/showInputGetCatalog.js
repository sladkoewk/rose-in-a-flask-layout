function showInputGetCatalog(params) {
  const { buttonClassName, showClassNames } = params;
  const btn = document.getElementsByClassName(buttonClassName)[0];

  btn.onclick = () => {
    const elems = showClassNames.map((elem) => document.getElementsByClassName(elem)[0]);
    elems.forEach((element) => {
      element.style.opacity = '1';
    });
  };
}

export default showInputGetCatalog;
