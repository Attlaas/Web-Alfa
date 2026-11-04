import React from 'react';

export default function SearchResults({ results, activeIndex, onPick }) {
  if (!results.length) {
    return (
      <p className="log-path mt-4">
        sin coincidencias · prueba con «voz», «memoria», «seguridad» o «donativos»
      </p>
    );
  }

  return (
    <ul className="mt-3 max-h-[52vh] overflow-y-auto">
      {results.map((section, i) => (
        <li key={section.id}>
          <a href={`#${section.id}`} onClick={onPick} data-active={i === activeIndex} className="search-hit">
            <span className="search-hit-key">#{section.id}</span>
            <span className="min-w-0">
              <span className="search-hit-title">{section.label}</span>
              <span className="search-hit-desc">{section.tag}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
