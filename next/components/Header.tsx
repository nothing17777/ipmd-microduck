"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <Link className="topbar-brand" href="/" aria-label="IPMD">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/ipmd/ipmd-logo.png" alt="" aria-hidden="true" />
            <span className="brand-text">IPMD</span>
          </Link>
          <nav className="topbar-nav">
            <Link href="/">IPMD</Link>
            <a href="https://www.ipmdinc.com/" target="_blank" rel="noopener noreferrer">Products</a>
            <Link href="/m/" aria-current="page" className="active">M</Link>
            <a href="https://www.ipmdinc.com/" target="_blank" rel="noopener noreferrer">About</a>
          </nav>
        </div>
      </header>

      <header className="mduck-nav">
        <div className="mduck-nav-inner">
          <Link className="mduck-logo" href="/m/">
            <span className="duck-mark">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="duck-closed" src="/assets/m/m-mark.png" alt="" aria-hidden="true" />
            </span>
            <span className="mduck-logo-text">M</span>
          </Link>
          <div className="mduck-nav-right">
            <div className="mduck-nav-links">
              <Link href="/m/blog/">Blog</Link>
              <Link href="/m/press-kit/">Press kit</Link>
              <a href="https://huggingface.co/spaces/pollen-robotics/microduck-simulator" target="_blank" rel="noopener noreferrer">
                Simulator
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                  <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z" />
                </svg>
              </a>
            </div>
            <a className="btn btn-comic" href="https://store.pollen-robotics.com/products/microduck" target="_blank" rel="noopener noreferrer">
              Pre-order
            </a>
            <button className="mduck-burger" aria-label="Open menu" onClick={() => setOpen(true)}>
              ☰
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer-backdrop${open ? " open" : ""}`} onClick={() => setOpen(false)} />
      <div className={`drawer${open ? " open" : ""}`}>
        <div className="drawer-head">
          <Link className="mduck-logo" href="/m/">
            <span className="duck-mark">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/m/m-mark.png" alt="" />
            </span>
            <span className="mduck-logo-text">M</span>
          </Link>
          <button className="drawer-close" aria-label="Close menu" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>
        <ul className="drawer-list">
          <li><Link href="/m/blog/">Blog</Link></li>
          <li><Link href="/m/press-kit/">Press kit</Link></li>
          <li><a href="https://huggingface.co/spaces/pollen-robotics/microduck-simulator" target="_blank" rel="noopener noreferrer">Simulator</a></li>
          <li><a className="btn btn-comic" href="https://store.pollen-robotics.com/products/microduck" target="_blank" rel="noopener noreferrer">Pre-order</a></li>
        </ul>
      </div>
    </>
  );
}
