function ymap() {
  ymaps.ready(() => {
    const myMap = new ymaps.Map('YMapsID', {
      center: [45.045308, 38.984051],
      zoom: 19,
    });

    const myPlacemark = new ymaps.Placemark([45.045308, 38.984051], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/marker.png',
      iconImageSize: [60, 88],
      iconImageOffset: [-25, -80],
    });

    myMap.geoObjects.add(myPlacemark);
  });
}

export default ymap;
