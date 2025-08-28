export default function Pricing() {
  return (
    <section id="pricing" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Start free. Upgrade when you're ready to publish and collaborate without limits.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-white/0 via-fuchsia-500/0 to-cyan-400/0 opacity-0 blur-lg transition hover:opacity-100" />
            <h3 className="text-xl font-semibold">Starter</h3>
            <p className="mt-1 text-sm text-white/70">For exploring ideas and demos.</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold">$0</span>
              <span className="text-white/60">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li>• 3 active projects</li>
              <li>• 10 stem separations / month</li>
              <li>• Basic plugins</li>
              <li>• Community support</li>
            </ul>
            <a href="#" className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10">Get started</a>
          </div>

          <div className="relative rounded-2xl border border-fuchsia-500/30 bg-gradient-to-br from-fuchsia-500/10 via-white/[0.03] to-cyan-400/10 p-6 shadow-lg shadow-fuchsia-500/20">
            <div className="absolute right-6 top-6 rounded-full border border-white/15 bg-white/10 px-2 py-1 text-xs text-white/80">Most Popular</div>
            <h3 className="text-xl font-semibold">Studio Pro</h3>
            <p className="mt-1 text-sm text-white/70">For serious artists and teams.</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold">$24</span>
              <span className="text-white/60">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/90">
              <li>• Unlimited projects</li>
              <li>• Unlimited stem separations</li>
              <li>• Full plugin suite + GPU acceleration</li>
              <li>• Realtime collaboration</li>
              <li>• Priority support</li>
            </ul>
            <a href="#" className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90">Start 14-day trial</a>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-white/50">No credit card required. Cancel anytime.</p>
      </div>
    </section>
  );
}
