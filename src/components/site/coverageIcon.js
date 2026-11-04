import L from 'leaflet';

export function coverageIcon({ kind, selected = false, delay = 0 }) {
  const isBase = kind === 'base';
  const size = isBase ? (selected ? 22 : 17) : selected ? 15 : 11;
  const classes = [isBase ? 'cov-node-base' : 'cov-node-region', selected ? 'cov-node-on' : '']
    .filter(Boolean)
    .join(' ');

  return L.divIcon({
    className: 'cov-node',
    html: `<span class="${classes}"><span class="cov-ping" style="animation-delay:${delay}s"></span><span class="cov-core"></span></span>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}
