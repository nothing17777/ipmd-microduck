const MARQUEE_ITEMS = [
  "Pre-orders open August 27, 2026 ★",
  "$399 before taxes and shipping ★",
  "Open source ★",
];

export default function Hero() {
  const loop = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <section className="hero">
      <div className="hero-media">
        <video autoPlay muted loop playsInline aria-label="M walking around and showing off its glowing core">
          <source src="/assets/m/m-hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-grain" aria-hidden="true">
          <span className="hero-scanline-tag">AV-1</span>
        </div>
      </div>
      <div className="hero-gradient" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-copy">
          <h1 className="hero-title">
            <span className="hero-title-top">M</span>
            <span className="hero-title-sub">Made to move · Ready to learn</span>
          </h1>
          <p className="hero-desc">
            A 25 cm <strong>open-source</strong> biped you train yourself with reinforcement learning. Playable out of the box.
          </p>
          <div className="hero-cta">
            <a className="btn btn-comic btn-xl" href="https://store.pollen-robotics.com/products/microduck" target="_blank" rel="noopener noreferrer">
              Pre-order for $399
            </a>
          </div>
        </div>
      </div>
      <div className="marquee-wrap">
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {loop.map((item, i) => (
              <span className="marquee-item" key={i}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
