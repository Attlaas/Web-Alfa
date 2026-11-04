export default function Section({ id, tag, title, intro, children, className = '' }) {
  return (
    <section id={id} className={`relative pt-[90px] ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        {(tag || title) && (
          <header className="mb-10 max-w-[760px]">
            {tag && <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">{tag}</p>}
            {title && (
              <h2 className="mt-3.5 font-heading text-[26px] font-bold uppercase leading-[1.1] tracking-[0.06em] text-white md:text-[40px]">
                {title}
              </h2>
            )}
            {intro && <p className="mt-4 text-[15px] text-[#aeb8ec] md:text-[17px]">{intro}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
