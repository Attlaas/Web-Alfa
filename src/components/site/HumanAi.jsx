import React from 'react';
import Section from '@/components/site/Section';

const SIDES = [
  {
    tag: '[ el arquitecto ]',
    who: 'Atlas',
    alias: 'alias público · autor del proyecto',
    lines: [
      'Concibe la obra: qué es ALFA, para qué sirve y qué no debe hacer jamás.',
      'Decide la identidad, la estética de sala de mando, la voz con efecto de megafonía, el modelo local y la personalidad que se forma con la experiencia.',
      'Revisa, prueba en su propio equipo, acepta o rechaza y pide correcciones en cada una de las veintidós versiones entregadas.',
      'No hay empresa, inversores ni equipo asalariado detrás: una persona normal, sin ser experto en nada, que ha aprendido lo necesario para llevar esto hasta aquí y busca voluntarios que quieran construir el resto.',
    ],
  },
  {
    tag: '[ el motor ]',
    who: 'Una IA programando',
    alias: 'asistente de desarrollo',
    lines: [
      'Escribe la mayor parte del código fuente siguiendo las indicaciones del autor.',
      'Cada versión se entrega, se prueba y se corrige: es un ciclo entre una persona y una máquina.',
      'El programa final es propio: su modelo, su voz, sus sonidos y su estética no son de nadie más.',
    ],
  },
];

export default function HumanAi() {
  return (
    <Section
      id="autor"
      tag="[ quién lo hace ]"
      title="Las ideas son humanas. El código, de la máquina."
      intro="No hay equipo, ni empresa, ni inversores. Hay un autor que dirige y una IA que ejecuta, veintidós versiones después de empezar."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {SIDES.map((s) => (
          <article
            key={s.who}
            className="rounded-[10px] border border-[rgba(124,108,240,0.45)] bg-[rgba(30,36,72,0.5)] p-7"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">{s.tag}</p>
            <h3 className="mb-0.5 mt-3 text-[26px] uppercase tracking-[0.1em] text-white">{s.who}</h3>
            <p className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{s.alias}</p>
            <ul className="list-disc space-y-2.5 pl-[18px] text-[14px] text-[#aeb8ec]">
              {s.lines.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-[22px] border-l-[3px] border-primary bg-[rgba(108,92,231,0.1)] p-[26px] text-[19px] text-white">
        «El programa está en trámite de registro como obra de programa de ordenador a mi nombre, con su código
        fuente y su logotipo. Lo que falta para que llegue a más gente no es una idea: es tiempo y equipo.»
        <small className="mt-3 block font-mono text-[12px] tracking-[0.1em] text-accent">
          © 2026 Atlas · en trámite de registro · Todos los derechos reservados
        </small>
      </div>
    </Section>
  );
}
