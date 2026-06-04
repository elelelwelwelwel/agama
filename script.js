// Toggle timeline items
function toggleTimeline(element) {
    element.classList.toggle('expanded');
}

// Toggle teaching cards
function toggleTeaching(element) {
    element.classList.toggle('active');
}

// Menyimpan path foto dan deskripsi kustom untuk setiap momen
const galleryData = [
    {
        src: 'images/gospel.jpg',
        desc: 'Injil menurut Yohanes menekankan keilahian Yesus Kristus sebagai "Firman yang telah menjadi manusia".'
    },
    {
        src: 'images/last-supper.jpg',
        desc: 'Momen sakral Perjamuan Malam Terakhir, di mana Yohanes bersandar dekat dengan Yesus sebagai murid yang dikasihi.'
    },
    {
        src: 'images/pentecost.jpg',
        desc: 'Peristiwa turunnya Roh Kudus dalam rupa lidah-lidah api yang meneguhkan para rasul untuk mulai mewartakan Injil.'
    },
    {
        src: 'images/patmos.jpg',
        desc: 'Pulau Patmos, tempat di mana Santo Yohanes diasingkan dan menerima penglihatan ilahi yang dicatat dalam Kitab Wahyu.'
    },
    {
        src: 'images/ressurection.jpg',
        desc: 'Sukacita Kebangkitan: Yohanes bersama Petrus berlari menuju kubur yang kosong dan melihat kain kafan yang terlipat.'
    },
    {
        src: 'images/vision.jpg',
        desc: 'Penglihatan Surgawi yang agung tentang Yerusalem Baru dan takhta kemuliaan Allah seperti yang tertulis di akhir Zaman.'
    }
];

// Fungsi untuk membuka Lightbox (Pop-up)
function openLightbox(index) {
    const lightboxImageContainer = document.getElementById('lightbox-image');
    const item = galleryData[index];
    
    // HTML dinamis: Menyisipkan Gambar + Deskripsi di bawahnya
    lightboxImageContainer.innerHTML = `
        <div class="lightbox-wrapper">
            <img src="${item.src}" class="responsive-lightbox-img" alt="Momen Suci">
            <div class="lightbox-description">
                <p>${item.desc}</p>
            </div>
        </div>
    `;
    
    document.getElementById('lightbox').classList.add('active');
}

// Close lightbox
function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

// Close lightbox when clicking outside
document.addEventListener('click', function(event) {
    const lightbox = document.getElementById('lightbox');
    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});


// Scroll animation for journey section
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

// Observe all journey milestones
document.querySelectorAll('.journey-milestone').forEach(el => observer.observe(el));

// Smooth scroll for CTA button
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add scroll animations to teaching cards
const teachingCards = document.querySelectorAll('.teaching-card');
const teachingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

teachingCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    teachingObserver.observe(card);
});

// Add scroll animations to timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, { threshold: 0.1 });

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});

// Add scroll animations to gallery items
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

galleryItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.5s ease';
    galleryObserver.observe(item);
});

// Add scroll animations to prayer cards
const prayerCards = document.querySelectorAll('.prayer-card');
const prayerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

prayerCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    prayerObserver.observe(card);
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition < window.innerHeight) {
        hero.style.backgroundPosition = '0% ' + (scrollPosition * 0.5) + 'px';
    }
});

// Prevent multiple quiz submissions
let quizSubmitted = false;

function submitQuiz() {
    if (quizSubmitted) return;
    
    quizSubmitted = true;
    document.getElementById('achievement').classList.add('show');
    document.getElementById('submitBtn').disabled = true;
    
    // Scroll to achievement
    setTimeout(() => {
        document.getElementById('achievement').scrollIntoView({ behavior: 'smooth' });
    }, 300);
}

// Add hover effects to footer links
const footerLinks = document.querySelectorAll('.footer-section a');
footerLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.textDecoration = 'underline';
    });
    
    link.addEventListener('mouseout', function() {
        this.style.textDecoration = 'none';
    });
});

// Dynamically update year in footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const footerBottom = document.querySelector('.footer-bottom');
    if (footerBottom) {
        footerBottom.innerHTML = footerBottom.innerHTML.replace('2024', currentYear);
    }
});

// Add console message
console.log('%c✨ Santo Yohanes Website ✨', 'color: #6B21A8; font-size: 16px; font-weight: bold;');
console.log('%cWelcome to the sacred space dedicated to Saint John', 'color: #E91E63; font-size: 14px;');
console.log('%cMay his teachings guide your spiritual journey', 'color: #00BCD4; font-size: 14px;');