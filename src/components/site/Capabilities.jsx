import React from 'react';
import Section from '@/components/site/Section';
import { CAPABILITIES, MOBILE } from '@/data/alfa';

export default function Capabilities() {
  const MobileIcon = MOBILE.icon;

  return (
    <Section
      id="capaz"
      tag="[ capacidades ]"
      title="Lo que ALFA hace por ti cada día"
      intro="No es un buscador con voz: es un asistente que se queda contigo, aprende de lo que le cuentas y trabaja en segundo plano mientras tú haces otra cosa."
    >
      <div className="flex snap-x gap-3.5 overflow-x-auto pb-2">
        {CAPABILITIES.map((c) => {
          const Icon = c.icon;
          return (
            <article key={c.title} className="card-neon min-h-[190px] flex-[0_0_268px] snap-start">
              <Icon className="h-[26px] w-[26px] text-accent" />
              <h3 className="mb-2 mt-3.5 text-[15px] uppercase tracking-[0.12em] text-white">{c.title}</h3>
              <p className="m-0 text-[13px] text-[#aeb8ec]">{c.text}</p>
            </article>
          );
        })}
      </div>

      <article className="mt-[26px] flex flex-col gap-6 rounded-[8px] border border-primary bg-[rgba(108,92,231,0.12)] p-[26px] md:flex-row md:items-center md:gap-6">
        <MobileIcon className="h-[34px] w-[34px] shrink-0 text-accent" />
        <div>
          <h3 className="mb-1.5 font-heading text-[19px] uppercase tracking-[0.1em] text-white">{MOBILE.title}</h3>
          <p className="m-0 text-[14px] text-[#aeb8ec]">{MOBILE.text}</p>
        </div>
      </article>
    </Section>
  );
}
