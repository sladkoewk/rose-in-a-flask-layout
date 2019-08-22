function showInputGetCatalog() {
  const getCatalogBtn = document.getElementsByClassName('get-catalog__btn')[0];
  const getCatalogName = document.getElementsByClassName('get-catalog__name')[0];
  const getCatalogEmail = document.getElementsByClassName('get-catalog__email')[0];


  getCatalogBtn.onclick = () => {
    getCatalogName.style.opacity = '1';
    getCatalogEmail.style.opacity = '1';
  };
}

export default showInputGetCatalog;
