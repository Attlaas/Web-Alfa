import React from 'react';

export default function DonateStats({ total = 0, supporters = 0 }) {
  return (
    <div className="stats-neon">
      <div>
        <b className="block text-[28px] text-white">{total.toLocaleString('es-ES')} €</b>
        <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.24em] text-[#9aa6dc]">
          aportado hasta ahora
        </span>
      </div>
      <div>
        <b className="block text-[28px] text-white">{supporters}</b>
        <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.24em] text-[#9aa6dc]">
          personas que empujan
        </span>
      </div>
    </div>
  );
}
