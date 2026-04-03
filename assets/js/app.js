document.addEventListener('DOMContentLoaded', function () {
    renderSkills(); // Keeping original for reference if needed, but likely replaced by bento
    renderAboutBento();
    renderServices();
    renderPortfolio();
    renderTestimonials();

    // Initialize Plugins after rendering
    initAOS();
    initSwiper();
    initPortfolioFilter();
});

function renderAboutBento() {
    const container = document.getElementById('about-bento-grid');
    if (!container) return;

    // 1. Who I Am (Large - Col Span 2, Row Span 2)
    const bioCard = `
        <div class="md:col-span-2 md:row-span-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group flex flex-col justify-between"
             data-aos="fade-right">
            <div class="mb-6">
                <div class="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl mb-6 shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform duration-300">
                    <i class="ri-user-smile-line text-3xl text-white"></i>
                </div>
                <h3 class="text-3xl font-bold text-white mb-4">Who I Am</h3>
                <p class="text-gray-300 leading-relaxed text-lg">
                    I'm Abdallah Ahmed Samir, a passionate creative professional from Cairo, Egypt. 
                    I blend the artistic world of <span class="text-primary-400 font-semibold">Graphic Design</span> 
                    with the logical precision of <span class="text-secondary-400 font-semibold">Front-End Development</span> 
                    and the analytical mindset of <span class="text-accent-400 font-semibold">Accounting</span>.
                </p>
                <p class="text-gray-300 leading-relaxed mt-4">
                     Currently pursuing my degree at Faculty of Commerce – Ain Shams University.
                </p>
            </div>
            <div class="flex gap-4">
                <a href="#contact" class="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white font-medium transition-all duration-300 flex items-center gap-2">
                    Let's Talk <i class="ri-chat-1-line"></i>
                </a>
                <a href="#portfolio" class="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-medium shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:scale-105 transition-all duration-300">
                    My Work
                </a>
            </div>
        </div>
    `;

    // 2. Tech Stack (Wide - Col Span 2)
    const skillsList = siteData.skills.slice(0, 4).map(skill => `
        <div class="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <i class="${skill.icon} text-2xl text-${skill.color}-400"></i>
            <span class="text-xs text-gray-300 font-medium">${skill.name}</span>
        </div>
    `).join('');

    const stackCard = `
         <div class="md:col-span-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 group"
              data-aos="fade-down" data-aos-delay="100">
            <h4 class="text-white font-bold mb-4 flex items-center gap-2">
                <i class="ri-code-box-line text-secondary-400"></i> Tech Stack
            </h4>
            <div class="grid grid-cols-4 gap-4">
                ${skillsList}
            </div>
         </div>
    `;

    // 3. Location (Small - Col Span 1)
    const locationCard = `
        <div class="md:col-span-1 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 group flex flex-col items-center justify-center text-center"
             data-aos="fade-up" data-aos-delay="200">
            <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary-500/20 transition-colors">
                <i class="ri-map-pin-2-line text-2xl text-primary-400"></i>
            </div>
            <h4 class="text-white font-bold text-lg">Cairo, EG</h4>
            <p class="text-gray-400 text-sm">Base of Operations</p>
        </div>
    `;

    // 4. Experience / Stat (Small - Col Span 1)
    const statCard = `
        <div class="md:col-span-1 backdrop-blur-xl bg-gradient-to-br from-primary-900/50 to-primary-800/20 border border-primary-500/20 rounded-3xl p-6 hover:border-primary-500/40 transition-all duration-300 group flex flex-col items-center justify-center text-center">
             <h3 class="text-4xl font-bold text-white mb-1">3+</h3>
             <p class="text-primary-200 text-sm font-medium">Years Experience</p>
             <p class="text-xs text-primary-300/60 mt-2">Design & Dev</p>
        </div>
    `;

    // 5. Education (Col Span 2)
    const eduCard = `
        <div class="md:col-span-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300"
             data-aos="fade-up" data-aos-delay="300">
             <h4 class="text-white font-bold mb-4 flex items-center gap-2">
                <i class="ri-graduation-cap-line text-accent-400"></i> Education
            </h4>
            <div class="flex items-start gap-4">
                <div class="flex-1">
                    <p class="text-white font-medium text-lg">Ain Shams University</p>
                    <p class="text-gray-400 text-sm">Faculty of Commerce</p>
                    <div class="mt-3 flex gap-2">
                         <span class="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">2023–2028</span>
                         <span class="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">Accounting</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    container.innerHTML = bioCard + stackCard + locationCard + statCard + eduCard;
}

function renderSkills() {
    const container = document.getElementById('skills-grid');
    if (!container) return;

    container.innerHTML = siteData.skills.map((skill, index) => `
        <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-${skill.color}-500/20 group cursor-pointer hover-card"
             data-aos="zoom-in" data-aos-delay="${index * 100}">
            <div class="w-12 h-12 flex items-center justify-center bg-${skill.color}-500/20 rounded-lg mb-4 group-hover:bg-${skill.color}-500/30 transition-all duration-300">
                <i class="${skill.icon} text-2xl text-${skill.color}-400"></i>
            </div>
            <p class="text-white font-semibold">${skill.name}</p>
        </div>
    `).join('');
}

function renderExperience() {
    const container = document.getElementById('experience-grid');
    if (!container) return;

    container.innerHTML = siteData.experience.map(exp => `
        <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <h4 class="text-xl font-bold text-primary-400 mb-4 flex items-center gap-2">
                <i class="${exp.icon}"></i>${exp.title}
            </h4>
            <ul class="space-y-2">
                ${exp.items.map(item => `
                    <li class="text-gray-300 flex items-start gap-2">
                        <i class="ri-arrow-right-s-line text-secondary-400 mt-1"></i>
                        <span>${item}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `).join('');
}

function renderServices() {
    const container = document.getElementById('services-grid');
    if (!container) return;

    container.innerHTML = siteData.services.map((service, index) => {
        // Bento Grid Logic
        let gridClass = 'md:col-span-1';
        if (index === 0) gridClass = 'md:col-span-2';
        if (index === 3) gridClass = 'md:col-span-2';

        return `
        <div class="${gridClass} group relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-${service.color}-500/20 flex flex-col justify-between"
             data-aos="fade-up" data-aos-delay="${index * 100}">
            
            <!-- Background Gradient Orb -->
            <div class="absolute -top-20 -right-20 w-64 h-64 bg-${service.color}-500/10 rounded-full blur-3xl group-hover:bg-${service.color}-500/20 transition-all duration-500"></div>

            <div class="relative z-10">
                <div class="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-${service.color}-500/20 to-${service.color}-500/10 border border-${service.color}-500/30 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-${service.color}-500/10">
                    <i class="${service.icon} text-3xl text-${service.color}-400"></i>
                </div>
                
                <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                    ${service.title}
                </h3>
                
                <p class="text-gray-300 leading-relaxed mb-6 text-sm md:text-base opacity-80 group-hover:opacity-100 transition-opacity">
                    ${service.desc}
                </p>
                
                <div class="space-y-3 mb-8">
                    ${service.features.map(feature => `
                        <div class="flex items-center gap-3">
                             <div class="w-2 h-2 rounded-full bg-${service.color}-400"></div>
                             <span class="text-gray-300 text-sm font-medium">${feature}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="relative z-10 pt-6 border-t border-white/10">
                <a href="#contact" class="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all duration-300">
                    <span class="group-hover:text-${service.color}-400 transition-colors">Get Started</span>
                    <i class="ri-arrow-right-line text-${service.color}-400"></i>
                </a>
            </div>
        </div>
        `;
    }).join('');
}

function renderPortfolio() {
    const container = document.getElementById('portfolio-grid');
    if (!container) return;

    container.innerHTML = siteData.portfolio.map((item, index) => `
        <div data-category="${item.category}"
             class="portfolio-item group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-primary-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/20 cursor-pointer">
            <div class="relative h-56 md:h-64 overflow-hidden" onclick="openModal(${index})">
                <img alt="${item.title}" loading="lazy"
                     class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                     src="${item.image}">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button onclick="openModal(${index}); event.stopPropagation();" 
                        class="px-6 py-3 bg-white/20 backdrop-blur-md text-white font-semibold rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 whitespace-nowrap cursor-pointer">
                        View Details
                    </button>
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                    ${item.title}
                </h3>
                <p class="text-gray-400 text-sm mb-4 line-clamp-2">${item.desc}</p>
                <div class="flex flex-wrap gap-2">
                    ${item.tags.map(tag => `
                        <span class="px-3 py-1 text-xs font-medium bg-white/10 text-primary-400 rounded-full border border-primary-500/30">
                            ${tag}
                        </span>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function renderTestimonials() {
    const container = document.querySelector('.testimonialSwiper .swiper-wrapper');
    if (!container) return;

    container.innerHTML = siteData.testimonials.map(item => `
        <div class="swiper-slide h-auto">
            <div class="h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:border-${item.color}-500/30 group">
                <div class="mb-4">
                    <i class="ri-double-quotes-l text-4xl text-${item.color}-500/50 group-hover:text-${item.color}-400 transition-colors"></i>
                </div>
                <p class="text-gray-300 leading-relaxed mb-6">"${item.quote}"</p>
                <div class="flex items-center gap-4 pt-4 border-t border-white/10">
                    <img src="${item.image}" alt="${item.name}" loading="lazy"
                         class="w-12 h-12 rounded-full object-cover border-2 border-${item.color}-500/50">
                    <div>
                        <h4 class="text-white font-bold text-sm">${item.name}</h4>
                        <p class="text-${item.color}-400 text-xs">${item.role}</p>
                        <p class="text-gray-500 text-xs">${item.company}</p>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function initAOS() {
    AOS.init({
        duration: 550,
        once: true,
        offset: 10, // Reduced from 100 to make content appear sooner
        easing: 'ease-out-cubic'
    });
}

function initSwiper() {
    const swiperContainer = document.querySelector(".testimonialSwiper");
    if (!swiperContainer) return;

    const swiper = new Swiper(".testimonialSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });
}

function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.portfolio-filter');
    const portfolioGrid = document.getElementById('portfolio-grid');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            const items = portfolioGrid.querySelectorAll('.portfolio-item');

            // Update button styles
            filterButtons.forEach(b => {
                if (b === btn) {
                    b.classList.remove('bg-white/10', 'text-gray-300', 'hover:bg-white/20', 'border-white/10');
                    b.classList.add('bg-gradient-to-r', 'from-primary-500', 'to-secondary-500', 'text-white', 'shadow-lg', 'shadow-primary-500/30');
                } else {
                    b.classList.add('bg-white/10', 'text-gray-300', 'hover:bg-white/20', 'border-white/10');
                    b.classList.remove('bg-gradient-to-r', 'from-primary-500', 'to-secondary-500', 'text-white', 'shadow-lg', 'shadow-primary-500/30');
                }
            });

            // Filter items animation
            items.forEach(item => {
                item.classList.add('scale-90', 'opacity-0');
            });

            setTimeout(() => {
                items.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        item.classList.remove('hidden');
                        item.style.display = 'block';
                        void item.offsetWidth; // Trigger reflow
                        item.classList.remove('scale-90', 'opacity-0');
                    } else {
                        item.classList.add('hidden');
                        item.style.display = 'none';
                    }
                });
                AOS.refresh();
            }, 300);
        });
    });
}


