import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Logo from '@/components/site/Logo';
import { AUTHOR, TERMS_SECTIONS, TERMS_UPDATED, TERMS_VERSION } from '@/data/terms';

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-[rgba(108,92,231,0.5)] bg-[#080c1a]">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-5 md:px-10">
          <Link to="/" aria-label="Volver a la portada">
            <Logo className="h-8" wordClassName="text-base" />
          </Link>
          <Link to="/" className="nav-link flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Volver
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-5 py-14 md:px-10 md:py-20">
        <p className="micro-label text-accent">[ términos y condiciones de uso ]</p>
        <h1 className="mt-3.5 font-heading text-[28px] font-bold uppercase leading-[1.1] tracking-[0.06em] text-white md:text-[40px]">
          Condiciones para ver y usar esta web
        </h1>
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#aeb8ec] md:text-[17px]">
          Estas condiciones son obligatorias: ver el contenido de esta web implica haberlas leído y aceptado. Su
          finalidad es proteger la autoría del proyecto ALFA —sus ideas, su programa, su estética y su nombre— y
          evitar que nadie se haga pasar por su autor.
        </p>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#9aa6dc]">
          versión {TERMS_VERSION} · última actualización: {TERMS_UPDATED} · autor: «{AUTHOR}»
        </p>

        <div className="mt-14 space-y-12">
          {TERMS_SECTIONS.map((section) => (
            <section key={section.id} id={section.id} className="border-t border-[rgba(124,108,240,0.4)] pt-8">
              <h2 className="font-heading text-xl font-bold uppercase tracking-[0.06em] text-white md:text-2xl">
                {section.title}
              </h2>
              <ul className="mt-5 space-y-4">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-[#aeb8ec]">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="panel-win mt-16 p-7">
          <p className="font-heading text-xl font-bold uppercase tracking-[0.06em] text-white">
            ¿Dudas antes de aceptar?
          </p>
          <p className="mt-3 leading-relaxed text-[#aeb8ec]">
            Puedes preguntar lo que quieras antes de dar tus datos: el formulario de voluntariado y el correo de
            contacto de tu candidatura son los canales habilitados para hablar con el autor. Nunca se te pedirá
            dinero, contraseñas ni datos bancarios para colaborar.
          </p>
          <Link to="/" className="btn-neon mt-6">
            <ArrowLeft className="h-4 w-4" /> Volver a la portada
          </Link>
        </div>
      </main>
    </div>
  );
}
