import React, { useEffect, useState } from 'react';
import { SYSTEM_LOG } from '@/data/system';

const VISIBLE = 5;
const INTERVAL = 3200;

const clock = (sec) => `${String(Math.floor(sec / 60)).padStart(2, '0')}:${String(sec % 60).padStart(2, '0')}`;

export default function PanelLog() {
  const [lines, setLines] = useState(() =>
    SYSTEM_LOG.slice(0, VISIBLE).map((text, i) => ({ id: i, sec: i * 3, text }))
  );

  useEffect(() => {
    let step = VISIBLE - 1;
    const timer = setInterval(() => {
      step += 1;
      setLines((prev) => {
        const nextId = (prev[prev.length - 1]?.id ?? -1) + 1;
        return [...prev.slice(1), { id: nextId, sec: step * 3, text: SYSTEM_LOG[step % SYSTEM_LOG.length] }];
      });
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-1.5 font-mono text-[11px] leading-[1.5]">
      {lines.map((line) => (
        <p key={line.id} className="log-line flex gap-2 text-[#8e99d0]">
          <span className="shrink-0 text-accent">{clock(line.sec)}</span>
          <span>{line.text}</span>
        </p>
      ))}
      <span className="hud-caret mt-1 inline-block" aria-hidden="true" />
    </div>
  );
}
