import styles from "@/app/page.module.css";

const SKILLS = [
  "Python",
  "RAG",
  "Multi-agent systems",
  "LangGraph",
  "FastAPI",
  "pgvector",
  "Hybrid search",
  "GPT-4o",
  "Gemini",
  "Next.js",
  "PostgreSQL",
  "Docker",
  "Agent orchestration",
  "Structured outputs",
];

export default function Ticker() {
  const items = [...SKILLS, ...SKILLS];

  return (
    <div className={styles.tickerWrap}>
      <div aria-hidden className={styles.tickerTrack}>
        {items.map((skill, i) => (
          <span key={i} className={styles.tickerItem}>
            {skill}
            <span className={styles.tickerStar}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
