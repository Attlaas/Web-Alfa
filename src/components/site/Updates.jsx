import React, { useState } from 'react';
import Section from '@/components/site/Section';
import UpdateEntry from '@/components/site/UpdateEntry';
import { UPDATES } from '@/data/updates';

const PAGE_SIZE = 4;

// Las entradas de la bitácora viven en src/data/updates.js (antes estaban en la base de datos de Base44).
// Para publicar una nueva, añádela arriba del todo en ese archivo con status 'publicado'.
const PUBLISHED = UPDATES.filter((u) => u.status === 'publicado').sort((a, b) =>
  String(b.published_date).localeCompare(String(a.published_date)),
);

export default function Updates() {
  const [shown, setShown] = useState(PAGE_SIZE);
  const updates = PUBLISHED.slice(0, shown);
  const hasMore = shown < PUBLISHED.length;

  return (
    <Section
      id="novedades"
      tag="[ bitácora ]"
      title="Últimas novedades"
      intro="El diario de a bordo del proyecto: lo que se ha entregado, lo que se está probando y lo que viene. Cada entrada la firma Atlas."
    >
      {updates.length === 0 ? (
        <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#8e99d0]">
          sin novedades registradas todavía
        </p>
      ) : (
        <div className="space-y-5">
          {updates.map((update, i) => (
            <UpdateEntry key={update.id} index={i + 1} update={update} />
          ))}
        </div>
      )}

      {hasMore && (
        <button type="button" className="btn-line mt-6" onClick={() => setShown((n) => n + PAGE_SIZE)}>
          Ver entradas anteriores
        </button>
      )}
    </Section>
  );
}
