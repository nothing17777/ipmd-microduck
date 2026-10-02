"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("cookie-consent")) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function choose(value: string) {
    try {
      localStorage.setItem("cookie-consent", value);
    } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className="cookie-row">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="cookie-img" src="/assets/m/m-mark.png" alt="" />
        <div>
          <p className="cookie-title">We value your privacy</p>
          <p className="cookie-desc">
            We use cookies to run the site and, with your consent, measure audience. See the{" "}
            <a href="/cookies">cookie policy</a> or our{" "}
            <a href="/personal-data-protection-charter" target="_blank" rel="noopener noreferrer">privacy policy</a>.
          </p>
        </div>
      </div>
      <div className="cookie-actions">
        <button type="button" className="btn-sm btn-sm-solid" onClick={() => choose("accepted")}>Accept</button>
        <button type="button" className="btn-sm btn-sm-outline" onClick={() => choose("rejected")}>Reject</button>
        <button type="button" className="btn-sm btn-sm-text" onClick={() => setVisible(false)}>Customize</button>
      </div>
    </div>
  );
}
