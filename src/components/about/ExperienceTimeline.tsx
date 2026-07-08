"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";

const STOPS = [
  {
    key: "instagram",
    short: "@kshaun.py",
    org: "Instagram",
    role: "AI Content Creator",
    where: "Independent",
    when: "Feb 2026 — Present",
    start: "Feb 2026",
    current: true,
    logo: "/instagram/pfp.jpg",
    orgAbout: "My AI content channel — short-form explainers on AI, agents, and the dev life, at @kshaun.py.",
    bullets: [
      "Creating and publishing AI-focused content, grown to ~1.4K followers and 3M+ views across all content.",
    ],
  },
  {
    key: "openpaws",
    short: "Open Paws",
    org: "Open Paws",
    role: "Resident Developer (AI Engineering Intern)",
    where: "Bengaluru, India",
    when: "May 2026 — Jul 2026",
    start: "May 2026",
    current: false,
    logo: "/orgs/openpaws.png",
    orgAbout:
      "A non-profit that builds AI tools and platforms for the animal welfare and animal advocacy sector.",
    bullets: [
      "Built and shipped a production regulatory intelligence pipeline automating daily review of the U.S. Federal Register — 60,000+ pages a year — replacing manual attorney and policy-staff review.",
      "Designed a 4-layer filtering pipeline (keyword scoring + AI verification) across 7 federal agencies, with a self-correcting LLM summarization system producing schema-validated digests.",
      "Built an investigative RAG platform with hybrid search (vector + BM25 + metadata) and grounded, citation-backed chat across a 1,600+ document compliance corpus.",
    ],
  },
  {
    key: "codebase",
    short: "CodeBase",
    org: "CodeBase, MPSTME",
    role: "Vice President, Technicals",
    where: "Mumbai, India",
    when: "Jul 2026 — Present",
    start: "Jul 2026",
    current: true,
    logo: "/orgs/codebase.png",
    orgAbout:
      "The official coding club of the Computer Engineering department at MPSTME, NMIMS.",
    bullets: [
      "Leading the Technicals department — curating technical events and hackathon challenges while coordinating technical operations across the team.",
    ],
  },
  {
    key: "redprompt",
    short: "RedPrompt",
    org: "RedPrompt",
    role: "Founder / Building",
    where: "Mumbai, India",
    when: "2026 — Present",
    start: "Now",
    current: true,
    logo: "/orgs/redprompt.png",
    orgAbout:
      "An India-hosted AI red-teaming platform for DPDP-era compliance — my own venture, launching soon.",
    bullets: [
      "Building an India-hosted AI red-teaming platform that adversarially tests LLM apps' data-security safeguards and produces DPDP §8-ready technical evidence for DPIAs. Launching very soon.",
    ],
  },
];

export default function ExperienceTimeline() {
  const [active, setActive] = useState(STOPS.length - 1);
  const stop = STOPS[active];

  return (
    <div className={styles.xpWrap}>
      <div className={styles.xpTrack}>
        <span aria-hidden className={styles.xpLine} />
        {STOPS.map((s, i) => (
          <button
            key={s.key}
            type="button"
            className={`${styles.xpNode} ${i <= active ? styles.xpNodeVisited : ""} ${
              i === active ? styles.xpNodeActive : ""
            }`}
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            aria-label={`${s.org} — ${s.role}`}
          >
            {i === active && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src="/character/head.png" alt="" className={styles.xpHere} />
            )}
            <span className={styles.xpDiamond} />
            <span className={styles.xpNodeOrg}>{s.short}</span>
            <span className={styles.xpNodeWhen}>{s.start}</span>
          </button>
        ))}
      </div>

      <div key={stop.key} className={styles.xpCard}>
        <div className={styles.xpCardHead}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={stop.logo} alt={`${stop.org} logo`} className={styles.xpLogo} />
          <div className={styles.xpCardHeadText}>
            <p className={styles.xpCardWhen}>
              {stop.when} · {stop.where}
              {stop.current && (
                <span className={styles.xpNow}>
                  <span className={styles.badgeDot} />
                  ongoing
                </span>
              )}
            </p>
            <h3 className={styles.timelineRole}>{stop.role}</h3>
            <p className={styles.timelineOrg}>{stop.org}</p>
          </div>
        </div>
        <p className={styles.xpOrgAbout}>{stop.orgAbout}</p>
        <ul className={styles.projBullets}>
          {stop.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
