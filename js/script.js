
        // Effet parallaxe pour l'image hero
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroImage = document.querySelector('.hero-image');
            const heroSection = document.querySelector('.hero');
            
            if (heroSection && heroImage) {
                const heroHeight = heroSection.offsetHeight;
                if (scrolled < heroHeight) {
                    const parallaxSpeed = 0.5;
                    heroImage.style.transform = `scale(1.02) translateY(${scrolled * parallaxSpeed}px)`;
                }
            }
        });

        // Animation smooth scroll pour les ancres
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Animation d'apparition des sections au scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Appliquer l'observer sur les sections principales
        document.querySelectorAll('.section-level, .section-equipment, .section-timing').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(40px)';
            observer.observe(section);
        });
