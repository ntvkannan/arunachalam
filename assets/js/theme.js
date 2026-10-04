/* Theme foundation: saved preference -> system preference -> light.
   Loaded in <head> so the theme is applied before first paint. */
(function () {
    'use strict';

    var STORAGE_KEY = 'theme';
    var root = document.documentElement;
    var media = window.matchMedia('(prefers-color-scheme: dark)');

    function readSaved() {
        try {
            var value = localStorage.getItem(STORAGE_KEY);
            return value === 'light' || value === 'dark' ? value : null;
        } catch (e) {
            return null;
        }
    }

    function save(theme) {
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch (e) { /* storage unavailable; theme still applies for this session */ }
    }

    function getSystem() {
        return media.matches ? 'dark' : 'light';
    }

    function get() {
        return root.getAttribute('data-theme') || getSystem();
    }

    function apply(theme) {
        root.setAttribute('data-theme', theme);
        document.dispatchEvent(new CustomEvent('themechange', { detail: { theme: theme } }));
    }

    function set(theme) {
        if (theme !== 'light' && theme !== 'dark') return;
        save(theme);
        apply(theme);
    }

    function toggle() {
        set(get() === 'dark' ? 'light' : 'dark');
    }

    function onSystemChange(event) {
        // Follow the system only while the user has no saved preference
        if (!readSaved()) apply(event.matches ? 'dark' : 'light');
    }

    // Initial theme
    root.setAttribute('data-theme', readSaved() || getSystem());

    if (media.addEventListener) {
        media.addEventListener('change', onSystemChange);
    } else if (media.addListener) {
        media.addListener(onSystemChange);
    }

    // Public API for the future header toggle
    window.App = window.App || {};
    window.App.theme = { get: get, set: set, toggle: toggle };
})();
