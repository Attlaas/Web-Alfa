import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@/components/site/Logo';
import SectionSearch from '@/components/site/SectionSearch';
import { VERSION } from '@/data/alfa';

const LINKS = [
  { href: '#proyecto', label: 'Proyecto' },
  { href: '#capaz', label: 'Capacidades' },
  { href: '#motor', label: 'Por dentro' },
  { href: '#autor', label: 'Autor' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#avance', label: 'Avance' },
  { href: '#novedades', label: 'Novedades' },
  { href: '#faq', label: 'Preguntas' },
];

const PAGES = [
  { to: '/about', label: 'Quiénes somos' },
  { to: '/contact', label: 'Contacto' },
];

const BASE = import.meta.env.BASE_URL;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const anchor = (hash) => (pathname === '/' ? hash : `${BASE}${hash}`);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(108,92,231,0.35)] bg-[rgba(11,16,32,0.8)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 md:px-10">
        <a href={anchor('#top')} className="flex items-center gap-3" aria-label="ALFA, inicio">
          <Logo className="h-[30px] w-[30px]" wordClassName="text-base" />
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-[#7f8ac0] xl:inline">
            {VERSION}
          </span>
        </a>

        <nav className="hidden items-center gap-[22px] lg:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={anchor(l.href)} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <SectionSearch />
          <a href={anchor('#donar')} className="btn-neon inline-flex !px-3 sm:!px-5">
            Donar
          </a>
          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-[#9aa6dc] transition-colors hover:text-accent lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-[rgba(108,92,231,0.35)] bg-[rgba(11,16,32,0.95)] px-5 py-4 backdrop-blur-xl lg:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={anchor(l.href)}
              onClick={() => setOpen(false)}
              className="nav-link block py-3"
            >
              {l.label}
            </a>
          ))}
          <a
            href={anchor('#donar')}
            onClick={() => setOpen(false)}
            className="nav-link block border-t border-[rgba(108,92,231,0.35)] py-3 text-accent"
          >
            Donar al proyecto
          </a>
          {PAGES.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              onClick={() => setOpen(false)}
              className="nav-link block border-t border-[rgba(108,92,231,0.35)] py-3 text-accent"
            >
              {p.label}
            </Link>
          ))}
          <Link
            to="/terminos"
            onClick={() => setOpen(false)}
            className="nav-link block border-t border-[rgba(108,92,231,0.35)] py-3 text-accent"
          >
            Términos y condiciones
          </Link>
        </nav>
      )}
    </header>
  );
}
