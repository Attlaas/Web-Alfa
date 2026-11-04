import React from 'react';
import Section from '@/components/site/Section';
import Counter from '@/components/site/Counter';
import { HERO_STATS, MILESTONES } from '@/data/alfa';

const FIGURES = HERO_STATS.filter((s) => s.label !== 'cuotas para el usuario').map((s) => ({
  label: s.label,
  value: Number(s.value.replace(/\./g, '')),
}));

export default function CounterBand() {
  const done = MILESTONES.filter((m) => m.status === 'entregada').length;
  const total = MILESTONES.length;

  const TILES = [{ label: 'fases del plan completadas', value: done, suffix: `/ ${total}` }, ...FIGURES];

  return (
    <Section
      id="hitos"
      tag="[ registro ]"
      title="Hitos alcanzados"
      intro="Lo que ya está hecho, en cifras: las fases del plan que se han cerrado y el tamaño real de lo construido hasta hoy."
    >
      <div className="hud-neon">
        {TILES.map((t) => (
          <div key={t.label}>
            <span className="hud-num">
              <Counter value={t.value} />
              {t.suffix && <em className="hud-suffix">{t.suffix}</em>}
              <span className="hud-caret" aria-hidden="true" />
            </span>
            <p className="mt-2.5 font-mono text-[10px] uppercase tracking-[0.24em] text-[#9aa6dc]">{t.label}</p>
          </div>
        ))}
      </div>

      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#8e99d0]">
        lectura del registro interno · se actualiza con cada versión entregada
      </p>
    </Section>
  );
}
