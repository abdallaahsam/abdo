// تفعيل خلفية الجزيئات
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#2563eb'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            animation: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#2563eb',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.5
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// تحسينات عامة
document.addEventListener('DOMContentLoaded', () => {
    // إضافة مؤشر التمرير
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    document.body.appendChild(scrollIndicator);

    // تحسين أداء التمرير
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateScrollIndicator();
                ticking = false;
            });
            ticking = true;
        }
    });

    // تهيئة معرض الأعمال
    initPortfolio();

    // تحسين تحميل الصور
    const images = document.querySelectorAll('img[loading="lazy"]');
    if ('loading' in HTMLImageElement.prototype) {
        images.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
            }
        });
    } else {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // تحسين أداء الحركات
    const animatedElements = document.querySelectorAll('.animate');
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => animationObserver.observe(el));

    initLanguageProgress();
});

// تحديث مؤشر التمرير
function updateScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollIndicator.style.transform = `scaleX(${scrolled / 100})`;
    scrollIndicator.classList.toggle('visible', scrolled > 0);
}

// تحسين تبديل الوضع المظلم
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    
    // تحديث أيقونة الزر
    const icon = document.querySelector('.dark-mode-toggle i');
    icon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
}

// تحميل تفضيل الوضع المظلم
const darkMode = localStorage.getItem('darkMode') === 'true';
if (darkMode) {
    document.body.classList.add('dark-mode');
    document.querySelector('.dark-mode-toggle i').className = 'fas fa-sun';
}

// تحسين العودة للأعلى
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// تحسين أداء التمرير
let lastScroll = 0;
let nav = document.querySelector('nav');
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const currentScroll = window.pageYOffset;
            
            // إظهار/إخفاء شريط التنقل
            if (currentScroll > lastScroll && currentScroll > 100) {
                nav.style.transform = 'translateY(-100%)';
            } else {
                nav.style.transform = 'translateY(0)';
            }
            
            // إظهار/إخفاء زر العودة للأعلى
            const backToTop = document.querySelector('.back-to-top');
            backToTop.classList.toggle('show', currentScroll > 300);
            
            lastScroll = currentScroll;
            ticking = false;
        });
        ticking = true;
    }
});

// تحسين قائمة التنقل في الجوال
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    body.classList.toggle('menu-open');
    navToggle.setAttribute('aria-expanded', 
        navToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
    );
});

// إغلاق القائمة عند النقر على رابط
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});

// إغلاق القائمة عند النقر خارجها
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
        navToggle.setAttribute('aria-expanded', 'false');
    }
});

// إغلاق القائمة عند تغيير حجم النافذة
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
        navToggle.setAttribute('aria-expanded', 'false');
    }
});

// تحسين تحميل الأقسام
const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // تأثير خاص للتوصيات
            if (entry.target.id === 'testimonials') {
                const testimonials = entry.target.querySelectorAll('.testimonial');
                testimonials.forEach((testimonial, index) => {
                    setTimeout(() => {
                        testimonial.style.opacity = '1';
                        testimonial.style.transform = 'translateY(0)';
                    }, index * 200);
                });
            }
            
            // تفعيل العدادات في قسم الإحصائيات
            if (entry.target.id === 'stats') {
                initCounters();
            }
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => sectionObserver.observe(section));

// تحسين أداء النماذج
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        try {
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
            
            // محاكاة الإرسال
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            submitButton.innerHTML = '<i class="fas fa-check"></i> تم الإرسال بنجاح';
            form.reset();
            
            setTimeout(() => {
                submitButton.innerHTML = originalText;
            }, 2000);
        } catch (error) {
            submitButton.innerHTML = '<i class="fas fa-exclamation-circle"></i> حدث خطأ';
            setTimeout(() => {
                submitButton.innerHTML = originalText;
            }, 2000);
        } finally {
            submitButton.disabled = false;
        }
    });
});

// تحسين تفاعل شريط التقدم في قسم اللغات
function initLanguageProgress() {
    const progressBars = document.querySelectorAll('.progress');
    
    progressBars.forEach(bar => {
        const level = parseInt(bar.dataset.level);
        bar.style.width = '0';
        
        // إضافة تأثير حركي عند ظهور العنصر
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        bar.style.width = `${level}%`;
                    }, 300);
                    observer.unobserve(bar);
                }
            });
        }, {
            threshold: 0.5
        });
        
        observer.observe(bar);
    });
}

// تفعيل العدادات
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        let count = 0;
        
        const updateCount = () => {
            const increment = Math.ceil(target / speed);
            
            if (count < target) {
                count += increment;
                counter.innerText = count;
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCount();
    });
}

// تفعيل معرض الأعمال
function initPortfolio() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // إزالة الحالة النشطة من جميع الأزرار
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // إضافة الحالة النشطة للزر المضغوط
            button.classList.add('active');
            
            // تصفية العناصر
            const filter = button.dataset.filter;
            
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // تفعيل عناصر المعرض عند بدء الصفحة
    portfolioItems.forEach(item => {
        item.style.display = 'block';
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
        }, 100);
    });
}

