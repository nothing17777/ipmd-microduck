"use client";

import { useState } from "react";
import MViewer from "./MViewer";

const COLOURS = [
  { id: "cream", hex: "#f2ecdd", label: "Cream" },
  { id: "graphite", hex: "#3a3a42", label: "Graphite" },
  { id: "lavender", hex: "#9D87E8", label: "Lavender" },
  { id: "sky", hex: "#8FB8DC", label: "Sky" },
];

export default function Colourway() {
  const [selected, setSelected] = useState("cream");

  return (
    <section className="colourway dark">
      <div className="container narrow center">
        <div className="colourway-grid">
          <div className="colourway-copy">
            <p className="eyebrow">One robot, four colourways</p>
            <h2 className="h-anton">
              <span className="neon-2">Choose your</span>
              <span className="stroke-neon">colour</span>
            </h2>
            <p className="lead">
              Every M ships in one of <strong>four colourways</strong>. Same robot, <strong>same brains underneath</strong> — pick the shell that best fits you.
            </p>
            <div className="swatch-row">
              {COLOURS.map((c) => (
                <button
                  key={c.id}
                  className="swatch"
                  style={{ ["--sw" as string]: c.hex }}
                  aria-label={c.label}
                  aria-pressed={selected === c.id}
                  onClick={() => setSelected(c.id)}
                />
              ))}
            </div>
          </div>
          <MViewer size="small" />
        </div>
      </div>
      <div className="notch-bottom notch-bottom-light" aria-hidden="true" />
    </section>
  );
}
