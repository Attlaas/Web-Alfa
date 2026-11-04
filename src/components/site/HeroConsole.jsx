import React from 'react';
import { HERO_CONSOLE } from '@/data/alfa';

export default function HeroConsole() {
  return (
    <div className="panel-win w-full text-left">
      <div className="flex items-center justify-between border-b border-[rgba(124,108,240,0.4)] px-4 py-[11px]">
        <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#9aa6dc]">
          consola · vista estilizada
        </span>
        <span className="flex items-center" aria-hidden="true">
          <span className="ml-1.5 h-2 w-2 rounded-full bg-[#3a4272]" />
          <span className="ml-1.5 h-2 w-2 rounded-full bg-[#3a4272]" />
          <span className="ml-1.5 h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_#22D3EE]" />
        </span>
      </div>

      <div className="space-y-3.5 p-5 font-mono text-[13px] leading-relaxed">
        {HERO_CONSOLE.map((turn) => (
          <div key={turn.prompt} className="text-white">
            <p>
              <i className="not-italic text-accent">&gt; </i>
              {turn.prompt}
            </p>
            {turn.lines.map((line) => (
              <p key={line} className="pl-4 text-[#9aa6dc]">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="border-t border-[rgba(124,108,240,0.4)] px-4 py-[11px] font-mono text-[11px] uppercase tracking-[0.2em] text-[#7f8ac0]">
        lógica · cautela · intuición
      </div>
    </div>
  );
}
