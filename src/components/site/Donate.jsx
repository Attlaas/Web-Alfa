import React, { useState } from 'react';
import { ExternalLink, Heart, Lock, ShieldCheck } from 'lucide-react';
import DonateStats from '@/components/site/DonateStats';
import { TIERS, DONATE_URL, DONATION_STATS } from '@/data/alfa';

// Los donativos se hacen en una plataforma externa (Ko-fi, PayPal.me…): esta web no toca
// datos de pago. El enlace se configura en DONATE_URL (src/data/alfa.js).
export default function Donate() {
  const [tier, setTier] = useState(TIERS[1].id);
  const [notice, setNotice] = useState(false);
  const selected = TIERS.find((t) => t.id === tier);

  // PayPal.me admite la cantidad en la propia URL (paypal.me/usuario/10EUR); Ko-fi la elige en su página.
  const donateHref = () => {
    if (!DONATE_URL) return '';
    if (/paypal\.me\//i.test(DONATE_URL)) return `${DONATE_URL.replace(/\/+$/, '')}/${selected.amount}EUR`;
    return DONATE_URL;
  };

  const handleDonation = (event) => {
    if (!DONATE_URL) {
      event.preventDefault();
      setNotice(true);
    }
  };

  return (
    <section id="donar" className="relative pt-[90px]">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="form-neon panel-led mx-auto max-w-[860px] p-7 md:p-[34px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">[ donativo ]</p>
          <h2 className="mt-3.5 font-heading text-[26px] uppercase leading-[1.1] tracking-[0.06em] text-white md:text-[32px]">
            Empuja la próxima versión de ALFA
          </h2>
          <p className="mt-4 text-[15px] text-[#aeb8ec]">
            Es un donativo voluntario y puntual: no es una suscripción y no se cobra nada más después. Elige una
            cantidad orientativa y pasa a la página de donativos segura; los datos de la tarjeta nunca pasan por esta
            web.
          </p>

          <p className="mt-[22px] font-mono text-[11px] uppercase tracking-[0.28em] text-[#9aa6dc]">1 · elige tu aporte</p>
          <div className="mt-3.5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {TIERS.map((t) => (
              <button
                key={t.id}
                type="button"
                data-selected={tier === t.id}
                onClick={() => setTier(t.id)}
                className="tier-neon"
              >
                <b className="block font-mono text-[12px] uppercase tracking-[0.2em] text-white">{t.key}</b>
                <em className="my-1 block text-[22px] font-semibold not-italic text-accent">{t.amount} €</em>
                <span className="text-[12px] text-[#9aa6dc]">{t.text}</span>
              </button>
            ))}
          </div>
          <p className="mt-3 font-mono text-[11px] text-[#8e99d0]">
            En la página de donativos puedes cambiar la cantidad a la que quieras.
          </p>

          <p className="mt-[22px] font-mono text-[11px] uppercase tracking-[0.28em] text-[#9aa6dc]">
            2 · estado del proyecto
          </p>
          <div className="mt-3.5">
            <DonateStats total={DONATION_STATS.total ?? 0} supporters={DONATION_STATS.supporters ?? 0} />
          </div>
          {!DONATION_STATS.supporters && (
            <p className="mt-4 font-mono text-[12px] text-[#8e99d0]">
              todavía no hay donativos registrados: puedes ser la primera persona en empujar el proyecto.
            </p>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={donateHref() || '#donar'}
              target={DONATE_URL ? '_blank' : undefined}
              rel="noopener noreferrer"
              onClick={handleDonation}
              className="btn-neon"
            >
              <Heart className="h-4 w-4" />
              Donar {selected.amount} €
              {DONATE_URL && <ExternalLink className="h-3.5 w-3.5" />}
            </a>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8e99d0]">
              pago seguro externo · sin suscripción ni cargos posteriores
            </span>
          </div>

          {notice && (
            <p className="mt-3 font-mono text-[12px] text-destructive">
              Los donativos vuelven en unos días: estoy cambiando la plataforma de pago. Gracias por querer empujar
              ALFA; vuelve pronto y podrás donar desde aquí.
            </p>
          )}

          <ul className="mt-5 flex flex-wrap gap-5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#9aa6dc]">
            <li className="flex items-center gap-2">
              <Lock className="h-3.5 w-3.5 text-accent" /> la tarjeta no pasa por esta web
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 text-accent" /> sin suscripción ni cargos posteriores
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
