// ─────────────────────────────────────────────────────────────────────────────
// HavenReach 5K — Event Landing Page
//
// Stack: Next.js (Pages Router) · React · Tailwind CSS
//
// To create a page for a new city, duplicate this file, rename it
// (e.g. provo.jsx, rexburg.jsx), and update the `event` object below.
// No other code needs to change.
// ─────────────────────────────────────────────────────────────────────────────

"use client";

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
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
      <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
      <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <circle cx="12" cy="12" r="9" strokeLinecap="round" />
      <polyline points="12 7 12 12 15 15" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function IconTicket() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
    </svg>
  );
}

function IconRoute() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function IconShirt() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z" />
    </svg>
  );
}

function IconChevron({ open }) {
  return (
    <svg
      className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// NAV
// ─────────────────────────────────────────────────────────────────────────────

function NavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-[#E7E2D9]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-[#1E1E1E] font-semibold text-base tracking-tight">
          HavenReach
        </a>
        <div className="flex items-center gap-5">
          <a href={event.donationLink} className="text-sm text-[#5C5C5C] hover:text-[#1E1E1E] transition-colors hidden sm:block">
            Donate
          </a>
          <a
            href={event.registrationLink}
            className="text-sm font-semibold bg-[#2E6F5E] text-white px-4 py-2 rounded-lg hover:bg-[#255c4d] transition-colors"
          >
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
    <section className="bg-[#F8F7F4] px-6 pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="max-w-3xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#2E6F5E] bg-[#2E6F5E]/10 px-3 py-1.5 rounded-full mb-8 uppercase tracking-wide">
          <span>HavenReach</span>
          <span className="opacity-40">·</span>
          <span>{event.city}, {event.state}</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-[#1E1E1E] leading-tight tracking-tight mb-4">
          {event.title}
        </h1>

        <p className="text-xl md:text-2xl text-[#5C5C5C] font-light mb-8 leading-relaxed">
          {event.tagline}
        </p>

        {/* Mission intro */}
        <p className="text-[#5C5C5C] text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
          Join us for a community 5K run in {event.city} to raise funds for youth soccer
          equipment in the Kalinago Territory of Dominica. Every registration fee goes directly
          toward jerseys, cleats, shin guards, and the gear that keeps kids in the game.
        </p>

        {/* Quick facts */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-5">
          {[
            { icon: <IconCalendar />, text: event.date },
            { icon: <IconClock />, text: `${event.time} start · Check-in at ${event.checkIn}` },
            { icon: <IconPin />, text: event.location },
            { icon: <IconTicket />, text: `${event.price} per runner` },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-[#1E1E1E] text-sm">
              <span className="text-[#2E6F5E]">{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Shirt note */}
        <p className="text-sm text-[#5C5C5C] mb-10">
          First{" "}
          <strong className="text-[#1E1E1E] font-semibold">{event.shirtLimit} runners</strong>{" "}
          to register receive an event shirt.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={event.registrationLink}
            className="inline-block bg-[#2E6F5E] text-white px-8 py-4 rounded-lg font-semibold text-base text-center hover:bg-[#255c4d] transition-colors shadow-sm"
          >
            Register Now
          </a>
          <a
            href={event.donationLink}
            className="inline-block border border-[#2E6F5E] text-[#2E6F5E] px-8 py-4 rounded-lg font-semibold text-base text-center hover:bg-[#2E6F5E]/5 transition-colors"
          >
            Donate Instead
          </a>
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
    <section className="bg-white px-6 py-20 border-t border-[#E7E2D9]">
      <div className="max-w-3xl mx-auto">

        <p className="text-xs font-semibold text-[#2E6F5E] uppercase tracking-widest mb-5">
          Why This Run Matters
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] leading-snug mb-8">
          A 5K here.<br />
          A season of soccer there.
        </h2>

        <div className="space-y-5 text-[#5C5C5C] text-base md:text-lg leading-relaxed mb-14">
          <p>
            In the Kalinago Territory of Dominica — one of the Caribbean&rsquo;s most remote
            indigenous communities — children love soccer. But many schools lack even the most
            basic equipment. Without proper jerseys, cleats, or balls, organized sport becomes
            difficult to sustain.
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

        {/* Equipment grid */}
        <p className="text-sm font-semibold text-[#1E1E1E] mb-4">Your support helps provide:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {EQUIPMENT.map((item) => (
            <div
              key={item.label}
              className="bg-[#F8F7F4] rounded-lg p-4 border border-[#E7E2D9]"
            >
              <p className="font-semibold text-[#1E1E1E] text-sm mb-1">{item.label}</p>
              <p className="text-xs text-[#5C5C5C] leading-relaxed">{item.detail}</p>
            </div>
          ))}
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
    <section id="details" className="bg-[#F8F7F4] px-6 py-20 border-t border-[#E7E2D9]">
      <div className="max-w-3xl mx-auto">

        <p className="text-xs font-semibold text-[#2E6F5E] uppercase tracking-widest mb-5">
          Event Details
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] leading-snug mb-3">
          Everything you need to know
        </h2>

        <p className="text-[#5C5C5C] mb-10">
          This is a community fundraising run. All experience levels are welcome — walkers included.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-lg p-5 border border-[#E7E2D9] flex items-start gap-3 shadow-sm"
            >
              <span className="text-[#2E6F5E] mt-0.5 flex-shrink-0">{item.icon}</span>
              <div>
                <p className="text-[10px] font-bold text-[#5C5C5C] uppercase tracking-widest mb-1">
                  {item.label}
                </p>
                <p className="text-[#1E1E1E] font-medium text-sm leading-snug">{item.value}</p>
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
    <section id="register" className="bg-white px-6 py-20 border-t border-[#E7E2D9]">
      <div className="max-w-4xl mx-auto">

        <p className="text-xs font-semibold text-[#2E6F5E] uppercase tracking-widest mb-5 text-center">
          Get Involved
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] leading-snug mb-3 text-center">
          Choose how you want to help
        </h2>

        <p className="text-[#5C5C5C] mb-12 text-center max-w-xl mx-auto">
          Whether you run, donate, or simply share — every contribution moves equipment closer
          to kids in the Kalinago Territory.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1: Run */}
          <div className="rounded-xl bg-[#2E6F5E] text-white p-8 flex flex-col shadow-md">
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-3">
              Runner
            </span>
            <h3 className="text-xl font-bold mb-1">Run the 5K</h3>
            <p className="text-4xl font-bold mb-6">{event.price}</p>
            <ul className="space-y-3 text-sm opacity-90 mb-8 flex-1">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0">&#10003;</span>
                <span>Race entry for the {event.city} 5K</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0">&#10003;</span>
                <span>First {event.shirtLimit} runners receive an event shirt</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0">&#10003;</span>
                <span>All funds go directly to youth soccer equipment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0">&#10003;</span>
                <span>All paces welcome — walkers too</span>
              </li>
            </ul>
            <a
              href={event.registrationLink}
              className="mt-auto inline-block bg-white text-[#2E6F5E] px-6 py-3 rounded-lg font-semibold text-center text-sm hover:bg-stone-50 transition-colors"
            >
              Register Now
            </a>
          </div>

          {/* Card 2: Donate */}
          <div className="rounded-xl border border-[#E7E2D9] bg-[#F8F7F4] p-8 flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#5C5C5C] mb-3">
              Supporter
            </span>
            <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">Support HavenReach</h3>
            <p className="text-[#5C5C5C] text-sm mb-4">Give any amount. Suggested:</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {event.supportOptions.map((opt) => (
                <span
                  key={opt}
                  className="px-3 py-1 border border-[#E7E2D9] bg-white rounded-full text-sm font-medium text-[#1E1E1E]"
                >
                  {opt}
                </span>
              ))}
            </div>
            <ul className="space-y-3 text-sm text-[#5C5C5C] mb-8 flex-1">
              <li className="flex items-start gap-2">
                <span className="text-[#2E6F5E] mt-0.5 flex-shrink-0">&#10003;</span>
                <span>Can&rsquo;t run? Still make a real impact</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2E6F5E] mt-0.5 flex-shrink-0">&#10003;</span>
                <span>Funds go directly to equipment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2E6F5E] mt-0.5 flex-shrink-0">&#10003;</span>
                <span>Every amount counts</span>
              </li>
            </ul>
            <a
              href={event.donationLink}
              className="mt-auto inline-block bg-[#2E6F5E] text-white px-6 py-3 rounded-lg font-semibold text-center text-sm hover:bg-[#255c4d] transition-colors shadow-sm"
            >
              Donate Now
            </a>
          </div>

          {/* Card 3: Can't Attend */}
          <div className="rounded-xl border border-[#E7E2D9] bg-white p-8 flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#5C5C5C] mb-3">
              From Anywhere
            </span>
            <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">Can&rsquo;t Make It?</h3>
            <p className="text-[#5C5C5C] text-sm mb-6">You can still be part of this.</p>
            <ul className="space-y-3 text-sm text-[#5C5C5C] mb-8 flex-1">
              <li className="flex items-start gap-2">
                <span className="text-[#2E6F5E] mt-0.5 flex-shrink-0">&#10003;</span>
                <span>Donate online from anywhere</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2E6F5E] mt-0.5 flex-shrink-0">&#10003;</span>
                <span>Share this page with your network</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2E6F5E] mt-0.5 flex-shrink-0">&#10003;</span>
                <span>Support the mission from wherever you are</span>
              </li>
            </ul>
            <a
              href={event.donationLink}
              className="mt-auto inline-block border border-[#2E6F5E] text-[#2E6F5E] px-6 py-3 rounded-lg font-semibold text-center text-sm hover:bg-[#2E6F5E]/5 transition-colors"
            >
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
    <section className="bg-[#2E6F5E] px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">

        <p className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-6">
          Community
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-7">
          Run with purpose.<br />
          Show up for something real.
        </h2>

        <p className="text-white/80 text-base md:text-lg leading-relaxed mb-5 max-w-xl mx-auto">
          The HavenReach 5K is a community run — built by local runners, families, and neighbors
          who believe that small, committed acts add up to real change.
        </p>

        <p className="text-white/70 text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Bring a friend. Walk with a neighbor. Cheer someone on. The more of us who show up,
          the more equipment reaches kids in the Kalinago Territory.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={event.registrationLink}
            className="inline-block bg-white text-[#2E6F5E] px-8 py-4 rounded-lg font-semibold text-base text-center hover:bg-stone-50 transition-colors"
          >
            Register Now
          </a>
          <a
            href={event.donationLink}
            className="inline-block border border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-base text-center hover:bg-white/10 transition-colors"
          >
            Support the Mission
          </a>
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
    <section className="bg-[#F8F7F4] px-6 py-20 border-t border-[#E7E2D9]">
      <div className="max-w-3xl mx-auto">

        <p className="text-xs font-semibold text-[#2E6F5E] uppercase tracking-widest mb-5">
          Common Questions
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] leading-snug mb-12">
          Frequently asked questions
        </h2>

        <div className="space-y-2">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="bg-white rounded-lg border border-[#E7E2D9] overflow-hidden">
              <button
                onClick={() => toggle(i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-[#F8F7F4] transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-[#1E1E1E] text-sm leading-snug">{item.q}</span>
                <span className="text-[#5C5C5C]">
                  <IconChevron open={openIndex === i} />
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 border-t border-[#E7E2D9]">
                  <p className="text-[#5C5C5C] text-sm leading-relaxed pt-4">{item.a}</p>
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
    <section className="bg-white px-6 py-24 border-t border-[#E7E2D9]">
      <div className="max-w-2xl mx-auto text-center">

        <p className="text-xs font-semibold text-[#2E6F5E] uppercase tracking-widest mb-6">
          Join Us
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-[#1E1E1E] leading-tight mb-6">
          Join the first HavenReach 5K in {event.city}.
        </h2>

        <p className="text-[#5C5C5C] text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          One Saturday morning in {event.city}. A full season of soccer for kids in Dominica.
          Register, donate, or share this page — every act of support counts.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={event.registrationLink}
            className="inline-block bg-[#2E6F5E] text-white px-10 py-4 rounded-lg font-semibold text-base text-center hover:bg-[#255c4d] transition-colors shadow-sm"
          >
            Register Now
          </a>
          <a
            href={event.donationLink}
            className="inline-block border border-[#2E6F5E] text-[#2E6F5E] px-10 py-4 rounded-lg font-semibold text-base text-center hover:bg-[#2E6F5E]/5 transition-colors"
          >
            Donate Instead
          </a>
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
    <footer className="bg-[#1E1E1E] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <p className="text-white font-semibold text-base mb-1">HavenReach</p>
            <p className="text-white/50 text-sm">Service with purpose. Community with care.</p>
          </div>
          <div className="text-sm flex flex-col md:items-end gap-1.5">
            <p className="text-white/60">
              Questions?{" "}
              <a href={`mailto:${event.contactEmail}`} className="text-white hover:underline">
                {event.contactEmail}
              </a>
            </p>
            <p className="text-white/30 text-xs">A HavenLabs initiative</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6">
          <p className="text-white/25 text-xs text-center">
            &copy; {new Date().getFullYear()} HavenReach. All rights reserved.
          </p>
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="font-sans antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
        <NavBar />
        <Hero />
        <Mission />
        <EventDetails />
        <RegistrationCards />
        <Community />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
