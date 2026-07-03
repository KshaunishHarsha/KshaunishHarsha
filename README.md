<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=24&pause=1000&color=6366F1&center=true&vCenter=true&width=650&lines=AI+Engineer+%7C+Applied+AI+%2F+GenAI;Building+agentic+systems+%26+RAG+pipelines;LLMs+that+ship+to+production%2C+not+notebooks" alt="Typing SVG" />

<br/>

[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](#)
[![LangGraph](https://img.shields.io/badge/LangGraph-1C3C3C?style=for-the-badge)](#)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)](#)
[![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)](#)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](#)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](#)
[![RAG](https://img.shields.io/badge/RAG-6366F1?style=for-the-badge)](#)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](#)

</div>

## 🧭 About Me

I'm an AI Engineer working across **Applied AI, Generative AI, AI Agents, LLMs, and RAG** — I design and ship **end-to-end AI systems**, not prototypes. That means the full path: ingestion pipelines, retrieval and reasoning layers, structured LLM outputs, databases, deployment, and monitoring.

- 🔭 Currently building **agentic pipelines** and **hybrid retrieval systems** for real users
- 🧩 Specialize in **deterministic-logic + LLM-reasoning hybrids** — code decides, LLMs explain
- 🛡️ Also active in **LLM evaluation & AI safety benchmarking**
- ⚡ Fun fact: every project below runs with idempotent, crash-safe pipelines

<br/>

## 📊 By the Numbers

<div align="center">

| Documents Indexed & Searched | Records in Dataset | Model Evals Run | Tests Written | Pipeline Phases Shipped |
|:---:|:---:|:---:|:---:|:---:|
| **1,617** | **14,000+** | **225** | **112+** | **20+** |

</div>

<br/>

## 🚀 Featured Repositories

### 🏛️ `federal-register-sentinel` 🔒 *(private repository)*
**Automated regulatory intelligence pipeline** — monitors the U.S. Federal Register daily, filters for domain relevance, and emails personalized LLM-generated digests.

> *Private repo — built for a production client/organization. Details shared here are limited to architecture and tech stack.*

`FastAPI` `PostgreSQL` `GPT-4o-mini` `Jinja2` `Railway`

- 🔄 4-layer filtering pipeline across **7 government agencies**, tuned per-agency signal thresholds
- 🤖 LLM outputs constrained to schema-validated XML with a **2-tier self-correction loop**
- 🧪 **112 automated tests** across ingestion, summarization, and delivery phases
- 📬 Per-subscriber personalization across **14 preference dimensions**, zero-duplicate idempotent runs
- 🛡️ Prompt-injection hardened — URLs stripped before reaching the LLM, never LLM-generated

---

### 🔍 [`aw-compliance-intelligence-db`](https://github.com/KshaunishHarsha/aw-compliance-intelligence-db)
**Investigative RAG platform** for searching and reasoning over a large regulatory/compliance document corpus with grounded, citation-backed chat.

`Next.js 16` `pgvector` `Celery` `Supabase` `GPT-4o`

- 📚 Hybrid retrieval across **1,617 documents** — weighted fusion of vector (0.6) + BM25 (0.3) + metadata (0.1)
- 💬 Grounded chat with **zero unsupported claims** — enforced via system prompt + bounded retrieval + post-hoc citation validation
- 🖼️ Full document viewer with page-jumping, OCR fallback (PyMuPDF + Tesseract)
- 🏗️ **7 build phases** shipped end-to-end: ingestion → embeddings → hybrid retrieval → RAG chat → hardened deployment
- ☁️ Deployed across Railway (API), Supabase (Postgres + Storage), Vercel (frontend)

---

### 🐾 [`paw-patrol`](https://github.com/KshaunishHarsha/paw-patrol)
**Explainable matchmaking engine** — deterministic compatibility scoring paired with LLM-generated reasoning for high-stakes matching decisions.

`FastAPI` `Next.js` `Gemini` `Pandas`

- 🎯 Deterministic scoring across **8 compatibility dimensions**, hard constraint filtering for unsafe matches
- 🧠 LLM layer generates natural-language explanations *on top of* — never instead of — deterministic scores
- 📋 Adaptive questionnaire that dynamically prunes irrelevant questions based on prior answers
- 📈 Built and validated against a **14,000+ record dataset**
- 🏗️ 8-phase build: dataset prep → scoring engine → LLM reasoning → adaptive UX → dashboard API

---

### 🛡️ [`aegis-mumhack2025`](https://github.com/KshaunishHarsha/Aegis-MumHack2025)
**Multi-agent forensics framework** for detecting and attributing AI-generated video, fusing signal-level, semantic, and provenance evidence.

`Flask` `TensorFlow` `OpenCV` `Vertex AI GenKit` `Firebase`

- 🕵️ **6 specialized agents** — perceptual forensics, semantic coherence, model attribution, provenance/lineage, adversarial simulation, consensus
- ⚖️ Weighted fusion logic with dynamic reweighting and confidence overrides based on provenance + robustness signals
- 🎚️ Calibrated 3-way classification (`Likely Real` / `Uncertain` / `Likely AI-Generated`) with full audit trail
- 📡 Production deployment blueprint: Dockerized GPU inference behind Nginx, Prometheus + Grafana + Sentry monitoring, GitHub Actions CI/CD

---

### 🔬 [`frontier-fallback-safety-audit`](https://github.com/KshaunishHarsha/frontier-fallback-safety-audit)
**AI safety research** — measuring whether capability and reliability degrade together as models get smaller, presented at the Global South AI Safety Hackathon (Apart Research).

`Python` `OpenRouter` `Pandas` `Matplotlib`

- 📐 **225 evaluations** across a 70B → 32B → 8B model ladder, 4 evaluation batteries
- 🔬 Fully mechanical scoring for capability + sycophancy; human-in-the-loop CLI with inter-rater agreement checks for overconfidence + overcompliance
- 📉 Key finding: sycophancy flip rates were **scale-invariant (~40–43%)** across every model tier
- 🧾 Pre-registered ground truth, resume-safe pipeline, fully auditable from raw model outputs to final figures

<br/>

## 🧰 Tech Stack

<div align="center">

**Languages**
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Java](https://img.shields.io/badge/Java-007396?style=flat-square&logo=openjdk&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![SQL](https://img.shields.io/badge/SQL-4479A1?style=flat-square&logo=postgresql&logoColor=white)

**Applied AI & LLM Systems**
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white)
![Gemini](https://img.shields.io/badge/Gemini_(Vertex_AI)-8E75B2?style=flat-square&logo=googlegemini&logoColor=white)
![Hugging Face](https://img.shields.io/badge/Hugging_Face-FFD21E?style=flat-square&logo=huggingface&logoColor=black)
![Genkit](https://img.shields.io/badge/Genkit-FF6F00?style=flat-square)
![Google ADK](https://img.shields.io/badge/Google_ADK-4285F4?style=flat-square&logo=google&logoColor=white)
![RAG](https://img.shields.io/badge/RAG-6366F1?style=flat-square)
![LlamaIndex](https://img.shields.io/badge/LlamaIndex-6366F1?style=flat-square)
![LangGraph](https://img.shields.io/badge/LangGraph-1C3C3C?style=flat-square)
![Hybrid Search](https://img.shields.io/badge/Hybrid_Search-6366F1?style=flat-square)
![Agentic Systems](https://img.shields.io/badge/Agentic_Systems_Design-6366F1?style=flat-square)
![Multi-Agent](https://img.shields.io/badge/Multi--Agent_Systems-6366F1?style=flat-square)
![Agent Orchestration](https://img.shields.io/badge/Agent_Orchestration-6366F1?style=flat-square)
![Tool Calling](https://img.shields.io/badge/Tool_Calling-6366F1?style=flat-square)

**ML & Data Analysis**
![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=flat-square&logo=scikitlearn&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white)
![Matplotlib](https://img.shields.io/badge/Matplotlib-11557C?style=flat-square)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white)
![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white)

**Backend & Deployment**
![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=flat-square&logo=railway&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=flat-square&logo=supabase&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=flat-square&logo=flask&logoColor=white)
![Pydantic](https://img.shields.io/badge/Pydantic-E92063?style=flat-square&logo=pydantic&logoColor=white)
![Celery](https://img.shields.io/badge/Celery-37814A?style=flat-square&logo=celery&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![GCP](https://img.shields.io/badge/Google_Cloud_Platform-4285F4?style=flat-square&logo=googlecloud&logoColor=white)
![Vertex AI](https://img.shields.io/badge/Vertex_AI-4285F4?style=flat-square&logo=googlecloud&logoColor=white)
![API Inference](https://img.shields.io/badge/API--based_Inference-6366F1?style=flat-square)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)

**Web & Dev Tools**
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=flat-square&logo=streamlit&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

**Data & Infra**
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![pgvector](https://img.shields.io/badge/pgvector-4169E1?style=flat-square)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)

**Monitoring**
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=flat-square&logo=prometheus&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-F46800?style=flat-square&logo=grafana&logoColor=white)

</div>

<br/>

## ⚙️ How I Build

> Deterministic where it matters. Generative where it helps.

- **Code decides, LLMs explain.** Hard constraints and scoring logic live in code for auditability; LLMs generate language and reasoning on top — never the sole arbiter of a safety-critical decision.
- **Every claim is grounded.** Citations and post-hoc validation are pipeline stages, not afterthoughts — no unsupported output reaches a user.
- **Idempotent, crash-safe pipelines.** Every stage can re-run after failure without duplicating work.
- **Structured outputs by default.** Schema-validated LLM responses (Pydantic/XML) with automated self-correction loops, not raw text parsing.
- **I measure what I ship.** Evaluation and safety benchmarking are part of the build, not an afterthought.

<br/>

<div align="center">

📫 Open to interesting problems in applied AI, agentic systems, and RAG architecture.

</div>
