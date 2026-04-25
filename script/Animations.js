document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer pour les animations au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Ajouter animation stagger pour les éléments avec délai
                if (entry.target.classList.contains('stagger-item')) {
                    const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
                
                // Animation de zoom-in pour certains éléments
                if (entry.target.classList.contains('animate-zoom-in')) {
                    entry.target.style.animation = 'zoom-in 0.8s ease-out';
                }
            }
        });
    }, observerOptions);

    // Observer tous les éléments avec animate-on-scroll
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Navbar scroll effect avec parallaxe
    const nav = document.querySelector('nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        // Effet parallaxe sur les sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                section.style.transform = `translateY(${rate * 0.1}px)`;
            }
        });

        lastScroll = currentScroll;
    });

    // Smooth scroll pour les liens de navigation avec animation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Animation de shake sur le lien cliqué
                this.classList.add('animate-shake');
                setTimeout(() => this.classList.remove('animate-shake'), 500);
                
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animation des particules flottantes améliorées
    function createParticles() {
        const particleContainer = document.createElement('div');
        particleContainer.className = 'floating-particles';
        document.body.appendChild(particleContainer);

        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
            particle.style.width = (Math.random() * 6 + 2) + 'px';
            particle.style.height = particle.style.width;
            particle.style.opacity = Math.random() * 0.5 + 0.3;
            particleContainer.appendChild(particle);
        }
    }

    createParticles();

    // Animation au chargement de la page
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Animation de texte révélé
        const textElements = document.querySelectorAll('.text-reveal');
        textElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
            }, index * 200);
        });
    });

    // Animation de hover sur les icônes avec rotation
    document.querySelectorAll('#competences i').forEach(icon => {
        icon.classList.add('icon-hover');
    });

    // Animation de bounce sur les cartes de projets au hover
    document.querySelectorAll('#projets > div > div').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.animation = 'zoom-in 0.3s ease-out';
        });
    });

    // Animation de glow sur les titres
    document.querySelectorAll('h2').forEach(title => {
        title.addEventListener('mouseenter', function() {
            this.classList.add('animate-text-glow');
        });
        title.addEventListener('mouseleave', function() {
            this.classList.remove('animate-text-glow');
        });
    });

    // Animation de heartbeat sur le logo
    const logo = document.querySelector('nav span');
    if (logo) {
        setInterval(() => {
            logo.classList.add('animate-heartbeat');
            setTimeout(() => logo.classList.remove('animate-heartbeat'), 1500);
        }, 3000);
    }

    // Animation de rotation lente sur certaines icônes
    document.querySelectorAll('#competences i').forEach((icon, index) => {
        if (index % 3 === 0) {
            icon.classList.add('animate-spin-slow');
        }
    });

    // Effet de parallaxe sur la photo de profil
    const profileImg = document.querySelector('#accueil img');
    if (profileImg) {
        window.addEventListener('mousemove', (e) => {
            const rect = profileImg.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            profileImg.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`;
        });
    }

    // Animation de wave sur les boutons
    document.querySelectorAll('button, a[href^="#"]').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.classList.add('animate-wave');
        });
        btn.addEventListener('mouseleave', function() {
            this.classList.remove('animate-wave');
        });
    });

    // Animation de glitch sur le titre principal au hover
    const mainTitle = document.querySelector('#accueil h1');
    if (mainTitle) {
        mainTitle.addEventListener('mouseenter', function() {
            this.classList.add('animate-glitch');
            setTimeout(() => this.classList.remove('animate-glitch'), 900);
        });
    }
});

