import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Send } from 'lucide-react';
import VolunteerFormFields from '@/components/site/VolunteerFormFields';
import { CONSENTS, EMPTY_APPLICATION } from '@/data/team';
import { CONTACT_EMAIL } from '@/data/alfa';
import { openMail } from '@/lib/mail';

// Sin servidor propio: la candidatura se prepara como correo dirigido a CONTACT_EMAIL.
// Los archivos (CV y documento) los adjunta la persona en su programa de correo; esta web no los recibe.
export default function VolunteerForm() {
  const [form, setForm] = useState(EMPTY_APPLICATION);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const set = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const missing = [];
    if (!form.full_name.trim()) missing.push('tu nombre');
    if (!form.email.trim()) missing.push('tu correo');
    if (form.motivation.trim().length < 80) missing.push('una carta de presentación con algo más de detalle');
    if (missing.length) {
      setError(`Antes de enviarla falta: ${missing.join(', ')}.`);
      return;
    }
    if (!CONSENTS.every((c) => form[c.key])) {
      setError('Marca las casillas del final: sin ellas no puedo aceptar la candidatura.');
      return;
    }
    if (!CONTACT_EMAIL) {
      setError('El buzón de candidaturas se está mudando a la nueva web. Vuelve en unos días y podrás enviarla desde aquí.');
      return;
    }

    setError('');
    openMail({
      to: CONTACT_EMAIL,
      subject: `[ALFA · Candidatura] ${form.full_name} · ${form.role}`,
      body: [
        form.motivation,
        '',
        '—',
        `Nombre: ${form.full_name}`,
        `Correo: ${form.email}`,
        `Ciudad y país: ${form.location}`,
        `Portafolio: ${form.portfolio_url}`,
        `Puedo ayudar en: ${form.role}`,
        `Disponibilidad: ${form.availability}`,
        '',
        'Adjunto: mi CV y un documento que demuestra que soy una persona real.',
      ].join('\n'),
    });
    setStatus('done');
  };

  if (status === 'done') {
    return (
      <div className="rounded-[8px] border border-[rgba(34,211,238,0.4)] bg-[rgba(34,211,238,0.06)] p-7">
        <CheckCircle2 className="h-7 w-7 text-accent" />
        <h3 className="mt-4 font-heading text-[24px] uppercase tracking-[0.06em] text-white">
          Último paso: adjunta tus dos archivos
        </h3>
        <p className="mt-4 text-[15px] text-[#aeb8ec]">
          Se ha abierto tu programa de correo con la candidatura preparada. Adjunta tu CV y el documento que
          demuestra que eres una persona real, y pulsa «Enviar». Si no se ha abierto, escríbeme a{' '}
          <span className="text-white">{CONTACT_EMAIL}</span>. Leo cada candidatura a mano y te responderé al correo
          que has dejado. Tus documentos quedan bajo confidencialidad y puedes pedir que los borre cuando quieras.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <VolunteerFormFields form={form} set={set} />

      <div className="space-y-1 border-t border-[rgba(124,108,240,0.4)] pt-4">
        {CONSENTS.map((c) => (
          <label key={c.key} htmlFor={`va-${c.key}`} className="consent">
            <input id={`va-${c.key}`} type="checkbox" checked={form[c.key]} onChange={(e) => set(c.key, e.target.checked)} />
            <span className="leading-relaxed">{c.label}</span>
          </label>
        ))}
      </div>

      {error && (
        <p className="flex items-start gap-2 text-[13px] text-destructive">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-neon">
          <Send className="h-4 w-4" /> Preparar candidatura
        </button>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8e99d0]">
          sin sueldo · con crédito por escrito · datos confidenciales
        </span>
      </div>
    </form>
  );
}
