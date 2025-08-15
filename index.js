// Animated Skill / Research Graphs Section
document.addEventListener("DOMContentLoaded", () => {
	// Animate charts when in view
	function isInViewport(el) {
		const rect = el.getBoundingClientRect();
		return (
			rect.top < window.innerHeight && rect.bottom > 0
		);
	}
	let chartsInitialized = false;
	function initCharts() {
		if (chartsInitialized) return;
		chartsInitialized = true;
		// Pie Chart: Research Areas
			new Chart(document.getElementById('researchPie').getContext('2d'), {
				type: 'pie',
				data: {
					labels: ['AI/ML', 'Data Science', 'Networks', 'Cybersecurity', 'Software Eng.', 'Other'],
					datasets: [{
						data: [28, 22, 16, 14, 12, 8],
						backgroundColor: [
							'#050e58ff', '#f0bd02', '#a3a3a3', '#09ff00ff', '#fde68a', '#e11d48'
						],
						borderWidth: 2,
						borderColor: '#fff',
					}],
				},
				options: {
					plugins: {
						legend: { display: true, position: 'bottom', labels: { color: '#030724', font: { weight: 'bold' } } },
						tooltip: { enabled: true }
					},
					animation: { animateRotate: true, animateScale: true },
				},
			});
		// Bar Chart: Student Skills
			new Chart(document.getElementById('skillsBar').getContext('2d'), {
				type: 'bar',
				data: {
					labels: ['Python', 'Java', 'C++', 'Web Dev', 'Data Analysis', 'AI'],
					datasets: [{
						label: 'Skill Level',
						data: [92, 85, 78, 88, 80, 75],
						backgroundColor: [
							'#f0bd02', '#030724', '#f0bd02', '#030724', '#f0bd02', '#030724'
						],
						borderColor: '#030724',
						borderWidth: 2,
					}],
				},
				options: {
					indexAxis: 'y',
					scales: {
						x: { beginAtZero: true, max: 100, grid: { color: '#e5e7eb' }, ticks: { color: '#030724' } },
						y: { ticks: { color: '#030724', font: { weight: 'bold' } } },
					},
					plugins: {
						legend: { display: false },
						tooltip: { enabled: true },
					},
					animation: { duration: 1200 },
				},
			});
		// Doughnut Chart: Project Types
			new Chart(document.getElementById('projectDoughnut').getContext('2d'), {
				type: 'doughnut',
				data: {
					labels: ['Research', 'Industry', 'Open Source', 'Other'],
					datasets: [{
						data: [40, 30, 20, 10],
						backgroundColor: [
							'#030724', '#f0bd02', '#a3a3a3', '#e11d48'
						],
						borderWidth: 2,
						borderColor: '#fff',
					}],
				},
				options: {
					cutout: '70%',
					plugins: {
						legend: { display: true, position: 'bottom', labels: { color: '#030724', font: { weight: 'bold' } } },
						tooltip: { enabled: true },
					},
					animation: { animateRotate: true, animateScale: true },
				},
			});
	}
	function onScrollCharts() {
		const section = document.getElementById('skills-research-graphs');
		if (section && isInViewport(section)) {
			initCharts();
			window.removeEventListener('scroll', onScrollCharts);
		}
	}
	window.addEventListener('scroll', onScrollCharts);
	onScrollCharts();
});
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


	    // News Ticker Infinite Scroll Animation
      (function () {
        const ticker = document.getElementById("news-ticker");
        let isPaused = false;
        let pos = 0;
        let wrapper = document.getElementById("news-ticker-wrapper");
        let tickerWidth = ticker.scrollWidth / 2; // since content is duplicated
        function animate() {
          if (!isPaused) {
            pos -= 1;
            if (Math.abs(pos) >= tickerWidth) {
              pos = 0;
            }
            ticker.style.transform = `translateX(${pos}px)`;
          }
          requestAnimationFrame(animate);
        }
        ticker.addEventListener("mouseenter", () => {
          isPaused = true;
        });
        ticker.addEventListener("mouseleave", () => {
          isPaused = false;
        });
        window.addEventListener("resize", () => {
          tickerWidth = ticker.scrollWidth / 2;
        });
        animate();
      })();

// --- Gamified Quiz / Fun Fact Section ---
const quizData = [
	{
		question: "What year was the CSE Department at University of Barishal founded?",
		options: ["2010", "2012", "2015", "2018"],
		answer: 1,
		explanation: "The department was founded in 2012."
	},
	{
		question: "Which of these is a core research area at CSE-BU?",
		options: ["Marine Biology", "AI/ML", "Civil Engineering", "Astrophysics"],
		answer: 1,
		explanation: "AI/ML is a major research area at CSE-BU."
	},
	{
		question: "What is the duration of the BSc in Computer Science & Engineering program?",
		options: ["2 Years", "3 Years", "4 Years", "5 Years"],
		answer: 2,
		explanation: "The BSc program is 4 years long."
	},
	{
		question: "Which event did CSE-BU win a national award for in 2023?",
		options: ["Sports", "Research", "Education", "Cultural"],
		answer: 2,
		explanation: "CSE-BU received a national award for excellence in computer science education."
	},
	{
		question: "Which programming language is NOT listed as a top skill among CSE-BU students?",
		options: ["Python", "Java", "C++", "Ruby"],
		answer: 3,
		explanation: "Ruby is not listed among the top skills."
	}
];

