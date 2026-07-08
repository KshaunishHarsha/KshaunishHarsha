import Link from "next/link";
import styles from "@/app/page.module.css";

type Page = "home" | "projects" | "about";

export default function SiteNav({ active }: { active: Page }) {
  const linkClass = (page: Page) =>
    `${styles.navLink} ${active === page ? styles.navLinkActive : ""}`;

  return (
    <div className={styles.navWrap}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          kshaunish<span className={styles.logoDot}>.</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/character/blossom.png" alt="" className={styles.logoBlossom} />
        </Link>
        <div className={styles.navLinks}>
          <Link href="/" className={linkClass("home")}>
            Home
          </Link>
          <Link href="/projects" className={linkClass("projects")}>
            Projects
          </Link>
          <Link href="/about" className={linkClass("about")}>
            About
          </Link>
          <a
            href="https://github.com/KshaunishHarsha"
            target="_blank"
            rel="noopener"
            className={styles.navIconLink}
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/kshaunish-harsha"
            target="_blank"
            rel="noopener"
            className={styles.navIconLink}
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z" />
            </svg>
          </a>
          <a
            href="/resume.pdf"
            download="Kshaunish-Harsha-Resume.pdf"
            className={styles.navIconLink}
            aria-label="Download resume"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
              <path d="M12 11v6" />
              <path d="m9 14.5 3 3 3-3" />
            </svg>
          </a>
          <a href="/#contact" className={styles.contactBtn}>
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}
