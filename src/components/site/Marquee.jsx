import React from 'react';

const ITEMS = [
  '100 % en tu ordenador',
  'sin cuotas ni cuentas',
  'voz propia',
  'memoria permanente',
  'guardián de seguridad',
  'windows + android',
  'una persona y una IA',
  'financiado con donativos',
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-[rgba(108,92,231,0.4)] bg-[rgba(108,92,231,0.08)] py-3.5">
      <div className="mq-track flex w-max items-center whitespace-nowrap">
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-[26px] pr-[26px] font-mono text-[11px] uppercase tracking-[0.28em] text-[#9aa6dc]"
          >
            {item}
            <i className="block h-1.5 w-1.5 rotate-45 bg-accent" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
