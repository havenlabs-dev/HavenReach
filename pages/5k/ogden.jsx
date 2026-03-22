// ─────────────────────────────────────────────────────────────────────────────
// HavenReach 5K — Event Landing Page
//
// Stack: Next.js (Pages Router) · React · CSS (brand variables from globals.css)
//
// To create a page for a new city, duplicate this file, rename it
// (e.g. provo.jsx, rexburg.jsx), and update the `event` object below.
// No other code needs to change.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react";
import Head from "next/head";

// ─────────────────────────────────────────────────────────────────────────────
// EVENT CONFIGURATION — update this object for each new city
// ─────────────────────────────────────────────────────────────────────────────

const event = {
  city: "Ogden",
  state: "Utah",
  title: "HavenReach 5K — Ogden",
  tagline: "Every step supports a child.",
  date: "Saturday, July 18, 2026",
  time: "8:00 AM",
  checkIn: "7:15 AM",
  location: "Ogden River Parkway",
  address: "Ogden, Utah",
  routeType: "Out and back, paved trail",
  price: "$25",
  shirtLimit: 50,
  registrationLink: "#register",
  donationLink: "#donate",
  supportOptions: ["$10", "$20", "$25"],
  contactEmail: "reach@havenlabs.org",
};

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────

function IconCalendar() {
  return (
    <svg style={{ width: 18, height: 18, flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
      <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
      <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg style={{ width: 18, height: 18, flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <circle cx="12" cy="12" r="9" strokeLinecap="round" />
      <polyline points="12 7 12 12 15 15" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg style={{ width: 18, height: 18, flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function IconTicket() {
  return (
    <svg style={{ width: 18, height: 18, flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
    </svg>
  );
}

function IconRoute() {
  return (
    <svg style={{ width: 18, height: 18, flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg style={{ width: 18, height: 18, flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function IconShirt() {
  return (
    <svg style={{ width: 18, height: 18, flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// NAV
// ─────────────────────────────────────────────────────────────────────────────

function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/">
            <img src="/images/white-transparent.png" alt="HavenReach" />
          </a>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <a
            href="/"
            style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", fontFamily: "var(--font-heading)", letterSpacing: "0.06em", textDecoration: "none" }}
          >
            ← havenreach.net
          </a>
          <a href={event.registrationLink} className="nav-cta">
            Register
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="fivek-hero">
      <div className="container">

        <div className="fivek-badge">
          <span>HavenReach</span>
          <span style={{ opacity: 0.4 }}>&middot;</span>
          <span>{event.city}, {event.state}</span>
        </div>

        <h1 className="fivek-hero-title">{event.title}</h1>

        <p className="fivek-hero-tagline">{event.tagline}</p>

        <p className="fivek-hero-desc">
          Join us for a community 5K run in {event.city} to raise funds for youth soccer
          equipment in the Kalinago Territory of Dominica. Every registration fee goes directly
          toward jerseys, cleats, shin guards, and the gear that keeps kids in the game.
        </p>

        <div className="fivek-facts">
          {[
            { icon: <IconCalendar />, text: event.date },
            { icon: <IconClock />, text: `${event.time} start · Check-in at ${event.checkIn}` },
            { icon: <IconPin />, text: event.location },
            { icon: <IconTicket />, text: `${event.price} per runner` },
          ].map(({ icon, text }) => (
            <div key={text} className="fivek-fact">
              <span className="fivek-fact-dot"></span>
              {icon}
              <span>{text}</span>
            </div>
          ))}
        </div>

        <p className="fivek-shirt-note">
          First <strong>{event.shirtLimit} runners</strong> to register receive an event shirt.
        </p>

        <div className="fivek-cta-row">
          <a href={event.registrationLink} className="btn btn-primary">Register Now</a>
          <a href={event.donationLink} className="btn btn-secondary">Donate Instead</a>
        </div>

      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MISSION
// ─────────────────────────────────────────────────────────────────────────────

const EQUIPMENT = [
  { label: "Jerseys", detail: "Full team colors for each school" },
  { label: "Shorts & Socks", detail: "Complete kit for every player" },
  { label: "Shin Guards", detail: "Essential protective gear" },
  { label: "Cleats", detail: "For kids who need proper footwear" },
  { label: "Soccer Balls", detail: "So every team can train and play" },
  { label: "Goals & Cones", detail: "Infrastructure for real practice" },
];

function Mission() {
  return (
    <section className="fivek-mission">
      <div className="container">
        <div className="fivek-mission-inner">

          <div className="fivek-mission-text">
            <span className="section-label">Why This Run Matters</span>
            <h2>
              A 5K here.<br />
              A season of soccer there.
            </h2>
            <p>
              In the Kalinago Territory of Dominica &mdash; one of the Caribbean&rsquo;s most
              remote indigenous communities &mdash; children love soccer. But many schools lack
              even the most basic equipment. Without proper jerseys, cleats, or balls, organized
              sport becomes difficult to sustain.
            </p>
            <p>
              HavenReach is raising funds to supply multiple schools with complete youth soccer
              kits. This is not a symbolic gesture. It is a practical, concrete effort to give
              young athletes what they need to train, compete, and feel supported.
            </p>
            <p>
              Your registration fee or donation goes directly toward that equipment. No overhead
              bloat, no vague promise. Real gear. Real kids. Real impact.
            </p>
          </div>

          <div>
            <p className="fivek-equipment-heading">Your support helps provide:</p>
            <div className="fivek-equipment-grid">
              {EQUIPMENT.map((item) => (
                <div key={item.label} className="fivek-equipment-item">
                  <strong>{item.label}</strong>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// EVENT DETAILS
// ─────────────────────────────────────────────────────────────────────────────

function EventDetails() {
  const items = [
    { icon: <IconCalendar />, label: "Date", value: event.date },
    { icon: <IconClock />, label: "Race Start", value: event.time },
    { icon: <IconClock />, label: "Check-in Opens", value: event.checkIn },
    { icon: <IconPin />, label: "Location", value: `${event.location}, ${event.address}` },
    { icon: <IconRoute />, label: "Route", value: event.routeType },
    { icon: <IconTicket />, label: "Registration Fee", value: `${event.price} per person` },
    { icon: <IconShirt />, label: "Event Shirt", value: `First ${event.shirtLimit} runners receive a shirt` },
    { icon: <IconUsers />, label: "Supporter Option", value: "Give any amount — no race entry required" },
  ];

  return (
    <section id="details" className="fivek-details">
      <div className="container">

        <div className="fivek-details-header">
          <span className="section-label light">Event Details</span>
          <h2>Everything you need to know</h2>
          <p className="fivek-details-sub">
            A community fundraising run. All experience levels welcome &mdash; walkers included.
          </p>
        </div>

        <div className="fivek-details-grid">
          {items.map((item) => (
            <div key={item.label} className="fivek-detail-card">
              <span className="fivek-detail-icon">{item.icon}</span>
              <div>
                <span className="fivek-detail-label">{item.label}</span>
                <span className="fivek-detail-value">{item.value}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// REGISTRATION CARDS
// ─────────────────────────────────────────────────────────────────────────────

function RegistrationCards() {
  return (
    <section id="register" className="fivek-register">
      <div className="container">

        <div className="section-header">
          <span className="section-label">Get Involved</span>
          <h2>Choose how you want to help</h2>
          <p>
            Whether you run, donate, or simply share &mdash; every contribution moves equipment
            closer to kids in the Kalinago Territory.
          </p>
        </div>

        <div className="fivek-register-grid">

          {/* Card 1: Run */}
          <div className="fivek-reg-card fivek-reg-card--featured">
            <p className="fivek-reg-card-tag">Runner</p>
            <h3>Run the 5K</h3>
            <p className="fivek-reg-price">{event.price}</p>
            <ul className="fivek-reg-card-list">
              <li>Race entry for the {event.city} 5K</li>
              <li>First {event.shirtLimit} runners receive an event shirt</li>
              <li>All funds go directly to youth soccer equipment</li>
              <li>All paces welcome &mdash; walkers too</li>
            </ul>
            <a href={event.registrationLink} className="btn btn-primary" style={{ textAlign: "center" }}>
              Register Now
            </a>
          </div>

          {/* Card 2: Donate */}
          <div className="fivek-reg-card">
            <p className="fivek-reg-card-tag">Supporter</p>
            <h3>Support HavenReach</h3>
            <p className="fivek-reg-card-body">Give any amount. Every dollar goes to equipment for youth athletes in Dominica.</p>
            <div className="fivek-amounts">
              {event.supportOptions.map((opt) => (
                <span key={opt} className="fivek-amount-pill">{opt}</span>
              ))}
            </div>
            <ul className="fivek-reg-card-list">
              <li>Can&rsquo;t run? Still make a real impact</li>
              <li>Funds go directly to equipment</li>
              <li>Every amount counts</li>
            </ul>
            <a href={event.donationLink} className="btn btn-primary" style={{ textAlign: "center" }}>
              Donate Now
            </a>
          </div>

          {/* Card 3: Can't Attend */}
          <div className="fivek-reg-card">
            <p className="fivek-reg-card-tag">From Anywhere</p>
            <h3>Can&rsquo;t Make It?</h3>
            <p className="fivek-reg-card-body">You can still be part of this. Donate online or share this page with your network.</p>
            <ul className="fivek-reg-card-list">
              <li>Donate online from anywhere</li>
              <li>Share this page with your network</li>
              <li>Support the mission from wherever you are</li>
            </ul>
            <a href={event.donationLink} className="btn btn-secondary" style={{ textAlign: "center" }}>
              Give Online
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// COMMUNITY
// ─────────────────────────────────────────────────────────────────────────────

function Community() {
  return (
    <section className="fivek-community">
      <div className="container">
        <div className="fivek-community-inner">
          <span className="section-label">Community</span>
          <h2>
            Run with purpose.<br />
            Show up for something real.
          </h2>
          <p>
            The HavenReach 5K is a community run &mdash; built by local runners, families, and
            neighbors who believe that small, committed acts add up to real change.
          </p>
          <p>
            Bring a friend. Walk with a neighbor. Cheer someone on. The more of us who show up,
            the more equipment reaches kids in the Kalinago Territory.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <a href={event.registrationLink} className="btn btn-primary">Register Now</a>
            <a href={event.donationLink} className="btn btn-secondary">Support the Mission</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "Do I need to be an experienced runner?",
    a: "Not at all. This is a community fundraising run, not a competitive race. We welcome all paces — first-timers, casual joggers, and experienced runners alike.",
  },
  {
    q: "Can I walk instead of run?",
    a: "Absolutely. Walkers are completely welcome. The goal is participation and community, not speed.",
  },
  {
    q: "What does my registration include?",
    a: `Registration is ${event.price} per person and covers your race entry. The first ${event.shirtLimit} runners to register also receive an event shirt.`,
  },
  {
    q: "Are event shirts guaranteed?",
    a: `Shirts are available for the first ${event.shirtLimit} registered runners. If you register after that cutoff, your entry and support are still fully valid — you just won't receive a shirt.`,
  },
  {
    q: "What if I want to support but can't run?",
    a: "You can donate any amount through the Donate option on this page. Your contribution goes to the same cause whether you run or not.",
  },
  {
    q: "Where does the money go?",
    a: "All funds raised go toward youth soccer equipment for schools in the Kalinago Territory of Dominica — jerseys, shorts, socks, shin guards, cleats, balls, goals, and cones.",
  },
  {
    q: "Can I invite friends and family to come watch or cheer?",
    a: "Yes — bring anyone. This is a community event. Spectators and supporters are welcome at the start and finish area.",
  },
  {
    q: "Who is organizing this event?",
    a: "HavenReach is the humanitarian and service branch of HavenLabs. The Dominica initiative is a real, actively planned service effort focused on the Kalinago Territory. This 5K is one of the ways we are building the funding and momentum to make it happen.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="fivek-faq">
      <div className="container">

        <div className="section-header">
          <span className="section-label">Common Questions</span>
          <h2>Frequently asked questions</h2>
        </div>

        <div className="fivek-faq-list">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="fivek-faq-item">
              <button
                onClick={() => toggle(i)}
                className="fivek-faq-btn"
                aria-expanded={openIndex === i}
              >
                <span className="fivek-faq-q">{item.q}</span>
                <span className={`fivek-faq-arrow${openIndex === i ? " fivek-faq-arrow--open" : ""}`}>
                  &#9660;
                </span>
              </button>
              {openIndex === i && (
                <div className="fivek-faq-answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FINAL CTA
// ─────────────────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section id="donate" className="fivek-final-cta">
      <div className="container">
        <span className="section-label light">Join Us</span>
        <h2>Join the first HavenReach 5K in {event.city}.</h2>
        <p>
          One Saturday morning in {event.city}. A full season of soccer for kids in Dominica.
          Register, donate, or share this page &mdash; every act of support counts.
        </p>
        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <a href={event.registrationLink} className="btn btn-primary">Register Now</a>
          <a href={event.donationLink} className="btn btn-secondary">Donate Instead</a>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <strong>HavenReach</strong>
            <p>A humanitarian initiative under HavenLabs.</p>
            <p>Kalinago Territory, Dominica &mdash; Q1 2027</p>
          </div>
          <div className="footer-links">
            <a href="/">HavenReach Home</a>
            <a href="/#mission">Mission</a>
            <a href="/#programs">Programs</a>
            <a href={`mailto:${event.contactEmail}`}>{event.contactEmail}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 HavenReach / HavenLabs. Service with purpose.</p>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function FiveKOgden() {
  return (
    <>
      <Head>
        <title>{event.title} &middot; HavenReach</title>
        <meta
          name="description"
          content={`${event.tagline} Join the HavenReach 5K in ${event.city} on ${event.date}. Register or donate to support youth soccer equipment for children in Dominica.`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <Hero />
      <Mission />
      <EventDetails />
      <RegistrationCards />
      <Community />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
