import Link from "next/link";
import styles from "./page.module.css";
import Ticker from "@/components/home/Ticker";
import TiltCard from "@/components/home/TiltCard";
import ContactForm from "@/components/home/ContactForm";
import HeroCharacter from "@/components/home/HeroCharacter";
import GitHubActivity from "@/components/home/GitHubActivity";
import SiteNav from "@/components/layout/SiteNav";
import SiteFooter from "@/components/layout/SiteFooter";

const SHOW_AVAILABILITY = true;
const SHOW_ACHIEVEMENTS = true;

export default function Home() {
  return (
    <>
      <SiteNav active="home" />

      <section className={styles.hero}>
        <div aria-hidden className={styles.heroDots} />
        <div className={styles.heroInner}>
          <div className={styles.heroLayout}>
            <div className={styles.heroCopy}>
              {SHOW_AVAILABILITY && (
                <div className={styles.badge}>
                  <span className={styles.badgeDot} />
                  Mumbai, India — open to opportunities
                </div>
              )}
              <h1 className={styles.heroTitle}>
                Kshaunish
                <br />
                Harsha<span className={styles.heroTitleDot}>.</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Applied AI engineer building <span className={styles.heroHighlight}>agentic systems</span>,{" "}
                <span className={styles.heroHighlight}>RAG platforms</span>, and production LLM pipelines — end to
                end.
              </p>
              <div className={styles.heroActions}>
                <Link href="/projects" className={styles.btnPrimary}>
                  View projects →
                </Link>
                <a href="#contact" className={styles.btnSecondary}>
                  Get in touch
                </a>
              </div>
            </div>
            <HeroCharacter />
          </div>
        </div>
      </section>

      <Ticker />

      <section className={styles.section}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowNum}>01</span> / Selected work
        </p>
        <h2 className={styles.sectionTitle}>
          Things I&apos;ve shipped.
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/character/controller.png" alt="" className={styles.titleBoba} style={{ width: 38 }} />
        </h2>
        <div className={styles.cardsGrid}>
          <TiltCard href="/projects#sentinel" className={`${styles.card} ${styles.cardPink} ${styles.cardWide}`}>
            <span className={styles.cardNumberLg} style={{ color: "rgba(236,72,153,0.12)" }}>
              01
            </span>
            <p className={styles.cardTag} style={{ color: "#db2777" }}>
              Open Paws · Production
            </p>
            <h3 className={styles.cardHeadingLg}>Federal Register Sentinel</h3>
            <p className={styles.cardDescLg}>
              A daily pipeline that reads the U.S. Federal Register — 60,000+ pages a year — so attorneys
              don&apos;t have to. Four-layer filtering across 7 agencies, self-correcting LLM summaries.
            </p>
            <span className={styles.cardLinkLg} style={{ color: "#db2777" }}>
              Learn more →
            </span>
          </TiltCard>

          <TiltCard href="/projects#compliance" className={`${styles.card} ${styles.cardPurple}`}>
            <span className={styles.cardNumberSm} style={{ color: "rgba(139,92,246,0.14)" }}>
              02
            </span>
            <p className={styles.cardTag} style={{ color: "#7c3aed" }}>
              Open Paws · RAG
            </p>
            <h3 className={styles.cardHeadingSm}>Compliance Intelligence Platform</h3>
            <p className={styles.cardDescSm}>
              Hybrid search and citation-backed chat over 1,600+ regulatory documents. Zero unsupported claims.
            </p>
            <span className={styles.cardLinkSm} style={{ color: "#7c3aed" }}>
              Learn more →
            </span>
          </TiltCard>

          <TiltCard href="/projects#aegis" className={`${styles.card} ${styles.cardPink}`}>
            <span className={styles.cardNumberSm} style={{ color: "rgba(236,72,153,0.13)" }}>
              03
            </span>
            <p className={styles.cardTag} style={{ color: "#db2777" }}>
              MumbaiHacks 2025 · Finalist
            </p>
            <h3 className={styles.cardHeadingSm}>Aegis</h3>
            <p className={styles.cardDescSm}>
              Multi-agent detection of AI-generated video, with consensus orchestration and explainable outputs.
            </p>
            <span className={styles.cardLinkSm} style={{ color: "#db2777" }}>
              Learn more →
            </span>
          </TiltCard>

          <TiltCard
            href="/projects#safety-scissor"
            className={`${styles.card} ${styles.cardPurple} ${styles.cardWide}`}
          >
            <span className={styles.cardNumberLg} style={{ color: "rgba(139,92,246,0.13)" }}>
              04
            </span>
            <p className={styles.cardTag} style={{ color: "#7c3aed" }}>
              AI Safety Research · Global South AI Safety Hackathon
            </p>
            <h3 className={styles.cardHeadingLg}>Does the Safety Scissor Exist?</h3>
            <p className={styles.cardDescLg}>
              225 evaluations across a 70B → 8B model ladder. Sycophancy flip rates held at ~40–43% at every
              scale — a policy-relevant finding on model-downgrade risk.
            </p>
            <span className={styles.cardLinkLg} style={{ color: "#7c3aed" }}>
              Learn more →
            </span>
          </TiltCard>
        </div>
      </section>

      <section className={styles.instagram}>
        <div className={styles.instagramInner}>
          <div className={styles.instagramLayout}>
            <div className={styles.instagramCopy}>
              <p className={styles.instagramEyebrow}>
                <span className={styles.eyebrowNum}>02</span> / @kshaun.py on Instagram
              </p>
              <h2 className={styles.instagramTitle}>
                AI, explained.
                <br />
                <span className={styles.instagramTitleHighlight}>3M+ views</span> and counting.
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/character/boba.png" alt="" className={styles.titleBoba} />
              </h2>
              <div className={styles.statsRow}>
                <div>
                  <p className={styles.statNumber}>3M+</p>
                  <p className={styles.statLabel}>views across content</p>
                </div>
                <div className={styles.statDivider} />
                <div>
                  <p className={styles.statNumber}>1.4K</p>
                  <p className={styles.statLabel}>followers</p>
                </div>
              </div>
              <div className={styles.instagramActions}>
                <a
                  href="https://www.instagram.com/kshaun.py"
                  target="_blank"
                  rel="noopener"
                  className={styles.followBtn}
                >
                  Follow along →
                </a>
                <a href="https://x.com/kshaun_py" target="_blank" rel="noopener" className={styles.xLink}>
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  also on X
                </a>
              </div>
            </div>
            <a
              href="https://www.instagram.com/kshaun.py"
              target="_blank"
              rel="noopener"
              className={styles.igCard}
              aria-label="Open @kshaun.py on Instagram"
            >
              <div className={styles.igCardHeader}>
                <span className={styles.igAvatarRing}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/instagram/pfp.jpg" alt="@kshaun.py profile picture" className={styles.igAvatar} />
                </span>
                <span className={styles.igIdentity}>
                  <span className={styles.igHandle}>@kshaun.py</span>
                  <span className={styles.igName}>21 • mumbai · ai • code • side quests</span>
                </span>
                <svg
                  className={styles.igGlyph}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden
                >
                  <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div className={styles.igStats}>
                <span className={styles.igStat}>
                  <span className={styles.igStatNumber}>15</span>
                  <span className={styles.igStatLabel}>posts</span>
                </span>
                <span className={styles.igStat}>
                  <span className={styles.igStatNumber}>1.4K</span>
                  <span className={styles.igStatLabel}>followers</span>
                </span>
                <span className={styles.igStat}>
                  <span className={styles.igStatNumber}>3M+</span>
                  <span className={styles.igStatLabel}>views</span>
                </span>
              </div>
              <span className={styles.igReels} aria-hidden>
                {["reel1", "reel2", "reel3"].map((reel) => (
                  <span key={reel} className={styles.igReel}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/instagram/${reel}.jpg`} alt="" className={styles.igReelThumb} />
                    <span className={styles.igReelPlay}>▶</span>
                  </span>
                ))}
              </span>
              <span className={styles.igCardFooter}>instagram.com/kshaun.py ↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowNum}>03</span> / Stack
        </p>
        <h2 className={styles.sectionTitle}>
          The toolbox.
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/character/toolbox.png" alt="" className={styles.titleBoba} style={{ width: 40 }} />
        </h2>
        <div className={styles.toolboxGrid}>
          {[
            {
              title: "Languages",
              items: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
              core: ["Python", "TypeScript"],
              tint: styles.toolCardPink,
            },
            {
              title: "LLM systems",
              items: [
                "Multi-agent design",
                "Agent orchestration",
                "Tool calling",
                "RAG",
                "Hybrid search",
                "LangGraph",
                "LlamaIndex",
                "Google ADK",
                "Genkit",
              ],
              core: ["Multi-agent design", "RAG", "LangGraph"],
              tint: styles.toolCardPurple,
            },
            {
              title: "ML & data",
              items: ["scikit-learn", "TensorFlow", "OpenCV", "NumPy", "Pandas", "Matplotlib"],
              core: ["scikit-learn"],
              tint: styles.toolCardPink,
            },
            {
              title: "Backend & deploy",
              items: ["FastAPI", "Pydantic", "Celery", "Docker", "Railway", "Supabase", "Firebase"],
              core: ["FastAPI", "Docker"],
              tint: styles.toolCardPurple,
            },
            {
              title: "Databases & infra",
              items: ["PostgreSQL", "pgvector", "Redis", "Prometheus", "Grafana"],
              core: ["PostgreSQL", "pgvector"],
              tint: styles.toolCardPink,
            },
            {
              title: "Web",
              items: ["Next.js", "React", "Tailwind CSS", "Node.js", "Streamlit"],
              core: ["Next.js", "React"],
              tint: styles.toolCardPurple,
            },
          ].map(({ title, items, core, tint }) => (
            <div key={title} className={`${styles.toolCard} ${tint}`}>
              <h3 className={styles.toolboxHeading}>{title}</h3>
              <div className={styles.chipRow}>
                {items.map((item) => (
                  <span
                    key={item}
                    className={`${styles.chip} ${core.includes(item) ? styles.chipCore : ""}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {SHOW_ACHIEVEMENTS && (
        <section className={styles.recognition}>
          <div className={styles.section} style={{ padding: 0 }}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowNum}>04</span> / Recognition
            </p>
            <h2 className={styles.sectionTitle}>
              On the record.
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/character/trophy.png" alt="" className={styles.titleBoba} style={{ width: 28 }} />
            </h2>
            <div className={styles.recognitionGrid}>
              {[
                ["Finalist", "MumbaiHacks 2025"],
                ["2nd Runner-Up", "HackXplore"],
                ["Runner-Up", "Hyphen Ideathon"],
                ["Winner", "Resonate+ Blockchain Conference"],
                ["4th Place", "Kriti UI/UX Hackathon · NIT Patna"],
                ["4× Finalist", "College hackathons"],
              ].map(([title, subtitle]) => (
                <div key={title} className={styles.recognitionCard}>
                  <p className={styles.recognitionTitle}>{title}</p>
                  <p className={styles.recognitionSubtitle}>{subtitle}</p>
                </div>
              ))}
            </div>
            <div className={styles.certs}>
              <p className={styles.certsLabel}>Certifications</p>
              <div className={styles.certGrid}>
                {[
                  {
                    issuer: "Google × Kaggle",
                    name: "AI Agents Course",
                    href: "https://www.kaggle.com/certification/badges/kshaunishharsha/105",
                  },
                  {
                    issuer: "Oracle",
                    name: "Cloud Infrastructure 2025 AI Foundations Associate",
                    href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=002C9209803B3F8B7905DD1B469CDB744B5BB566299D54A790DC9F4AB04708AF",
                  },
                  {
                    issuer: "Google",
                    name: "Gen AI Academy 2.0",
                    href: "https://certificate.hack2skill.com/legacy/2025H2S10GENAI-AIML00041",
                  },
                ].map(({ issuer, name, href }) => (
                  <a key={name} href={href} target="_blank" rel="noopener" className={styles.certCard}>
                    <span className={styles.certIssuer}>{issuer}</span>
                    <span className={styles.certName}>{name}</span>
                    <span className={styles.certView}>View credential ↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <GitHubActivity />

      <section className={styles.aboutTeaser}>
        <Link href="/about" className={styles.aboutTeaserCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/character/head.png" alt="" className={styles.aboutTeaserFace} />
          <div className={styles.aboutTeaserBody}>
            <h2 className={styles.aboutTeaserTitle}>There&apos;s more to the story.</h2>
            <p className={styles.aboutTeaserDesc}>
              Experience, education, and a very good dog — the full picture lives on the About page.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/character/dog_sitting.png" alt="" className={styles.aboutTeaserDog} />
          <span className={styles.aboutTeaserArrow}>→</span>
        </Link>
      </section>

      <section id="contact" className={styles.contact}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowNum}>06</span> / Contact
        </p>
        <h2 className={styles.contactTitle}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/character/hand.png" alt="" className={styles.contactHand} />
          Let&apos;s build something<span className={styles.contactTitleDot}>.</span>
        </h2>
        <p className={styles.contactSubtitle}>
          Roles, collaborations, or a question about a project — my inbox is open.
        </p>
        <ContactForm />
        <div className={styles.contactLinks}>
          <a href="mailto:kshaunish.harsha2005@gmail.com" className={styles.contactLink}>
            kshaunish.harsha2005@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/kshaunish-harsha"
            target="_blank"
            rel="noopener"
            className={styles.contactLink}
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/KshaunishHarsha"
            target="_blank"
            rel="noopener"
            className={styles.contactLink}
          >
            GitHub ↗
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
