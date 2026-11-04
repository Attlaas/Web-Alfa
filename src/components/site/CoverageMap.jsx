import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { NODES, MAP_SOURCE } from '@/data/coverage';
import { coverageIcon } from '@/components/site/coverageIcon';

function MapFocus({ node }) {
  const map = useMap();

  useEffect(() => {
    if (node) {
      map.flyTo([node.lat, node.lng], node.kind === 'base' ? 5 : 3, { duration: 1.1 });
    }
  }, [node, map]);

  return null;
}

export default function CoverageMap({ selected, focus, onSelect }) {
  return (
    <MapContainer
      center={[24, -6]}
      zoom={2}
      minZoom={2}
      maxZoom={7}
      scrollWheelZoom={false}
      worldCopyJump
      className="cov-map"
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution={MAP_SOURCE}
      />
      <MapFocus node={focus} />

      {NODES.map((node, index) => (
        <Marker
          key={node.id}
          position={[node.lat, node.lng]}
          icon={coverageIcon({
            kind: node.kind,
            selected: selected?.id === node.id,
            delay: index * 0.6,
          })}
          eventHandlers={{ click: () => onSelect(node) }}
        >
          <Tooltip direction="top" offset={[0, -12]} opacity={1}>
            <span className="cov-tip">
              {node.kind === 'base' ? `base · ${node.city}` : `cobertura · ${node.label}`}
            </span>
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}
