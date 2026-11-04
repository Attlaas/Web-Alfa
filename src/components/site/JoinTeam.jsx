import React from 'react';
import { Image } from '@/components/ui/image';
import Section from '@/components/site/Section';
import VolunteerForm from '@/components/site/VolunteerForm';
import { IMAGES } from '@/data/alfa';
import { TEAM_CONDITIONS, TEAM_QUOTE, TEAM_ROLES } from '@/data/team';

export default function JoinTeam() {
  return (
    <Section
      id="equipo"
      tag="[ equipo ]"
      title="Busco gente que construya esto conmigo. No puedo pagarle."
      intro="Todo el dinero que entra por donativos va al desarrollo del proyecto: equipo, créditos de programación, instalador y pruebas. No hay partida para nóminas, así que el equipo es voluntario y su pago es el crédito."
    >
      <div className="mb-5 border-l-[3px] border-primary bg-[rgba(108,92,231,0.1)] p-[26px] text-[19px] text-white">
        «{TEAM_QUOTE}»
        <small className="mt-3 block font-mono text-[12px] tracking-[0.1em] text-accent">Atlas · autor del proyecto</small>
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM_CONDITIONS.map((c) => {
          const Icon = c.icon;
          return (
            <article key={c.title} className="card-neon">
              <Icon className="h-[26px] w-[26px] text-accent" />
              <h3 className="mb-2 mt-3.5 text-[15px] uppercase tracking-[0.12em] text-white">{c.title}</h3>
              <p className="m-0 text-[13px] text-[#aeb8ec]">{c.text}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-[30px] grid gap-[30px] lg:grid-cols-[420px_1fr] lg:items-start">
        <Image
          src={IMAGES.team}
          alt="Manos trabajando en una idea del proyecto"
          className="block aspect-[4/3] w-full overflow-hidden rounded-[10px] border border-[rgba(124,108,240,0.5)] [box-shadow:0_0_50px_-12px_#6C5CE7]"
        />
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">[ lo que hace falta ]</p>
          <div className="mt-3.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {TEAM_ROLES.map((r) => {
              const Icon = r.icon;
              return (
                <article
                  key={r.title}
                  className="rounded-[6px] border border-[rgba(34,211,238,0.4)] bg-[rgba(34,211,238,0.05)] px-4 py-3.5"
                >
                  <span className="flex items-center gap-2 text-[13px] text-white">
                    <Icon className="h-4 w-4 shrink-0 text-accent" />
                    {r.title}
                  </span>
                  <p className="mt-1 text-[12px] leading-relaxed text-[#9aa6dc]">{r.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <div className="form-neon mt-[26px] rounded-[10px] border border-[rgba(124,108,240,0.45)] bg-[rgba(30,36,72,0.5)] p-7">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">[ candidatura ]</p>
        <h3 className="mt-3 font-heading text-[26px] uppercase tracking-[0.06em] text-white">
          Tres cosas, y ninguna es un examen
        </h3>
        <p className="mt-4 max-w-3xl text-[15px] text-[#aeb8ec]">
          Te pido una carta de presentación, tu CV y algo que demuestre que eres quien dices ser. No es
          desconfianza hacia ti: es la forma de evitar estafas, robos y gente que se hace pasar por otra. Con tus
          documentos no haré nada más que comprobar que eres una persona real, y quedan bajo confidencialidad.
        </p>
        <div className="mt-6">
          <VolunteerForm />
        </div>
      </div>
    </Section>
  );
}
