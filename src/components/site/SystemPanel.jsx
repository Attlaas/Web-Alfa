import React, { useState } from 'react';
import { Activity, ChevronLeft, ChevronRight } from 'lucide-react';
import PanelLog from '@/components/site/PanelLog';
import { SYSTEM_ALERTS, SYSTEM_STATUS } from '@/data/system';

const FLAG_CLASS = { ok: 'sys-flag-ok', warn: 'sys-flag-warn', info: 'sys-flag-info' };
const FLAG_TEXT = { ok: '[ ok ]', warn: '[ aviso ]', info: '[ info ]' };

export default function SystemPanel() {
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen((v) => !v);

  return (
    <aside className="hidden shrink-0 py-6 pr-5 xl:block" aria-label="Panel de sistema de ALFA">
      <div className="sticky top-20">
        {open ? (
          <div className="panel-win max-h-[calc(100vh-7rem)] w-[320px] overflow-y-auto">
            <div className="log-bar">
              <span className="flex items-center gap-2.5">
                <span className="term-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="log-path">alfa://sistema</span>
              </span>
              <span className="flex items-center gap-3">
                <span className="flex items-center gap-2">
                  <span className="sys-live" aria-hidden="true" />
                  <span className="log-path">en línea</span>
                </span>
                <button
                  type="button"
                  onClick={toggle}
                  aria-label="Ocultar el panel de sistema"
                  className="text-[#8e99d0] transition-colors hover:text-accent"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </span>
            </div>

            <div className="p-4">
              <p className="micro-label flex items-center gap-2">
                <Activity className="h-3.5 w-3.5 text-accent" /> [ estado ]
              </p>
              <ul className="mt-2">
                {SYSTEM_STATUS.map((row) => (
                  <li key={row.label} className="sys-row">
                    <span className="sys-key">{row.label}</span>
                    <span className={row.state === 'ok' ? 'sys-val sys-val-ok' : 'sys-val'}>{row.value}</span>
                  </li>
                ))}
              </ul>

              <p className="micro-label mt-5">[ alertas ]</p>
              <ul className="mt-1">
                {SYSTEM_ALERTS.map((alert) => (
                  <li key={alert.text} className="sys-alert">
                    <span className={`sys-flag ${FLAG_CLASS[alert.level]}`}>{FLAG_TEXT[alert.level]}</span>
                    <span>{alert.text}</span>
                  </li>
                ))}
              </ul>

              <p className="micro-label mt-5">[ registro ]</p>
              <div className="mt-2">
                <PanelLog />
              </div>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={toggle}
            aria-label="Mostrar el panel de sistema"
            className="panel-win flex w-[52px] flex-col items-center gap-3 px-2 py-4 text-[#8e99d0] transition-colors hover:text-accent"
          >
            <span className="sys-live" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">
              sistema
            </span>
            <ChevronLeft className="h-4 w-4" />
          </button>
        )}
      </div>
    </aside>
  );
}
