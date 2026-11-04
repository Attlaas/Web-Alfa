import React from 'react';

export default function CtaBand() {
  return (
    <section className="pt-[70px]">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="grid gap-px border border-[rgba(124,108,240,0.5)] bg-[rgba(124,108,240,0.5)] md:grid-cols-2">
          <article className="bg-[#0B1020] p-7 md:p-9">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">[ apoyar ]</p>
            <h2 className="mt-3.5 font-heading text-[26px] font-bold uppercase leading-[1.1] tracking-[0.06em] text-white">
              Que la próxima versión exista antes
            </h2>
            <p className="mt-4 text-[15px] text-[#aeb8ec]">
              Donativo puntual, sin suscripción y sin contrapartidas. Cada aporte va al equipo con el que se entrena
              el modelo, a los créditos con los que se escribe el código y a las pruebas en equipos reales.
            </p>
            <a href="#donar" className="btn-neon mt-6">
              Donar al proyecto →
            </a>
          </article>

          <article className="bg-[#0B1020] p-7 md:p-9">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">[ construir ]</p>
            <h2 className="mt-3.5 font-heading text-[26px] font-bold uppercase leading-[1.1] tracking-[0.06em] text-white">
              O entra en el equipo y firma tu crédito
            </h2>
            <p className="mt-4 text-[15px] text-[#aeb8ec]">
              Busco voluntarios para programar, diseñar, probar, documentar, traducir y difundir. Sin sueldo, con el
              compromiso por delante y el reconocimiento por escrito.
            </p>
            <a href="#equipo" className="btn-line mt-6">
              Quiero formar parte
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
