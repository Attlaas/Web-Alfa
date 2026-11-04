import React, { useEffect, useState } from 'react';
import { ShieldAlert } from 'lucide-react';
import { TERMS_GATE_POINTS, TERMS_VERSION } from '@/data/terms';

const STORAGE_KEY = 'alfa-legal-aceptado';

export default function TermsGate() {
  const [accepted, setAccepted] = useState(true);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    let stored = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      stored = null;
    }
    setAccepted(stored === TERMS_VERSION);
  }, []);

  useEffect(() => {
    document.body.style.overflow = accepted ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [accepted]);

  if (accepted) return null;

  const accept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, TERMS_VERSION);
    } catch (e) {
      /* modo privado: se acepta solo para esta visita */
    }
    setAccepted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-[rgba(11,16,32,0.95)] backdrop-blur-md">
      <div className="mx-auto flex min-h-full w-full max-w-3xl items-center px-5 py-10">
        <div className="volt-glow form-neon w-full rounded-[10px] border border-[rgba(124,108,240,0.55)] bg-[rgba(30,36,72,0.6)] p-7 md:p-10">
          <div className="flex items-center gap-3">
            <ShieldAlert className="h-6 w-6 text-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
              aviso legal · condiciones de acceso
            </p>
          </div>

          <h1 className="mt-5 font-heading text-[26px] font-bold uppercase leading-[1.1] tracking-[0.06em] text-white md:text-[34px]">
            Antes de entrar, lee esto.
          </h1>
          <p className="mt-4 text-[15px] text-[#aeb8ec]">
            Esta web cuenta, con detalle, un proyecto original que todavía no está en la calle. Para verlo tienes
            que aceptar unas condiciones muy simples, pensadas para que nadie copie el trabajo ni se haga pasar por
            su autor.
          </p>

          <ul className="mt-6 space-y-3.5">
            {TERMS_GATE_POINTS.map((point) => (
              <li key={point} className="flex gap-3 text-[13px] leading-relaxed text-[#aeb8ec]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <label
            htmlFor="terms-accept"
            className="mt-7 flex cursor-pointer items-start gap-3 rounded-[6px] border border-[rgba(124,108,240,0.5)] bg-[#0B1020] p-4 text-[13px] text-[#aeb8ec]"
          >
            <input
              id="terms-accept"
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <span>
              He leído estas condiciones y los términos completos, y me comprometo a respetar la autoría del
              proyecto y a no hacerme pasar por él ni por su autor.
            </span>
          </label>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button type="button" disabled={!checked} onClick={accept} className="btn-neon">
              Acepto y entro
            </button>
            <a
              href={`${import.meta.env.BASE_URL}terminos`}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#9aa6dc] transition-colors hover:text-accent"
            >
              Leer los términos completos
            </a>
          </div>

          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-[#7f8ac0]">
            versión de los términos {TERMS_VERSION} · si no aceptas, no accedas al contenido
          </p>
        </div>
      </div>
    </div>
  );
}
