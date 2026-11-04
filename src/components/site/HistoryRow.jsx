import React from 'react';

export default function HistoryRow({ code, milestone }) {
  return (
    <div className="hist-row">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="flex items-center gap-2.5">
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#8e99d0]">hito {code}</span>
          <span className="qa-tag">{milestone.area}</span>
        </span>
        <span className="st st-e">logrado</span>
      </div>

      <h3 className="mt-2.5 font-heading text-[17px] font-bold uppercase leading-[1.2] tracking-[0.05em] text-white md:text-[19px]">
        {milestone.title}
      </h3>
      <p className="mt-2 text-[14px] text-[#aeb8ec]">{milestone.detail}</p>
    </div>
  );
}
