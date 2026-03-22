import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              const isActive = link.getAttribute("href") === `#${entry.target.id}`;
              link.style.color = isActive ? "white" : "";
            });
          }
        });
      },
      { threshold: 0.4, rootMargin: "-64px 0px 0px 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <Head>
        <title>HavenReach &mdash; Service with Purpose</title>
        <meta
          name="description"
          content="HavenReach is the humanitarian and service branch of HavenLabs — organizing meaningful service initiatives in the Kalinago Territory of Dominica."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/images/white-transparent.png" alt="HavenReach" />
          </div>
          <ul className={`nav-links${menuOpen ? " nav-open" : ""}`}>
            <li><a href="#mission" onClick={closeMenu}>Mission</a></li>
            <li><a href="#dominica" onClick={closeMenu}>Dominica</a></li>
            <li><a href="#programs" onClick={closeMenu}>Programs</a></li>
            <li><a href="#team" onClick={closeMenu}>Team</a></li>
            <li>
              <a href="#get-involved" className="nav-cta" onClick={closeMenu}>
                Get Involved
              </a>
            </li>
          </ul>
          <button
            className={`nav-hamburger${menuOpen ? " nav-open" : ""}`}
            aria-label="Open menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-label">HavenReach &mdash; Dominica Initiative</p>
          <h1 className="hero-title">
            Service with<br />Purpose.
          </h1>
          <p className="hero-sub">
            Youth development, community infrastructure, and practical skills support in the
            Kalinago Territory of Dominica.
          </p>
          <div className="hero-actions">
            <a href="#get-involved" className="btn btn-primary">Support the Mission</a>
            <a href="#dominica" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
        <div className="hero-scroll-hint"><span>&darr;</span></div>
      </section>

      {/* Mission */}
      <section className="mission" id="mission">
        <div className="container">
          <div className="mission-inner">
            <div className="mission-text">
              <span className="section-label">Our Purpose</span>
              <h2>Service should be <em>real</em>.</h2>
              <p>
                HavenReach exists to organize meaningful service initiatives &mdash; not shallow
                gestures, but sustained, respectful, locally-grounded work. We believe the people
                we serve are not projects. They are neighbors.
              </p>
              <p>
                Our goal is to show up with competence, humility, and follow-through &mdash; and
                to build something worth coming back to.
              </p>
            </div>
            <div className="mission-values">
              <div className="value-item">
                <span className="value-icon">&bull;</span>
                <div>
                  <strong>Dignity First</strong>
                  <p>Every decision starts with respect for the community we serve.</p>
                </div>
              </div>
              <div className="value-item">
                <span className="value-icon">&bull;</span>
                <div>
                  <strong>Sustainable Impact</strong>
                  <p>We build things that last beyond a single trip.</p>
                </div>
              </div>
              <div className="value-item">
                <span className="value-icon">&bull;</span>
                <div>
                  <strong>Practical Usefulness</strong>
                  <p>Resources go where they make a real difference.</p>
                </div>
              </div>
              <div className="value-item">
                <span className="value-icon">&bull;</span>
                <div>
                  <strong>Accountability</strong>
                  <p>Every dollar and every hour is stewarded carefully.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">64</span>
              <span className="stat-label">Youth Participants</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Schools Supported</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Program Tracks</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1</span>
              <span className="stat-label">Community. Many Lives.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dominica Initiative */}
      <section className="initiative" id="dominica">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Flagship Initiative</span>
            <h2>The Dominica Initiative</h2>
            <p>
              Our first flagship project brings youth development, community infrastructure, and
              practical skills support to the Kalinago Territory &mdash; one of the most historically
              significant indigenous communities in the Caribbean.
            </p>
          </div>
          <div className="initiative-photo">
            <img
              src="/images/kalinago.jpg"
              alt="Kalinago Barana Autê — traditional village in the Kalinago Territory, Dominica"
            />
          </div>
          <div className="initiative-timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-period">Q2 2026</span>
                <strong>Foundation</strong>
                <p>Team confirmation, scope definition, and preliminary planning.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-period">Q3 2026</span>
                <strong>Design &amp; Partnerships</strong>
                <p>Equipment planning, sponsor outreach, program design.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-period">Q4 2026</span>
                <strong>Funding &amp; Logistics</strong>
                <p>Equipment ordering, travel planning, logistics coordination.</p>
              </div>
            </div>
            <div className="timeline-item timeline-item--active">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-period">Q1 2027</span>
                <strong>Service Trip</strong>
                <p>Travel to Dominica. Deliver programs. Build relationships.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="programs" id="programs">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We&rsquo;re Doing</span>
            <h2>Three Program Tracks</h2>
          </div>
          <div className="programs-grid">

            <div className="program-card">
              <div className="program-icon">&#9917;</div>
              <h3>Youth Soccer Program</h3>
              <p>
                Equipping four elementary schools in the Kalinago Territory with everything needed
                to run sustainable soccer programs &mdash; from jerseys to goals to training cones.
              </p>
              <ul className="program-details">
                <li>64 youth participants across 4 schools</li>
                <li>Full player kits: jersey, shorts, socks, shin guards, cleats</li>
                <li>School equipment: 2 goals, 5 balls, training cones</li>
                <li>Estimated budget: ~$6,500</li>
              </ul>
              <div className="program-sponsor">
                <strong>Sponsor a Player &mdash; $80</strong>
                <span>Fully equips one youth athlete</span>
              </div>
            </div>

            <div className="program-card program-card--featured">
              <div className="program-icon">&#127957;</div>
              <h3>Campground Development</h3>
              <p>
                Building a small volunteer base camp that will support future HavenReach service
                trips, community events, and ongoing programs for years to come.
              </p>
              <ul className="program-details">
                <li>Land clearing and site preparation</li>
                <li>Tent platforms and basic shelters</li>
                <li>Outdoor kitchen area</li>
                <li>Water catchment system</li>
                <li>Compost toilet and basic solar lighting</li>
                <li>Phase 1 target: $10,000&ndash;$15,000</li>
              </ul>
              <div className="program-sponsor">
                <strong>Infrastructure for the Future</strong>
                <span>Every contribution builds lasting capacity</span>
              </div>
            </div>

            <div className="program-card">
              <div className="program-icon">&#129657;</div>
              <h3>Community First Aid Training</h3>
              <p>
                Led by our Field Operations Lead &mdash; a certified firefighter and EMT &mdash;
                this workshop empowers community members with practical emergency knowledge and
                supplies.
              </p>
              <ul className="program-details">
                <li>Wound care, bleeding control, CPR awareness</li>
                <li>Sprains, fractures, dehydration response</li>
                <li>Small first aid kits distributed</li>
                <li>Guided by local leadership consultation</li>
              </ul>
              <div className="program-sponsor">
                <strong>Community-Centered</strong>
                <span>Training shaped by local needs</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team" id="team">
        <div className="container">
          <div className="section-header">
            <span className="section-label">The Team</span>
            <h2>Who&rsquo;s Going</h2>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">A</div>
              <h4>Aniken</h4>
              <span className="team-role">Project Lead</span>
              <p>Vision, finances, logistics, and Dominica relationships. Responsible for planning and final decision authority.</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">J</div>
              <h4>Jaken</h4>
              <span className="team-role">Field Operations Lead</span>
              <p>On-ground coordination, campground work, and First Aid Training. Firefighter and EMT background.</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">D</div>
              <h4>Dallin</h4>
              <span className="team-role">Communications &amp; Outreach</span>
              <p>Campaign messaging, fundraiser updates, and community engagement leading up to the trip.</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">I</div>
              <h4>Isaac</h4>
              <span className="team-role">Media &amp; Storytelling</span>
              <p>Photography, video, and documentation during the trip. Post-trip editing and impact content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="get-involved" id="get-involved">
        <div className="container">
          <div className="get-involved-inner">
            <div className="get-involved-text">
              <span className="section-label light">Get Involved</span>
              <h2>Be Part of This.</h2>
              <p>
                The Dominica Initiative is funded entirely through individual support. Whether you
                sponsor a player, contribute to infrastructure, or simply share our mission &mdash;
                every action matters.
              </p>
              <div className="involvement-options">
                <div className="involvement-item">
                  <strong>$80</strong>
                  <span>Sponsors one youth player with full equipment</span>
                </div>
                <div className="involvement-item">
                  <strong>$220</strong>
                  <span>Sponsors one school&rsquo;s equipment package</span>
                </div>
                <div className="involvement-item">
                  <strong>Any Amount</strong>
                  <span>Supports campground infrastructure and logistics</span>
                </div>
              </div>
              <a href="#" className="btn btn-primary btn-large">Donate via GoFundMe</a>
            </div>
            <div className="get-involved-aside">
              <div className="stewardship-box">
                <h4>Our Commitment to Stewardship</h4>
                <p>
                  Every dollar donated is tracked, reported, and directed to the specific programs
                  described here. We distinguish clearly between confirmed plans and future
                  aspirations.
                </p>
                <p>Questions about how funds are used are always welcome.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <strong>HavenReach</strong>
              <p>A humanitarian initiative under HavenLabs.</p>
              <p>Kalinago Territory, Dominica &mdash; Q1 2027</p>
            </div>
            <div className="footer-links">
              <a href="#mission">Mission</a>
              <a href="#dominica">Dominica</a>
              <a href="#programs">Programs</a>
              <a href="#team">Team</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 HavenReach / HavenLabs. Service with purpose.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
