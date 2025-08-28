import { Users, Wand2, Cloud, SlidersHorizontal } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Realtime collaboration",
    desc: "Jam together with low-latency sessions, shared cursors, and instant comments on tracks.",
  },
  {
    icon: Wand2,
    title: "AI stem separation",
    desc: "Split vocals, drums, bass, and instruments in seconds with studio-grade accuracy.",
  },
  {
    icon: Cloud,
    title: "Cloud projects",
    desc: "Unlimited version history, asset management, and cross-device sync out of the box.",
  },
  {
    icon: SlidersHorizontal,
    title: "Pro-grade plugins",
    desc: "Built-in EQ, compression, saturation, and spatial tools with GPU acceleration.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Everything you need to sound incredible</h2>
          <p className="mt-3 text-white/70">Focus on your music — EchoLab handles the heavy lifting, from stems to sessions.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]">
              <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-fuchsia-500/0 via-fuchsia-500/0 to-cyan-400/0 opacity-0 blur transition group-hover:from-fuchsia-500/10 group-hover:via-fuchsia-500/0 group-hover:to-cyan-400/10 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 text-fuchsia-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
