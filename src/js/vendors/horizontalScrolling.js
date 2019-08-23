function horizontalScrolling() {
  function scrollHorizontally(e) {
    e = window.event || e;
    const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    document.getElementsByClassName('size-flask__dropdown-content')[0].scrollLeft -= (delta * 40); // Multiplied by 40
    e.preventDefault();
  }
  if (document.getElementsByClassName('size-flask__dropdown-content')[0].addEventListener) {
    // IE9, Chrome, Safari, Opera
    document.getElementsByClassName('size-flask__dropdown-content')[0].addEventListener('mousewheel', scrollHorizontally, false);
    // Firefox
    document.getElementsByClassName('size-flask__dropdown-content')[0].addEventListener('DOMMouseScroll', scrollHorizontally, false);
  } else {
    // IE 6/7/8
    document.getElementsByClassName('size-flask__dropdown-content')[0].attachEvent('onmousewheel', scrollHorizontally);
  }
}

export default horizontalScrolling;
