import { useEffect } from "react";

export default function SplineBackground({ url, className = "" }) {
  useEffect(() => {
    const SCRIPT_ID = "spline-viewer-script";
    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.type = "module";
      script.src = "https://unpkg.com/@splinetool/viewer/build/spline-viewer.js";
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(168,85,247,0.08),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(14,165,233,0.08),transparent_45%)]" />
      <spline-viewer url={url} loading="eager" className="h-full w-full opacity-75" style={{ filter: "saturate(1.1) contrast(1.05)" }} />
      <div className="pointer-events-none absolute inset-0 bg-black/55" />
    </div>
  );
}
