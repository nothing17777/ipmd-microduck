"use client";

import { useRef, useState } from "react";

function VideoTile({ src, poster, label, wide }: { src: string; poster: string; label: string; wide?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  function toggle() {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.muted = false;
      v.play();
    } else {
      v.pause();
    }
  }
  return (
    <div className={`tile tile-video${wide ? " wide-tile" : ""}`} onClick={toggle}>
      <video ref={ref} loop playsInline preload="none" poster={poster} aria-label={label}>
        <source src={src} type="video/mp4" />
      </video>
      <span className="tile-hint">Play clip</span>
    </div>
  );
}

function ChoraleTile() {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  function toggle() {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  }
  return (
    <div className="tile tile-video wide-tile" onClick={toggle}>
      <video ref={ref} loop muted={muted} playsInline preload="none" poster="/assets/microduck/gallery/chorale-poster.jpg" aria-label="Four M units in the four colourways singing together like a choir">
        <source src="/assets/microduck/gallery/chorale.mp4" type="video/mp4" />
      </video>
      <span className="tile-hint">Play clip</span>
      <button
        className="sound-toggle"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setMuted((m) => !m);
        }}
      >
        {muted ? "🔇 Sound off" : "🔊 Sound on"}
      </button>
    </div>
  );
}

function ImgTile({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="tile">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" />
      <span className="tile-hint">View</span>
    </div>
  );
}

export default function Wild() {
  return (
    <section className="wild light">
      <div className="container wide">
        <div className="center">
          <p className="eyebrow">Out in the world</p>
          <h2 className="h-anton"><span className="ink">In the wild</span></h2>
          <p className="lead">The <strong>real robot in real places</strong> — on desks, on the pitch, out at golden hour.</p>
        </div>

        <div className="gallery">
          <div className="gallery-row">
            <VideoTile src="/assets/microduck/gallery/roller-skating.mp4" poster="/assets/microduck/gallery/roller-skating-poster.jpg" label="M skating around a living room" />
            <div className="tile-col">
              <ImgTile src="/assets/microduck/gallery/closeup.webp" alt="Close-up of M standing on a desk in warm light" />
              <ImgTile src="/assets/microduck/gallery/playtime.webp" alt="A woman laughing while playing with M at a table" />
              <ImgTile src="/assets/microduck/gallery/watching.webp" alt="M on a desk looking into the camera while someone codes behind it" />
            </div>
          </div>
          <div className="gallery-row">
            <div className="tile-col">
              <ImgTile src="/assets/microduck/gallery/kickabout.webp" alt="Two M units playing with a ball on a turf pitch" />
              <ImgTile src="/assets/microduck/gallery/desk.webp" alt="Overhead view of a desk with M units, a game controller and a sticker sheet" />
            </div>
            <VideoTile src="/assets/microduck/gallery/balance-recovery.mp4" poster="/assets/microduck/gallery/balance-recovery-poster.jpg" label="M recovering its balance after being pushed by hand" />
          </div>
          <div className="gallery-row">
            <ImgTile src="/assets/microduck/gallery/carried.webp" alt="M carried under an arm" />
            <ImgTile src="/assets/microduck/gallery/screentime.webp" alt="M standing in front of a laptop screen in teal light" />
            <ImgTile src="/assets/microduck/gallery/skate.webp" alt="M outdoors at golden hour, next to a skater's shoe" />
          </div>
          <VideoTile wide src="/assets/microduck/gallery/squad-standup.mp4" poster="/assets/microduck/gallery/squad-standup-poster.jpg" label="Four M units in the four colourways standing up from a living-room floor together" />
          <div className="gallery-row">
            <ImgTile src="/assets/microduck/gallery/stickers.webp" alt="A hand sticking a lips sticker onto M's beak, sticker sheets spread on the table" />
            <ImgTile src="/assets/microduck/gallery/playroom.webp" alt="M standing on a pink rug in a child's playroom" />
            <ImgTile src="/assets/microduck/gallery/morning.webp" alt="M on a desk in warm morning light, next to a monitor and a game controller" />
            <ImgTile src="/assets/microduck/gallery/bedroom.webp" alt="M standing on a bedroom rug while its owner codes on the bed behind it" />
          </div>
          <ChoraleTile />
          <div className="gallery-row">
            <VideoTile src="/assets/microduck/gallery/grab-and-carry.mp4" poster="/assets/microduck/gallery/grab-and-carry-poster.jpg" label="M grabbing an object with its beak and carrying it to a box" />
            <ImgTile src="/assets/microduck/gallery/walkabout.webp" alt="M walking across a green games table surrounded by people" />
          </div>
        </div>
      </div>
      <div className="notch-bottom notch-bottom-dark" aria-hidden="true" />
    </section>
  );
}
