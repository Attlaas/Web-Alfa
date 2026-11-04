import React from 'react';
import { Image } from '@/components/ui/image';
import { IMAGES } from '@/data/alfa';

// Puntos de luz repartidos por el disco: cada uno late con su propio compás.
const NODES = [
  { top: '17%', left: '31%', delay: '0s' },
  { top: '11%', left: '63%', delay: '0.7s' },
  { top: '33%', left: '83%', delay: '1.3s' },
  { top: '47%', left: '11%', delay: '0.4s' },
  { top: '64%', left: '75%', delay: '1.8s' },
  { top: '79%', left: '37%', delay: '2.2s' },
  { top: '87%', left: '59%', delay: '1s' },
  { top: '52%', left: '49%', delay: '2.6s' },
];

export default function LightCore({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`core-stage pointer-events-none absolute left-1/2 top-1/2 h-[min(520px,86vw)] w-[min(520px,86vw)] -translate-x-1/2 -translate-y-1/2 select-none ${className}`}
    >
      <div className="core-halo" />

      <div className="core-disc core-fade">
        <Image src={IMAGES.core} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="core-sweep" />

      <div className="core-ring core-ring-1" />
      <div className="core-ring core-ring-2" />
      <div className="core-ring core-ring-3" />
      <div className="core-ping" />

      <div className="core-orbit core-orbit-a">
        <span className="core-sat" />
      </div>
      <div className="core-orbit core-orbit-b">
        <span className="core-sat core-sat-dim" />
      </div>

      {NODES.map((n) => (
        <span
          key={n.top + n.left}
          className="core-node"
          style={{ top: n.top, left: n.left, animationDelay: n.delay }}
        />
      ))}
    </div>
  );
}
