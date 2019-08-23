function polyfillPrepend() {
  (function (arr) {
    arr.forEach((item) => {
      if (item.hasOwnProperty('prepend')) {
        return;
      }
      Object.defineProperty(item, 'prepend', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function prepend() {
          const argArr = Array.prototype.slice.call(arguments);
          let docFrag = document.createDocumentFragment();
          argArr.forEach((argItem) => {
            let isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });

          this.insertBefore(docFrag, this.firstChild);
        },
      });
    });
  }([Element.prototype, Document.prototype, DocumentFragment.prototype]));
}

export default polyfillPrepend;
