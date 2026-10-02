const ROWS: [string, string][] = [
  ["15", "Motors"],
  ["25 cm", "Tall"],
  ["800 g", "To pick up"],
  ["Camera", "Plus LiDAR and two IMUs"],
  ["7", "Trained moves in the box"],
  ["50 Hz", "Onboard policy loop"],
];

export default function Specs() {
  return (
    <section className="specs light">
      <div className="container narrow">
        <div className="specs-grid">
          <div>
            <h2 className="h-anton-sm2"><span className="ink">Tech specs</span></h2>
            <a className="btn btn-comic-yellow" href="/m/press-kit">Full sheet in the press kit</a>
          </div>
          <dl className="specs-list">
            {ROWS.map(([dt, dd]) => (
              <div className="specs-row" key={dt}>
                <dt>{dt}</dt>
                <dd>{dd}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