// Modal Functions
function openModal(index) {
    const project = siteData.portfolio[index];
    if (!project) return;

    // Populate Data
    const modalImage = document.getElementById('modal-image');
    if (modalImage) modalImage.src = project.image;

    setText('modal-title', project.title);
    setText('modal-subtitle', project.role || project.category);
    setText('modal-category', project.category);
    setText('modal-description', project.longDescription || project.desc);
    setText('modal-client', project.client || 'Personal Project');
    setText('modal-date', project.year || '2024');

    // Tags
    const tagsContainer = document.getElementById('modal-tags');
    if (tagsContainer) {
        tagsContainer.innerHTML = project.tags.map(tag => `
            <span class="px-3 py-1 text-xs font-medium bg-white/10 text-primary-400 rounded-full border border-primary-500/30">
                ${tag}
            </span>
        `).join('');
    }

    // Link
    const linkBtn = document.getElementById('modal-link');
    if (linkBtn) {
        if (project.link) {
            linkBtn.href = project.link;
            linkBtn.style.display = 'flex';
        } else {
            linkBtn.style.display = 'none';
        }
    }

    // Show Modal
    const modal = document.getElementById('project-modal');
    const backdrop = document.getElementById('modal-backdrop');
    const panel = document.getElementById('modal-panel');

    if (modal && backdrop && panel) {
        modal.classList.remove('hidden');
        // Small delay to allow display:block to apply before opacity transition
        setTimeout(() => {
            backdrop.classList.remove('opacity-0');
            panel.classList.remove('opacity-0', 'scale-95');
            panel.classList.add('opacity-100', 'scale-100');
        }, 10);
        document.body.style.overflow = 'hidden'; // Disable scroll
    }
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    const backdrop = document.getElementById('modal-backdrop');
    const panel = document.getElementById('modal-panel');

    if (modal && backdrop && panel) {
        backdrop.classList.add('opacity-0');
        panel.classList.remove('opacity-100', 'scale-100');
        panel.classList.add('opacity-0', 'scale-95');

        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = ''; // Enable scroll
        }, 300);
    }
}

// Helper
function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
}

// Global Event Listeners
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
