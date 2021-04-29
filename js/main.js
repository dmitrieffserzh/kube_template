$K.dom(".menu-button").on("click", function () {
    if (!$K.dom("body").hasClass("menu-open")) {
        $K.dom("body").addClass("menu-open");
    } else {
        $K.dom("body").removeClass("menu-open");
    }
    ;
});

// MODAL WINDOW
(function($K) {
    $K.add('module', 'application', {
        init: function(app) {
            this.app = app;
            this.modal = app.modal;
        },
        // events
        onclick: function(e, element, type) {
            if (type === 'showCallback') {
                this.modal.open({ title: 'Заказать звонок', target: '#callback', width: '400px' });
            }
        }
    });
})(Kube);