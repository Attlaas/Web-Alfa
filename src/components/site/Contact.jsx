import React from 'react';
import Section from '@/components/site/Section';
import ContactForm from '@/components/site/ContactForm';

export default function Contact() {
  return (
    <Section
      id="contacto"
      tag="[ contacto ]"
      title="Escribe directamente a Atlas"
      intro="Dudas, sugerencias, fallos que hayas visto o ganas de arrimar el hombro: este canal llega a mi correo y lo leo yo, sin intermediarios."
    >
      <div className="panel-win overflow-hidden">
        <div className="log-bar">
          <span className="flex items-center gap-2.5">
            <span className="term-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="log-path">alfa://consola/mensaje</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="sys-live" aria-hidden="true" />
            <span className="log-path">canal abierto</span>
          </span>
        </div>

        <div className="p-5 md:p-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
