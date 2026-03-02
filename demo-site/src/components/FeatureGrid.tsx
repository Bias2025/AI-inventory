import React from "react";

const items = [
  { t: "Framework coverage", d: "Show EU AI Act, ISO 42001, NIST AI RMF-style mapping with coverage signals." },
  { t: "Risk workflows", d: "Risk register examples: owners, severity, status, and mitigation stories." },
  { t: "LLM evals", d: "Evaluation suites with pass-rates and notes suitable for stakeholder reporting." },
  { t: "Vendor governance", d: "Third-party reviews with risk posture, review cadence, and evidence hints." },
  { t: "Trust Center", d: "A public-facing story: what you do, how you control risk, what you’ve verified." },
  { t: "Evidence-ready", d: "Demo artifacts designed to resemble audit evidence without exposing real data." }
];

export default function FeatureGrid() {
  return (
    <section style={{ marginTop: 16 }}>
      <div className="grid grid3">
        {items.map((x) => (
          <div key={x.t} className="card" style={{ padding: 16 }}>
            <div className="h3">{x.t}</div>
            <div className="small" style={{ marginTop: 6 }}>{x.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
