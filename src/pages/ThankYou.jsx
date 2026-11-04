import { Link } from 'react-router-dom';

// Página de agradecimiento: se puede poner como «página de regreso» en Ko-fi o PayPal tras donar.
export default function ThankYou() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-lg space-y-6 text-center">
        <p className="micro-label text-accent">[ donativo recibido ]</p>
        <h1 className="font-heading text-[28px] font-bold uppercase leading-[1.1] tracking-[0.06em] text-white md:text-[40px]">
          Gracias por empujar ALFA
        </h1>
        <p className="leading-relaxed text-[#aeb8ec]">
          Tu aporte ya forma parte del desarrollo: equipo para entrenar su modelo, créditos para escribir la
          próxima versión y pruebas en ordenadores reales. El proyecto avanza porque hay gente detrás.
        </p>
        <Link to="/" className="btn-neon">
          Volver a ALFA
        </Link>
      </div>
    </main>
  );
}
