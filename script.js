// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
hamburger?.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear().toString();

// Smooth section reveal on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        entry.target.style.animationPlayState = 'running';
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal, .section').forEach((el) => observer.observe(el));

// Lightweight particle background animation
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let width, height, particles;
function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  particles = Array.from({ length: Math.floor(width * height / 60000) + 40 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.8 + 0.6,
    dx: (Math.random() - 0.5) * 0.25,
    dy: (Math.random() - 0.5) * 0.25,
    hue: Math.random() * 60 + 200
  }));
}
function step() {
  ctx.clearRect(0, 0, width, height);
  particles.forEach((p) => {
    p.x += p.dx; p.y += p.dy;
    if (p.x < 0 || p.x > width) p.dx *= -1;
    if (p.y < 0 || p.y > height) p.dy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${p.hue}, 85%, 70%, 0.25)`;
    ctx.fill();
  });
  requestAnimationFrame(step);
}
window.addEventListener('resize', resize);
resize(); step();


// Define your projects as objects
const projects = [
  {
    title: "TaleZee (Mobile)",
    stack: "React Native, Node.js, MongoDB",
    description: "Social storytelling platform with story creation, swipe navigation, reactions, comments, voting, and bookmarking.",
    tags: ["APIs", "Engagement UI", "Scalable design"],
    link: "https://play.google.com/store/apps/details?id=com.encoded999.TaleZee&pcampaignid=web_share"
  },
  {
    title: "NayBus (Mobile)",
    stack: "React Native, Node.js",
    description: "Hyper‑local business discovery with listings, reviews, ratings, search, and direct customer engagement.",
    tags: ["Local commerce", "Search", "Ratings"],
    link: "https://play.google.com/store/apps/details?id=com.encoded.naybus"
  },
  {
    title: "Wealth-Hacker (Web)",
    stack: "Next.js, TypeScript",
    description: "Real‑time trading insights, market analysis, strategy tracking, and performance monitoring with actionable decision support.",
    tags: ["Live strategies", "Analytics", "Monitoring","Blogging"],
    link: "https://wealth-hacker.vercel.app/"
  },
  {
    title: "Ivy (Web)",
    stack: "Next.js, Express.js, MongoDB",
    description: "Inventory management for Nigerian SMEs with real‑time stock updates, sales tracking, and profitability analysis.",
    tags: ["Automation", "Real‑time", "Insights"],
    link: "https://ivy-jade.vercel.app"
  },
  {
    title: "Debt Management App (Mobile)",
    stack: "React Native, local databases",
    description: "Offline‑first finance tool with debt tracking, reminders, transaction history, and shared transactions; accessibility‑focused design.",
    tags: ["Offline‑first", "Accessibility", "Finance"],
    link: "https://play.google.com/store/apps/details?id=com.encoded999.creditBook&pcampaignid=web_share"
  },
  {
    title: "Wealth Hacker (Wordpress)",
    stack: "wordpress",
    description: "Real‑time trading insights, market analysis, strategy tracking, and performance monitoring with actionable decision support.",
    tags: ["Live strategies", "Analytics", "Monitoring"],
    link: "https://thewealthhackers.com/"
  },
  {
  title: "DrillUp (Mobile)",
  stack: "React Native (Expo), Node.js",
  description: "Structured skill progression app for basketball and fitness training. Users unlock drills progressively, ensuring mastery before advancing. Built to promote discipline, consistency, and measurable improvement in athletic performance.",
  tags: ["Gamified learning", "Fitness", "Progress tracking"],
  link: "https://play.google.com/store/apps/details?id=com.encoded999.drillup&pcampaignid=web_share"
},
  {
  title: "Hub6 (Mobile Marketplace)",
  stack: "React Native (Expo), Node.js, MongoDB",
  description: "A marketplace platform connecting sellers and resellers in one ecosystem. Sellers can upload products for visibility, while resellers discover, share, and resell listings in real-time with notifications and engagement tools.",
  tags: ["Marketplace", "Real-time listings", "E-commerce"],
  link: "https://play.google.com/store/apps/details?id=com.encoded999.hub6&pcampaignid=web_share"
}
];

// Grab the grid container
const grid = document.getElementById("projectsGrid");

// Render each project card
projects.forEach(p => {
  const article = document.createElement("article");
  article.className = "project card hover-raise";

  article.innerHTML = `
    <a href="${p.link}" target="_blank" rel="noopener" class="project-link">
      <div class="project-head">
        <h3>${p.title}</h3>
        <span class="stack">${p.stack}</span>
      </div>
      <p>${p.description}</p>
      <div class="tags">
        ${p.tags.map(tag => `<span>${tag}</span>`).join("")}
      </div>
    </a>
  `;

  grid.appendChild(article);
});
