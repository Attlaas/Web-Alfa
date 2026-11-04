import React from 'react';
import Section from '@/components/site/Section';
import TestimonialEntry from '@/components/site/TestimonialEntry';
import { TESTIMONIALS } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <Section
      id="testimonios"
      tag="[ voces ]"
      title="Quienes ya trabajan en ALFA lo cuentan"
      intro="Comentarios de voluntarios del equipo sobre lo que supone colaborar en el proyecto. Ninguno cobra: su pago es el crédito por escrito y el trabajo dentro del programa."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {TESTIMONIALS.map((testimonial, i) => (
          <TestimonialEntry key={testimonial.id} index={i + 1} testimonial={testimonial} />
        ))}
      </div>

      <p className="log-path mt-6">
        firmas con iniciales · identidad de los voluntarios bajo confidencialidad
      </p>
    </Section>
  );
}
