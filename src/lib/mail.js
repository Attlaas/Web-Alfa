// Abre el programa de correo de quien visita la web con un mensaje ya preparado.
export function openMail({ to, subject, body }) {
  const url = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}
