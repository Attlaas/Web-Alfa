import React from 'react';

export default function TestimonialEntry({ index, testimonial }) {
  return (
    <article className="log-neon">
      <div className="log-bar">
        <span className="flex items-center gap-2.5">
          <span className="term-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="log-path">alfa://equipo/voz-{String(index).padStart(2, '0')}</span>
        </span>
        <span className="qa-tag">{testimonial.role}</span>
      </div>

      <div className="log-body">
        <p className="qa-answer text-[15px] text-[#aeb8ec]">{testimonial.quote}</p>
        <p className="log-sign mt-5">
          {testimonial.author} · {testimonial.period}
        </p>
      </div>
    </article>
  );
}
