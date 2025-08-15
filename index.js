// Program / Degree Selector Logic
const programs = {
	ug: [
		{
			title: "BSc in Computer Science & Engineering",
			desc: "A 4-year undergraduate program focusing on core computing, software, and hardware skills.",
			duration: "4 Years (8 Semesters)",
			link: "#programs",
		},
		{
			title: "BSc in Software Engineering",
			desc: "Comprehensive study of software development, project management, and quality assurance.",
			duration: "4 Years (8 Semesters)",
			link: "#programs",
		},
	],
	pg: [
		{
			title: "MSc in Computer Science & Engineering",
			desc: "Advanced coursework and research in computer science, preparing for industry or academia.",
			duration: "2 Years (4 Semesters)",
			link: "#programs",
		},
		{
			title: "MSc in Data Science",
			desc: "Focus on big data, machine learning, and analytics for modern data-driven careers.",
			duration: "2 Years (4 Semesters)",
			link: "#programs",
		},
	],
	phd: [
		{
			title: "PhD in Computer Science & Engineering",
			desc: "Doctoral research program for those aiming to contribute new knowledge in computing.",
			duration: "3-5 Years",
			link: "#programs",
		},
	],
};

function renderPrograms(tab) {
	const container = document.getElementById("program-content");
	container.innerHTML = programs[tab]
		.map(
			(p) => `
			<div class="group bg-white rounded-2xl shadow-lg border border-primary/10 p-6 flex flex-col gap-3 hover:bg-secondary/10 transition cursor-pointer">
				<div class="flex items-center gap-3 mb-2">
					<div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-secondary text-2xl font-bold group-hover:bg-secondary/20 transition">
						<svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z"/></svg>
					</div>
					<div>
						<div class="font-bold text-lg text-primary group-hover:text-secondary transition">${p.title}</div>
						<div class="text-sm text-primary/70 group-hover:text-primary/90 transition">${p.duration}</div>
					</div>
				</div>
				<div class="text-primary/80 text-base mb-2 group-hover:text-primary">${p.desc}</div>
				<a href="${p.link}" class="inline-block mt-auto bg-primary text-secondary font-semibold px-4 py-2 rounded shadow hover:bg-secondary hover:text-primary border-2 border-primary hover:border-secondary transition text-sm">View Details</a>
			</div>
		`
		)
		.join("");
}

document.addEventListener("DOMContentLoaded", () => {
	// Program tabs logic
	const tabBtns = document.querySelectorAll("#program-tabs .tab-btn");
	let activeTab = "ug";
	function setActiveTab(tab) {
		activeTab = tab;
		tabBtns.forEach((btn) => {
			if (btn.dataset.tab === tab) {
				btn.classList.add("bg-secondary", "text-primary");
				btn.classList.remove("bg-white", "text-primary");
			} else {
				btn.classList.remove("bg-secondary", "text-primary");
				btn.classList.add("bg-white", "text-primary");
			}
		});
		renderPrograms(tab);
	}
	tabBtns.forEach((btn) => {
		btn.addEventListener("click", () => setActiveTab(btn.dataset.tab));
	});
	setActiveTab(activeTab);
});
// HERO SLIDER
const slides = [
	{
		image: './assets/image1.jpg',
		heading: 'Welcome to CSE, University of Barishal',
		subheading: 'A Hub of Innovation and Excellence',
		text: 'Empowering the next generation of innovators and leaders in Computer Science. Our department offers state-of-the-art facilities, a modern curriculum, and a vibrant academic community dedicated to your success.',
		details: 'Accredited by UGC | Modern Labs | International Collaborations',
		button: { text: 'Explore Programs', link: '#programs' },
		secondaryButton: { text: 'About Us', link: '#about' },
	},
	{
		image: './assets/image2.png',
		heading: 'Cutting-edge Research',
		subheading: 'Pushing the Boundaries of Knowledge',
		text: 'Join our vibrant research community and make a global impact. Our faculty and students are engaged in groundbreaking research in AI, Data Science, Cybersecurity, and more.',
		details: 'Research Labs | Publications | Funded Projects',
		button: { text: 'See Research', link: '#research' },
		secondaryButton: { text: 'Meet Our Faculty', link: '#faculty' },
	},
	{
		image: './assets/image3.jpg',
		heading: 'Student Life at CSE',
		subheading: 'A Dynamic and Supportive Community',
		text: 'Experience a dynamic campus life with diverse student activities, clubs, and events. We foster leadership, creativity, and teamwork through hackathons, seminars, and cultural programs.',
		details: 'Clubs & Societies | Hackathons | Career Support',
		button: { text: 'Meet Our Students', link: '#students' },
		secondaryButton: { text: 'Campus Life', link: '#about' },
	},
	{
		image: './assets/image6.png',
		heading: 'Connect With Us',
		subheading: 'Your Journey Starts Here',
		text: 'Get in touch for admissions, collaborations, and more. We are here to support your academic and professional journey every step of the way.',
		details: 'Admissions | Partnerships | Contact',
		button: { text: 'Contact Us', link: '#contact' },
		secondaryButton: { text: 'Apply Now', link: '#programs' },
	},
];

const sliderTrack = document.getElementById('slider-track');
const sliderDots = document.getElementById('slider-dots');
const prevBtn = document.getElementById('slider-prev');
const nextBtn = document.getElementById('slider-next');
let currentSlide = 0;
let sliderInterval;

