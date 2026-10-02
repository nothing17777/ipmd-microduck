import MViewer from "./MViewer";

export default function Sim2Real() {
  return (
    <section className="sim2real dark">
      <div className="container wide">
        <div className="sim2real-grid">
          <MViewer size="large" />
          <div className="sim2real-copy">
            <p className="eyebrow">Meet the twin</p>
            <h2 className="h-anton">
              <span className="neon">sim2real</span>
              <span className="stroke-neon">that works</span>
            </h2>
            <p className="lead">
              <strong>Trained in sim, deployed on the real robot.</strong> This is the simulated twin M was trained on — drag to orbit, scroll to zoom, hold the shell to feel it glow.
            </p>
            <div className="cta-row">
              <a className="btn btn-comic btn-yellow" href="https://huggingface.co/spaces/pollen-robotics/microduck-simulator" target="_blank" rel="noopener noreferrer">
                Launch the simulator
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="notch-bottom notch-bottom-light" aria-hidden="true" />
    </section>
  );
}
