import React from 'react';

export default function Logo({ className = 'h-8', wordClassName = 'text-lg', showWord = true }) {
  return (
    <span className="inline-flex items-center gap-3">
      <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
        <polygon points="16,2 29,9 29,23 16,30 3,23 3,9" fill="none" stroke="#22D3EE" strokeWidth="2" />
        <path d="M10 22 L16 8 L22 22 M12.5 17h7" stroke="#C7D0FF" strokeWidth="2.2" fill="none" />
      </svg>
      {showWord && (
        <span className={`font-heading font-bold uppercase tracking-[0.3em] text-white ${wordClassName}`}>Alfa</span>
      )}
    </span>
  );
}
