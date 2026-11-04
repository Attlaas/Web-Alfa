import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CONTACT_REASONS } from '@/data/contact';

export default function ContactFormFields({ form, set }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="flex flex-col gap-1.5">
        <Label className="field-label" htmlFor="ct-name">
          Tu nombre
        </Label>
        <Input
          id="ct-name"
          value={form.name}
          onChange={(e) => set('name', e.target.value)}
          placeholder="Cómo quieres que te llame"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label className="field-label" htmlFor="ct-email">
          Tu correo
        </Label>
        <Input
          id="ct-email"
          type="email"
          value={form.email}
          onChange={(e) => set('email', e.target.value)}
          placeholder="para poder responderte"
        />
      </div>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <Label className="field-label" htmlFor="ct-reason">
          Motivo del mensaje
        </Label>
        <select id="ct-reason" value={form.reason} onChange={(e) => set('reason', e.target.value)}>
          {CONTACT_REASONS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div className="field-tall flex flex-col gap-1.5 sm:col-span-2">
        <Label className="field-label" htmlFor="ct-message">
          Tu mensaje
        </Label>
        <Textarea
          id="ct-message"
          value={form.message}
          onChange={(e) => set('message', e.target.value)}
          placeholder="Cuéntame lo que necesites con el detalle que quieras. Lo leo yo, no un robot."
        />
      </div>
    </div>
  );
}
