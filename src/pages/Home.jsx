import React from 'react';
import TermsGate from '@/components/site/TermsGate';
import SiteHeader from '@/components/site/SiteHeader';
import Hero from '@/components/site/Hero';
import Marquee from '@/components/site/Marquee';
import Capabilities from '@/components/site/Capabilities';
import UnderTheHood from '@/components/site/UnderTheHood';
import HumanAi from '@/components/site/HumanAi';
import JoinTeam from '@/components/site/JoinTeam';
import FundingUse from '@/components/site/FundingUse';
import Roadmap from '@/components/site/Roadmap';
import StatsPanel from '@/components/site/StatsPanel';
import CounterBand from '@/components/site/CounterBand';
import Updates from '@/components/site/Updates';
import Donate from '@/components/site/Donate';
import Faq from '@/components/site/Faq';
import Contact from '@/components/site/Contact';
import CtaBand from '@/components/site/CtaBand';
import SiteFooter from '@/components/site/SiteFooter';
import SystemPanel from '@/components/site/SystemPanel';
import HistoryLog from '@/components/site/HistoryLog';
import Coverage from '@/components/site/Coverage';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TermsGate />
      <SiteHeader />
      <div className="flex">
        <div className="min-w-0 flex-1">
          <main>
            <Hero />
            <Marquee />
            <section id="proyecto" className="relative pt-[90px]">
              <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
                <div className="grid gap-12 lg:grid-cols-[4fr_8fr]">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">[ el proyecto ]</p>
                    <h2 className="mt-3.5 font-heading text-[26px] font-bold uppercase leading-[1.1] tracking-[0.06em] text-white md:text-[40px]">
                      Un asistente que no pide permiso a ninguna nube
                    </h2>
                  </div>
                  <div className="lg:columns-2 lg:gap-9">
                    <p className="mb-4 text-[15px] text-[#aeb8ec]">
                      ALFA se instala en un ordenador con Windows y se queda ahí. Vive en una ventana flotante que se
                      superpone a tus programas, arranca con el sistema y atiende órdenes por voz —empezando por la
                      palabra «Alfa»— o por escrito. Responde en pantalla y con una voz femenina realista que se genera
                      en tu propio PC, mientras su ojo se anima al ritmo de lo que dice.
                    </p>
                    <p className="mb-4 text-[15px] text-[#aeb8ec]">
                      Razona con un modelo de lenguaje de pesos abiertos que se ejecuta en tu propio equipo, así que
                      funciona sin cuentas ni servicios de pago. Su estética es una sala de mando: consola oscura,
                      marcos hexagonales, los tres módulos Lógica, Cautela e Intuición y rótulos en japonés. Todo lo que
                      se ve es original del programa.
                    </p>
                    <p className="text-[15px] text-[#aeb8ec]">
                      Está en trámite de registro como obra de programa de ordenador, con el código fuente completo y su
                      logotipo. Es un proyecto vivo, en beta cerrada, con veintiocho versiones entregadas y una versión
                      para Android sincronizada con el PC.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <Capabilities />
            <UnderTheHood />
            <HumanAi />
            <JoinTeam />
            <FundingUse />
            <CounterBand />
            <Roadmap />
            <HistoryLog />
            <Coverage />
            <Updates />
            <StatsPanel />
            <Donate />
            <Faq />
            <Contact />
            <CtaBand />
          </main>
          <SiteFooter />
        </div>
        <SystemPanel />
      </div>
    </div>
  );
}
