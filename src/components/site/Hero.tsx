import { motion } from "motion/react";
import { ArrowRight, Star, ShieldCheck, Hammer } from "lucide-react";
import heroImg from "@/assets/work-kitchen.jpg";
import teamImg from "@/assets/hero-team.png";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 lg:pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[color:var(--brand-blue)]/10 blur-3xl" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium text-foreground/70 shadow-card">
              <span className="h-2 w-2 rounded-full gradient-brand" />
              Residential & Commercial • Free Estimates
            </div>
            <h1 className="mt-6 text-balance text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Building Strong Foundations With{" "}
              <span className="bg-clip-text text-transparent gradient-brand">Precision</span>{" "}
              & Excellence
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Professional construction, remodeling, flooring, painting, and exterior services
              built with quality craftsmanship and dependable execution across New Jersey.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-glow hover:translate-y-[-1px] transition"
              >
                Get Free Estimate
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--brand-blue)] bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--brand-blue)] hover:bg-[color:var(--brand-blue)] hover:text-white transition"
              >
                View Our Projects
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "15+", v: "Years Experience" },
                { k: "500+", v: "Projects Done" },
                { k: "100%", v: "Satisfaction" },
              ].map((s, i) => (
                <motion.div
                  key={s.v}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="text-3xl font-bold">{s.k}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {s.v}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border bg-white">
              <img src={heroImg} alt="Cardenas Construction team" className="w-full h-[520px] object-cover" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -left-6 top-10 hidden md:flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-card"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--brand-blue)] text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">Licensed & Insured</div>
                <div className="text-xs text-muted-foreground">Fully bonded NJ contractor</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -right-4 bottom-8 hidden md:flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-card"
            >
              <img src={teamImg} alt="Cardenas team" className="h-12 w-12 rounded-xl object-cover" />
              <div>
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">5.0 rated by clients</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-5 left-10 hidden md:inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-card"
            >
              <Hammer className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium">Quality craftsmanship since 2009</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
