export default function Packs() {
  return (
    <section className="packs dark">
      <div className="container narrow center">
        <p className="eyebrow">The robot, and what to add to it</p>
        <h2 className="h-anton">
          <span className="orange-glow">Pick your</span>
          <span className="stroke-neon">pack</span>
        </h2>
        <p className="lead">The robot is <strong>everything you need on day one</strong>. The packs add play gear and spare parts.</p>

        <div className="robot-pack">
          <div className="robot-pack-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/m/m-front.png" alt="M standing on a desk" loading="lazy" />
            <p className="price-tag">$399</p>
          </div>
          <div className="robot-pack-copy">
            <p className="label-sm">The robot</p>
            <h3 className="h-anton-sm">M</h3>
            <p className="label-sm label-faint">In the box</p>
            <p className="body-copy">Robot, battery, USB-C cable, game controller.</p>
            <a className="btn btn-comic-outline" href="https://store.pollen-robotics.com/products/microduck" target="_blank" rel="noopener noreferrer" aria-label="Pre-order M">
              Pre-order
            </a>
          </div>
        </div>

        <div className="pack-grid">
          <div className="pack-card">
            <div className="pack-head pack-head-yellow"><h3>Charger pack</h3></div>
            <div className="pack-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/microduck/pack-charger.webp" alt="A dual-slot battery charger, two spare batteries and a USB-C cable" loading="lazy" />
              <p className="price-chip">$39</p>
            </div>
            <div className="pack-body">
              <p>Dual charger, 2x batteries.</p>
              <a className="btn btn-comic-outline" href="https://store.pollen-robotics.com/products/charger-pack?variant=58538260398454" target="_blank" rel="noopener noreferrer" aria-label="Pre-order the Charger pack">Pre-order</a>
            </div>
          </div>
          <div className="pack-card">
            <div className="pack-head pack-head-cyan"><h3>Dev pack</h3></div>
            <div className="pack-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/microduck/pack-dev.webp" alt="Three spare motors, motor cables, two batteries, a charger, ten NFC tags, a screwdriver and spare screws" loading="lazy" />
              <p className="price-chip">$119</p>
            </div>
            <div className="pack-body">
              <p>3x spare motors, 5x motor cables, 2x batteries, dual charger, 10x NFC tags, Hugging Face credit, screwdriver, screw pack.</p>
              <a className="btn btn-comic-outline" href="https://store.pollen-robotics.com/products/dev-pack?variant=58531128967542" target="_blank" rel="noopener noreferrer" aria-label="Pre-order the Dev pack">Pre-order</a>
            </div>
          </div>
          <div className="pack-card">
            <div className="pack-head pack-head-pink"><h3>Accessory pack</h3></div>
            <div className="pack-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/microduck/pack-accessories.webp" alt="Two yellow roller attachments, a ball, a laser pen, an NFC polaroid and ten NFC tags" loading="lazy" />
              <p className="price-chip">$39</p>
            </div>
            <div className="pack-body">
              <p>Laser pointer, NFC polaroid, 2x rollers, ball, 10x NFC tags.</p>
              <a className="btn btn-comic-outline" href="https://store.pollen-robotics.com/products/accessory-pack?variant=58538525262198" target="_blank" rel="noopener noreferrer" aria-label="Pre-order the Accessory pack">Pre-order</a>
            </div>
          </div>
        </div>
      </div>
      <div className="notch-bottom notch-bottom-light" aria-hidden="true" />
    </section>
  );
}
