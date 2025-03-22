// التحكم في زر العودة للأعلى
window.onscroll = function() {
    // إظهار/إخفاء الزر بناءً على موقع التمرير
    const backToTopButton = document.querySelector('.back-to-top');
    backToTopButton.classList.toggle('show', window.scrollY > 300);
};

// التمرير السلس إلى الأعلى عند النقر على الزر
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// تبديل الوضع المظلم
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// التحكم في زر العودة للأعلى
window.onscroll = function() {
    const backToTopButton = document.querySelector('.back-to-top');
    backToTopButton.classList.toggle('show', window.scrollY > 300);
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// تبديل الوضع المظلم
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// تبديل قائمة الهمبرغر
document.querySelector('.nav-toggle').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});