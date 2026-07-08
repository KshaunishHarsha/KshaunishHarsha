import type { Metadata } from "next";
import styles from "@/app/page.module.css";
import SiteNav from "@/components/layout/SiteNav";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Projects — Kshaunish Harsha",
  description:
    "Production AI pipelines, RAG platforms, multi-agent systems, and AI safety research — the full project breakdowns.",
};

const FEATURED = [
  {
    id: "sentinel",
    tag: "Open Paws · Production",
    tagColor: "#db2777",
    title: "Federal Register Sentinel",
    subtitle: "Automated regulatory intelligence pipeline",
    tint: "toolCardPink",
    bullets: [
      "Automated daily pipeline monitoring federal regulatory publications across 7 government agencies for legal and policy teams — replacing manual attorney and policy-staff review.",
      "Designed a 4-layer keyword + AI filtering system with agency-specific thresholds to maximize recall on relevant documents.",
      "Implemented schema-validated LLM summarization with a 2-tier self-correction loop and an idempotent, crash-safe pipeline architecture.",
    ],
    stack: ["GPT-4o-mini", "FastAPI", "PostgreSQL", "Agentic pipelines", "Structured outputs", "Railway"],
    stats: [
      ["60K+", "pages scanned / year"],
      ["7", "federal agencies"],
      ["4-layer", "filtering pipeline"],
      ["2-tier", "self-correction loop"],
    ],
    repo: null,
    demo: null,
  },
  {
    id: "compliance",
    tag: "Open Paws · RAG",
    tagColor: "#7c3aed",
    title: "Compliance Intelligence Platform",
    subtitle: "Investigative RAG system over the USDA APHIS corpus",
    tint: "toolCardPurple",
    bullets: [
      "Built a hybrid retrieval RAG platform searching 1,617 regulatory documents via combined vector, BM25, and metadata scoring — all three signals run in parallel.",
      "Implemented grounded, citation-backed chat with zero-unsupported-claims constraints enforced via post-hoc validation.",
      "Deployed full stack across Railway, Supabase, and Vercel with an OCR ingestion pipeline (PyMuPDF + Tesseract).",
    ],
    stack: ["Next.js", "FastAPI", "pgvector", "RAG", "Hybrid search", "Supabase", "GPT-4o"],
    stats: [
      ["1,617", "documents indexed"],
      ["3", "retrieval signals in parallel"],
      ["0", "unsupported claims"],
      ["OCR", "ingestion pipeline"],
    ],
    repo: "https://github.com/KshaunishHarsha/aw-compliance-intelligence-db",
    demo: null,
  },
  {
    id: "aegis",
    tag: "MumbaiHacks 2025 · Finalist",
    tagColor: "#db2777",
    title: "Aegis",
    subtitle: "Autonomous AI video detection & attribution",
    tint: "toolCardPink",
    bullets: [
      "Built a multi-agent AI video forensics system detecting synthetic media by combining perceptual forensics, semantic reasoning, provenance verification, and model attribution.",
      "Combined LLM-driven reasoning agents with classical ML and computer vision baselines.",
      "Implemented consensus-based agent orchestration with confidence scoring, failure handling, and explainable outputs.",
    ],
    stack: ["Gemini", "Google ADK", "Multi-agent systems", "OpenCV", "FastAPI", "Vertex AI", "Next.js"],
    stats: [
      ["Finalist", "MumbaiHacks 2025"],
      ["4", "forensic analysis lenses"],
      ["CV + LLM", "hybrid detection"],
      ["Consensus", "agent orchestration"],
    ],
    repo: "https://github.com/KshaunishHarsha/Aegis-MumHack2025",
    demo: null,
  },
  {
    id: "safety-scissor",
    tag: "AI Safety Research · Global South AI Safety Hackathon",
    tagColor: "#7c3aed",
    title: "Does the Safety Scissor Exist?",
    subtitle: "Capability & reliability trade-offs under forced model downgrades",
    tint: "toolCardPurple",
    bullets: [
      "Ran 225 evaluations across a 70B → 8B model ladder to test whether capability and reliability degrade together under forced model downgrades.",
      "Designed a mechanical + human-in-the-loop scoring pipeline with pre-registered ground truth and inter-rater agreement checks.",
      "Found sycophancy flip rates were scale-invariant (~40–43%) across every model tier — a policy-relevant finding on model-downgrade risk.",
    ],
    stack: ["Python", "OpenRouter", "LLM evaluation", "Benchmarking design", "Pandas", "Matplotlib"],
    stats: [
      ["225", "evaluations run"],
      ["70B→8B", "model ladder"],
      ["~43%", "sycophancy flip rate"],
      ["2", "safety axes measured"],
    ],
    repo: "https://github.com/KshaunishHarsha/frontier-fallback-safety-audit",
    demo: null,
  },
];

