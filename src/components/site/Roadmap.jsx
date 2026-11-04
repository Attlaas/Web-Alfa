import React from 'react';
import Section from '@/components/site/Section';
import { MILESTONES } from '@/data/alfa';

const STATUS_CLASS = {
  entregada: 'st-e',
  'en curso': 'st-c',
  'necesita financiación': 'st-f',
  siguiente: '',
};

const STATE_OF = (status) => {
  if (status === 'entregada') return 'done';
  if (status === 'en curso') return 'now';
  return 'next';
};

export default function Roadmap() {
  const pending = MILESTONES.filter((m) => m.status !== 'entregada').length;

  return (
    <Section
      id="avance"
      tag="[ avance ]"
      title="La hoja de ruta, etapa a etapa"
      intro={`Las veintidós versiones de la beta cerrada ya están entregadas. Quedan ${pending} etapas para que ALFA llegue a tu ordenador.`}
    >
      <ol className="tl-list">
        {MILESTONES.map((m, i) => {
          const state = STATE_OF(m.status);
          return (
            <li
              key={m.version}
              className="tl-item rise"
              data-state={state}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span className="tl-seg" aria-hidden="true" />
              <span className="tl-node" aria-hidden="true">
                {state === 'now' && <span className="tl-node-ping" />}
                <span className="tl-node-core" />
              </span>

              <article className="tl-card">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="micro-label">etapa {String(i + 1).padStart(2, '0')}</span>
                  <span className={`st ${STATUS_CLASS[m.status] ?? ''}`}>{m.status}</span>
                </div>
                <h3 className="mt-3 font-heading text-[19px] font-bold uppercase leading-[1.15] tracking-[0.06em] text-white md:text-[22px]">
                  {m.name}
                </h3>
                <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{m.version}</p>
                <p className="mt-3 text-[14px] text-[#aeb8ec]">{m.text}</p>
              </article>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
