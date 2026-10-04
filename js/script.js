/* =========================================================
   PARIS-AFRICANA INTERNATIONAL SCHOOL — SITE APP
   Most of the site's HTML structure is rendered from JavaScript.
   The existing CSS classes and visual markup are intentionally
   preserved so the design remains unchanged.
   ========================================================= */

(function () {
  "use strict";

  var pages = {};

  pages["index.html"] = `<section class="hero">
<div class="container">
<div class="hero-copy">
<h1>Where <span class="accent">Knowledge</span> meets <span class="accent">Discipline</span>.</h1>
<p class="lead">Paris-Africana International School gives children in Mararaba, Nasarawa State a Nursery-to-Secondary education built on strong character, academic rigor, and an international outlook.</p>
<div class="hero-actions">
<a class="btn btn-primary" href="contact.html">Book a Visit</a>
<a class="btn btn-outline-light" href="about.html">Learn About Us</a>
</div>
</div>
<div class="hero-medallion">
<div class="ring r1"></div>
<div class="ring r2"></div>
<img alt="School crest medallion" src="images/logo.png"/>
</div>
</div>
</section>
<div class="stat-strip">
<div class="container">
<div class="stat">
<span class="badge">'16</span>
<span>
<span class="num">Founded 2016</span>
<span class="label">Registered Nigerian school</span>
</span>
</div>
<div class="stat">
<span class="badge">3</span>
<span>
<span class="num">Three Levels</span>
<span class="label">Early Years And Nursery · Primary · Secondary</span>
</span>
</div>
<div class="stat">
<span class="badge">NG</span>
<span>
<span class="num">Mararaba Campus</span>
<span class="label">Nasarawa State, Nigeria</span>
</span>
</div>
</div>
</div>
<section>
<div class="container">
<div class="section-head">
<h2>A school built on a simple promise</h2>
<p>Our crest carries an open book and the Eiffel Tower for a reason — we pair African discipline and identity with an international standard of learning. Every pupil leaves able to think clearly and carry themselves with character.</p>
</div>
<div class="panel-grid">
<div class="panel">
<span class="glyph">A</span>
<h3>Academic Excellence</h3>
<p>A structured curriculum from Nursery through Secondary, with small class sizes so no pupil is left behind.</p>
</div>
<div class="panel">
<span class="glyph">D</span>
<h3>Discipline &amp; Character</h3>
<p>Our motto isn't decoration. Conduct, punctuality, and respect are taught with the same seriousness as any subject.</p>
</div>
<div class="panel">
<span class="glyph">I</span>
<h3>International Outlook</h3>
<p>Pupils are prepared to compete confidently — academically and socially — beyond the walls of the school.</p>
</div>
</div>
</div>
</section>
<section class="section-cream">
<div class="container">
<div class="section-head">
<h2>The path through Paris-Africana</h2>
<p>One continuous journey, three stages — each building on the last.</p>
</div>
<div class="pathway">
<div class="stage">
<span class="stage-num">1</span>
<h3>Early Years And Nursery</h3>
<p>Early learning that builds curiosity, language, numeracy, and social skills through guided play.</p>
</div>
<div class="stage">
<span class="stage-num">2</span>
<h3>Primary</h3>
<p>A full core curriculum with a strong foundation in literacy, numeracy, and the sciences.</p>
</div>
<div class="stage">
<span class="stage-num">3</span>
<h3>Secondary</h3>
<p>Subject specialization and exam preparation, alongside leadership and extracurricular growth.</p>
</div>
</div>
</div>
</section>
<section>
<div class="container">
<div class="section-head section-head-row">
<div>
<h2>From the school</h2>
<p>Announcements and happenings around campus.</p>
</div>
<a class="text-link" href="news.html">View all updates <span aria-hidden="true">→</span></a>
</div>
<div class="news-grid">
<article class="news-card news-card-featured">
<div class="thumb thumb-1"><span>School updates</span></div>
<div class="body">
<span class="date">Latest announcements</span>
<h3>Keep up with school news</h3>
<p>The news area is ready for official school announcements, term notices, events, and important updates.</p>
<a class="card-link" href="news.html">Open news &amp; announcements <span aria-hidden="true">→</span></a>
</div>
</article>
<article class="news-card">
<div class="thumb thumb-2"><span>Events</span></div>
<div class="body">
<span class="date">Coming soon</span>
<h3>School events</h3>
<p>Important school activities and dates can be published here once the school calendar is connected.</p>
<a class="card-link" href="contact.html">Ask the school office <span aria-hidden="true">→</span></a>
</div>
</article>
<article class="news-card">
<div class="thumb thumb-3"><span>Admissions</span></div>
<div class="body">
<span class="date">Admissions enquiries</span>
<h3>Start your enquiry</h3>
<p>Contact the school to ask about current requirements, availability, fees, and the admissions process.</p>
<a class="card-link" href="admissions.html">Explore admissions <span aria-hidden="true">→</span></a>
</div>
</article>
</div>
</div>
</section>
<section class="section-cream">
<div class="container">
<div class="section-head">
<h2>Why families choose Paris-Africana</h2>
<p>A clear educational foundation, a disciplined environment, and an outlook that prepares pupils for a wider world.</p>
</div>
<div class="feature-grid">
<article class="feature-card"><span class="feature-icon">01</span><h3>Strong foundations</h3><p>Early learning, literacy, numeracy, and core knowledge are treated as the foundation for everything that follows.</p></article>
<article class="feature-card"><span class="feature-icon">02</span><h3>Character matters</h3><p>Respect, punctuality, responsibility, and good conduct are part of the school experience—not an afterthought.</p></article>
<article class="feature-card"><span class="feature-icon">03</span><h3>Whole-child growth</h3><p>Academic learning is complemented by leadership, social development, creativity, and extracurricular opportunities.</p></article>
<article class="feature-card"><span class="feature-icon">04</span><h3>International outlook</h3><p>The school's identity combines African heritage with a confident outlook toward wider academic and social opportunities.</p></article>
</div>
</div>
</section>
<section>
<div class="container">
<div class="section-head section-head-row">
<div><h2>Getting started</h2><p>For families considering the school, the first step is simply to start a conversation.</p></div>
<a class="text-link" href="admissions.html">Admissions guide <span aria-hidden="true">→</span></a>
</div>
<div class="steps-grid">
<div class="step-card"><span>01</span><h3>Make an enquiry</h3><p>Contact the school office with your questions about your child's level, availability, and current admissions information.</p></div>
<div class="step-card"><span>02</span><h3>Arrange a visit</h3><p>Use the contact page to request a campus visit and speak with the school office about the next steps.</p></div>
<div class="step-card"><span>03</span><h3>Request current requirements</h3><p>Requirements, fees, dates, and available places can change, so confirm the current details directly with the school.</p></div>
</div>
</div>
</section>
<section class="cta-banner">
<div class="container">
<div>
<h2>Ready to see the campus for yourself?</h2>
<p>Schedule a visit or send us your questions — we reply within one working day.</p>
</div>
<div class="cta-actions"><a class="btn btn-light" href="admissions.html">Explore Admissions</a><a class="btn btn-outline-light" href="contact.html">Contact the School</a></div>
</div>
</section>`;

  pages["about.html"] = `<div class="page-header">
<div class="container">
<h1>About Paris-Africana</h1>
<p class="breadcrumb"><a href="index.html">Home</a> / About</p>
</div>
</div>
<section>
<div class="container two-col">
<div>
<div class="section-head">
<h2>Our story</h2>
</div>
<p>Paris-Africana International School was established in 2016 in Mararaba, Nasarawa State, with a clear purpose: to raise pupils who are both academically sound and firmly grounded in good character.</p>
<p class="text-spaced">The name on our crest reflects that purpose — the Eiffel Tower for an international standard of learning, and the map of Africa for the identity and discipline we build that standard on. Since our founding, we have grown from a small Nursery unit into a full Nursery-to-Secondary school.</p>
<div class="tag-strip">
<span class="tag">Est. 2016</span>
<span class="tag">Mararaba, Nasarawa State</span>
<span class="tag">Nursery – Secondary</span>
</div>
</div>
<div class="hero-medallion">
<div class="ring r1"></div>
<img alt="School crest medallion" class="crest-on-light" decoding="async" src="images/logo.png"/>
</div>
</div>
</section>
<section class="section-cream">
<div class="container">
<div class="section-head">
<h2>Mission, vision &amp; motto</h2>
</div>
<div class="panel-grid">
<div class="panel">
<span class="glyph">M</span>
<h3>Mission</h3>
<p>To provide quality, affordable Nursery-to-Secondary education that develops the whole child — mind, character, and confidence.</p>
</div>
<div class="panel">
<span class="glyph">V</span>
<h3>Vision</h3>
<p>To be a leading indigenous international school recognized for discipline, academic strength, and well-rounded graduates.</p>
</div>
<div class="panel">
<span class="glyph">K</span>
<h3>Motto</h3>
<p>"Knowledge and Discipline" — the two things we insist a pupil cannot succeed without, in school or in life.</p>
</div>
</div>
</div>
</section>
<section>
<div class="container">
<div class="section-head">
<h2>What we value</h2>
<p>These guide every decision we make about how the school is run.</p>
</div>
<div class="value-list">
<div class="value-item">
<span class="mark">1</span>
<div>
<h3>Discipline</h3>
<p>Clear expectations for conduct, punctuality, and respect, applied consistently to every pupil.</p>
</div>
</div>
<div class="value-item">
<span class="mark">2</span>
<div>
<h3>Academic Rigor</h3>
<p>A curriculum that is taught thoroughly, not rushed, with regular assessment of every pupil's progress.</p>
</div>
</div>
<div class="value-item">
<span class="mark">3</span>
<div>
<h3>Identity</h3>
<p>Pride in African heritage taught alongside an international outlook — not one instead of the other.</p>
</div>
</div>
<div class="value-item">
<span class="mark">4</span>
<div>
<h3>Community</h3>
<p>Close cooperation between teachers and parents, because a child's growth happens on both sides of the gate.</p>
</div>
</div>
</div>
</div>
</section>
<section class="cta-banner">
<div class="container">
<div>
<h2>Want to know more?</h2>
<p>Reach out and we'll walk you through admissions, fees, and a campus tour.</p>
</div>
<a class="btn btn-outline-light" href="contact.html">Contact the School</a>
</div>
</section>`;

  pages["academics.html"] = `<div class="page-header">
<div class="container">
<h1>Academics</h1>
<p class="breadcrumb"><a href="index.html">Home</a> / Academics</p>
</div>
</div>
<section>
<div class="container">
<div class="section-head">
<h2>Three stages, one continuous standard</h2>
<p>Every pupil moves through the same three stages, each with its own focus but the same expectation of discipline and effort.</p>
</div>
<div class="pathway">
<div class="stage">
<span class="stage-num">1</span>
<h3>Nursery</h3>
<p>Ages 3–5. Guided play, phonics, numeracy basics, and social skills in a safe, structured setting.</p>
</div>
<div class="stage">
<span class="stage-num">2</span>
<h3>Primary</h3>
<p>Ages 6–11. Full core curriculum — English, Mathematics, Basic Science, Social Studies, and Creative Arts.</p>
</div>
<div class="stage">
<span class="stage-num">3</span>
<h3>Secondary</h3>
<p>Ages 12–17. Subject specialization across Sciences, Arts, and Commercial classes, with exam preparation.</p>
</div>
</div>
</div>
</section>
<section class="section-cream">
<div class="container">
<div class="section-head">
<h2>Subjects offered</h2>
<p>A broad curriculum designed to keep every pupil's options open.</p>
</div>
<div class="panel-grid">
<div class="panel">
<span class="glyph">1</span>
<h3>Core Subjects</h3>
<p>English Language, Mathematics, Basic Science &amp; Technology, Civic Education, and Nigerian/African History.</p>
</div>
<div class="panel">
<span class="glyph">2</span>
<h3>Sciences</h3>
<p>Physics, Chemistry, Biology, Agricultural Science, and Further Mathematics at the Secondary level.</p>
</div>
<div class="panel">
<span class="glyph">3</span>
<h3>Arts &amp; Commercial</h3>
<p>Literature, Government, Economics, Financial Accounting, and Commerce for Secondary pupils.</p>
</div>
</div>
</div>
</section>
<section>
<div class="container two-col">
<div>
<div class="section-head">
<h2>The school day</h2>
</div>
<p>Classes run five days a week with a structured timetable that balances academic subjects with sport, creative arts, and moral instruction — the "discipline" half of our motto in daily practice.</p>
<p class="text-spaced">Exact resumption dates, term breaks, and the school calendar are posted on the <a class="inline-link" href="news.html">News page</a> at the start of each term.</p>
</div>
<div class="value-list value-list-single">
<div class="value-item">
<span class="mark">✓</span>
<div>
<h3>Small class sizes</h3>
<p>So teachers can track every pupil's progress individually.</p>
</div>
</div>
<div class="value-item">
<span class="mark">✓</span>
<div>
<h3>Regular assessment</h3>
<p>Continuous assessment plus termly examinations, with report cards issued to parents.</p>
</div>
</div>
<div class="value-item">
<span class="mark">✓</span>
<div>
<h3>Extracurricular activities</h3>
<p>Sports, clubs, and inter-house competitions throughout the school year.</p>
</div>
</div>
</div>
</div>
</section>
<section class="cta-banner">
<div class="container">
<div>
<h2>Have questions about admissions?</h2>
<p>We'll walk you through requirements, fees, and available spaces for your child's level.</p>
</div>
<a class="btn btn-outline-light" href="contact.html">Contact the School</a>
</div>
</section>`;

  pages["admissions.html"] = `<div class="page-header">
<div class="container">
<h1>Admissions</h1>
<p class="breadcrumb"><a href="index.html">Home</a> / Admissions</p>
</div>
</div>
<section>
<div class="container">
<div class="admissions-intro">
<div class="section-head">
<h2>Start with a conversation</h2>
<p>Thinking about Paris-Africana for your child? The easiest first step is to contact the school office and request the current admissions information for the relevant level.</p>
</div>
<div class="admissions-callout"><span class="feature-icon">A</span><div><h3>Current information matters</h3><p>Admission requirements, fees, available places, and important dates can change. Please confirm the latest details directly with the school.</p></div></div>
</div>
<div class="steps-grid admissions-steps">
<article class="step-card"><span>01</span><h3>Make an enquiry</h3><p>Tell the school office the year or level you are interested in and ask for the current admission information.</p><a class="card-link" href="contact.html">Contact the school <span aria-hidden="true">→</span></a></article>
<article class="step-card"><span>02</span><h3>Plan a campus visit</h3><p>A visit gives families an opportunity to ask questions and understand the school environment before making a decision.</p><a class="card-link" href="contact.html">Book a visit <span aria-hidden="true">→</span></a></article>
<article class="step-card"><span>03</span><h3>Complete the next steps</h3><p>Once you have the current requirements, the school office can guide you through the appropriate application and assessment steps.</p><a class="card-link" href="contact.html">Ask about next steps <span aria-hidden="true">→</span></a></article>
</div>
</div>
</section>
<section class="section-cream">
<div class="container two-col align-start">
<div>
<div class="section-head"><h2>What to ask about</h2><p>When you contact the school, these are useful areas to clarify.</p></div>
<ul class="check-list">
<li><span>✓</span> Current admission requirements for the relevant level</li>
<li><span>✓</span> Availability of places</li>
<li><span>✓</span> Current fees and payment information</li>
<li><span>✓</span> Assessment or interview arrangements, if applicable</li>
<li><span>✓</span> Term dates and resumption information</li>
</ul>
</div>
<div class="admissions-panel">
<span class="eyebrow">Admissions office</span>
<h2>Ready to ask a question?</h2>
<p>Use the contact page to send an enquiry or call the school directly during office hours.</p>
<div class="contact-actions"><a class="btn btn-primary" href="tel:+2348166351574">Call the School</a><a class="btn btn-outline" href="contact.html">Send an Enquiry</a></div>
</div>
</div>
</section>
<section class="cta-banner">
<div class="container">
<div><h2>Take the next step</h2><p>Visit the campus, ask your questions, and get the current admissions information directly from the school office.</p></div>
<a class="btn btn-outline-light" href="contact.html">Contact the School</a>
</div>
</section>`;

  pages["contact.html"] = `<div class="page-header">
<div class="container">
<h1>Contact Us</h1>
<p class="breadcrumb"><a href="index.html">Home</a> / Contact</p>
</div>
</div>
<section>
<div class="container two-col align-start">
<div>
<div class="section-head">
<h2>Send us a message</h2>
<p>Fill in the form and your email app will open with the message prepared for the school office.</p>
</div>
<form id="contact-form">
<div class="form-grid">
<div>
<label for="name">Full Name</label>
<input id="name" name="name" placeholder="Your full name" required="" type="text"/>
</div>
<div>
<label for="email">Email Address</label>
<input id="email" name="email" placeholder="you@example.com" required="" type="email"/>
</div>
<div class="full">
<label for="phone">Phone Number (optional)</label>
<input id="phone" name="phone" placeholder="+234..." type="tel"/>
</div>
<div class="full">
<label for="subject">Subject</label>
<select id="subject" name="subject">
<option>General Inquiry</option>
<option>Admissions</option>
<option>Book a Campus Visit</option>
<option>Other</option>
</select>
</div>
<div class="full">
<label for="message">Message</label>
<textarea id="message" name="message" placeholder="How can we help?" required=""></textarea>
</div>
</div>
<button class="btn btn-primary form-submit" type="submit">Send Message</button>
<p class="form-note">This version prepares an email using your device's email app. A direct online submission system can be connected when the backend is added.</p>
<div aria-live="polite" class="form-success" id="form-success" role="status">Your email draft has been prepared. Please review it and send it from your email app.</div>
</form>
</div>
<div>
<div class="section-head">
<h2>Visit or reach us</h2>
</div>
<div class="contact-info-list">
<div class="contact-info-item">
<span class="mark">📍</span>
<div>
<h3>Address</h3>
<p>No 5 Paris Africana Street, Off Tanko Al-Makura Road, Via Sani Abacha Road, Mararaba, Nasarawa State, Nigeria</p>
</div>
</div>
<div class="contact-info-item">
<span class="mark">📞</span>
<div>
<h3>Phone</h3>
<p>+234 816 635 1574</p>
</div>
</div>
<div class="contact-info-item">
<span class="mark">✉️</span>
<div>
<h3>Email</h3>
<p>parisafrica.edu.ng@yahoo.com</p>
</div>
</div>
<div class="contact-info-item">
<span class="mark">🕐</span>
<div>
<h3>Office Hours</h3>
<p>Monday – Friday, 8:00 AM – 4:00 PM</p>
</div>
</div>
</div>
<div class="map-wrap">
<iframe loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=7.585381%2C9.021175%2C7.597381%2C9.029175&amp;layer=mapnik&amp;marker=9.025175%2C7.591381" title="Map showing Paris-Africana International School, Mararaba">
</iframe>
</div>
<p class="map-caption">
<a class="map-link" href="https://www.google.com/maps?q=9.025175,7.591381" rel="noopener noreferrer" target="_blank">Get Directions on Google Maps</a>
</p>
</div>
</div>
</section>`;

  pages["gallery.html"] = `<div class="page-header">
<div class="container">
<h1>Gallery</h1>
<p class="breadcrumb"><a href="index.html">Home</a> / Gallery</p>
</div>
</div>
<section>
<div class="container">
<div class="section-head">
<h2>Campus life</h2>
<p>A look at life on campus — this layout is ready for the school's real photographs.</p>
</div>
<div class="gallery-grid">
<div class="gallery-item gallery-tone-1">
<span class="icon">🏫</span>
        Add photo: School building / entrance
      </div>
<div class="gallery-item gallery-tone-2">
<span class="icon">📚</span>
        Add photo: Classroom in session
      </div>
<div class="gallery-item gallery-tone-3">
<span class="icon">⚽</span>
        Add photo: Sports / assembly ground
      </div>
<div class="gallery-item gallery-tone-4">
<span class="icon">🎨</span>
        Add photo: Creative arts / clubs
      </div>
<div class="gallery-item gallery-tone-5">
<span class="icon">🎓</span>
        Add photo: Graduation / prize-giving
      </div>
<div class="gallery-item gallery-tone-6">
<span class="icon">🧑‍🏫</span>
        Add photo: Teachers &amp; staff
      </div>
</div>
<p class="gallery-note">These visual panels are intentional placeholders until the school's real campus photographs are supplied. The layout is ready for a real photo gallery and lightbox in the next content pass.</p>
</div>
</section>`;

  pages["news.html"] = `<div class="page-header">
<div class="container">
<h1>News &amp; Announcements</h1>
<p class="breadcrumb"><a href="index.html">Home</a> / News</p>
</div>
</div>
<section>
<div class="container">
<div class="section-head">
<h2>Latest updates</h2>
<p>This page is ready for official school announcements, term notices, events, and important updates. The backend phase can make these posts manageable from an admin dashboard.</p>
</div>
<div class="news-grid">
<article class="news-card">
<div class="thumb thumb-1">Resumption Notice</div>
<div class="body">
<span class="date">Content-ready</span>
<h3>New term resumption date announced</h3>
<p>All pupils are to resume for the new term on the date circulated to parents. This card is ready for an official school announcement once the content is confirmed.</p>
</div>
</article>
<article class="news-card">
<div class="thumb thumb-2">Inter-House Sports</div>
<div class="body">
<span class="date">Content-ready</span>
<h3>Inter-house sports competition</h3>
<p>The annual inter-house sports competition will hold on the school field. This card is ready for an official school announcement once the content is confirmed.</p>
</div>
</article>
<article class="news-card">
<div class="thumb thumb-3">Admissions</div>
<div class="body">
<span class="date">Content-ready</span>
<h3>Admission forms now available</h3>
<p>Forms for the new academic session are available at the school office. This card is ready for an official school announcement once the content is confirmed.</p>
</div>
</article>
<article class="news-card">
<div class="thumb thumb-1">PTA Meeting</div>
<div class="body">
<span class="date">Content-ready</span>
<h3>Parent-Teacher Association meeting</h3>
<p>All parents are invited to the termly PTA meeting. This card is ready for an official school announcement once the content is confirmed.</p>
</div>
</article>
<article class="news-card">
<div class="thumb thumb-2">Exams</div>
<div class="body">
<span class="date">Content-ready</span>
<h3>Examination timetable released</h3>
<p>The timetable for termly examinations has been released to all levels. This card is ready for an official school announcement once the content is confirmed.</p>
</div>
</article>
<article class="news-card">
<div class="thumb thumb-3">Prize-Giving Day</div>
<div class="body">
<span class="date">Content-ready</span>
<h3>Annual prize-giving day</h3>
<p>Join us as we celebrate outstanding pupils at this year's prize-giving ceremony. This card is ready for an official school announcement once the content is confirmed.</p>
</div>
</article>
</div>
</div>
</section>`;


  var shared = {
    skip: `<a class="skip-link" href="#main-content">Skip to main content</a>`,
    topbar: `<div class="topbar">
<div class="container">
<span>Sani Abacha Road, Mararaba, Nasarawa State, Nigeria</span>
<div class="topbar-links">
<a href="tel:+2348166351574">+234 816 635 1574</a>
<a href="mailto:parisafrica.edu.ng@yahoo.com">parisafrica.edu.ng@yahoo.com</a>
</div>
</div>
</div>`,
    header: `<header class="navbar">
<div class="container">
<a aria-label="Paris-Africana International School home" class="brand" href="index.html">
<img alt="Paris-Africana International School crest" height="54" src="images/logo.png" width="54"/>
<span class="brand-text">
<span class="school-name">Paris-Africana International School</span>
<span class="school-motto">Knowledge and Discipline</span>
</span>
</a>
<nav class="nav-links" id="main-navigation">
<a href="index.html">Home</a>
<a href="about.html">About</a>
<a href="academics.html">Academics</a>
<a href="gallery.html">Gallery</a>
<a href="news.html">News</a>
<a href="admissions.html">Admissions</a>
<a href="contact.html">Contact</a>
<a class="btn btn-primary" href="contact.html">Apply Now</a>
</nav>
<button aria-controls="main-navigation" aria-expanded="false" aria-label="Open navigation menu" class="nav-toggle" type="button">
<span></span><span></span><span></span>
</button>
</div>
</header>`,
    footer: `<footer>
<div class="container">
<div class="footer-grid">
<div>
<div class="footer-brand">
<img alt="School crest" src="images/logo.png"/>
<span class="school-name">Paris-Africana<br/>International School</span>
</div>
<p>Knowledge and Discipline — a Nursery-to-Secondary school in Mararaba, Nasarawa State, Nigeria.</p>
<div class="footer-social">
<a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61587817334590" rel="noopener noreferrer" target="_blank">f</a>
<a aria-label="Instagram" href="https://www.instagram.com/parisafricana.intlschool?stkn=aXF4dzJyN3Zla2s2" rel="noopener noreferrer" target="_blank">ig</a>
</div>
</div>
<div>
<h4>Explore</h4>
<ul class="footer-links">
<li><a href="about.html">About Us</a></li>
<li><a href="academics.html">Academics</a></li>
<li><a href="gallery.html">Gallery</a></li>
<li><a href="news.html">News</a></li>
</ul>
</div>
<div>
<h4>Admissions</h4>
<ul class="footer-links">
<li></li>
<li><a href="contact.html">Book a Visit</a></li>
<li><a href="contact.html">Contact Us</a></li>
</ul>
</div>
<div>
<h4>Contact</h4>
<p>No 5 Paris Africana Street, Off Tanko Al-Makura Road,Via Sani Abacha Road,<br/>Mararaba, Nasarawa State</p>
<p>+234 816 635 1574<br/>parisafrica.edu.ng@yahoo.com</p>
</div>
</div>
<div class="footer-bottom">
<span>© <span id="year"></span> Paris-Africana International School. All rights reserved.</span>
<span>Built by a student, for the school.</span>
</div>
</div>
</footer>`
  };

  function getCurrentPage() {
    var path = window.location.pathname;
    var current = path.endsWith("/") ? "index.html" : path.split("/").pop();
    return current || "index.html";
  }

  function renderSite() {
    var app = document.getElementById("app");
    if (!app) return;

    var currentPage = getCurrentPage();
    var pageContent = pages[currentPage] || pages["index.html"];

    app.innerHTML =
      shared.skip +
      shared.topbar +
      shared.header +
      '<main id="main-content">' + pageContent + '</main>' +
      shared.footer;

    initializeSite();
  }

  function initializeSite() {
    /* ---- Mobile nav toggle ---- */
    var toggle = document.querySelector(".nav-toggle");
    var links = document.querySelector(".nav-links");
    var navbar = document.querySelector(".navbar");

    if (toggle && links) {
      var setMenuState = function (open) {
        links.classList.toggle("open", open);
        links.setAttribute(
          "aria-hidden",
          String(window.innerWidth <= 720 && !open)
        );
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute(
          "aria-label",
          open ? "Close navigation menu" : "Open navigation menu"
        );
        document.body.classList.toggle("menu-open", open);
      };

      setMenuState(false);

      toggle.addEventListener("click", function () {
        setMenuState(!links.classList.contains("open"));
      });

      links.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          setMenuState(false);
        });
      });

      document.addEventListener("click", function (event) {
        if (
          links.classList.contains("open") &&
          navbar &&
          !navbar.contains(event.target)
        ) {
          setMenuState(false);
        }
      });

      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && links.classList.contains("open")) {
          setMenuState(false);
          toggle.focus();
        }
      });

      window.addEventListener("resize", function () {
        if (window.innerWidth > 720 && links.classList.contains("open")) {
          setMenuState(false);
        } else {
          links.setAttribute(
            "aria-hidden",
            String(
              window.innerWidth <= 720 &&
              !links.classList.contains("open")
            )
          );
        }
      });
    }

    /* ---- Highlight the current page in the nav ---- */
    var currentPage = getCurrentPage();

    document.querySelectorAll(".nav-links a").forEach(function (link) {
      var href = link.getAttribute("href");

      if (
        href &&
        href.split("/").pop() === currentPage &&
        !link.classList.contains("btn")
      ) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });

    /* ---- Professional scroll polish ---- */
    var updateNavbar = function () {
      if (navbar) navbar.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });

    var revealItems = document.querySelectorAll(".panel, .feature-card, .step-card, .news-card, .value-item, .stage");
    if ("IntersectionObserver" in window && revealItems.length) {
      var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealItems.forEach(function (item) { item.classList.add("reveal-ready"); observer.observe(item); });
    }

    /* ---- Footer year ---- */
    var yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    /* ---- Contact form ---- */
    var contactForm = document.getElementById("contact-form");

    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        var successBox = document.getElementById("form-success");
        var nameEl = document.getElementById("name");
        var emailEl = document.getElementById("email");
        var phoneEl = document.getElementById("phone");
        var subjectEl = document.getElementById("subject");
        var messageEl = document.getElementById("message");

        if (!nameEl || !emailEl || !messageEl) return;

        var name = nameEl.value.trim();
        var email = emailEl.value.trim();
        var phone = phoneEl ? phoneEl.value.trim() : "";
        var subject = subjectEl
          ? subjectEl.value.trim()
          : "General Inquiry";
        var message = messageEl.value.trim();

        if (!name || !email || !message) {
          alert(
            "Please fill in your name, email, and message before continuing."
          );
          return;
        }

        if (!emailEl.checkValidity()) {
          emailEl.reportValidity();
          return;
        }

        var body = [
          "Name: " + name,
          "Email: " + email,
          phone ? "Phone: " + phone : "",
          "",
          message
        ].filter(Boolean).join("\n");

        var mailto =
          "mailto:parisafrica.edu.ng@yahoo.com" +
          "?subject=" + encodeURIComponent(subject) +
          "&body=" + encodeURIComponent(body);

        window.location.href = mailto;

        if (successBox) {
          successBox.style.display = "block";
          successBox.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
          });
        }
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderSite);
  } else {
    renderSite();
  }
})();
