import React, { useEffect, useMemo, useState } from "react";
import { loadJson, KPI } from "../demoData";
import { Bar } from "./ChartsLite";

type KPIFile = { org: string; period: string; kpis: KPI[] };
type Risk = { id: string; title: string; severity: string; owner: string; status: string };
type Control = { framework: string; control: string; coverage: number };
type Eval = { suite: string; passRate: number; notes: string };
type Vendor = { name: string; risk: string; lastReview: string; notes: string };

const tabs = [
  { key: "dashboard", label: "Dashboard" },
  { key: "eu", label: "EU AI Act" },
  { key: "risks", label: "Risks" },
  { key: "models", label: "Model inventory" },
  { key: "policy", label: "Policy manager" },
  { key: "trust", label: "Trust Center" }
] as const;

function screenFor(key: string) {
  switch (key) {
    case "eu": return "./demo/assets/screen-eu-ai-act.svg";
    case "risks": return "./demo/assets/screen-risks.svg";
    case "models": return "./demo/assets/screen-model-inventory.svg";
    case "policy": return "./demo/assets/screen-policy-manager.svg";
    case "trust": return "./demo/assets/screen-trust-center.svg";
    default: return "./demo/assets/screen-dashboard.svg";
  }
}

export default function DemoTabs() {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("dashboard");

  const [kpis, setKpis] = useState<KPIFile | null>(null);
  const [risks, setRisks] = useState<Risk[]>([]);
  const [controls, setControls] = useState<Control[]>([]);
  const [evals, setEvals] = useState<Eval[]>([]);
  const [vendors, setVendors] = useState<Vendor[]>([]);

  useEffect(() => {
    (async () => {
      setKpis(await loadJson<KPIFile>("./demo/mock/kpis.json"));
      setRisks(await loadJson<Risk[]>("./demo/mock/risks.json"));
      setControls(await loadJson<Control[]>("./demo/mock/controls.json"));
      setEvals(await loadJson<Eval[]>("./demo/mock/evals.json"));
      setVendors(await loadJson<Vendor[]>("./demo/mock/vendors.json"));
    })().catch(console.error);
  }, []);

  const headline = useMemo(() => tabs.find(t => t.key === active)?.label ?? "Demo", [active]);

  return (
    <section id="demo" style={{ marginTop: 16 }}>
      <div className="card" style={{ padding: 16 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <div className="h2">{headline}</div>
            <div className="small">Interactive mock data + stylized screens (safe for client sharing).</div>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {tabs.map(t => (
              <button
                key={t.key}
                className="btn"
                onClick={() => setActive(t.key)}
                style={{
                  borderColor: t.key === active ? "rgba(34,211,238,.55)" : "rgba(226,232,240,.9)",
                  boxShadow: t.key === active ? "0 14px 34px rgba(34,211,238,.18)" : "none"
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <hr className="sep" />

        <div className="grid grid2" style={{ alignItems: "start" }}>
          <div className="card" style={{ padding: 12, background: "rgba(255,255,255,.8)" }}>
            <img
              src={screenFor(active)}
              alt={`${active} screen`}
              style={{ width: "100%", borderRadius: 14, border: "1px solid rgba(226,232,240,.9)" }}
            />
            <div className="small" style={{ marginTop: 10 }}>
              Tip: Use this as a talk-track canvas: “Here’s how we go from use case → risk → controls → evidence → reporting.”
            </div>
          </div>

          <div className="grid" style={{ gap: 12 }}>
            <div className="card" style={{ padding: 14 }}>
              <div className="h3">Snapshot</div>
              <div className="small">{kpis ? `${kpis.org} • ${kpis.period}` : "Loading…"}</div>

              <div style={{ marginTop: 10 }} className="grid">
                {(kpis?.kpis ?? []).map((x) => (
                  <div key={x.label} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
                    <div className="small" style={{ fontWeight: 700 }}>{x.label}</div>
                    <div style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
                      <div style={{ fontWeight: 800, fontSize: 18 }}>{x.value}</div>
                      <div className="small" style={{ color: x.delta < 0 ? "#334155" : "#334155" }}>
                        ({x.delta >= 0 ? "+" : ""}{x.delta})
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: 14 }}>
              <div className="h3">Controls coverage (demo mapping)</div>
              <div className="small">Framework → control → coverage indicator</div>
              <div className="grid" style={{ gap: 10, marginTop: 10 }}>
                {controls.map((c) => (
                  <div key={`${c.framework}-${c.control}`}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                      <div className="small" style={{ fontWeight: 700 }}>{c.framework}</div>
                      <div className="small">{Math.round(c.coverage * 100)}%</div>
                    </div>
                    <div className="small" style={{ marginTop: 2 }}>{c.control}</div>
                    <div style={{ marginTop: 6 }}><Bar value={c.coverage} /></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: 14 }}>
              <div className="h3">Risk register highlights</div>
              <div className="small">A few realistic “board-safe” examples.</div>
              <div style={{ marginTop: 10 }} className="grid">
                {risks.slice(0, 4).map((r) => (
                  <div key={r.id} style={{ padding: 10, borderRadius: 14, border: "1px solid rgba(226,232,240,.9)", background: "#F8FAFC" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                      <div className="small" style={{ fontWeight: 800 }}>{r.id}</div>
                      <div className="small">{r.severity} • {r.status}</div>
                    </div>
                    <div style={{ marginTop: 6, fontWeight: 700 }}>{r.title}</div>
                    <div className="small" style={{ marginTop: 4 }}>Owner: {r.owner}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: 14 }}>
              <div className="h3">LLM evaluation suites</div>
              <div className="small">Pass-rates are mock data for presentation.</div>
              <div className="grid" style={{ gap: 10, marginTop: 10 }}>
                {evals.map((e) => (
                  <div key={e.suite} style={{ padding: 10, borderRadius: 14, border: "1px solid rgba(226,232,240,.9)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                      <div style={{ fontWeight: 800 }}>{e.suite}</div>
                      <div className="small">{Math.round(e.passRate * 100)}%</div>
                    </div>
                    <div style={{ marginTop: 6 }}><Bar value={e.passRate} /></div>
                    <div className="small" style={{ marginTop: 6 }}>{e.notes}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: 14 }}>
              <div className="h3">Vendor governance (demo)</div>
              <div className="grid" style={{ gap: 10, marginTop: 10 }}>
                {vendors.map((v) => (
                  <div key={v.name} style={{ padding: 10, borderRadius: 14, border: "1px solid rgba(226,232,240,.9)", background: "#F8FAFC" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                      <div style={{ fontWeight: 800 }}>{v.name}</div>
                      <div className="small">{v.risk} risk</div>
                    </div>
                    <div className="small" style={{ marginTop: 4 }}>Last review: {v.lastReview}</div>
                    <div className="small" style={{ marginTop: 6 }}>{v.notes}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
