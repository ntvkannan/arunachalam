/* Application entry point: initializes foundation modules. */
(function () {
    'use strict';

    function start() {
        var app = window.App || {};

        if (app.navigation) app.navigation.init();
        if (app.hero) app.hero.init();
        if (app.animations) app.animations.init();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else {
        start();
    }
})();
