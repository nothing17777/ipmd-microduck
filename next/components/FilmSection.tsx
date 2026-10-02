"use client";

import { useRef, useState } from "react";

export default function FilmSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function play() {
    setPlaying(true);
    videoRef.current?.play();
  }

  return (
    <section className="film-section light">
      <div className="container narrow center">
        <p className="eyebrow">The launch film · sound on</p>
        <h2 className="h-anton">
          <span className="ink">Roll the</span>
          <span className="outline">tape</span>
        </h2>
        <div className="film-frame-wrap">
          <div className="film-frame">
            {playing ? (
              <video ref={videoRef} controls playsInline style={{ width: "100%", aspectRatio: "1920/1280" }}>
                <source src="/assets/m/m-film.mp4" type="video/mp4" />
              </video>
            ) : (
              <button className="film-play-btn" type="button" onClick={play} aria-label="Play the M launch film">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/m/m-side.png" alt="" loading="lazy" style={{ aspectRatio: "1920/1280", objectFit: "cover" }} />
                <span className="film-badge">▶ Play the film</span>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="notch-bottom notch-bottom-dark" aria-hidden="true" />
    </section>
  );
}
