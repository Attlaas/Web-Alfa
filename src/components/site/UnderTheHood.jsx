import React from 'react';
import { Image } from '@/components/ui/image';
import Section from '@/components/site/Section';
import { HOOD, IMAGES } from '@/data/alfa';

export default function UnderTheHood() {
  return (
    <Section
      id="motor"
      tag="[ por dentro ]"
      title="Cómo está construido"
      intro="Todo lo que ves es propio: el motor, la voz, los sonidos, la estética y el modelo. Nada depende de la nube de una empresa, y nada se ejecuta sin que lo hayas permitido."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
        <div className="flex flex-col gap-3">
          {HOOD.map((h) => {
            const Icon = h.icon;
            return (
              <article key={h.title} className="mod-neon">
                <span className="flex flex-col items-center gap-2 pt-1">
                  <Icon className="h-6 w-6 text-accent" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">{h.tag}</span>
                </span>
                <div>
                  <h3 className="mb-1 text-[16px] tracking-[0.06em] text-white">{h.title}</h3>
                  <p className="m-0 text-[13px] text-[#aeb8ec]">{h.text}</p>
                </div>
              </article>
            );
          })}
        </div>

        <Image
          src={IMAGES.hood}
          alt="Vista del núcleo de ALFA"
          className="block aspect-square w-full overflow-hidden rounded-[10px] border border-[rgba(124,108,240,0.5)] [box-shadow:0_0_50px_-12px_#6C5CE7]"
        />
      </div>

      <p className="mt-[26px] font-mono text-[12px] text-[#8e99d0]">
        Hardware recomendado: 16 GB de RAM y tarjeta gráfica de 8 GB · Windows 10 u 11 de 64 bits · Python 3.12 ·
        micrófono y altavoces para el uso por voz.
      </p>
    </Section>
  );
}
