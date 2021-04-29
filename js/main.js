$K.dom(".menu-button").on("click", function () {
    if (!$K.dom("body").hasClass("menu-open")) {
        $K.dom("body").addClass("menu-open");
    } else {
        $K.dom("body").removeClass("menu-open");
    }
    ;
});

// MODAL WINDOW
(function ($K) {
    $K.add('module', 'application', {
        init: function (app) {
            this.app = app;
            this.modal = app.modal;
        },
        // events
        onclick: function (e, element, type) {
            if (type === 'showCallback') {
                this.modal.open({title: 'Заказать звонок', target: '#callback', width: '400px'});
            }
        }
    });
})(Kube);

// YANDEX MAP
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.752161956105276, 37.61949517968746],
        zoom: 12,
        controls: []
    });

    var myGeoObjects = [];
    myGeoObjects = new ymaps.Placemark([55.800151390638646, 37.61400201562497], {
        balloonContentBody: '',
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/point.svg',
        iconImageSize: [50, 50],
        iconImageOffset: [-35, -35]
    });

    var clusterer = new ymaps.Clusterer({
        clusterDisableClickZoom: false,
        clusterOpenBalloonOnClick: false,
    });

    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
    myMap.behaviors.disable('scrollZoom');

}