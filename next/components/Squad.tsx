export default function Squad() {
  return (
    <section className="squad notch-top">
      <div className="dot-fade" aria-hidden="true" />
      <div className="container wide">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="squad-img" src="/assets/m/m-front.png" alt="M, the companion robot" loading="lazy" />
      </div>
      <div className="notch-bottom notch-bottom-light" aria-hidden="true" />
    </section>
  );
}
