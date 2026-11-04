import React from 'react';
import { Image } from '@/components/ui/image';
import HeroConsole from '@/components/site/HeroConsole';
import LightCore from '@/components/site/LightCore';
import { HERO_STATS, IMAGES, VERSION } from '@/data/alfa';

const CHIPS = ['100 % en tu ordenador', 'sin cuotas ni cuentas', 'windows + android'];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-10 pt-[80px]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <Image src={IMAGES.hero} alt="" className="block h-full w-full opacity-[0.55]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,16,32,0.55),#0B1020_96%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full px-5 text-center md:px-10">
        <div className="flex flex-col items-center">
          <div className="rise relative w-full max-w-[560px] py-[30px]">
            <LightCore />
            <p className="relative flex flex-wrap items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
              <svg width="34" height="34" viewBox="0 0 32 32" aria-hidden="true">
                <polygon points="16,2 29,9 29,23 16,30 3,23 3,9" fill="none" stroke="#22D3EE" strokeWidth="2" />
                <path d="M10 22 L16 8 L22 22 M12.5 17h7" stroke="#C7D0FF" strokeWidth="2.2" fill="none" />
              </svg>
              registro de propiedad intelectual · {VERSION}
            </p>
            <h1 className="relative mt-3.5 font-heading text-[13vw] font-bold uppercase leading-none tracking-[0.18em] text-white [text-shadow:0_0_40px_#6C5CE7] sm:text-7xl md:text-[7.5rem]">
              ALFA
            </h1>
            <p className="relative mt-3.5 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              por Atlas · una persona con las ideas y una IA que escribe el código
            </p>
          </div>

          <p className="rise relative mt-5 max-w-[640px] text-[19px] text-white" style={{ animationDelay: '0.2s' }}>
            El asistente personal de inteligencia artificial que vive en tu ordenador, no en la nube de nadie.
          </p>
          <p className="rise relative mt-3 max-w-[660px] text-[15px] text-[#aeb8ec]" style={{ animationDelay: '0.3s' }}>
            ALFA te escucha por voz, recuerda lo que le cuentas, controla tu equipo con permiso y vigila su
            seguridad. Razona en tu propio PC, sin cuentas ni suscripciones. No hay empresa detrás: este proyecto
            se financia con donativos y con gente que quiera construirlo a cambio de crédito, no de sueldo.
          </p>

          <div className="rise relative mt-5 flex flex-wrap justify-center gap-2.5" style={{ animationDelay: '0.4s' }}>
            {CHIPS.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[rgba(34,211,238,0.5)] bg-[rgba(34,211,238,0.06)] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-accent"
              >
                {chip}
              </span>
            ))}
          </div>

          <div
            className="rise relative mt-[26px] flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row"
            style={{ animationDelay: '0.5s' }}
          >
            <a href="#donar" className="btn-neon">
              Donar al proyecto →
            </a>
            <a href="#equipo" className="btn-line">
              Quiero formar parte
            </a>
            <a href="#proyecto" className="btn-line">
              Leer el expediente
            </a>
          </div>

          <div className="rise relative mt-[34px] w-full max-w-[640px]" style={{ animationDelay: '0.65s' }}>
            <HeroConsole />
          </div>
        </div>

        <dl
          className="rise relative mt-[50px] grid grid-cols-2 gap-px border border-[rgba(34,211,238,0.4)] bg-[rgba(34,211,238,0.2)] [box-shadow:0_0_40px_-12px_#22D3EE] md:grid-cols-4"
          style={{ animationDelay: '0.8s' }}
        >
          {HERO_STATS.map((s) => (
            <div key={s.label} className="bg-[rgba(15,22,48,0.8)] p-[22px] text-center">
              <dt className="font-heading text-[34px] font-bold tracking-[0.04em] text-white">{s.value}</dt>
              <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.24em] text-accent">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
