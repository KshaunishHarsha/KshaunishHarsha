import styles from "@/app/page.module.css";

const USERNAME = "KshaunishHarsha";

type Day = { date: string; level: number };

async function getContributions(): Promise<{ days: Day[]; total: number } | null> {
  try {
    const res = await fetch(`https://github.com/users/${USERNAME}/contributions`, {
      next: { revalidate: 86400 },
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
      },
    });
    if (!res.ok) return null;
    const html = await res.text();

    const days: Day[] = [];
    const re = /data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="(\d)"/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(html))) {
      days.push({ date: m[1], level: Number(m[2]) });
    }
    if (!days.length) return null;
    days.sort((a, b) => a.date.localeCompare(b.date));

    const totalMatch = html.match(/([\d,]+)\s+contributions?\s+in the last year/);
    const total = totalMatch ? parseInt(totalMatch[1].replace(/,/g, ""), 10) : 0;
    return { days, total };
  } catch {
    return null;
  }
}

async function getProfile(): Promise<{ repos: number; followers: number } | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${USERNAME}`, {
      next: { revalidate: 86400 },
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return { repos: data.public_repos ?? 0, followers: data.followers ?? 0 };
  } catch {
    return null;
  }
}

const LEVEL_CLASSES = ["ghL0", "ghL1", "ghL2", "ghL3", "ghL4"] as const;

export default async function GitHubActivity() {
  const [contrib, profile] = await Promise.all([getContributions(), getProfile()]);
  if (!contrib) return null;

  const firstDow = new Date(`${contrib.days[0].date}T00:00:00Z`).getUTCDay();

  return (
    <section className={styles.section}>
      <p className={styles.eyebrow}>
        <span className={styles.eyebrowNum}>05</span> / GitHub
      </p>
      <h2 className={styles.sectionTitle}>
        Always shipping.
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/character/keyboard.png" alt="" className={styles.titleBoba} style={{ width: 44 }} />
      </h2>

      <div className={styles.ghStats}>
        <div>
          <p className={styles.ghStatNumber}>{contrib.total.toLocaleString()}</p>
          <p className={styles.ghStatLabel}>contributions in the last year</p>
        </div>
        {profile && (
          <>
            <div className={styles.ghStatDivider} />
            <div>
              <p className={styles.ghStatNumber}>{profile.repos}</p>
              <p className={styles.ghStatLabel}>public repos</p>
            </div>
            <div className={styles.ghStatDivider} />
            <div>
              <p className={styles.ghStatNumber}>{profile.followers}</p>
              <p className={styles.ghStatLabel}>followers</p>
            </div>
          </>
        )}
      </div>

      <a
        href={`https://github.com/${USERNAME}`}
        target="_blank"
        rel="noopener"
        className={styles.ghCard}
        aria-label={`GitHub contributions of ${USERNAME}`}
      >
        <span className={styles.ghGrid}>
          {Array.from({ length: firstDow }, (_, i) => (
            <span key={`pad-${i}`} />
          ))}
          {contrib.days.map((day) => (
            <span
              key={day.date}
              title={day.date}
              className={`${styles.ghCell} ${styles[LEVEL_CLASSES[day.level] ?? "ghL0"]}`}
            />
          ))}
        </span>
        <span className={styles.ghCardFooter}>
          <span className={styles.ghLegend}>
            less
            {LEVEL_CLASSES.map((lvl) => (
              <span key={lvl} className={`${styles.ghCell} ${styles[lvl]}`} />
            ))}
            more
          </span>
          <span className={styles.ghProfileLink}>github.com/{USERNAME} ↗</span>
        </span>
      </a>
    </section>
  );
}
