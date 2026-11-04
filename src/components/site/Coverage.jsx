import React, { useState } from 'react';
import Section from '@/components/site/Section';
import CoverageMap from '@/components/site/CoverageMap';
import CoverageConsole from '@/components/site/CoverageConsole';
import { BASE } from '@/data/coverage';

export default function Coverage() {
  const [selected, setSelected] = useState(BASE);
  const [focus, setFocus] = useState(null);

  const pick = (node) => {
    setSelected(node);
    setFocus({ ...node });
  };

  return (
    <Section
      id="cobertura"
      tag="[ dónde operamos ]"
      title="Una sola base, alcance sin fronteras"
      intro="ALFA no tiene sedes ni oficinas: se escribe, se prueba y se mantiene desde un único punto. El asistente viaja con quien lo descarga, así que su alcance no depende de dónde estemos nosotros. El mapa marca la base real y las zonas donde el programa puede funcionar."
    >
      <div className="grid gap-6 lg:grid-cols-[7fr_5fr]">
        <div className="panel-win p-1.5">
          <CoverageMap selected={selected} focus={focus} onSelect={pick} />
        </div>
        <CoverageConsole selected={selected} onSelect={pick} />
      </div>

      <p className="mt-4 font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-[#8e99d0]">
        base · el único punto real del proyecto &nbsp;//&nbsp; alcance · dónde puede instalarse, sin sedes ni oficinas
      </p>
    </Section>
  );
}