const LAB = [
  {
    name: "PawPatrol",
    language: "TypeScript",
    langColor: "#3178c6",
    desc: "AI-assisted pet adoption matchmaker — deterministic scoring across 8 compatibility dimensions, with LLM-generated reasoning so shelters see why a match works.",
    stack: ["FastAPI", "Next.js", "LLM reasoning"],
    repo: "https://github.com/KshaunishHarsha/paw-patrol",
    demo: "https://paw-patrol-pied.vercel.app/",
  },
  {
    name: "CertGuard",
    language: "TypeScript",
    langColor: "#3178c6",
    desc: "Anti-fraud credential platform: Gemini-powered OCR, SHA-256 PKI hashing, a blockchain-inspired immutable hash chain, and dual QR + steganographic watermark verification.",
    stack: ["Next.js", "Firebase", "Genkit", "Gemini"],
    repo: "https://github.com/KshaunishHarsha/certguard-ieee",
    demo: null,
  },
  {
    name: "Mini Drive",
    language: "JavaScript",
    langColor: "#f1e05a",
    desc: "A distributed file system simulating cloud storage — Next.js gateway, FastAPI metadata server, and three independent storage nodes demonstrating RPC and replication.",
    stack: ["Next.js", "FastAPI", "Distributed systems"],
    repo: "https://github.com/KshaunishHarsha/mini-drive",
    demo: null,
  },
  {
    name: "VC Pitch Generator",
    language: "Python",
    langColor: "#3572A5",
    desc: "Turns any (stupid) startup idea into a buzzword-heavy 11-section VC pitch — complete with a viral 'reality check' section. Rate-limited, PDF export, production-ready.",
    stack: ["FastAPI", "React", "Groq"],
    repo: "https://github.com/KshaunishHarsha/vc-pitch-generator",
    demo: null,
  },
  {
    name: "Portfolio Optimizer",
    language: "Python",
    langColor: "#3572A5",
    desc: "Full-stack portfolio analysis — live market data via Alpha Vantage, a Python optimization algorithm, and risk-based rebalancing suggestions on an interactive dashboard.",
    stack: ["React", "Node.js", "Python", "Recharts"],
    repo: "https://github.com/KshaunishHarsha/portfolio-optimizer",
    demo: null,
  },
  {
    name: "GovOne",
    language: "TypeScript",
    langColor: "#3178c6",
    desc: "Unified e-governance MVP for India (Ace2.0 Hackathon) — complaints, appointments, documents, and bill payments with AI alerts and a crowdsourced problem map. EN/HI.",
    stack: ["Next.js", "Firebase", "Google Maps"],
    repo: "https://github.com/KshaunishHarsha/govone-smart-governance",
    demo: null,
  },
];

export default function ProjectsPage() {
  return (
    <>
      <SiteNav active="projects" />

      <section className={styles.pageHeader}>
        <div aria-hidden className={styles.heroDots} />
        <div className={styles.pageHeaderInner}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowNum}>01</span> / Selected work
          </p>
          <h1 className={styles.pageTitle}>
            Things I&apos;ve shipped.
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/character/controller.png" alt="" className={styles.titleBoba} style={{ width: 44 }} />
          </h1>
          <p className={styles.pageSubtitle}>
            Production pipelines, RAG platforms, multi-agent systems, and safety research — built end to end,
            from ingestion to deploy.
          </p>
        </div>
      </section>

      <section className={styles.projFeatures}>
        {FEATURED.map((project, i) => (
          <article
            key={project.id}
            id={project.id}
            className={`${styles.projFeature} ${i % 2 === 1 ? styles.projFeatureReverse : ""}`}
          >
            <div className={styles.projFeatureContent}>
              <p className={styles.cardTag} style={{ color: project.tagColor }}>
                {project.tag}
              </p>
              <h2 className={styles.projFeatureTitle}>{project.title}</h2>
              <p className={styles.projFeatureSub}>{project.subtitle}</p>
              <ul className={styles.projBullets}>
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className={styles.chipRow}>
                {project.stack.map((tech) => (
                  <span key={tech} className={styles.chip}>
                    {tech}
                  </span>
                ))}
              </div>
              {project.repo && (
                <div className={styles.projLinks}>
                  <a href={project.repo} target="_blank" rel="noopener" className={styles.projSourceLink}>
                    View source ↗
                  </a>
                </div>
              )}
            </div>
            <aside className={`${styles.projStatsPanel} ${styles[project.tint]}`}>
              <span className={styles.projStatsNumber}>{String(i + 1).padStart(2, "0")}</span>
              {project.stats.map(([value, label]) => (
                <div key={label} className={styles.projStat}>
                  <span className={styles.projStatValue}>{value}</span>
                  <span className={styles.projStatLabel}>{label}</span>
                </div>
              ))}
            </aside>
          </article>
        ))}
      </section>

      <section className={styles.section}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowNum}>02</span> / More from the lab
        </p>
        <h2 className={styles.sectionTitle}>
          Also built.
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/character/toolbox.png" alt="" className={styles.titleBoba} style={{ width: 38 }} />
        </h2>
        <div className={styles.labGrid}>
          {LAB.map((project) => (
            <div key={project.name} className={styles.labCard}>
              <p className={styles.labLang}>
                <span className={styles.labLangDot} style={{ background: project.langColor }} />
                {project.language}
              </p>
              <h3 className={styles.labName}>{project.name}</h3>
              <p className={styles.labDesc}>{project.desc}</p>
              <div className={styles.chipRow}>
                {project.stack.map((tech) => (
                  <span key={tech} className={styles.chip}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.labLinks}>
                <a href={project.repo} target="_blank" rel="noopener" className={styles.projSourceLink}>
                  GitHub ↗
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener" className={styles.projSourceLink}>
                    Live demo ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.projNextUp}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowNum}>03</span> / Next up
        </p>
        <article className={styles.projCardDark}>
          <p className={styles.projDarkTag}>
            <span className={styles.badgeDot} />
            In the lab · launching soon
          </p>
          <h2 className={styles.projDarkTitle}>RedPrompt</h2>
          <p className={styles.projDarkDesc}>
            An India-hosted AI red-teaming platform that adversarially tests your LLM app&apos;s data-security
            safeguards and produces DPDP §8-ready technical evidence for your DPIA.
          </p>
          <a href="/#contact" className={styles.projDarkLink}>
            Want early access? Get in touch →
          </a>
        </article>
      </section>

      <SiteFooter />
    </>
  );
}
