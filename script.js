document.addEventListener('DOMContentLoaded', () => {
    // 1. Funcionalidade do Menu Hambúrguer
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active'); 
            burgerMenu.classList.toggle('open'); 
        });

        // Fechar o menu ao clicar em um link (apenas em mobile)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    burgerMenu.classList.remove('open');
                }
            });
        });
    }

    // 2. Rolagem Suave para Links de Navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 

            const targetId = this.getAttribute('href'); 
            const targetElement = document.querySelector(targetId); 

            if (targetElement) {
                // Rola suavemente para o elemento
                window.scrollTo({
                    top: targetElement.offsetTop - (document.querySelector('header').offsetHeight || 0), 
                    behavior: 'smooth'
                });
            }
        });

    });

    // 3. Destacar Link Ativo na Navegação (Opcional, mas melhora a UX)
    const sections = document.querySelectorAll('section');
    const navLinksList = document.querySelectorAll('.nav-links a');

    const highlightNavLink = () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - (document.querySelector('header').offsetHeight || 0) - 50; 
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinksList.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink(); 

});