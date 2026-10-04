/* Header behavior: theme toggle UI, mobile menu, scroll state.
   Theme logic itself lives in theme.js (App.theme). */
(function () {
    'use strict';

    var DESKTOP_QUERY = '(min-width: 48em)';
    var SCROLL_THRESHOLD = 24;

    function initThemeToggle() {
        var toggle = document.getElementById('theme-toggle');
        if (!toggle || !window.App || !window.App.theme) return;

        function sync() {
            toggle.setAttribute('aria-checked', String(window.App.theme.get() === 'dark'));
        }

        toggle.addEventListener('click', function () {
            window.App.theme.toggle();
        });
        document.addEventListener('themechange', sync);
        sync();
    }

    function initScrollState() {
        var header = document.getElementById('site-header');
        if (!header) return;

        var ticking = false;

        function update() {
            ticking = false;
            header.classList.toggle('is-scrolled', window.scrollY > SCROLL_THRESHOLD);
        }

        window.addEventListener('scroll', function () {
            if (!ticking) {
                ticking = true;
                window.requestAnimationFrame(update);
            }
        }, { passive: true });
        update();
    }

    function initMobileMenu() {
        var button = document.getElementById('menu-toggle');
        var nav = document.getElementById('primary-nav');
        var overlay = document.getElementById('nav-overlay');
        if (!button || !nav || !overlay) return;

        var desktop = window.matchMedia(DESKTOP_QUERY);
        var panels = [nav, overlay];
        var isOpen = false;

        function canAnimate() {
            var animations = window.App && window.App.animations;
            return !!window.gsap && !(animations && animations.prefersReducedMotion());
        }

        function setState(open) {
            isOpen = open;
            button.setAttribute('aria-expanded', String(open));
            button.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
            document.documentElement.classList.toggle('nav-locked', open);
        }

        function open() {
            if (isOpen) return;
            setState(true);
            window.gsap && window.gsap.killTweensOf(panels);
            panels.forEach(function (el) { el.classList.add('is-open'); });

            if (canAnimate()) {
                window.gsap.fromTo(nav, { opacity: 0, y: -12 },
                    { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out', clearProps: 'opacity,transform' });
                window.gsap.fromTo(overlay, { opacity: 0 },
                    { opacity: 1, duration: 0.3, ease: 'power1.out', clearProps: 'opacity' });
            }
        }

        function finishClose() {
            panels.forEach(function (el) { el.classList.remove('is-open'); });
            if (window.gsap) window.gsap.set(panels, { clearProps: 'opacity,transform' });
        }

        function close(returnFocus) {
            if (!isOpen) return;
            setState(false);
            if (window.gsap) window.gsap.killTweensOf(panels);

            if (canAnimate() && !desktop.matches) {
                window.gsap.to(nav, { opacity: 0, y: -8, duration: 0.2, ease: 'power1.in' });
                window.gsap.to(overlay, { opacity: 0, duration: 0.2, ease: 'power1.in', onComplete: finishClose });
            } else {
                finishClose();
            }
            if (returnFocus) button.focus();
        }

        button.addEventListener('click', function () {
            if (isOpen) close(false); else open();
        });

        overlay.addEventListener('click', function () { close(false); });

        nav.addEventListener('click', function (event) {
            if (event.target.closest('a')) close(false);
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && isOpen) close(true);
        });

        // Leaving the mobile layout while open: reset immediately
        var onBreakpoint = function (event) {
            if (event.matches && isOpen) {
                setState(false);
                if (window.gsap) window.gsap.killTweensOf(panels);
                finishClose();
            }
        };
        if (desktop.addEventListener) desktop.addEventListener('change', onBreakpoint);
        else desktop.addListener(onBreakpoint);
    }

    function init() {
        initThemeToggle();
        initScrollState();
        initMobileMenu();
    }

    window.App = window.App || {};
    window.App.navigation = { init: init };
})();
