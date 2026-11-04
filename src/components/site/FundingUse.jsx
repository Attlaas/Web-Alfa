import React from 'react';
import Section from '@/components/site/Section';
import { FUNDING_USE } from '@/data/alfa';

export default function FundingUse() {
  return (
    <Section
      id="donativo"
      tag="[ en qué se usa ]"
      title="Tu donativo no se pierde en una oficina"
      intro="ALFA no se vende ni se alquila: se desarrolla. Cada aporte va íntegro a las cuatro cosas que hacen que exista la próxima versión."
    >
      <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
        {FUNDING_USE.map((f) => (
          <article key={f.num} className="card-neon min-h-[170px]">
            <span className="font-mono text-[14px] text-accent">{f.num}</span>
            <h3 className="mb-2 mt-3.5 text-[15px] uppercase tracking-[0.12em] text-white">{f.title}</h3>
            <p className="m-0 text-[13px] text-[#aeb8ec]">{f.text}</p>
          </article>
        ))}
      </div>
      <p className="mt-[26px] font-mono text-[12px] uppercase tracking-[0.2em] text-[#8e99d0]">
        donativo voluntario · sin contrapartidas · sin suscripción
      </p>
    </Section>
  );
}
