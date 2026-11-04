import React from 'react';
import { Link } from 'react-router-dom';
import PageShell from '@/components/site/PageShell';
import ContactForm from '@/components/site/ContactForm';

export default function Contact() {
  return (
    <PageShell>
      <section className="mx-auto w-full max-w-5xl px-5 py-16 md:px-10 md:py-24">
        <p className="micro-label">[ contacto ]</p>
        <h1 className="mt-3.5 font-heading text-[30px] font-bold uppercase leading-[1.1] tracking-[0.06em] text-white md:text-[46px]">
          Escribir a Atlas
        </h1>
        <p className="mt-5 max-w-[640px] text-[17px] text-[#aeb8ec]">
          Dudas, sugerencias, errores o ganas de colaborar: el mensaje llega directo a Atlas y la respuesta va al
          correo que dejes. Esto lo lleva una persona con la ayuda de ALFA, así que puede tardar un par de días.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[7fr_5fr]">
          <div className="panel-win p-6 md:p-8">
            <ContactForm />
          </div>

          <div className="space-y-4">
            <div className="card-neon">
              <p className="micro-label">canal</p>
              <p className="mt-2 text-[15px] text-white">Correo directo</p>
              <p className="mt-2 text-[13px] text-[#aeb8ec]">
                El formulario prepara el mensaje en tu propio programa de correo. Esta web no guarda nada, y tu
                correo no se publica ni se comparte con nadie.
              </p>
            </div>
            <div className="card-neon">
              <p className="micro-label">antes de escribir</p>
              <p className="mt-2 text-[13px] text-[#aeb8ec]">
                Las dudas más repetidas están resueltas en el proyecto y, si lo que quieres es colaborar, hay una
                sección con las condiciones del voluntariado.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href={`${import.meta.env.BASE_URL}#faq`} className="btn-line">
                  Preguntas frecuentes
                </a>
                <a href={`${import.meta.env.BASE_URL}#equipo`} className="btn-line">
                  Voluntariado
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
