// تفعيل خلفية الجزيئات
particlesJS('particles-js', {
    particles: { number: { value: 50 }, color: { value: '#3498db' }, move: { speed: 2 } },
    interactivity: { events: { onhover: { enable: true, mode: 'repulse' } } }
});

// تبديل الوضع المظلم
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// العودة للأعلى
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// التحكم في التمرير
window.onscroll = function() {
    // زر العودة للأعلى
    document.querySelector('.back-to-top').classList.toggle('show', window.scrollY > 300);

    // تحميل الأقسام ديناميكيًا
    document.querySelectorAll('section').forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight) {
            section.classList.add('visible');
        }
    });

    // تثبيت شريط التنقل عند التمرير لأعلى
    let lastScroll = window.scrollY;
    let nav = document.querySelector('nav');
    if (lastScroll > window.scrollY) nav.style.top = '0';
    else nav.style.top = '-60px';
};

// تفعيل قائمة التنقل في الجوال
document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});

window.onscroll = function() {
    document.querySelector('.back-to-top').classList.toggle('show', window.scrollY > 300);
    document.querySelectorAll('section').forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight) {
            section.classList.add('visible');
            // تأثير للتوصيات
            if (section.id === 'testimonials') {
                section.querySelectorAll('.testimonial').forEach((testimonial, index) => {
                    setTimeout(() => {
                        testimonial.classList.add('visible');
                    }, index * 200); // تأخير 200ms لكل عنصر
                });
            }
        }
    });
    let lastScroll = window.scrollY;
    let nav = document.querySelector('nav');
    if (lastScroll > window.scrollY) nav.style.top = '0';
    else nav.style.top = '-60px';
};