const funFacts = [
	"CSE-BU's first batch graduated in 2016!",
	"The department has a modern research lab opened in 2019.",
	"CSE-BU students regularly participate in national hackathons.",
	"The department is home to over 400 students.",
	"CSE-BU has international research collaborations.",
	"Did you know? The department mascot is a robot named 'BaroBot'!"
];

function showFunFact() {
	const popup = document.getElementById('funfact-popup');
	const text = document.getElementById('funfact-text');
	const fact = funFacts[Math.floor(Math.random() * funFacts.length)];
	text.textContent = fact;
	popup.classList.remove('hidden');
	popup.classList.add('animate-bounce-in');
	setTimeout(() => {
		popup.classList.remove('animate-bounce-in');
		popup.classList.add('animate-fade-out');
		setTimeout(() => {
			popup.classList.add('hidden');
			popup.classList.remove('animate-fade-out');
		}, 1200);
	}, 3500);
}

// Show a fun fact every ~30 seconds
setInterval(showFunFact, 20000);
// Show one on first load after a short delay
setTimeout(showFunFact, 3000);

// Quiz Logic
let quizIndex = 0;
let quizAnswered = false;
const quizWidget = document.getElementById('quiz-widget');
const quizQ = document.getElementById('quiz-question');
const quizOpts = document.getElementById('quiz-options');
const quizFeedback = document.getElementById('quiz-feedback');
const quizNextBtn = document.getElementById('quiz-next-btn');

function renderQuiz() {
	const q = quizData[quizIndex];
	quizQ.textContent = q.question;
	quizOpts.innerHTML = '';
	quizFeedback.textContent = '';
	quizNextBtn.classList.add('hidden');
	quizAnswered = false;
	q.options.forEach((opt, i) => {
		const btn = document.createElement('button');
		btn.textContent = opt;
		btn.className = 'bg-primary/5 border border-primary/10 rounded px-3 py-2 text-left hover:bg-secondary/20 transition text-sm';
		btn.onclick = () => handleQuizAnswer(i);
		quizOpts.appendChild(btn);
	});
}

function handleQuizAnswer(selected) {
	if (quizAnswered) return;
	quizAnswered = true;
	const q = quizData[quizIndex];
	Array.from(quizOpts.children).forEach((btn, i) => {
		btn.disabled = true;
		if (i === q.answer) {
			btn.classList.add('bg-green-200', 'font-bold');
		} else if (i === selected) {
			btn.classList.add('bg-red-200');
		}
	});
	if (selected === q.answer) {
		quizFeedback.textContent = '✅ Correct! ' + q.explanation;
		quizFeedback.className = 'text-green-700 font-semibold mb-2';
	} else {
		quizFeedback.textContent = '❌ Oops! ' + q.explanation;
		quizFeedback.className = 'text-red-700 font-semibold mb-2';
	}
	quizNextBtn.classList.remove('hidden');
}

quizNextBtn.onclick = () => {
	quizIndex = (quizIndex + 1) % quizData.length;
	renderQuiz();
};

// Start quiz on load
if (quizWidget) renderQuiz();

// --- Animations for Fun Fact ---
const style = document.createElement('style');
style.innerHTML = `
@keyframes bounce-in { 0% { transform: scale(0.7); opacity: 0; } 60% { transform: scale(1.1); opacity: 1; } 100% { transform: scale(1); } }
.animate-bounce-in { animation: bounce-in 0.7s cubic-bezier(.68,-0.55,.27,1.55); }
@keyframes fade-out { to { opacity: 0; transform: translateY(30px) scale(0.95); } }
.animate-fade-out { animation: fade-out 1.2s forwards; }
`;
document.head.appendChild(style);

