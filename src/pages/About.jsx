import React from 'react';
import { Link } from 'react-router-dom';
import PageShell from '@/components/site/PageShell';
import { VERSION } from '@/data/alfa';

const FACTS = [
  { label: 'plataformas', value: 'Windows + Android' },
  { label: 'motor', value: 'modelo propio en tu equipo' },
  { label: 'cuentas o cuotas', value: 'ninguna' },
  { label: 'versión', value: VERSION },
];

export default function About() {
  return (
    <PageShell>
      <section className="mx-auto w-full max-w-4xl px-5 py-16 md:px-10 md:py-24">
        <p className="micro-label">[ quiénes somos ]</p>
        <h1 className="mt-3.5 font-heading text-[30px] font-bold uppercase leading-[1.1] tracking-[0.06em] text-white md:text-[46px]">
          Qué es ALFA y quién lo construye
        </h1>
        <p className="mt-5 text-[17px] text-[#aeb8ec]">
          ALFA es un asistente personal de inteligencia artificial que vive en tu ordenador, no en la nube de nadie.
        </p>

        <div className="mt-9 space-y-5 text-[15px] leading-relaxed text-[#aeb8ec]">
          <p>
            Se instala en un equipo con Windows y se queda ahí: aparece en una ventana flotante sobre tus programas,
            arranca con el sistema y atiende órdenes por voz —basta empezar diciendo «Alfa»— o por escrito. Responde en
            pantalla y con voz sintetizada, recuerda lo que le cuentas, controla el equipo cuando le das permiso y
            vigila su propia seguridad. Razona con un modelo de lenguaje de pesos abiertos que se ejecuta en tu propio
            PC, así que funciona sin cuentas, sin suscripciones y sin mandar tus conversaciones a un servidor ajeno.
            Existe además una versión para Android sincronizada con el ordenador.
          </p>
          <p>
            Está pensado para quien quiere un asistente de verdad sin entregar sus datos ni pagar cada mes: gente que
            trabaja sola, quien prefiere hablar antes que tocar menús, quien guarda documentos que no deberían salir de
            casa. No hace falta saber programar: se instala, se habla y se usa.
          </p>
          <p>
            Lo construye una sola persona, «Atlas», que pone las ideas, el diseño y las pruebas, junto a una IA que
            escribe el código a su lado. No hay empresa detrás ni inversores: el proyecto avanza con donativos
            voluntarios y busca voluntarios que quieran colaborar a cambio de crédito, no de sueldo. Está en beta
            cerrada, con más de veinte versiones entregadas, y el código fuente y el logotipo están en trámite de
            registro como obra de programa de ordenador.
          </p>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-px border border-[rgba(34,211,238,0.4)] bg-[rgba(34,211,238,0.2)] md:grid-cols-4">
          {FACTS.map((fact) => (
            <div key={fact.label} className="bg-[rgba(15,22,48,0.8)] p-5">
              <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">{fact.label}</dt>
              <dd className="mt-2 text-[14px] text-white">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/" className="btn-neon">
            Ver el proyecto completo →
          </Link>
          <Link to="/contact" className="btn-line">
            Escribir a Atlas
          </Link>
          <Link to="/terminos" className="btn-line">
            Términos y condiciones
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
