import React from 'react';
import { MILESTONES, DONATION_STATS } from '@/data/alfa';

const euros = (n) => `${Number(n || 0).toLocaleString('es-ES', { maximumFractionDigits: 2 })} €`;

export default function StatsPanel() {
  const done = MILESTONES.filter((m) => m.status === 'entregada').length;
  const totalStages = MILESTONES.length;
  const progress = Math.round((done / totalStages) * 100);
  const raised = DONATION_STATS.total ?? 0;
  const supporters = DONATION_STATS.supporters ?? 0;

  const TILES = [
    { label: 'etapas completadas', value: `${done} / ${totalStages}` },
    { label: 'apoyos registrados', value: supporters },
    { label: 'donativos acumulados', value: euros(raised) },
    { label: 'aporte medio', value: !supporters ? '—' : euros(raised / supporters) },
  ];

  return (
    <section id="panel" className="relative pt-[90px]">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="panel-win p-7 md:p-[34px]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="micro-label">[ panel de control ]</p>
              <h2 className="mt-3.5 font-heading text-[24px] font-bold uppercase leading-[1.1] tracking-[0.06em] text-white md:text-[34px]">
                El estado del proyecto
              </h2>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8e99d0]">
              actualizado el {DONATION_STATS.updated}
            </p>
          </div>

          <div className="mt-7">
            <div className="flex items-center justify-between gap-4">
              <span className="micro-label">avance del plan</span>
              <span className="font-mono text-[12px] text-accent">{progress} %</span>
            </div>
            <div className="bar-neon mt-2">
              <span style={{ width: `${progress}%` }} />
            </div>
          </div>

          <dl className="stats-neon mt-7">
            {TILES.map((t) => (
              <div key={t.label}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#9aa6dc]">{t.label}</dt>
                <dd className="mt-1.5 font-heading text-[26px] font-bold tracking-[0.04em] text-white">{t.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#8e99d0]">
            cifras reales del proyecto · sin datos personales de quienes donan
          </p>
        </div>
      </div>
    </section>
  );
}
