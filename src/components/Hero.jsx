import { Play, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute left-1/2 top-0 h-[50rem] w-[50rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.08),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <Sparkles className="h-4 w-4 text-fuchsia-400" />
            Introducing EchoLab Studio v2.1 — AI Stems + Realtime Jams
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Produce, mix, and master in the cloud.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            EchoLab Studio is a dark, distraction-free workspace for musicians and creators. Collaborate live, isolate stems with AI, and publish radio-ready tracks from any device.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#pricing" className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-fuchsia-500/20 transition hover:bg-white/90">Start free trial</a>
            <a href="#features" className="rounded-md border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
              Learn more
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-fuchsia-500/20 via-cyan-400/20 to-blue-500/20 blur-2xl" />
          <div className="relative rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-3 shadow-2xl">
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-black/60">
              <div className="relative flex h-full w-full items-center justify-center">
                <button className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white/90 backdrop-blur transition hover:bg-white/10">
                  <Play className="h-5 w-5 text-fuchsia-400 group-hover:scale-105 transition" />
                  Watch 60s demo
                </button>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(217,70,239,0.12),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(34,211,238,0.12),transparent_35%)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
