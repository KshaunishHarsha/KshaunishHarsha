"use client";

import { useRef, useState } from "react";
import styles from "@/app/page.module.css";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [flying, setFlying] = useState(false);
  const flyTimer = useRef<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch("https://formsubmit.co/ajax/kshaunish.harsha2005@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          message: fd.get("message"),
          _subject: `Portfolio inquiry from ${fd.get("name")}`,
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      setStatus("sent");
      form.reset();
      if (flyTimer.current) window.clearTimeout(flyTimer.current);
      setFlying(true);
      flyTimer.current = window.setTimeout(() => {
        setFlying(false);
        setStatus("idle");
      }, 3500);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formRow}>
        <input name="name" required placeholder="Name" className={styles.input} />
        <input name="email" type="email" required placeholder="Email" className={styles.input} />
      </div>
      <textarea name="message" required placeholder="Your message" rows={5} className={styles.textarea} />
      <button type="submit" className={styles.submitBtn} disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : status === "sent" ? "Sent! ✓" : "Send message →"}
      </button>
      {status === "error" && (
        <p className={styles.formError}>
          Something went wrong — email me directly at{" "}
          <a href="mailto:kshaunish.harsha2005@gmail.com">kshaunish.harsha2005@gmail.com</a>
        </p>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/character/paper_plane.png"
        alt=""
        className={`${styles.plane} ${flying ? styles.planeFly : ""}`}
      />
    </form>
  );
}
