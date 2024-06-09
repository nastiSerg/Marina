document.addEventListener("DOMContentLoaded", function() {
    // Анимация появления элементов при прокрутке
    const elements = document.querySelectorAll('.animated');
    window.addEventListener('scroll', scrollHandler);

    function scrollHandler() {
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Скрытие/показ кнопки "Наверх" при прокрутке страницы
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', toggleScrollToTopBtn);

    function toggleScrollToTopBtn() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }

    scrollToTopBtn.addEventListener('click', scrollToTop);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Увеличение изображения товара при наведении
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.addEventListener('mouseenter', function() {
            const image = this.querySelector('img');
            image.style.transform = 'scale(1.1)';
            image.style.transition = 'transform 0.3s ease';
        });

        product.addEventListener('mouseleave', function() {
            const image = this.querySelector('img');
            image.style.transform = 'scale(1)';
        });
    });

    // Подсветка выбранного товара в магазине
    const currentPage = window.location.pathname.split('/').pop();
    const links = document.querySelectorAll('.shop .product a');

    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('current');
        }
    });
});

