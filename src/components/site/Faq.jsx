import React from 'react';
import Section from '@/components/site/Section';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FAQ } from '@/data/alfa';

export default function Faq() {
  return (
    <Section
      id="faq"
      tag="[ consultas ]"
      title="Atlas responde"
      intro="Las dudas que más se repiten sobre la tecnología, el dinero y para qué existe esta página, contestadas en primera persona por quien está detrás del proyecto."
    >
      <div className="panel-win p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3 border-b border-[rgba(124,108,240,0.4)] pb-4">
          <span className="term-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="micro-label">alfa://consultas · respuestas de atlas</span>
          <span className="st st-e ml-auto">{FAQ.length} preguntas</span>
        </div>

        <Accordion type="single" collapsible className="faq-neon">
          {FAQ.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`} className="border-b border-[rgba(124,108,240,0.35)] last:border-b-0">
              <AccordionTrigger className="gap-3 text-left">
                <span className="flex w-full min-w-0 items-center gap-3">
                  <span className="qa-prompt" aria-hidden="true">
                    ›
                  </span>
                  <span className="qa-index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="min-w-0 flex-1">{item.q}</span>
                  {item.tag && <span className="qa-tag">{item.tag}</span>}
                </span>
              </AccordionTrigger>
              <AccordionContent className="qa-answer">
                <p className="max-w-[780px] text-[15px] text-[#aeb8ec]">{item.a}</p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.24em] text-accent">— respuesta de Atlas</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
