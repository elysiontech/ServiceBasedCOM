import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CookieConsent: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("elysion-cookie-consent");
      if (!consent) {
        setShow(true);
      }
    } catch {
      setShow(false);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("elysion-cookie-consent", "accepted");
    } catch {}
    setShow(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("elysion-cookie-consent", "declined");
    } catch {}
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 max-w-sm w-[calc(100vw-2rem)]"
        >
          <div className="bg-[#101010]/95 backdrop-blur-md p-5 rounded-2xl border border-white/[0.08] shadow-2xl flex flex-col gap-3.5">
            <p className="text-xs text-gray-400 leading-relaxed">
              We use minimal cookies to analyze site traffic and maintain your preference sessions.
            </p>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handleAccept}
                className="flex-1 py-1.5 px-3 bg-primary text-black rounded-lg text-xs font-medium hover:opacity-90 transition-opacity cursor-pointer text-center"
              >
                Accept
              </button>
              <button
                type="button"
                onClick={handleDecline}
                className="flex-1 py-1.5 px-3 bg-white/[0.06] text-gray-400 rounded-lg text-xs hover:bg-white/[0.1] transition-colors cursor-pointer text-center"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
