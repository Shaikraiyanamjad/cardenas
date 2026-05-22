import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Get In Touch</div>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              Let's build something you'll love
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md">
              Tell us about your project. We'll respond within 24 hours with a free, no-pressure estimate.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { icon: Phone, label: "Call us", value: "(201) 450-0645 • (201) 790-8029", href: "tel:2014500645" },
                { icon: Mail, label: "Email", value: "contact@cardenasconstructiollc.com", href: "mailto:contact@cardenasconstructiollc.com" },
                { icon: MapPin, label: "Location", value: "Hackensack, NJ 07601", href: "#" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-white p-4 shadow-card hover:border-primary/40 transition"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{c.label}</div>
                    <div className="font-semibold">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
              <iframe
                title="Cardenas Construction Location"
                src="https://www.google.com/maps?q=Hackensack,NJ&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "mailto:contact@cardenasconstructiollc.com";
            }}
            className="rounded-3xl border border-border bg-white p-8 lg:p-10 shadow-elegant"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full name" id="name" type="text" required />
              <Field label="Phone" id="phone" type="tel" required />
            </div>
            <div className="mt-5">
              <Field label="Email" id="email" type="email" required />
            </div>
            <div className="mt-5">
              <Field label="Service interested in" id="service" type="text" />
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Project details
              </label>
              <textarea
                id="message"
                rows={5}
                className="mt-2 w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition"
                placeholder="Tell us a bit about what you're planning..."
              />
            </div>
            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-brand px-6 py-4 text-sm font-semibold text-brand-foreground shadow-glow hover:translate-y-[-1px] transition"
            >
              Send Message <Send className="h-4 w-4" />
            </button>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              By submitting you agree to be contacted about your project.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, type, required }: { label: string; id: string; type: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition"
      />
    </div>
  );
}
