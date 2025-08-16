// Programs Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Initialize: show first tab by default
    if (tabButtons.length > 0) {
        showTab(tabButtons[0].dataset.tab);
        tabButtons[0].classList.add('active');
    }

    // Add click event listeners to tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding tab content
            showTab(targetTab);
        });
    });

    function showTab(tabName) {
        // Hide all tab contents
        tabContents.forEach(content => {
            content.style.display = 'none';
            content.classList.remove('active');
        });

        // Show selected tab content
        const activeContent = document.getElementById(tabName);
        if (activeContent) {
            activeContent.style.display = 'block';
            activeContent.classList.add('active');
            
            // Add fade-in animation
            activeContent.style.opacity = '0';
            setTimeout(() => {
                activeContent.style.opacity = '1';
            }, 10);
        }
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animation for program cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all program cards
    document.querySelectorAll('.program-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Filter functionality (if needed in future)
    window.filterPrograms = function(category) {
        const cards = document.querySelectorAll('.program-card');
        
        cards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    };

    // Program application modal (future enhancement)
    window.openApplicationForm = function(programName) {
        if (programName === 'International Programs') {
            alert(`International Exchange Program applications are now open! Please visit the International Office or contact international@bu.ac.bd for detailed application procedures and requirements.`);
        } else {
            alert(`Application form for ${programName} will be available soon. Please contact the admissions office for more information.`);
        }
    };

    // Program details modal (future enhancement)
    window.showProgramDetails = function(programId) {
        console.log(`Showing details for program: ${programId}`);
        
        if (programId === 'international') {
            alert(`International Programs Details:\n\n• Exchange programs with 15+ partner universities\n• Scholarship opportunities available\n• Academic credit transfer\n• Cultural immersion experiences\n• Professional development support\n\nFor more information, contact: international@bu.ac.bd`);
        } else {
            alert(`Detailed information for this program will be available soon. Please contact the department for more information.`);
        }
        // This can be expanded to show a modal with detailed program information
    };

    // Enhanced scroll animations for new sections
    const enhancedObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
    };

    const enhancedObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add staggered animation for facility cards
                if (entry.target.classList.contains('facility-card')) {
                    const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0) scale(1)';
                    }, delay);
                }
            }
        });
    }, enhancedObserverOptions);

    // Observe facility cards, career cards, and collaboration cards
    document.querySelectorAll('.facility-card, .career-card, .collaboration-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.95)';
        card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        enhancedObserver.observe(card);
    });

    // Counter animation for statistics (if any are added later)
    window.animateCounter = function(element, target, duration = 2000) {
        let start = 0;
        const step = target / (duration / 16); // 60fps
        const timer = setInterval(() => {
            start += step;
            element.textContent = Math.floor(start);
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            }
        }, 16);
    };

    // Add hover effects for company logos
    const companyLogos = document.querySelectorAll('[class*="company-logo"]');
    companyLogos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Smooth reveal animation for sections
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, { threshold: 0.1 });

    // Observe all major sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('section-hidden');
        sectionObserver.observe(section);
    });
});
