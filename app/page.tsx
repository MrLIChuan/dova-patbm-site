export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="section">
        <p className="inline-block text-xs font-semibold tracking-widest px-3 py-1 rounded-full bg-black text-white">NEW ENERGY • 2025</p>
        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold">
          Intelligent, Adaptive, and Scalable <span className="text-slate-600">EV Charging Optimization</span>
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
          DOVA-PATBM deploys a national-level digital twin and queue-aware scheduling to cut wait times, boost accessibility,
          and balance urban–rural infrastructure.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="#contact" className="rounded-xl bg-black text-white px-5 py-3 text-sm font-semibold">Request a demo</a>
          <a href="#technology" className="text-sm font-semibold text-slate-800">Explore technology →</a>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          {[
            ["Wait Time ↓", "37%"],
            ["Accessibility ↑", "28%"],
            ["Georgia DCFC", "5,293"],
            ["Georgia L2", "19,073"],
          ].map(([label, val]) => (
            <div key={label} className="border rounded-xl p-4">
              <div className="text-2xl font-bold">{val}</div>
              <div className="text-xs text-slate-500">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="section border-t">
        <p className="inline-block text-xs font-semibold tracking-widest px-3 py-1 rounded-full bg-black text-white">Technology</p>
        <h2 className="mt-4 text-3xl font-bold">Deployment Optimization with Voronoi-oriented Adaptive POI-Aware Temporal Behavior Model</h2>
        <p className="mt-3 text-slate-600 max-w-4xl">
          We blend geospatial intelligence (H3/Voronoi), queueing theory, and multi-source signals (POI, traffic, holidays, grid)
          to recommend station locations, mix (DCFC vs. L2), and staged investments.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            ["Adaptive Optimization Engine", "Voronoi-oriented, POI-aware temporal behavior modeling for national-scale planning."],
            ["Urban / Suburban / Rural", "H3 + PageRank in cities, Voronoi clustering in suburbs, accessibility in rural regions."],
            ["Real-Time Signals", "Traffic, holidays, peak periods and grid constraints folded into scheduling."],
            ["Queueing & Utilization", "Wait-time minimization and utilization maximization for better ROI."],
            ["Digital Twin", "National-level simulation with 280k+ H3 cells; scalable to GBA/Europe."],
            ["Ecosystem-Ready", "API & multi-tenant SaaS for OEMs, CPOs, and utilities; storage-charging synergy."]
          ].map(([title, desc]) => (
            <div key={title} className="border rounded-2xl p-5">
              <div className="font-semibold">{title}</div>
              <div className="text-sm text-slate-600 mt-2">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section border-t bg-slate-50">
        <p className="inline-block text-xs font-semibold tracking-widest px-3 py-1 rounded-full bg-black text-white">Contact</p>
        <h2 className="mt-4 text-3xl font-bold">Let’s design your EV future</h2>
        <p className="mt-3 text-slate-600 max-w-3xl">Reach out for a demo, pilot, or partnership discussion.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="border rounded-2xl p-5">
            <div className="font-semibold mb-3">Direct</div>
            <div className="space-y-2 text-sm">
              <a className="block text-slate-700" href="mailto:lichuancotton@gmail.com">lichuancotton@gmail.com</a>
              <a className="block text-slate-700" href="tel:+33761479149">+33 7 61 47 91 49</a>
            </div>
          </div>
          <div className="border rounded-2xl p-5">
            <div className="font-semibold mb-3">Request a demo</div>
            <form action="https://formspree.io/f/your-endpoint" method="POST" className="grid gap-3">
              <input className="border rounded-lg px-3 py-2" name="name" placeholder="Full name" required />
              <input className="border rounded-lg px-3 py-2" type="email" name="email" placeholder="Work email" required />
              <input className="border rounded-lg px-3 py-2" name="org" placeholder="Organization" />
              <textarea className="border rounded-lg px-3 py-2" name="message" placeholder="Tell us about your goals…" rows={4}></textarea>
              <button className="rounded-lg bg-black text-white px-4 py-2 text-sm font-semibold" type="submit">Send request</button>
            </form>
            <p className="text-xs text-slate-500 mt-2">By submitting, you agree to be contacted about DOVA-PATBM products and services.</p>
          </div>
        </div>

        <div className="mt-10 text-sm text-slate-500">Paris • Shenzhen • Atlanta</div>
        <footer className="pt-10 text-xs text-slate-500 border-t mt-10">© {new Date().getFullYear()} DOVA-PATBM. All rights reserved.</footer>
      </section>
    </main>
  );
}
