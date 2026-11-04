import React from 'react';
import Section from '@/components/site/Section';
import HistoryRow from '@/components/site/HistoryRow';
import { MILESTONE_LOG } from '@/data/history';

export default function HistoryLog() {
  return (
    <Section
      id="logros"
      tag="[ historial ]"
      title="Los hitos que ya están logrados"
      intro="Lo que existe hoy dentro del programa, hito a hito. No es una promesa: son veintidós versiones de la beta cerrada que ya funcionan en un ordenador con Windows."
    >
      <div className="panel-win">
        <div className="log-bar">
          <span className="flex items-center gap-2.5">
            <span className="term-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="log-path">alfa://historial/hitos</span>
          </span>
          <span className="log-path">{MILESTONE_LOG.length} hitos · 22 versiones</span>
        </div>

        <div className="p-5 md:p-7">
          <div className="grid gap-x-10 lg:grid-cols-2">
            {MILESTONE_LOG.map((milestone, i) => (
              <HistoryRow key={milestone.title} code={String(i + 1).padStart(2, '0')} milestone={milestone} />
            ))}
          </div>

          <p className="log-sign mt-6">— Atlas</p>
          <p className="log-path mt-2">hitos verificados en la beta cerrada · todo ocurre dentro de tu ordenador</p>
        </div>
      </div>
    </Section>
  );
}
