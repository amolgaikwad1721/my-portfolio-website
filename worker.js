export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Amol Gaikwad | Portfolio</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Arial,sans-serif;background:#0b1120;color:#fff;line-height:1.7}
header{padding:20px 8%;display:flex;justify-content:space-between;align-items:center;background:#111b30;position:sticky;top:0}
.logo{font-size:22px;font-weight:bold;color:#60a5fa}
nav a{color:white;text-decoration:none;margin:0 9px;font-size:14px}
section{padding:65px 9%;scroll-margin-top:75px}
.hero{min-height:420px;display:flex;align-items:center;gap:35px;flex-wrap:wrap}
.avatar{width:175px;height:175px;border-radius:50%;background:#1e3a5f;border:4px solid #60a5fa;display:grid;place-items:center;font-size:55px;font-weight:bold;color:#93c5fd}
h1{font-size:42px;color:#60a5fa}
h2{color:#60a5fa;margin-bottom:20px;font-size:27px}
p{color:#cbd5e1;margin:8px 0}
.card{background:#17243a;padding:22px;border-radius:14px;margin:14px 0;border:1px solid #263954}
.skills{display:flex;gap:12px;flex-wrap:wrap}
.skill{background:#1e3a5f;padding:9px 16px;border-radius:20px;color:#bfdbfe}
.btn{display:inline-block;margin-top:17px;padding:10px 20px;background:#2563eb;color:white;text-decoration:none;border-radius:8px}
footer{text-align:center;padding:25px;background:#111b30;color:#94a3b8}
</style>
</head>
<body>
<header>
<div class="logo">AMOL.</div>
<nav>
<a href="#home">Home</a>
<a href="#about">About</a>
<a href="#education">Education</a>
<a href="#skills">Skills</a>
<a href="#contact">Contact</a>
</nav>
</header>

<section class="hero" id="home">
<img class="avatar" src="https://i.ibb.co/LDCzqXVH/amol-png.png" alt="Amol Gaikwad">
<div>
<p>Hello, Welcome to my Portfolio!</p>
<h1>I'm Amol Gaikwad</h1>
<h3>Computer Science Student | MSc CS</h3>
<p>नमस्कार! माझ्या वैयक्तिक वेबसाइटवर तुमचे स्वागत आहे.</p>
<a class="btn" href="#about">Explore My Portfolio</a>
</div>
</section>

<section id="about">
<h2>About Me | माझ्याबद्दल</h2>
<div class="card">
<p>Hello! I am Amol Gaikwad, a Computer Science student interested in technology, computers and web development.</p>
<p>नमस्कार! मी अमोल मनोज गायकवाड. मला कॉम्प्युटर, तंत्रज्ञान आणि वेब डेव्हलपमेंटमध्ये आवड आहे. मी नवीन गोष्टी शिकण्यास उत्सुक आहे.</p>
</div>
</section>

<section id="education">
<h2>Education | शिक्षण</h2>
<div class="card">
<h3>B.Sc Computer Science</h3>
<p>MGM College of Computer Science and IT, Nanded</p>
<p>2026</p>
</div>
<div class="card">
<h3>M.Sc Computer Science</h3>
<p>Modern College of Computer Science and IT, Nanded</p>
<p>Currently Pursuing | सध्या शिक्षण सुरू</p>
</div>
</section>

<section id="skills">
<h2>Skills | कौशल्ये</h2>
<div class="skills">
<span class="skill">MS-CIT</span>
<span class="skill">Computer Basics</span>
<span class="skill">MS Office</span>
<span class="skill">Excel</span>
<span class="skill">HTML</span>
<span class="skill">Web Development</span>
</div>
</section>

<section id="projects">
<h2>Projects | प्रकल्प</h2>
<div class="card">
<h3>Personal Portfolio Website</h3>
<p>My first personal website created using HTML, CSS and Cloudflare Workers.</p>
<p>HTML, CSS आणि Cloudflare वापरून तयार केलेली माझी पहिली वेबसाइट.</p>
<div class="project">
  <h3>Home Services Website</h3>
  <p>Developed using HTML, CSS and JavaScript.</p>
  <p>Users can explore Plumbing, Electrician and Cleaning services.</p>
  <p>Users can contact us through the Contact section.</p>
  <p><b>Technologies:</b> HTML, CSS, JavaScript</p>
</div>
<div class="project">
  <h3>Excel Data Analysis</h3>
  <p>Practiced data analysis using Microsoft Excel.</p>
  <p>Worked with SUM, MAX, MIN, IF, VLOOKUP and SUMIF formulas.</p>
  <p><b>Technologies:</b> Microsoft Excel</p>
</div>
</div>
</section>

<section id="contact">
<h2>Contact Me| संपर्क</h2>
<div class="card">
<p>Name: Amol Gaikwad</p>
<p>Location: Yavatmal, Maharashtra</p>
<p>Email: amolgaikwad1721@gmail.com</p>
<p>
  <b>LinkedIn:</b>
  <a href="https://www.linkedin.com/in/amol-gaikwad-9b0681239" target="_blank">
    Visit My LinkedIn Profile
  </a>
</p>
</div>
</section>

<footer>
<p>© 2026 Amol Gaikwad | Personal Portfolio</p>
<p>Designed with passion ❤️</p>
</footer>
</body>
</html>`;

    return new Response(html, {
      headers: { "Content-Type": "text/html;charset=UTF-8" }
    });
  }
};
