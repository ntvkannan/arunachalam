/* Animation foundation: GSAP + ScrollTrigger setup.
   No animations are created here yet; future sections add theirs via
   App.animations.register(). */
(function () {
    'use strict';

    var reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    var registry = [];
    var ready = false;

    function prefersReducedMotion() {
        return reducedMotionQuery.matches;
    }

    function hasGsap() {
        return typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
    }

    // Future sections call register(fn). fn receives { gsap, ScrollTrigger, reduced }.
    // If init() already ran, fn runs immediately.
    function register(fn) {
        if (typeof fn !== 'function') return;
        registry.push(fn);
        if (ready) run(fn);
    }

    function run(fn) {
        fn({
            gsap: window.gsap,
            ScrollTrigger: window.ScrollTrigger,
            reduced: prefersReducedMotion()
        });
    }

    function init() {
        if (!hasGsap()) {
            console.warn('GSAP or ScrollTrigger failed to load; animations are disabled.');
            return;
        }

        window.gsap.registerPlugin(window.ScrollTrigger);
        ready = true;
        registry.forEach(run);
    }

    // Header intro: brand avatar, brand text, navigation, theme toggle (and menu button on mobile)
    register(function (ctx) {
        if (ctx.reduced) return;

        var q = function (sel) { return document.querySelectorAll(sel); };
        var mm = ctx.gsap.matchMedia();

        function intro(navTargets) {
            var tl = ctx.gsap.timeline({ defaults: { duration: 0.5, ease: 'power2.out' } });
            tl.from(q('.brand__avatar'), { opacity: 0, y: -10, clearProps: 'opacity,transform' })
              .from(q('.brand__text'), { opacity: 0, y: -10, clearProps: 'opacity,transform' }, '-=0.35')
              .from(navTargets, { opacity: 0, y: -10, stagger: 0.06, clearProps: 'opacity,transform' }, '-=0.3')
              .from(q('.theme-toggle'), { opacity: 0, y: -10, clearProps: 'opacity,transform' }, '-=0.3');
            return tl;
        }

        mm.add('(min-width: 48em)', function () {
            intro(q('.primary-nav__list li'));
        });
        mm.add('(max-width: 47.99em)', function () {
            intro(q('.menu-toggle'));
        });
    });

    // Feature highlights: quick reveal as the section enters the viewport
    register(function (ctx) {
        var items = document.querySelectorAll('.features .feature');
        if (ctx.reduced || !items.length) return;

        ctx.gsap.from(items, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.1,
            clearProps: 'opacity,transform',
            scrollTrigger: { trigger: '.features', start: 'top 90%', once: true }
        });
    });

    // Eight creations: heading reveal, then cards fade up as they enter the viewport
    register(function (ctx) {
        var intro = document.querySelectorAll('.projects__intro > *');
        var cards = document.querySelectorAll('.projects .project');
        if (ctx.reduced || !cards.length) return;
        var gsap = ctx.gsap;

        gsap.from(intro, {
            opacity: 0,
            y: 16,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.08,
            clearProps: 'opacity,transform',
            scrollTrigger: { trigger: '.projects__intro', start: 'top 88%', once: true }
        });

        gsap.set(cards, { opacity: 0, y: 24 });
        ctx.ScrollTrigger.batch(cards, {
            start: 'top 92%',
            once: true,
            onEnter: function (batch) {
                gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    stagger: 0.08,
                    clearProps: 'opacity,transform'
                });
            }
        });
    });

    // Better tomorrow: quote fades up once as the banner enters the viewport
    register(function (ctx) {
        var quote = document.querySelector('.better-tomorrow__quote');
        if (ctx.reduced || !quote) return;

        ctx.gsap.from(quote, {
            opacity: 0,
            y: 16,
            duration: 0.9,
            ease: 'power2.out',
            clearProps: 'opacity,transform',
            scrollTrigger: { trigger: '.better-tomorrow', start: 'top 85%', once: true }
        });
    });

    // Footer: single quiet fade-up when it enters the viewport
    register(function (ctx) {
        var inner = document.querySelector('.footer__inner');
        if (ctx.reduced || !inner) return;

        ctx.gsap.from(inner, {
            opacity: 0,
            y: 14,
            duration: 0.7,
            ease: 'power2.out',
            clearProps: 'opacity,transform',
            scrollTrigger: { trigger: '.site-footer', start: 'top 98%', once: true }
        });
    });

    window.App = window.App || {};
    window.App.animations = {
        init: init,
        register: register,
        prefersReducedMotion: prefersReducedMotion
    };
})();
