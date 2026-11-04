import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { AVAILABILITY, TEAM_ROLES } from '@/data/team';

export default function VolunteerFormFields({ form, set }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="flex flex-col gap-1.5">
        <Label className="field-label" htmlFor="va-name">Nombre y apellidos</Label>
        <Input
          id="va-name"
          value={form.full_name}
          onChange={(e) => set('full_name', e.target.value)}
          placeholder="Cómo quieres que te llame"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label className="field-label" htmlFor="va-email">Correo de contacto</Label>
        <Input
          id="va-email"
          type="email"
          value={form.email}
          onChange={(e) => set('email', e.target.value)}
          placeholder="para poder responderte"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label className="field-label" htmlFor="va-location">Ciudad y país</Label>
        <Input
          id="va-location"
          value={form.location}
          onChange={(e) => set('location', e.target.value)}
          placeholder="no se publica, solo para situarnos"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label className="field-label" htmlFor="va-link">Portafolio, GitHub o perfil (opcional)</Label>
        <Input
          id="va-link"
          value={form.portfolio_url}
          onChange={(e) => set('portfolio_url', e.target.value)}
          placeholder="https://"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label className="field-label" htmlFor="va-role">En qué puedes ayudar</Label>
        <select id="va-role" value={form.role} onChange={(e) => set('role', e.target.value)}>
          {TEAM_ROLES.map((r) => (
            <option key={r.title} value={r.title}>{r.title}</option>
          ))}
          <option value="Otro (lo cuento en la carta)">Otro (lo cuento en la carta)</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label className="field-label" htmlFor="va-availability">Cuánto tiempo puedes dedicar</Label>
        <select id="va-availability" value={form.availability} onChange={(e) => set('availability', e.target.value)}>
          {AVAILABILITY.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </div>

      <div className="field-tall flex flex-col gap-1.5 sm:col-span-2">
        <Label className="field-label" htmlFor="va-motivation">Carta de presentación</Label>
        <Textarea
          id="va-motivation"
          value={form.motivation}
          onChange={(e) => set('motivation', e.target.value)}
          placeholder="Quién eres, qué sabes hacer, por qué quieres entrar en un proyecto sin sueldo y cuánto tiempo puedes mantener el compromiso."
        />
      </div>

      <p className="text-[12px] leading-relaxed text-[#8e99d0] sm:col-span-2">
        Al pulsar el botón se abre tu programa de correo con la candidatura preparada. Ahí adjuntas tu CV (PDF, DOC o
        DOCX) y un documento que demuestre que eres una persona real (DNI, pasaporte o carné; puedes tapar el número).
        Solo los veo yo, quedan bajo confidencialidad y puedes pedir que los borre cuando quieras.
      </p>
    </div>
  );
}
