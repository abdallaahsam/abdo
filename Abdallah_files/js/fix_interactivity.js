
document.addEventListener('DOMContentLoaded', function () {
    // --- Initialize AOS ---
    AOS.init({
        duration: 550,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
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
