function horizontalScrolling(containersClassNames) {
  containersClassNames.forEach((containerClassName) => {
    const elementForScroll = document.getElementsByClassName(containerClassName)[0];

    function scrollHorizontally(e) {
      e = window.event || e;
      const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      elementForScroll.scrollLeft -= (delta * 40);
      e.preventDefault();
    }
    if (elementForScroll.addEventListener) {
      elementForScroll.addEventListener('mousewheel', scrollHorizontally, false);
      elementForScroll.addEventListener('DOMMouseScroll', scrollHorizontally, false);
    } else {
      elementForScroll.attachEvent('onmousewheel', scrollHorizontally);
    }
  });
}

export default horizontalScrolling;
