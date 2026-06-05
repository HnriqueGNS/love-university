import { useMemo } from 'react';
import type React from 'react';
import './LovePage.css';

type Star = {
  top: string;
  left: string;
  size: string;
  delay: string;
  duration: string;
  opacity: number;
};

type Dust = {
  top: string;
  left: string;
  size: string;
  delay: string;
};

function seededRandom(seed: number) {
  let value = seed;

  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

function createStars(total: number): Star[] {
  const random = seededRandom(77);

  return Array.from({ length: total }).map(() => ({
    top: `${random() * 100}%`,
    left: `${random() * 100}%`,
    size: `${random() * 2.2 + 0.7}px`,
    delay: `${random() * 6}s`,
    duration: `${random() * 4 + 2.5}s`,
    opacity: random() * 0.55 + 0.3,
  }));
}

function createDust(total: number): Dust[] {
  const random = seededRandom(144);

  return Array.from({ length: total }).map(() => ({
    top: `${random() * 100}%`,
    left: `${random() * 100}%`,
    size: `${random() * 3 + 1}px`,
    delay: `${random() * 8}s`,
  }));
}

export function LovePage() {
  const stars = useMemo(() => createStars(120), []);
  const dust = useMemo(() => createDust(38), []);

  return (
    <main className="love-page love-page-dark">
      <section className="space-scene" aria-hidden="true">
        <div className="space-depth"></div>

        <div className="nebula nebula-rose"></div>
        <div className="nebula nebula-blue"></div>
        <div className="nebula nebula-violet"></div>

        <div className="nebula-cloud cloud-one"></div>
        <div className="nebula-cloud cloud-two"></div>
        <div className="nebula-cloud cloud-three"></div>
        <div className="nebula-cloud cloud-four"></div>

        <div className="galaxy">
          <div className="galaxy-arm galaxy-arm-one"></div>
          <div className="galaxy-arm galaxy-arm-two"></div>
          <div className="galaxy-arm galaxy-arm-three"></div>
          <div className="galaxy-core"></div>
        </div>

        <div className="stars-layer">
          {stars.map((star, index) => (
            <span
              key={`star-${index}`}
              className="star"
              style={
                {
                  '--top': star.top,
                  '--left': star.left,
                  '--size': star.size,
                  '--delay': star.delay,
                  '--duration': star.duration,
                  '--opacity': star.opacity,
                } as React.CSSProperties
              }
            />
          ))}
        </div>

        <div className="dust-layer">
          {dust.map((item, index) => (
            <span
              key={`dust-${index}`}
              className="dust"
              style={
                {
                  '--top': item.top,
                  '--left': item.left,
                  '--size': item.size,
                  '--delay': item.delay,
                } as React.CSSProperties
              }
            />
          ))}
        </div>

        <div className="meteor meteor-one">
          <span className="meteor-fragment fragment-one"></span>
          <span className="meteor-fragment fragment-two"></span>
          <span className="meteor-fragment fragment-three"></span>
        </div>

        <div className="meteor meteor-two">
          <span className="meteor-fragment fragment-one"></span>
          <span className="meteor-fragment fragment-two"></span>
          <span className="meteor-fragment fragment-three"></span>
        </div>

        <div className="meteor meteor-three">
          <span className="meteor-fragment fragment-one"></span>
          <span className="meteor-fragment fragment-two"></span>
          <span className="meteor-fragment fragment-three"></span>
        </div>
      </section>

      <section className="love-content">
        <div className="message-shell">
          <h1>
            Para pequenas criaturas como nós,
            <br />
            a vastidão somente é suportável
            <br />
            através do amor.
          </h1>

          <p className="code-line">
            <span>Carl Sagan</span>
          </p>
        </div>
      </section>
    </main>
  );
}