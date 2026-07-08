import type { Metadata } from "next";
import styles from "@/app/page.module.css";
import SiteNav from "@/components/layout/SiteNav";
import SiteFooter from "@/components/layout/SiteFooter";
import ExperienceTimeline from "@/components/about/ExperienceTimeline";

export const metadata: Metadata = {
  title: "About — Kshaunish Harsha",
  description:
    "Applied AI engineer from Mumbai — experience, education, and the story behind the pixel character.",
};

export default function AboutPage() {
  return (
    <>
      <SiteNav active="about" />

      <section className={styles.pageHeader}>
        <div aria-hidden className={styles.heroDots} />
        <div className={styles.pageHeaderInner}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowNum}>01</span> / About
          </p>
          <h1 className={styles.pageTitle}>
            Hi, I&apos;m Kshaunish.
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/character/dog_sitting.png" alt="" className={styles.titleBoba} style={{ width: 42 }} />
          </h1>
          <p className={styles.pageSubtitle}>
            21, Mumbai. Applied AI engineer by day, AI explainer to 3M+ viewers by night — currently vibe-coding
            RedPrompt with a shih tzu supervising.
          </p>
        </div>
      </section>

      <section className={styles.aboutPhotos}>
        <div className={styles.aboutBanner}>
          <div className={styles.aboutBannerFrame}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/me/banner.jpg" alt="Kshaunish's desk at the Open Paws office" className={styles.aboutBannerImg} />
          </div>
          <div className={styles.aboutPfp}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/me/pfp.jpg"
              alt="Kshaunish pointing at the Open Paws sign at the office"
              className={styles.aboutPfpImg}
            />
          </div>
          <span className={styles.aboutBannerTag}>
            <span className={styles.badgeDot} />
            the open paws office · bengaluru
          </span>
        </div>
      </section>

      <section className={styles.aboutIntro}>
        <div className={styles.aboutIntroGrid}>
          <div className={styles.aboutBioCard}>
            <p className={styles.aboutBio}>
              I build <strong>end-to-end AI systems</strong> — the unglamorous, load-bearing kind: ingestion
              pipelines, retrieval layers, agent orchestration, self-correction loops, and the deploys that keep
              them alive. My work at Open Paws runs in production, reading 60,000+ pages of the U.S. Federal
              Register a year so attorneys don&apos;t have to.
            </p>
            <p className={styles.aboutBio}>
              Right now I&apos;m building <strong>RedPrompt</strong>, an India-hosted AI red-teaming platform for
              DPDP-era compliance. When I&apos;m not shipping, I&apos;m explaining AI on{" "}
              <a href="https://www.instagram.com/kshaun.py" target="_blank" rel="noopener">
                Instagram
              </a>{" "}
              or losing staring contests to my shih tzu.
            </p>
          </div>
          <div className={styles.aboutFacts}>
            {[
              ["📍", "Mumbai, India"],
              ["🎓", "MBA Tech (CE) @ NMIMS MPSTME"],
              ["🛠️", "Building RedPrompt"],
              ["🐶", "Shih tzu-certified engineer"],
            ].map(([icon, fact]) => (
              <div key={fact} className={styles.aboutFact}>
                <span className={styles.aboutFactIcon}>{icon}</span>
                {fact}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowNum}>02</span> / Experience
        </p>
        <h2 className={styles.sectionTitle}>Where I&apos;ve been.</h2>
        <ExperienceTimeline />
      </section>

      <section className={styles.section}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowNum}>03</span> / Education
        </p>
        <h2 className={styles.sectionTitle}>The classroom bit.</h2>
        <div className={styles.eduStack}>
          <div className={styles.eduCard}>
            <div>
              <h3 className={styles.timelineRole}>MBA Tech — Computer Engineering</h3>
              <p className={styles.timelineOrg}>
                NMIMS, Mukesh Patel School of Technology Management and Engineering
              </p>
              <p className={styles.timelineWhen}>Jul 2023 — Present · Mumbai, India · CGPA 3.20/4 (as of semester 6)</p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/character/blossom.png" alt="" className={styles.eduBlossom} />
          </div>
          <div className={styles.eduCard}>
            <div>
              <h3 className={styles.timelineRole}>Class 11–12 — Integrated JEE preparation</h3>
              <p className={styles.timelineOrg}>The IITians Hub</p>
              <p className={styles.timelineWhen}>2021 — 2023 · Mumbai, India</p>
            </div>
          </div>
          <div className={styles.eduCard}>
            <div>
              <h3 className={styles.timelineRole}>Schooling — up to Class 10</h3>
              <p className={styles.timelineOrg}>Universal High, Dahisar</p>
              <p className={styles.timelineWhen}>Up to 2021 · Mumbai, India</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowNum}>04</span> / Beyond the code
        </p>
        <h2 className={styles.sectionTitle}>Side quests.</h2>
        <div className={styles.questGrid}>
          <div className={`${styles.questCard} ${styles.toolCardPink}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/character/dog_sleeping.png" alt="" className={styles.questSprite} />
            <h3 className={styles.questTitle}>Chief Nap Officer</h3>
            <p className={styles.questDesc}>
              My shih tzu reviews all code by sleeping next to it. Approval rate: 100%.
            </p>
          </div>
          <div className={`${styles.questCard} ${styles.toolCardPurple}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/character/boba.png" alt="" className={styles.questSprite} />
            <h3 className={styles.questTitle}>Boba-driven development</h3>
            <p className={styles.questDesc}>
              One cup per deploy. The pipeline is idempotent; my boba order is too.
            </p>
          </div>
          <div className={`${styles.questCard} ${styles.toolCardPink}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/character/paper_plane.png" alt="" className={styles.questSprite} />
            <h3 className={styles.questTitle}>Walks &gt; checklists</h3>
            <p className={styles.questDesc}>
              Long walks through Mumbai and Bengaluru — where most of the good ideas actually happen.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.aboutCta}>
        <h2 className={styles.contactTitle}>
          Want the formal version<span className={styles.contactTitleDot}>?</span>
        </h2>
        <div className={styles.heroActions}>
          <a href="/resume.pdf" download="Kshaunish-Harsha-Resume.pdf" className={styles.btnPrimary}>
            Download resume ↓
          </a>
          <a href="/#contact" className={styles.btnSecondary}>
            Get in touch
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
