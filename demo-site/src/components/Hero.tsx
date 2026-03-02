import React from "react";

export default function Hero() {
  return (
    <section className="card" style={{ padding: 22, overflow: "hidden" }}>
      <div className="grid grid2" style={{ alignItems: "center" }}>
        <div>
          <div className="pill" style={{ width: "fit-content" }}>
            <span className="small" style={{ fontWeight: 700 }}>VerifyWise</span>
            <span className="small">AI governance • risk • compliance • LLM evals</span>
          </div>
          <div className="h1">A client-ready walkthrough of the platform’s superpowers.</div>
          <p className="small" style={{ fontSize: 15, maxWidth: 520 }}>
            This demo uses mock data and stylized screens to showcase workflows: EU AI Act projects,
            risk registers, control mapping, vendor reviews, evidence, and evaluation suites.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
            <a className="btn btnPrimary" href="#demo">Open interactive demo</a>
            <a className="btn" href="https://github.com/verifywise-ai/verifywise" target="_blank" rel="noreferrer">View repository</a>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div style={{
            position: "absolute", inset: -30, borderRadius: 26,
            background: "linear-gradient(120deg, rgba(20,184,166,.18), rgba(34,211,238,.18), rgba(96,165,250,.18), rgba(139,92,246,.18))",
            filter: "blur(18px)"
          }} />
          <img
            src="./demo/assets/screen-dashboard.svg"
            alt="Demo dashboard"
            style={{ width: "100%", borderRadius: 18, border: "1px solid rgba(226,232,240,.9)", position: "relative" }}
          />
        </div>
      </div>
    </section>
  );
}
