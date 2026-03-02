
import React from "react";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
        <img src="./demo/assets/vw-mark.svg" alt="VerifyWise demo" style={{ height: 44 }} />
        <div className="pill">
          <span style={{ width: 10, height: 10, borderRadius: 999, background: "linear-gradient(90deg, #14B8A6, #22D3EE, #60A5FA)" }} />
          <span className="small">Static client demo • runs on GitHub Pages</span>
        </div>
      </header>
      <main style={{ marginTop: 18 }}>{children}</main>
    </div>
  );
}
