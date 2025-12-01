document.addEventListener('DOMContentLoaded', () => {
            const carousel = document.getElementById('carousel');
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            const slides = document.querySelectorAll('.carousel-slide');
            const totalSlides = slides.length;
            let currentIndex = 0;

            // Função para atualizar a posição do carrossel
            const updateCarousel = () => {
                const offset = -currentIndex * 100;
                carousel.style.transform = `translateX(${offset}%)`;
            };

            // Navegar para o slide anterior
            const prevSlide = () => {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
                updateCarousel();
            };

            // Navegar para o próximo slide
            const nextSlide = () => {
                currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
                updateCarousel();
            };

            // Adiciona listeners aos botões
            if (prevBtn) {
                prevBtn.addEventListener('click', prevSlide);
            }
            if (nextBtn) {
                nextBtn.addEventListener('click', nextSlide);
            }

            // Autoplay (opcional)
            const carouselSection = document.querySelector('.carousel-section');
            const startAutoplay = () => {
                return setInterval(nextSlide, 5000); // Muda a cada 5 segundos
            };
            let autoSlide = startAutoplay();

            // Pausa o autoplay ao passar o mouse (melhora a usabilidade)
            carouselSection.addEventListener('mouseenter', () => clearInterval(autoSlide));
            carouselSection.addEventListener('mouseleave', () => autoSlide = startAutoplay());

            // Garante que o carrossel se ajuste se a tela for redimensionada (embora 100% já ajude)
            window.addEventListener('resize', updateCarousel);
            
            // Inicializa o carrossel na posição 0
            updateCarousel();
        });

document.addEventListener('DOMContentLoaded', ()){
    const busca = document.getElementById('busca');
    let loja1 = document.getElementById('loja-1');
    let loja2 = document.getElementById('loja-2')
    
    if (busca = Barueri){
        window.print('loja-1','loja-2' )
    }
};


