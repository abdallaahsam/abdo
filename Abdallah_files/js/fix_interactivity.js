
document.addEventListener('DOMContentLoaded', function () {
    // --- Initialize AOS ---
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
    });

    // --- Testimonials Logic ---
    const testimonials = [
        {
            name: "Ahmed Hassan",
            role: "Marketing Director",
            company: "Tech Solutions Egypt",
            image: "./Abdallah_files/df27d0759fe61c721c7df18eac1c1ad8.jpg",
            text: "Abdallah delivered exceptional social media designs that significantly increased our engagement. His creativity and professionalism are outstanding."
        },
        {
            name: "Sara Mohamed",
            role: "Startup Founder",
            company: "GreenTech Innovations",
            image: "./Abdallah_files/search-image(7).jpg",
            text: "The brand identity package was exactly what we needed. Abdallah understood our vision and brought it to life beautifully."
        },
        {
            name: "Omar Khalil",
            role: "Restaurant Owner",
            company: "Cairo Bites",
            image: "./Abdallah_files/search-image(8).jpg",
            text: "Our new website looks amazing and works perfectly on all devices. Great attention to detail and quick turnaround time."
        },
        {
            name: "Layla Ibrahim",
            role: "Event Coordinator",
            company: "Elite Events",
            image: "./Abdallah_files/search-image(9).jpg",
            text: "The event posters and promotional materials were stunning. Abdallah has a great eye for design and understands client needs."
        },
        {
            name: "Youssef Ali",
            role: "E-commerce Manager",
            company: "Digital Market Hub",
            image: "./Abdallah_files/search-image(10).jpg",
            text: "Working with Abdallah was a pleasure. He created stunning product visuals that boosted our online sales significantly."
        },
        {
            name: "Nour Mahmoud",
            role: "Content Creator",
            company: "Creative Studio",
            image: "./Abdallah_files/search-image(11).jpg",
            text: "The social media templates are exactly what I needed. Professional, modern, and easy to customize. Highly recommended!"
        }
    ];

    let currentTestimonialIndex = 0;

    const quoteEl = document.getElementById('testimonial-quote');
    const imageEl = document.getElementById('testimonial-image');
    const nameEl = document.getElementById('testimonial-name');
    const roleEl = document.getElementById('testimonial-role');
    const companyEl = document.getElementById('testimonial-company');
    const prevBtn = document.getElementById('testimonial-prev');
    const nextBtn = document.getElementById('testimonial-next');
    const dots = document.querySelectorAll('.testimonial-dot');

    function updateTestimonial(index) {
        const data = testimonials[index];
        quoteEl.textContent = `"${data.text}"`;
        imageEl.src = data.image;
        imageEl.alt = data.name;
        nameEl.textContent = data.name;
        roleEl.textContent = data.role;
        companyEl.textContent = data.company;

        // Update dots
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.remove('w-3', 'bg-white/30', 'hover:bg-white/50');
                dot.classList.add('w-12', 'bg-gradient-to-r', 'from-cyan-500', 'to-purple-500');
            } else {
                dot.classList.add('w-3', 'bg-white/30', 'hover:bg-white/50');
                dot.classList.remove('w-12', 'bg-gradient-to-r', 'from-cyan-500', 'to-purple-500');
            }
        });
        currentTestimonialIndex = index;
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            let newIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
            updateTestimonial(newIndex);
        });

        nextBtn.addEventListener('click', () => {
            let newIndex = (currentTestimonialIndex + 1) % testimonials.length;
            updateTestimonial(newIndex);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateTestimonial(index);
        });
    });

    // --- Portfolio Logic ---
    const filterButtons = document.querySelectorAll('.portfolio-filter');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            // Update button styles
            filterButtons.forEach(b => {
                if (b === btn) {
                    b.classList.remove('bg-white/10', 'text-gray-300', 'hover:bg-white/20', 'border-white/10');
                    b.classList.add('bg-gradient-to-r', 'from-cyan-500', 'to-purple-500', 'text-white', 'shadow-lg', 'shadow-cyan-500/30');
                } else {
                    b.classList.add('bg-white/10', 'text-gray-300', 'hover:bg-white/20', 'border-white/10');
                    b.classList.remove('bg-gradient-to-r', 'from-cyan-500', 'to-purple-500', 'text-white', 'shadow-lg', 'shadow-cyan-500/30');
                }
            });

            // Filter items
            // Filter items with animation
            portfolioItems.forEach(item => {
                // Scale down and fade out all items
                item.classList.add('scale-90', 'opacity-0');
            });

            setTimeout(() => {
                portfolioItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        item.classList.remove('hidden');
                        item.style.display = 'block';
                        // Trigger reflow
                        void item.offsetWidth;
                        // Scale up and fade in
                        item.classList.remove('scale-90', 'opacity-0');
                    } else {
                        item.classList.add('hidden');
                        item.style.display = 'none';
                    }
                });
                // Re-trigger AOS layout refresh
                AOS.refresh();
            }, 300); // Wait for transition to finish
        });
    });
});
