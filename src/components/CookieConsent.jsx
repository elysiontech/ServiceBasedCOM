import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";

const COOKIE_NAME = "fourge_cookie_consent";
const STORAGE_KEY = "fourge_cookie_consent";

function setCookie(name, value, days = 180) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(
    JSON.stringify(value)
  )}; expires=${expires}; path=/; SameSite=Lax`;
}

function getStoredConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

const defaultPrefs = { necessary: true, analytics: false, marketing: false };

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [prefs, setPrefs] = useState(defaultPrefs);

  useEffect(() => {
    const existing = getStoredConsent();
    if (!existing) setVisible(true);
  }, []);

  function persist(consent) {
    const record = { ...consent, necessary: true, decidedAt: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    setCookie(COOKIE_NAME, record);
    setVisible(false);
    // Hook analytics/marketing scripts here based on record.analytics / record.marketing
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto glass">
        <div className="p-6 flex flex-col gap-5">
          <div className="flex items-start gap-3">
            <Cookie size={22} className="text-cyan shrink-0 mt-0.5" />
            <div>
              <h2 className="font-display font-semibold">Cookies, briefly</h2>
              <p className="text-sm text-muted mt-1.5 leading-relaxed">
                We use essential cookies to run this site, and optional analytics
                cookies to see what's working. No data is sold. You can change
                this anytime — settings live in the footer.
              </p>
            </div>
            <button
              onClick={() => persist(defaultPrefs)}
              aria-label="Dismiss and keep only necessary cookies"
              className="ml-auto text-muted hover:text-text shrink-0"
            >
              <X size={18} />
            </button>
          </div>

          {expanded && (
            <div className="border-t border-edge pt-4 space-y-3">
              <Toggle
                label="Necessary"
                desc="Required for the site to function. Always on."
                checked
                disabled
              />
              <Toggle
                label="Analytics"
                desc="Helps us see which pages are useful, anonymized."
                checked={prefs.analytics}
                onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
              />
              <Toggle
                label="Marketing"
                desc="Lets us measure enquiry sources so we know what to keep doing."
                checked={prefs.marketing}
                onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
              />
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => persist({ analytics: true, marketing: true })}
              className="bg-gradient-to-r from-violet to-cyan text-[#05060a] font-medium px-5 py-2.5 text-sm hover:bg-gradient-to-r from-violet to-cyan-bright transition-colors"
            >
              Accept all
            </button>
            <button
              onClick={() => persist(defaultPrefs)}
              className="border border-edge text-text/80 px-5 py-2.5 text-sm hover:border-cyan hover:text-cyan transition-colors"
            >
              Necessary only
            </button>
            <button
              onClick={() => (expanded ? persist(prefs) : setExpanded(true))}
              className="annotation text-cyan hover:text-cyan px-2 py-2.5 text-sm"
            >
              {expanded ? "Save preferences" : "Customize"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Toggle({ label, desc, checked, disabled, onChange }) {
  return (
    <label className={`flex items-start gap-3 ${disabled ? "opacity-60" : "cursor-pointer"}`}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 accent-[#C89B5C]"
      />
      <span>
        <span className="text-sm font-medium block">{label}</span>
        <span className="text-xs text-muted">{desc}</span>
      </span>
    </label>
  );
}