// --- Build Your Path Interactive Section ---
const pathData = {
	ai: {
		programs: [
			{ title: 'BSc in Computer Science & Engineering', desc: 'Strong AI/ML curriculum, hands-on projects, and electives in deep learning.', link: '#programs' },
			{ title: 'MSc in Computer Science & Engineering', desc: 'Advanced AI research, thesis options, and faculty mentorship.', link: '#programs' }
		],
		labs: [
			{ title: 'AI & Robotics Lab', desc: 'Work on real-world AI and robotics projects with peers and faculty.' }
		],
		faculty: [
			{ name: 'Dr. Rahat Hossain Faisal', desc: 'AI, Machine Learning, and Data Science', link: '#faculty' }
		]
	},
	software: {
		programs: [
			{ title: 'BSc in Software Engineering', desc: 'Focus on software design, development, and project management.', link: '#programs' }
		],
		labs: [
			{ title: 'Software Development Lab', desc: 'Collaborate on software projects and competitions.' }
		],
		faculty: [
			{ name: 'Ms. Nusrat Jahan', desc: 'Software Engineering, Web Development', link: '#faculty' }
		]
	},
	research: {
		programs: [
			{ title: 'MSc in Computer Science & Engineering', desc: 'Research-focused curriculum with thesis and publication opportunities.', link: '#programs' },
			{ title: 'PhD in Computer Science & Engineering', desc: 'Doctoral research with international collaborations.', link: '#programs' }
		],
		labs: [
			{ title: 'Research & Innovation Lab', desc: 'Pursue cutting-edge research with faculty and peers.' }
		],
		faculty: [
			{ name: 'Dr. Rahat Hossain Faisal', desc: 'Research, Innovation, and Supervision', link: '#faculty' }
		]
	},
	data: {
		programs: [
			{ title: 'MSc in Data Science', desc: 'Specialized in big data, analytics, and machine learning.', link: '#programs' }
		],
		labs: [
			{ title: 'Data Science Lab', desc: 'Analyze real datasets and participate in data challenges.' }
		],
		faculty: [
			{ name: 'Dr. Tanjina Rahman', desc: 'Data Science, Analytics', link: '#faculty' }
		]
	},
	networks: {
		programs: [
			{ title: 'BSc in Computer Science & Engineering', desc: 'Courses and labs in networking and cybersecurity.', link: '#programs' }
		],
		labs: [
			{ title: 'Networks & Security Lab', desc: 'Hands-on with network protocols, security, and ethical hacking.' }
		],
		faculty: [
			{ name: 'Mr. Imran Hossain', desc: 'Networks, Cybersecurity', link: '#faculty' }
		]
	}
};

const interests = document.querySelectorAll('.interest-btn');
const recs = document.getElementById('path-recommendations');

function renderPathRecommendations(interest) {
	const d = pathData[interest];
	if (!d) return;
	recs.innerHTML = `
		<div class="flex-1 bg-primary/5 rounded-2xl p-6 shadow-lg animate-fade-in">
			<h3 class="text-xl font-bold text-primary mb-3 flex items-center gap-2"><span>🎓</span> Recommended Programs</h3>
			<div class="flex flex-col gap-2">${d.programs.map(p => `<a href="${p.link}" class="block bg-white border border-primary/10 rounded-lg px-4 py-3 text-left hover:bg-secondary/10 transition mb-1"><div class="font-semibold text-primary">${p.title}</div><div class="text-primary/70 text-sm">${p.desc}</div></a>`).join('')}</div>
		</div>
		<div class="flex-1 bg-primary/5 rounded-2xl p-6 shadow-lg animate-fade-in">
			<h3 class="text-xl font-bold text-primary mb-3 flex items-center gap-2"><span>🧪</span> Labs</h3>
			<div class="flex flex-col gap-2">${d.labs.map(l => `<div class="bg-white border border-primary/10 rounded-lg px-4 py-3 text-left mb-1"><div class="font-semibold text-primary">${l.title}</div><div class="text-primary/70 text-sm">${l.desc}</div></div>`).join('')}</div>
		</div>
		<div class="flex-1 bg-primary/5 rounded-2xl p-6 shadow-lg animate-fade-in">
			<h3 class="text-xl font-bold text-primary mb-3 flex items-center gap-2"><span>👩‍🏫</span> Faculty</h3>
			<div class="flex flex-col gap-2">${d.faculty.map(f => `<a href="${f.link}" class="block bg-white border border-primary/10 rounded-lg px-4 py-3 text-left hover:bg-secondary/10 transition mb-1"><div class="font-semibold text-primary">${f.name}</div><div class="text-primary/70 text-sm">${f.desc}</div></a>`).join('')}</div>
		</div>
	`;
}

interests.forEach(btn => {
	btn.addEventListener('click', () => {
		interests.forEach(b => b.classList.remove('bg-secondary', 'text-primary'));
		btn.classList.add('bg-secondary', 'text-primary');
		renderPathRecommendations(btn.dataset.interest);
	});
});

// Animation for fade-in
const pathStyle = document.createElement('style');
pathStyle.innerHTML = `
@keyframes fade-in { from { opacity: 0; transform: translateY(30px) scale(0.97); } to { opacity: 1; transform: none; } }
.animate-fade-in { animation: fade-in 0.7s cubic-bezier(.68,-0.55,.27,1.55); }
`;
document.head.appendChild(pathStyle);


// --- Story Section --- 

  function handleStoryScroll() {
        const blocks = document.querySelectorAll(".story-block");
        const parallaxImgs = document.querySelectorAll(".parallax-img");
        const windowHeight = window.innerHeight;
        blocks.forEach((block, i) => {
          const rect = block.getBoundingClientRect();
          if (rect.top < windowHeight * 0.85) {
            block.classList.add("!opacity-100", "!translate-y-0");
            block.classList.remove("opacity-0", "translate-y-12");
          }
        });
        parallaxImgs.forEach((img) => {
          const rect = img.getBoundingClientRect();
          const offset = Math.max(0, windowHeight - rect.top);
          img.style.transform = `translateY(${offset * 0.08}px)`;
        });
      }
      window.addEventListener("scroll", handleStoryScroll);
      window.addEventListener("DOMContentLoaded", handleStoryScroll);
 