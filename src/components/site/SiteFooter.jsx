import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@/components/site/Logo';
import { VERSION } from '@/data/alfa';

const BASE = import.meta.env.BASE_URL;

export default function SiteFooter() {
  const { pathname } = useLocation();
  const anchor = (hash) => (pathname === '/' ? hash : `${BASE}${hash}`);

  return (
    <footer className="mt-[90px] border-t border-[rgba(108,92,231,0.5)] bg-[#080c1a] px-5 pb-[30px] pt-[34px] md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Logo className="h-[30px] w-[30px]" wordClassName="text-base" />
          <div className="flex flex-wrap gap-2.5">
            <a href={anchor('#donar')} className="btn-neon">
              Donar al proyecto →
            </a>
            <a href={anchor('#equipo')} className="btn-line">
              Formar parte
            </a>
          </div>
        </div>

        <p className="mt-3.5 max-w-[520px] text-[13px] text-[#8e99d0]">
          Asistente personal de inteligencia artificial para Windows y Android, en fase de desarrollo. Las ideas son
          de su autor, «Atlas»; el código lo escribe una IA junto a él; el equipo es voluntario y su pago es el
          crédito.
        </p>

        <div className="mt-[26px] flex flex-col gap-4 border-t border-[rgba(108,92,231,0.3)] pt-4 font-mono text-[11px] tracking-[0.1em] text-[#7f8ac0] md:flex-row md:items-center md:justify-between">
          <span>© 2026 Atlas · en registro de propiedad intelectual · {VERSION}</span>
          <nav className="flex flex-wrap gap-[18px]">
            <a href={anchor('#proyecto')} className="foot-link">Proyecto</a>
            <a href={anchor('#autor')} className="foot-link">Autor</a>
            <a href={anchor('#equipo')} className="foot-link">Equipo</a>
            <a href={anchor('#avance')} className="foot-link">Avance</a>
            <a href={anchor('#faq')} className="foot-link">Preguntas</a>
            <a href={anchor('#donar')} className="foot-link">Donar</a>
            <Link to="/about" className="foot-link">Quiénes somos</Link>
            <Link to="/contact" className="foot-link">Contacto</Link>
            <Link to="/terminos" className="text-accent transition-colors hover:text-white">
              Términos
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
