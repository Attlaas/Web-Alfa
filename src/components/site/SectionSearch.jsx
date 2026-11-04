import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import SearchResults from '@/components/site/SearchResults';
import { SECTIONS } from '@/data/sections';

const normalize = (value) => value.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

const matches = (section, query) => {
  const haystack = normalize([section.label, section.tag, section.id, ...section.keywords].join(' '));
  return normalize(query)
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => haystack.includes(term));
};

export default function SectionSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);

  const results = useMemo(() => SECTIONS.filter((section) => matches(section, query)), [query]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    const onShortcut = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener('keydown', onShortcut);
    return () => window.removeEventListener('keydown', onShortcut);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const close = () => {
    setOpen(false);
    setQuery('');
  };

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    close();
  };

  const onKeyDown = (event) => {
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    }
    if (event.key === 'Enter' && results[active]) goTo(results[active].id);
  };

  return (
    <>
      <button
        type="button"
        className="search-trigger"
        onClick={() => setOpen(true)}
        aria-label="Buscar secciones del proyecto"
      >
        <Search className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">buscar</span>
      </button>

      {open && (
        <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Buscar secciones del proyecto">
          <button type="button" className="search-scrim" aria-label="Cerrar la búsqueda" onClick={close} />

          <div className="panel-win search-box">
            <div className="log-bar">
              <span className="flex items-center gap-2.5">
                <span className="term-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="log-path">alfa://consulta</span>
              </span>
              <span className="flex items-center gap-3">
                <span className="log-path">{results.length} secciones</span>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Cerrar la búsqueda"
                  className="text-[#8e99d0] transition-colors hover:text-accent"
                >
                  <X className="h-4 w-4" />
                </button>
              </span>
            </div>

            <div className="p-4">
              <div className="flex items-center gap-3 border-b border-[rgba(124,108,240,0.4)] pb-2">
                <span className="qa-prompt" aria-hidden="true">
                  &gt;
                </span>
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyDown={onKeyDown}
                  className="search-input"
                  placeholder="voz, memoria, donativos, seguridad…"
                  aria-label="Buscar secciones"
                />
              </div>

              <SearchResults results={results} activeIndex={active} onPick={close} />

              <p className="log-path mt-2">↑ ↓ elegir · intro abrir · esc cerrar</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
