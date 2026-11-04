import React from 'react';

const formatDate = (value) => {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
};

export default function UpdateEntry({ index, update }) {
  const paragraphs = (update.body || '').split('\n').filter((line) => line.trim());

  return (
    <article className="log-neon">
      <div className="log-bar">
        <span className="flex items-center gap-2.5">
          <span className="term-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="log-path">alfa://bitacora/{String(index).padStart(3, '0')}</span>
        </span>
        <span className="flex items-center gap-3">
          {update.tag && <span className="qa-tag">{update.tag}</span>}
          <span className="log-path">{formatDate(update.published_date)}</span>
        </span>
      </div>

      <div className="log-body">
        <h3 className="font-heading text-[19px] font-bold uppercase leading-[1.15] tracking-[0.06em] text-white md:text-[22px]">
          {update.title}
        </h3>
        {paragraphs.map((paragraph, i) => (
          <p key={i} className="mt-3 text-[15px] text-[#aeb8ec]">
            {paragraph}
          </p>
        ))}
        <p className="log-sign mt-4">— Atlas</p>
      </div>
    </article>
  );
}
