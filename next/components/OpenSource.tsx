export default function OpenSource() {
  return (
    <section className="open-source dark">
      <div className="container narrow">
        <div className="open-source-grid">
          <div>
            <p className="eyebrow">Built in the open</p>
            <h2 className="h-anton"><span className="blue-glow">Open source</span></h2>
            <p className="lead">
              The SDK, the simulation and <strong>the full RL training stack</strong> are on GitHub. What the robot runs is what you can <strong>read, fork and retrain</strong>.
            </p>
            <a className="btn btn-comic-paper" href="https://github.com/pollen-robotics/microduck" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27" />
              </svg>
              pollen-robotics/microduck
            </a>
          </div>
          <div className="terminal" aria-label="Terminal session on the robot">
            <div className="terminal-bar">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="terminal-title">ssh microduck</span>
            </div>
            <pre className="terminal-body">
              <span className="t-line"><span className="t-prompt">$ </span><span className="t-cmd">robotctl monitor</span>   <span className="t-comment"># status of the robot</span></span>
              <span className="t-line"><span className="t-prompt">$ </span><span className="t-cmd">robotctl configure</span> <span className="t-comment"># configure the robot</span></span>
              <span className="t-line"><span className="t-prompt">$ </span><span className="t-cmd">robotctl update</span>    <span className="t-comment"># update the robot</span></span>
            </pre>
          </div>
        </div>
        <div className="badge-row">
          <div className="badge-card badge-orange"><p className="badge-title">Apache-2.0</p><p className="badge-desc">The whole software stack, permissively licensed</p></div>
          <div className="badge-card badge-yellow"><p className="badge-title">MuJoCo</p><p className="badge-desc">The physics sim every policy is trained in</p></div>
          <div className="badge-card badge-purple"><p className="badge-title">7 policies</p><p className="badge-desc">Every shipped move, published and retrainable</p></div>
        </div>
      </div>
      <div className="notch-bottom notch-bottom-light" aria-hidden="true" />
    </section>
  );
}
