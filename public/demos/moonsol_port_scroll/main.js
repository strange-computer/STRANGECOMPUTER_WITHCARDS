document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const preloader = document.querySelector('.preloader');

    // --- IFRAME RESIZE HELPER ---
    let lastKnownScrollHeight = document.documentElement.scrollHeight;
    function postParentHeight() {
        try {
            if (window.parent && window.parent !== window) {
                window.parent.postMessage({ type: 'moonsol:resize', height: document.documentElement.scrollHeight }, '*');
            }
        } catch (e) {}
    }

    // --- PRELOADER ---
    window.addEventListener('load', () => {
        preloader.classList.add('loaded');
        postParentHeight();

        // --- SHOWCASE AUTOPLAY (default ON, disable with ?autoplay=0) ---
        const isEmbedded = (() => { try { return window.parent && window.parent !== window; } catch (e) { return false; } })();
        const urlParams = new URLSearchParams(window.location.search);
        const shouldAutoPlay = urlParams.get('autoplay') !== '0';

        if (shouldAutoPlay) {
            const onTransitionEnd = (e) => {
                if (e.propertyName === 'opacity') {
                    preloader.removeEventListener('transitionend', onTransitionEnd);
                    setTimeout(() => startShowcaseScroll(), 200);
                }
            };
            preloader.addEventListener('transitionend', onTransitionEnd);
            // Fallback in case transitionend doesn't fire
            setTimeout(() => { if (!showcaseState.active) startShowcaseScroll(); }, 1200);
        }
    });
    window.addEventListener('resize', postParentHeight);

    // --- CUSTOM CURSOR ---
    if (window.matchMedia("(min-width: 769px)").matches) {
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        const speed = 0.1;

        function animateCursor() {
            let dx = mouseX - cursorX;
            let dy = mouseY - cursorY;
            cursorX += dx * speed;
            cursorY += dy * speed;
            cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        window.addEventListener('mousemove', e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        document.querySelectorAll('.cursor-grow-trigger, [data-magnetic]').forEach(trigger => {
            trigger.addEventListener('mouseenter', () => cursor.classList.add('grow'));
            trigger.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
        });
    }
    
    // --- HERO PARALLAX (disabled to keep heading static) ---

    // --- INTERSECTION OBSERVER FOR SCROLL REVEALS ---
    const revealElements = document.querySelectorAll('.reveal-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // observer.unobserve(entry.target); // Keep observing for re-animation if needed
            }
        });
    }, { threshold: 0.1 });
    revealElements.forEach(el => observer.observe(el));

    // --- APPROACH SECTION INTERACTIVITY ---
    const approachItems = document.querySelectorAll('.approach-list li');
    const approachDescs = document.querySelectorAll('.approach-descriptions p');
    approachItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            approachItems.forEach(i => i.classList.remove('active'));
            approachDescs.forEach(d => d.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(this.dataset.target).classList.add('active');
        });
    });

    // --- LIQUID HOVER & MAGNETIC EFFECTS (GSAP) ---
    if (window.gsap) {
        const liquidFilter = document.querySelector('#liquid-distortion feDisplacementMap');
        document.querySelectorAll('.portfolio-image').forEach(item => {
            let hoverTl = gsap.timeline({ paused: true })
                .to(liquidFilter, { attr: { scale: 40 }, duration: 0.4, ease: 'power2.in' })
                .to(liquidFilter, { attr: { scale: 0 }, duration: 0.4, ease: 'power2.out' });
            item.addEventListener('mouseenter', () => hoverTl.play(0));
        });

        document.querySelectorAll('[data-magnetic]').forEach(el => {
            el.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - (rect.left + rect.width / 2);
                const y = e.clientY - (rect.top + rect.height / 2);
                gsap.to(this, { x: x * 0.2, y: y * 0.2, duration: 0.6, ease: 'power3.out' });
            });
            el.addEventListener('mouseleave', function() {
                gsap.to(this, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' });
            });
        });
    }

    // --- FOLD-BY-FOLD SHOWCASE SCROLL (opt-in) ---
    const showcaseState = { active: false, timeouts: [] };

    function startShowcaseScroll() {
        if (showcaseState.active) return;
        showcaseState.active = true;

        const folds = [];
        const addFold = (el) => { if (el) folds.push(el); };
        addFold(document.querySelector('.hero'));
        addFold(document.querySelector('.marquee-section'));
        addFold(document.getElementById('approach'));
        addFold(document.getElementById('work'));
        addFold(document.getElementById('contact'));

        let index = 0;

        const stopOnUser = () => stopShowcaseScroll();
        ['wheel','touchstart','keydown','mousedown'].forEach(evt => {
            window.addEventListener(evt, stopOnUser, { once: true, passive: true });
        });

        const speedPxPerSec = 1400; // travel speed
        const dwellMs = 400; // pause at each fold

        const step = () => {
            if (!showcaseState.active) return;
            if (index >= folds.length) {
                showcaseState.active = false;
                try {
                    if (window.parent && window.parent !== window) {
                        window.parent.postMessage({ type: 'moonsol:complete' }, '*');
                    }
                } catch (e) {}
                return;
            }

            const currentY = window.scrollY || document.documentElement.scrollTop || 0;
            const targetY = Math.max(0, folds[index].getBoundingClientRect().top + currentY);
            const distance = Math.abs(targetY - currentY);
            const travelMs = Math.max(250, Math.min(900, Math.round((distance / speedPxPerSec) * 1000)));

            window.scrollTo({ top: targetY, behavior: 'smooth' });

            const afterTravel = setTimeout(() => {
                postParentHeight();
                index += 1;
                const afterDwell = setTimeout(step, dwellMs);
                showcaseState.timeouts.push(afterDwell);
            }, travelMs);
            showcaseState.timeouts.push(afterTravel);
        };

        step();
    }

    function stopShowcaseScroll() {
        if (!showcaseState.active) return;
        showcaseState.active = false;
        showcaseState.timeouts.forEach(t => clearTimeout(t));
        showcaseState.timeouts = [];
    }
});


