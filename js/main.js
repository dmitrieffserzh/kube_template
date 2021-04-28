$K.dom(".menu-button").on("click", function () {
    if (!$K.dom("body").hasClass("menu-open")) {
        $K.dom("body").addClass("menu-open");
    } else {
        $K.dom("body").removeClass("menu-open");
    };
});