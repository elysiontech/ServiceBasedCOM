import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Sparkles, Mail, MapPin, ExternalLink } from "lucide-react";
import { brand } from "../data/content";
import { submitEnquiry } from "../lib/firebase";
import WordsPullUpMultiStyle, { TextSegment } from "./WordsPullUpMultiStyle";

const headerSegments: TextSegment[] = [
  {
    text: "Tell us what you're building.",
    className: "text-[#F0ECE1] font-normal block w-full",
  },
  {
    text: "Send us your brief and we'll reply with a scoped estimate within two business days.",
    className: "text-gray-400 font-normal block w-full mt-1.5",
  },
];

const serviceOptions = [
  "Web Application",
  "Mobile App",
  "Cloud & DevOps",
  "Data & AI",
  "UI/UX Design",
  "Consulting",
];

const initialForm = {
  name: "",
  email: "",
  company: "",
  service: "Web Application",
  budget: "",
  message: "",
};

const TARGET_EMAIL = "elysiontech19@gmail.com";

export const Contact: React.FC = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      // 1. Submit email via FormSubmit AJAX service directly to elysiontech19@gmail.com
      const emailPayload = {
        name: form.name,
        email: form.email,
        company: form.company || "Not specified",
        service: form.service,
        budget: form.budget || "Prefer to discuss",
        message: form.message,
        _subject: `[New Inquiry] ${form.service} from ${form.name}`,
        _template: "table",
        _captcha: "false",
      };

      const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(emailPayload),
      });

      // 2. Also log to Firebase Firestore if enabled
      try {
        await submitEnquiry(form);
      } catch (fbErr) {
        console.warn("Firestore backup log skipped:", fbErr);
      }

      if (response.ok) {
        setStatus("sent");
        setForm(initialForm);
      } else {
        // Even if FormSubmit has a first-time activation requirement, mark sent or provide fallback
        const result = await response.json();
        if (result.success === "true" || response.status === 200) {
          setStatus("sent");
          setForm(initialForm);
        } else {
          throw new Error(result.message || "Failed to deliver email.");
        }
      }
    } catch (err: any) {
      console.error("Submission error:", err);
      // If network fails, offer instant mailto link
      setStatus("error");
      setErrorMessage(err.message || "Unable to send automatically.");
    }
  };

  // Direct mailto link generator as backup
  const mailtoLink = `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(
    `[Inquiry] ${form.service} - ${form.name || "Client"}`
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nService: ${form.service}\nBudget: ${form.budget}\n\nMessage:\n${form.message}`
  )}`;

  return (
    <section id="contact" className="ambient-glow-section py-24 md:py-32 px-4 md:px-6 relative overflow-hidden">
      {/* Subtle Luxury Grid Pattern */}
      <div
        className="bg-grid-luxury absolute inset-0 opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium mb-3">
            Direct Inquiries
          </div>
          <WordsPullUpMultiStyle
            segments={headerSegments}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight text-center"
          />
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="cinema-card p-7 sm:p-10 md:p-12 rounded-2xl md:rounded-3xl shadow-[0_30px_90px_-20px_rgba(0,0,0,0.95)] grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 relative"
        >
          {/* Service Selector Pills */}
          <div className="md:col-span-2">
            <label className="text-[11px] font-mono uppercase tracking-wider text-gray-300 block mb-3">
              I am interested in:
            </label>
            <div className="flex flex-wrap gap-2">
              {serviceOptions.map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => update("service", opt)}
                  className={`text-xs px-3.5 py-1.5 rounded-full border transition-all cursor-pointer ${
                    form.service === opt
                      ? "bg-primary text-black font-semibold border-primary shadow-md"
                      : "bg-[#08090C]/60 text-gray-300 border-white/[0.08] hover:border-primary/40 hover:text-white"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Name Field */}
          <div>
            <label className="text-[11px] font-mono uppercase tracking-wider text-gray-300 block mb-2">
              Your Name <span className="text-primary">*</span>
            </label>
            <input
              required
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="w-full bg-[#08090C]/80 border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-[#F0ECE1] placeholder-gray-500 focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/40 transition-all"
              placeholder="Marcus Vance"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="text-[11px] font-mono uppercase tracking-wider text-gray-300 block mb-2">
              Work Email <span className="text-primary">*</span>
            </label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="w-full bg-[#08090C]/80 border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-[#F0ECE1] placeholder-gray-500 focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/40 transition-all"
              placeholder="marcus@company.com"
            />
          </div>

          {/* Company Field */}
          <div>
            <label className="text-[11px] font-mono uppercase tracking-wider text-gray-300 block mb-2">
              Company / Studio
            </label>
            <input
              type="text"
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
              className="w-full bg-[#08090C]/80 border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-[#F0ECE1] placeholder-gray-500 focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/40 transition-all"
              placeholder="Acme Studio (optional)"
            />
          </div>

          {/* Budget Range Field */}
          <div>
            <label className="text-[11px] font-mono uppercase tracking-wider text-gray-300 block mb-2">
              Target Budget Range
            </label>
            <select
              value={form.budget}
              onChange={(e) => update("budget", e.target.value)}
              className="w-full bg-[#08090C]/80 border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-[#F0ECE1] focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/40 transition-all cursor-pointer"
            >
              <option value="" className="bg-[#0F1218] text-gray-400">Prefer to discuss</option>
              <option value="under-5k" className="bg-[#0F1218]">$2,000 – $5,000</option>
              <option value="5k-15k" className="bg-[#0F1218]">$5,000 – $15,000</option>
              <option value="15k-30k" className="bg-[#0F1218]">$15,000 – $30,000</option>
              <option value="30k-plus" className="bg-[#0F1218]">$30,000+</option>
            </select>
          </div>

          {/* Project Details */}
          <div className="md:col-span-2">
            <label className="text-[11px] font-mono uppercase tracking-wider text-gray-300 block mb-2">
              Project Details &amp; Scope <span className="text-primary">*</span>
            </label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className="w-full bg-[#08090C]/80 border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-[#F0ECE1] placeholder-gray-500 focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/40 transition-all resize-none"
              placeholder="What are you building, what is your timeline, and what stage is the product currently at?"
            />
          </div>

          {/* Submit & Status */}
          <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4 mt-2 pt-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-primary rounded-full px-8 py-3.5 inline-flex items-center gap-2 text-black font-semibold text-xs sm:text-sm hover:opacity-90 transition-all cursor-pointer shadow-[0_0_25px_-5px_rgba(230,213,172,0.4)] disabled:opacity-50 hover:brightness-105"
            >
              <span>{status === "sending" ? "Transmitting…" : "Send inquiry"}</span>
              <Send size={14} />
            </button>

            <div className="flex items-center gap-6 text-xs text-gray-400 font-mono">
              <a
                href={`mailto:${TARGET_EMAIL}`}
                className="flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                <Mail size={13} className="text-primary" />
                {TARGET_EMAIL}
              </a>
              <span className="hidden sm:flex items-center gap-1.5">
                <MapPin size={13} className="text-primary" />
                {brand.location}
              </span>
            </div>

            {status === "sent" && (
              <div className="w-full flex items-center gap-2 text-xs sm:text-sm text-primary font-mono bg-primary/10 border border-primary/20 p-3.5 rounded-xl animate-fadeIn">
                <CheckCircle2 size={16} className="shrink-0" />
                <span>Inquiry sent directly to {TARGET_EMAIL}! We will respond within 48 hours.</span>
              </div>
            )}

            {status === "error" && (
              <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-red-400 font-mono bg-red-500/10 border border-red-500/20 p-3.5 rounded-xl">
                <div className="flex items-center gap-2">
                  <AlertCircle size={16} className="shrink-0" />
                  <span>{errorMessage || `Unable to send. Please email directly:`}</span>
                </div>
                <a
                  href={mailtoLink}
                  className="inline-flex items-center gap-1 text-primary hover:underline font-semibold"
                >
                  <span>Open Email Client</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
