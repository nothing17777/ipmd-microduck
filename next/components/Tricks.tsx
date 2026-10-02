const STEPS = [
  { num: "01", cls: "tilt-1", color: "orange", title: "Train in simulation", desc: "Behaviours are learned in physics sim, on your machine or on Hugging Face Jobs." },
  { num: "02", cls: "tilt-2", color: "amber", title: "Deploy on the robot", desc: "One step from simulation to the real thing." },
  { num: "03", cls: "tilt-3", color: "blue", title: "Refine the simulation", desc: "Tune, re-train, re-deploy." },
  { num: "04", cls: "tilt-4", color: "purple", title: "Publish the policy", desc: "Share your new behavior with the community!" },
];

const MOVES = [
  { slug: "walk", title: "Walk", desc: "Velocity-tracking gait." },
  { slug: "sitstand", title: "Sit & stand", desc: "Sits down, holds the pose, stands back up on its own." },
  { slug: "kickL", title: "Kick", desc: "A one-shot boot, then straight back to walking." },
  { slug: "grab", title: "Grab", desc: "Dips the beak to the ground, scoops, and pops back upright." },
  { slug: "drive", title: "Roller skating", desc: "Roller skating locomotion when the skates are equipped." },
  { slug: "standup", title: "Get back up", desc: "Flat on its back to standing, all by itself, ready for the next command." },
];

export default function Tricks() {
  return (
    <section className="tricks light">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="sticker sticker-taptap" src="/assets/microduck/stickers/tap-tap.webp" alt="" aria-hidden="true" />
      <div className="container narrow center">
        <p className="eyebrow">Fun out of the box. Yours to retrain.</p>
        <h2 className="h-anton">
          <span className="ink">Teach it new</span>
          <span className="outline">tricks</span>
        </h2>
        <p className="lead">Every behaviour is a policy you can <strong>retrain on your own machine</strong>.</p>

        <div className="steps-grid">
          {STEPS.map((s) => (
            <div className={`step-card ${s.cls}`} key={s.num}>
              <p className={`step-num ${s.color}`}>{s.num}</p>
              <p className="step-title">{s.title}</p>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="moves-grid">
          {MOVES.map((m) => (
            <div className="move-card" key={m.slug}>
              <div className="move-video">
                <video loop muted playsInline preload="none" poster={`/assets/microduck/moves-portrait-alpha/posters/${m.slug}.png`} aria-label={m.title}>
                  <source src={`/assets/microduck/moves-portrait-alpha/${m.slug}.webm`} type="video/webm" />
                </video>
              </div>
              <p className="move-title">{m.title}</p>
              <p className="move-desc">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="notch-bottom notch-bottom-dark" aria-hidden="true" />
    </section>
  );
}
