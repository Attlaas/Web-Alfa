import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Send } from 'lucide-react';
import ContactFormFields from '@/components/site/ContactFormFields';
import { EMPTY_MESSAGE } from '@/data/contact';
import { CONTACT_EMAIL } from '@/data/alfa';
import { openMail } from '@/lib/mail';

// Sin servidor propio: el mensaje se prepara en el programa de correo de quien escribe,
// dirigido a CONTACT_EMAIL (src/data/alfa.js). No se guarda nada en esta web.
export default function ContactForm() {
  const [form, setForm] = useState(EMPTY_MESSAGE);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const set = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const missing = [];
    if (!form.name.trim()) missing.push('tu nombre');
    if (!form.email.trim()) missing.push('tu correo');
    if (form.message.trim().length < 10) missing.push('un mensaje con algo más de detalle');
    if (missing.length) {
      setError(`Antes de enviarlo falta: ${missing.join(', ')}.`);
      return;
    }
    if (!form.consent) {
      setError('Marca la casilla del final: necesito tu permiso para usar tu correo y responderte.');
      return;
    }
    if (!CONTACT_EMAIL) {
      setError('El buzón de contacto se está mudando a la nueva web. Vuelve en unos días y podrás escribirme desde aquí.');
      return;
    }

    setError('');
    openMail({
      to: CONTACT_EMAIL,
      subject: `[ALFA · ${form.reason}] ${form.name}`,
      body: `${form.message}\n\n—\nNombre: ${form.name}\nCorreo para responder: ${form.email}\nMotivo: ${form.reason}`,
    });
    setStatus('done');
  };

  if (status === 'done') {
    return (
      <div className="rounded-[8px] border border-[rgba(34,211,238,0.4)] bg-[rgba(34,211,238,0.06)] p-7">
        <CheckCircle2 className="h-7 w-7 text-accent" />
        <h3 className="mt-4 font-heading text-[24px] uppercase tracking-[0.06em] text-white">Ya casi está</h3>
        <p className="mt-4 text-[15px] text-[#aeb8ec]">
          Se ha abierto tu programa de correo con el mensaje preparado: solo falta pulsar «Enviar». Si no se ha
          abierto, escríbeme directamente a <span className="text-white">{CONTACT_EMAIL}</span>. Te responderé
          normalmente en un par de días, porque esto lo llevo yo solo con la ayuda de ALFA.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form-neon space-y-5">
      <ContactFormFields form={form} set={set} />

      <label htmlFor="ct-consent" className="consent">
        <input
          id="ct-consent"
          type="checkbox"
          checked={form.consent}
          onChange={(e) => set('consent', e.target.checked)}
        />
        <span className="leading-relaxed">
          Acepto que uses mi correo solo para responderme. No se publica ni se comparte con nadie.
        </span>
      </label>

      {error && (
        <p className="flex items-start gap-2 text-[13px] text-destructive">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-neon">
          <Send className="h-4 w-4" /> Preparar mensaje
        </button>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8e99d0]">
          se abre tu correo · llega a Atlas · respuesta personal
        </span>
      </div>
    </form>
  );
}
