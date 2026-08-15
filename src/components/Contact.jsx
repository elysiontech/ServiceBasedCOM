import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { brand } from "../data/content";
import { submitEnquiry } from "../lib/firebase";
import { SectionHeading } from "./Services";

const initialForm = {
  name: "",
  email: "",
  company: "",
  budget: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitEnquiry(form);
      setStatus("sent");
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-bg-soft py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Tell us what you're building"
          title="Start a project"
          sub="No fixed pricing to browse — send us the brief and we'll reply with a scoped estimate within two working days."
        />

        <form onSubmit={handleSubmit} className="mt-14 grid md:grid-cols-2 gap-6 glass p-8 md:p-10">
          <Field label="Name" required>
            <input
              required
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="field"
              placeholder="Your name"
            />
          </Field>

          <Field label="Email" required>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="field"
              placeholder="you@company.com"
            />
          </Field>

          <Field label="Company">
            <input
              type="text"
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
              className="field"
              placeholder="Optional"
            />
          </Field>

          <Field label="Rough budget range">
            <select
              value={form.budget}
              onChange={(e) => update("budget", e.target.value)}
              className="field"
            >
              <option value="">Prefer to discuss</option>
              <option value="under-2k">Under $2,000</option>
              <option value="2k-10k">$2,000 – $10,000</option>
              <option value="10k-30k">$10,000 – $30,000</option>
              <option value="30k-plus">$30,000+</option>
            </select>
          </Field>

          <Field label="Project details" required full>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className="field resize-none"
              placeholder="What are you building, and what stage is it at?"
            />
          </Field>

          <div className="md:col-span-2 flex flex-wrap items-center gap-5 mt-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary flex items-center gap-2.5 disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send enquiry"}
              <Send size={16} />
            </button>

            {status === "sent" && (
              <span className="flex items-center gap-2 text-sm text-muted">
                <CheckCircle2 size={18} className="text-cyan" />
                Received — we'll reply at the email you gave us.
              </span>
            )}
            {status === "error" && (
              <span className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle size={18} />
                Something went wrong — email us directly at {brand.email}.
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, required, full, children }) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <label className="text-[11px] font-mono uppercase tracking-widest text-muted block mb-2">
        {label} {required && <span className="text-cyan">*</span>}
      </label>
      {children}
    </div>
  );
}
