"use client";

/**
 * The real 3D model: a self-contained WebGL scene (drag to orbit, scroll to
 * zoom, four mood presets with per-mood color/motion, and a touch-reactive
 * warm-glow light animation on the shell and core) authored as
 * `m-viewer.html` and served as-is from /public, alongside its
 * `m-viewer-assets/` reference images/video it loads by relative path.
 * Embedding it as an iframe keeps its WebGL/canvas code untouched rather
 * than re-implementing it in React — it owns its own render loop.
 */
export default function MViewer({
  size = "large",
}: {
  size?: "large" | "small";
}) {
  return (
    <div className={`duck3d-stage${size === "small" ? " small" : ""}`} data-m-slot="robot-3d-model">
      <iframe
        src="/m-viewer.html"
        title="Interactive 3D model of M — drag to orbit, scroll to zoom, hold to feel it glow"
        loading="lazy"
        style={{ width: "100%", height: "100%", border: "none", display: "block" }}
        allow="autoplay"
      />
    </div>
  );
}
