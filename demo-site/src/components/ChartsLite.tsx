import React from "react";

export function Bar({ value }: { value: number }) {
  const pct = Math.max(0, Math.min(1, value)) * 100;
  return (
    <div style={{ height: 10, borderRadius: 999, background: "#E2E8F0", overflow: "hidden" }}>
      <div
        style={{
          width: `${pct}%`,
          height: "100%",
          borderRadius: 999,
          background: "linear-gradient(90deg, #14B8A6, #22D3EE, #60A5FA, #8B5CF6)"
        }}
      />
    </div>
  );
}
