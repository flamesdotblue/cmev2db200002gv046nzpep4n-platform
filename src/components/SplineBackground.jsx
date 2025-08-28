import { useEffect, useRef } from "react";

// Lazy-load Spline viewer script and render the scene as a background layer
export default function SplineBackground({ url, className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Inject the Spline viewer web component script once
    const SCRIPT_ID = "spline-viewer-script";
    const existing = document.getElementById(SCRIPT_ID);
    if (!existing) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.type = "module";
      script.src = "https://unpkg.com/@splinetool/viewer/build/spline-viewer.js";
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div ref={containerRef} className={`absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden>
      {/* Fallback gradient while the Spline component loads */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(168,85,247,0.12),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(14,165,233,0.10),transparent_45%)]" />

      {/* Spline Scene */}
      <spline-viewer url={url} loading="eager" class="h-full w-full opacity-70" style={{ filter: "saturate(1.1) contrast(1.05)" }} />

      {/* Darken overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-black/50" />
    </div>
  );
}
