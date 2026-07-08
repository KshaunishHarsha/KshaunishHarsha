"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./HeroCharacter.module.css";

type Phase = "sitting" | "waking" | "standing";
type BlobView = "menu" | "redprompt";

export default function HeroCharacter() {
  const [phase, setPhase] = useState<Phase>("sitting");
  const [blobVisible, setBlobVisible] = useState(false);
  const [blobView, setBlobView] = useState<BlobView>("menu");
  const wrapRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          clearTimers();
          setPhase("sitting");
          setBlobVisible(false);
          setBlobView("menu");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimers();
    };
  }, [clearTimers]);

  const nudge = useCallback(() => {
    setPhase((current) => {
      if (current !== "sitting") return current;
      timers.current.push(window.setTimeout(() => setPhase("standing"), 650));
      timers.current.push(window.setTimeout(() => setBlobVisible(true), 1000));
      return "waking";
    });
  }, []);

  const sittingScene = phase === "sitting" || phase === "waking";

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <div
        className={`${styles.frame} ${sittingScene ? styles.frameNudgeable : ""}`}
        onClick={sittingScene ? nudge : undefined}
      >
        <div className={`${styles.scene} ${sittingScene ? styles.sceneVisible : ""}`}>
          <img src="/character/back_room.png" alt="" className={styles.deskRoom} />
          <img
            src="/character/char_only.png"
            alt="Kshaunish sitting at his desk"
            className={`${styles.deskChar} ${phase === "waking" ? styles.deskCharWobble : ""}`}
          />
          <div className={styles.status}>
            <div className={styles.statusBubble}>
              <span className={styles.statusDot} />
              currently vibe-coding RedPrompt
            </div>
            <div className={styles.statusTail} />
          </div>
        </div>

        <div className={`${styles.scene} ${phase === "standing" ? styles.sceneVisible : ""}`}>
          <img
            src="/character/hero_room.png"
            alt="Kshaunish standing up, ready to chat"
            className={styles.standChar}
          />
        </div>

        <img
          src={phase === "standing" ? "/character/dog_sleeping.png" : "/character/dog_sitting.png"}
          alt={phase === "standing" ? "Shih Tzu napping" : "Shih Tzu sitting"}
          className={styles.dog}
        />

        <span aria-hidden className={`${styles.bang} ${phase === "waking" ? styles.bangShow : ""}`}>
          !
        </span>

        <button
          type="button"
          aria-label="Nudge the character"
          className={`${styles.hand} ${phase === "waking" ? styles.handPoke : ""} ${
            phase === "standing" ? styles.handHidden : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            nudge();
          }}
        >
          <img src="/character/hand.png" alt="" />
        </button>
      </div>

      <div className={`${styles.blob} ${blobVisible ? styles.blobVisible : ""}`}>
        <div className={styles.blobBubble}>
          {blobView === "menu" ? (
            <>
              Want to talk about my projects or myself?
              <div className={styles.blobActions}>
                <Link href="/projects" className={styles.blobLink}>
                  Projects
                </Link>
                <Link href="/about" className={`${styles.blobLink} ${styles.blobLinkAlt}`}>
                  About me
                </Link>
                <button
                  type="button"
                  className={`${styles.blobLink} ${styles.blobLinkAlt}`}
                  onClick={() => setBlobView("redprompt")}
                >
                  What&apos;s RedPrompt?
                </button>
              </div>
            </>
          ) : (
            <>
              RedPrompt is an India-hosted AI red-teaming platform that adversarially tests your LLM
              app&apos;s data-security safeguards and produces DPDP §8-ready technical evidence for your
              DPIA. About to launch very soon!
              <div className={styles.blobActions}>
                <button
                  type="button"
                  className={`${styles.blobLink} ${styles.blobLinkAlt}`}
                  onClick={() => setBlobView("menu")}
                >
                  ← Back
                </button>
              </div>
            </>
          )}
        </div>
        <div className={styles.blobTail} />
        <div className={styles.blobTailInner} />
      </div>

      <p className={`${styles.hint} ${phase !== "sitting" ? styles.hintHidden : ""}`}>
        <span className={styles.hintDot} />
        nudge him
      </p>

      <div className={styles.socialRail}>
        <a
          href="https://github.com/KshaunishHarsha"
          target="_blank"
          rel="noopener"
          className={`${styles.socialBtn} ${styles.socialBtnGithub}`}
          aria-label="GitHub — KshaunishHarsha"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
          </svg>
          <span className={styles.socialTip}>GitHub ↗</span>
        </a>
        <a
          href="https://www.linkedin.com/in/kshaunish-harsha"
          target="_blank"
          rel="noopener"
          className={`${styles.socialBtn} ${styles.socialBtnLinkedin}`}
          aria-label="LinkedIn — Kshaunish Harsha"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z" />
          </svg>
          <span className={styles.socialTip}>LinkedIn ↗</span>
        </a>
        <a
          href="/resume.pdf"
          download="Kshaunish-Harsha-Resume.pdf"
          className={`${styles.socialBtn} ${styles.socialBtnResume}`}
          aria-label="Download resume"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <path d="M12 11v6" />
            <path d="m9 14.5 3 3 3-3" />
          </svg>
          <span className={styles.socialTip}>Resume ↓</span>
        </a>
      </div>
    </div>
  );
}