function renderSlides() {
	sliderTrack.innerHTML = slides.map((slide, idx) => `
		<div class=\"w-full h-[60vh] md:h-[75vh] flex-shrink-0 relative transition-opacity duration-700\" style=\"background-image:url('${slide.image}'); background-size:cover; background-position:center;\">
			<div class=\"absolute inset-0 bg-black/50\"></div>
			<div class=\"absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 text-secondary z-10 max-w-2xl\">
				<h2 class=\"text-2xl md:text-4xl lg:text-6xl font-bold mb-1 drop-shadow-lg\">${slide.heading}</h2>
				<h3 class=\"text-lg md:text-2xl font-semibold mb-2 drop-shadow-lg\">${slide.subheading || ''}</h3>
				<p class=\"mb-2 text-base md:text-lg text-white drop-shadow-lg\">${slide.text}</p>
				<div class=\"mb-4 text-xs md:text-base text-white font-medium opacity-90\">${slide.details || ''}</div>
				<div class=\"flex gap-3\">
					<a href=\"${slide.button.link}\" class=\"bg-secondary text-primary font-semibold px-6 py-2 rounded shadow hover:bg-yellow-400 transition\">${slide.button.text}</a>
					${slide.secondaryButton ? `<a href=\"${slide.secondaryButton.link}\" class=\"bg-primary border border-secondary text-secondary font-semibold px-6 py-2 rounded shadow hover:bg-secondary hover:text-primary transition\">${slide.secondaryButton.text}</a>` : ''}
				</div>
			</div>
		</div>
	`).join('');
}

function renderDots() {
	sliderDots.innerHTML = slides.map((_, idx) => `
		<button class="w-3 h-3 rounded-full ${idx === currentSlide ? 'bg-secondary' : 'bg-secondary/40'} border-2 border-secondary transition" data-idx="${idx}"></button>
	`).join('');
}

function goToSlide(idx) {
	currentSlide = (idx + slides.length) % slides.length;
	sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
	renderDots();
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

function startSlider() {
	sliderInterval = setInterval(nextSlide, 5000);
}
function stopSlider() {
	clearInterval(sliderInterval);
}

// Initial render
if (sliderTrack && sliderDots) {
	renderSlides();
	renderDots();
	goToSlide(0);
	startSlider();

	// Controls
	if (nextBtn && prevBtn) {
		nextBtn.addEventListener('click', () => { stopSlider(); nextSlide(); startSlider(); });
		prevBtn.addEventListener('click', () => { stopSlider(); prevSlide(); startSlider(); });
	}
	sliderDots.addEventListener('click', (e) => {
		if (e.target.dataset.idx) {
			stopSlider();
			goToSlide(Number(e.target.dataset.idx));
			startSlider();
		}
	});
	// Pause on hover
	sliderTrack.addEventListener('mouseenter', stopSlider);
	sliderTrack.addEventListener('mouseleave', startSlider);
}
// ...existing code...
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const mobileNav = document.getElementById("mobile-nav");
menuToggle.addEventListener("click", (e) => {
	e.stopPropagation();
	mobileNav.classList.toggle("hidden");
	document.getElementById("bar1").classList.toggle("rotate-45");
	document.getElementById("bar1").classList.toggle("translate-y-2");
	document.getElementById("bar2").classList.toggle("opacity-0");
	document.getElementById("bar3").classList.toggle("-rotate-45");
	document.getElementById("bar3").classList.toggle("-translate-y-2");
});

// Close mobile menu when a link is clicked
document.querySelectorAll('#mobile-nav a').forEach(link => {
	link.addEventListener('click', () => {
		if (!mobileNav.classList.contains('hidden')) {
			mobileNav.classList.add('hidden');
			document.getElementById("bar1").classList.remove("rotate-45", "translate-y-2");
			document.getElementById("bar2").classList.remove("opacity-0");
			document.getElementById("bar3").classList.remove("-rotate-45", "-translate-y-2");
		}
	});
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
	if (!mobileNav.classList.contains('hidden') && !mobileNav.contains(e.target) && e.target !== menuToggle && !menuToggle.contains(e.target)) {
		mobileNav.classList.add('hidden');
		document.getElementById("bar1").classList.remove("rotate-45", "translate-y-2");
		document.getElementById("bar2").classList.remove("opacity-0");
		document.getElementById("bar3").classList.remove("-rotate-45", "-translate-y-2");
	}
});

const counters = document.querySelectorAll('#stats [data-target]');
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 200; // adjust speed
    if(count < target){
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});



// time line section
 // Timeline modal data
      const timelineDetails = [
        {
          title: '2012: Department Founded',
          content: `<img src='./assets/bu logo.png' class='w-24 h-24 mx-auto mb-3' alt='Founded'><p>The Department of Computer Science & Engineering at University of Barishal was established in 2012, aiming to provide quality education and research opportunities in computing.</p>`
        },
        {
          title: '2016: First Graduating Batch',
          content: `<img src='./assets/image2.png' class='w-24 h-24 mx-auto mb-3 rounded' alt='First Batch'><p>Our first batch of students graduated, many of whom have gone on to successful careers in academia and industry.</p>`
        },
        {
          title: '2019: Research Lab Opened',
          content: `<img src='./assets/image3.jpg' class='w-24 h-24 mx-auto mb-3 rounded' alt='Research Lab'><p>The department inaugurated a modern research lab, fostering innovation and collaborative projects among students and faculty.</p>`
        },
        {
          title: '2023: National Award',
          content: `<video src='./assets/video1.mp4' controls class='w-full rounded mb-3' poster='./assets/image4.png'></video><p>In 2023, the department received a national award for excellence in computer science education, recognizing our commitment to academic and research excellence.</p>`
        },
      ];
      function showTimelineDetail(idx) {
        document.getElementById('timeline-modal-content').innerHTML = `<h3 class='text-xl font-bold text-primary mb-2'>${timelineDetails[idx].title}</h3>` + timelineDetails[idx].content;
        document.getElementById('timeline-modal').classList.remove('hidden');
      }
      function closeTimelineDetail() {
        document.getElementById('timeline-modal').classList.add('hidden');
      }