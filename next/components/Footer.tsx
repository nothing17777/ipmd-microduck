import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container wide">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-row">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/ipmd/ipmd-logo.png" alt="" aria-hidden="true" />
              <p>IPMD</p>
            </div>
            <p className="footer-tag">Expressive, open-source robots for AI builders and makers.</p>
            <div className="footer-socials">
              <a href="https://x.com/ipmd_inc" target="_blank" rel="noopener noreferrer" aria-label="X">X</a>
              <a href="https://www.linkedin.com/company/ipmd-inc./" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
              <a href="https://www.youtube.com/channel/UC_AZ1G4RLK273vdo1pzz0VQ/featured" target="_blank" rel="noopener noreferrer" aria-label="YouTube">YT</a>
              <a href="https://www.facebook.com/MprojectAI" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
              <a href="https://discord.gg/2bAhWfXme9" target="_blank" rel="noopener noreferrer" aria-label="Discord">D</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Products</h4>
            <Link href="/m/">M</Link>
            <a href="https://www.ipmdinc.com/" target="_blank" rel="noopener noreferrer">Products</a>
            <a href="https://store.pollen-robotics.com" target="_blank" rel="noopener noreferrer">Order M</a>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <Link href="/m/getting-started/">Get started</Link>
            <Link href="/m/download/">Download</Link>
            <Link href="/m/flasher/">OS recovery (Flasher)</Link>
            <Link href="/m/moves/">Moves gallery</Link>
            <Link href="/m/faq/">FAQ</Link>
            <a href="https://huggingface.co/docs/reachy_mini/index" target="_blank" rel="noopener noreferrer">M docs</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="https://www.ipmdinc.com/about-ipmd" target="_blank" rel="noopener noreferrer">About us</a>
            <a href="https://www.ipmdinc.com/contact" target="_blank" rel="noopener noreferrer">Contact</a>
            <a href="https://discord.gg/2bAhWfXme9" target="_blank" rel="noopener noreferrer">Discord</a>
            <a href="https://huggingface.co/pollen-robotics" target="_blank" rel="noopener noreferrer">Hugging Face</a>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <Link href="/legal-notice/">Legal notice</Link>
            <Link href="/personal-data-protection-charter/">Privacy</Link>
            <Link href="/general-terms-and-conditions-of-sales/">Terms of sale</Link>
            <Link href="/cookies/">Cookies</Link>
            <button type="button" className="link-btn">Cookie settings</button>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 IPMD · Open source under Apache 2.0</p>
          <div className="footer-hf">
            <p>Powered by</p>
            <a href="https://huggingface.co/" target="_blank" rel="noopener noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/hf-logo.svg" alt="" aria-hidden="true" />
              Hugging Face
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
