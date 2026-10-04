/* Hero behavior: video modal (YouTube iframe created on demand) and intro animation. */
(function () {
    'use strict';

    var VIDEO_ID = 'hRPIVSGDhPY';
    var VIDEO_TITLE = 'Birds Eye View video';

    function initVideoModal() {
        var modal = document.getElementById('video-modal');
        var frame = document.getElementById('video-modal-frame');
        if (!modal || !frame || typeof modal.showModal !== 'function') return;

        var opener = null;

        function open(trigger) {
            opener = trigger;
            var iframe = document.createElement('iframe');
            iframe.src = 'https://www.youtube-nocookie.com/embed/' + VIDEO_ID + '?autoplay=1&rel=0';
            iframe.title = VIDEO_TITLE;
            iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
            iframe.allowFullscreen = true;
            frame.appendChild(iframe);

            document.documentElement.classList.add('modal-open');
            modal.showModal();
        }

        function close() {
            if (modal.open) modal.close();
        }

        // Fires for Escape, the close button and any other close path
        modal.addEventListener('close', function () {
            frame.textContent = '';
            document.documentElement.classList.remove('modal-open');
            if (opener) opener.focus();
            opener = null;
        });

        // Click on the backdrop (outside the frame) closes the modal
        modal.addEventListener('click', function (event) {
            if (event.target === modal) close();
        });

        document.querySelectorAll('[data-video-open]').forEach(function (btn) {
            btn.addEventListener('click', function () { open(btn); });
        });
        modal.querySelectorAll('[data-video-close]').forEach(function (btn) {
            btn.addEventListener('click', close);
        });
    }

    function initIntro() {
        if (!window.App || !window.App.animations) return;

        window.App.animations.register(function (ctx) {
            if (ctx.reduced) return;

            var gsap = ctx.gsap;
            var q = function (sel) { return document.querySelectorAll(sel); };
            var clear = 'opacity,transform';

            var tl = gsap.timeline({ delay: 0.35, defaults: { duration: 0.7, ease: 'power2.out' } });
            tl.from(q('.hero__eyebrow'), { opacity: 0, y: 16, clearProps: clear })
              .from(q('.hero__name, .hero__subtitle'), { opacity: 0, y: 20, stagger: 0.12, clearProps: clear }, '-=0.5')
              .from(q('.hero__text'), { opacity: 0, y: 16, clearProps: clear }, '-=0.45')
              .from(q('.hero__portrait-img'), { opacity: 0, x: 28, duration: 0.9, clearProps: clear }, '-=1.1')
              .from(q('.hero__media > *'), { opacity: 0, y: 18, stagger: 0.12, clearProps: clear }, '-=0.5')
              .from(q('.hero__quote'), { opacity: 0, y: 12, clearProps: 'opacity,translate,transform' }, '-=0.4');

            // Very subtle settle on the decorative background
            gsap.from(q('.hero__bg'), { scale: 1.05, duration: 1.8, ease: 'power1.out', clearProps: 'transform' });
        });
    }

    function init() {
        initVideoModal();
        initIntro();
    }

    window.App = window.App || {};
    window.App.hero = { init: init };
})();
