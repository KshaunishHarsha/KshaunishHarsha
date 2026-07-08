import Link from "next/link";
import styles from "@/app/page.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <p className={styles.footerCopy}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/character/head.png" alt="" className={styles.footerFace} />
          © 2026 Kshaunish Harsha · Mumbai, India
        </p>
        <div className={styles.footerLinks}>
          <Link href="/" className={styles.footerLink}>
            Home
          </Link>
          <Link href="/projects" className={styles.footerLink}>
            Projects
          </Link>
          <Link href="/about" className={styles.footerLink}>
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
