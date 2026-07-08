import Link from "next/link";
import styles from "@/app/page.module.css";
import SiteNav from "@/components/layout/SiteNav";
import SiteFooter from "@/components/layout/SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteNav active="home" />
      <section className={styles.nfWrap}>
        <div aria-hidden className={styles.heroDots} />
        <div className={styles.nfInner}>
          <p className={styles.nfCode}>404</p>
          <h1 className={styles.nfTitle}>
            This level doesn&apos;t exist<span className={styles.contactTitleDot}>.</span>
          </h1>
          <p className={styles.nfDesc}>
            You&apos;ve wandered off the quest map. Even the dog looks confused.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/character/dog_sleeping.png" alt="" className={styles.nfDog} />
          <div className={styles.heroActions}>
            <Link href="/" className={styles.btnPrimary}>
              ← Back to the start
            </Link>
            <Link href="/projects" className={styles.btnSecondary}>
              View projects
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
