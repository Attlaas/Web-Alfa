import React from 'react';
import { BASE, NODES } from '@/data/coverage';

function coord(node) {
  const lat = `${Math.abs(node.lat).toFixed(2)}° ${node.lat >= 0 ? 'N' : 'S'}`;
  const lng = `${Math.abs(node.lng).toFixed(2)}° ${node.lng >= 0 ? 'E' : 'O'}`;
  return `${lat} · ${lng}`;
}

export default function CoverageConsole({ selected, onSelect }) {
  const node = selected || BASE;
  const isBase = node.kind === 'base';

  return (
    <div className="panel-win flex flex-col">
      <div className="log-bar">
        <span className="term-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="log-path">coverage.log</span>
        <span className="sys-live" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div>
          <div className="sys-row">
            <span className="sys-key">base</span>
            <span className="sys-val sys-val-ok">
              {BASE.city} · {BASE.country}
            </span>
          </div>
          <div className="sys-row">
            <span className="sys-key">nodos</span>
            <span className="sys-val">{NODES.length} activos</span>
          </div>
          <div className="sys-row">
            <span className="sys-key">sedes físicas</span>
            <span className="sys-val">0 — proyecto sin oficinas</span>
          </div>
          <div className="sys-row">
            <span className="sys-key">cobertura</span>
            <span className="sys-val sys-val-ok">mundial</span>
          </div>
        </div>

        <p className="micro-label mt-6">puntos en el mapa</p>
        <ul className="mt-1">
          {NODES.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onSelect(item)}
                data-active={item.id === node.id}
                className="cov-row"
              >
                <span className={`st ${item.kind === 'base' ? 'st-f' : 'st-e'}`}>
                  {item.kind === 'base' ? 'base' : 'alcance'}
                </span>
                <span className="cov-row-name">{item.kind === 'base' ? item.city : item.label}</span>
                <span className="cov-row-coord">{coord(item)}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="qa-answer mt-6">
          <p className="micro-label">{isBase ? 'base de operaciones' : 'punto de cobertura'}</p>
          <p className="mt-1.5 text-[15px] text-white">
            {isBase ? `${node.city}, ${node.country}` : node.label}
          </p>
          <p className="mt-1 font-mono text-[11px] tracking-[0.14em] text-[#8e99d0]">{coord(node)}</p>
          <p className="mt-2 text-[13px] text-[#aeb8ec]">{node.note}</p>
        </div>
      </div>
    </div>
  );
}
