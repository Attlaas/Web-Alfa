import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  const { pathname } = useLocation();
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-lg space-y-6 text-center">
        <p className="micro-label text-accent">[ error 404 ]</p>
        <h1 className="font-heading text-[28px] font-bold uppercase leading-[1.1] tracking-[0.06em] text-white md:text-[40px]">
          Esta ruta no existe
        </h1>
        <p className="font-mono text-[13px] text-[#aeb8ec]">alfa://{pathname.replace(/^\//, '')} · sin registro</p>
        <Link to="/" className="btn-neon">
          Volver a ALFA
        </Link>
      </div>
    </main>
  );
}
