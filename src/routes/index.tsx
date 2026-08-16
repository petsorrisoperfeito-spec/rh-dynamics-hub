import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpenCheck,
  Clock,
  Handshake,
  Lightbulb,
  MessagesSquare,
  MonitorSmartphone,
  Presentation,
  ShieldCheck,
  Sparkles,
  Users,
  Layers,
  CalendarCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaButton, Check, Reveal, SectionLabel, SectionTitle } from "@/components/landing/parts";
import { Countdown } from "@/components/landing/Countdown";
import {
  faq,
  footer,
  guarantee,
  imgMockupBonus,
  imgMockupMain,
  imgTeam,
  offer,
  vsl,
} from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "+500 Dinâmicas Prontas para RH | Certificado + Bônus" },
      {
        name: "description",
        content:
          "Mais de 500 dinâmicas prontas para treinamentos, integrações e reuniões de equipe. Certificado de conclusão e bônus inclusos. Acesso digital imediato.",
      },
      { property: "og:title", content: "+500 Dinâmicas Prontas para RH | Certificado + Bônus" },
      {
        property: "og:description",
        content:
          "Dinâmicas prontas para aplicar em treinamentos, integrações e reuniões, sem perder horas criando tudo do zero.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const heroBenefits = [
  "Mais de 500 dinâmicas prontas",
  "Aplicação rápida e prática",
  "Ideal para treinamentos, reuniões e integração",
  "Certificado de Conclusão incluso",
  "Bônus exclusivos",
];

const deliverables = [
  {
    icon: Layers,
    title: "+500 Dinâmicas Prontas para RH",
    text: "Dinâmicas organizadas para diferentes situações, ideais para treinamentos, integração, reuniões, comunicação, trabalho em equipe e desenvolvimento de pessoas.",
  },
  {
    icon: Clock,
    title: "Aplicação Prática",
    text: "Conteúdos prontos para você consultar e aplicar sem precisar passar horas planejando cada atividade.",
  },
  {
    icon: MonitorSmartphone,
    title: "Acesso Digital",
    text: "Tenha seus materiais sempre à mão para consultar quando precisar, pelo celular, tablet ou computador.",
  },
  {
    icon: CalendarCheck,
    title: "Para Diferentes Momentos",
    text: "Use as dinâmicas em integrações, treinamentos, reuniões, atividades de equipe e outros momentos do dia a dia do RH.",
  },
];

const benefits = [
  { icon: Clock, text: "Economize tempo no planejamento" },
  { icon: BookOpenCheck, text: "Tenha atividades prontas para diferentes situações" },
  { icon: Presentation, text: "Torne treinamentos mais participativos" },
  { icon: Users, text: "Estimule interação e trabalho em equipe" },
  { icon: Handshake, text: "Facilite reuniões e integrações" },
  { icon: Lightbulb, text: "Tenha novas ideias sempre que precisar" },
];

const bonuses = [
  {
    tag: "Bônus 1",
    title: "Certificado de Conclusão",
    text: "Receba seu certificado de conclusão para registrar sua participação e capacitação no conteúdo.",
  },
  {
    tag: "Bônus 2",
    title: "Manual de Gestão de Recursos Humanos",
    text: "Um material prático para ampliar seus conhecimentos e ter mais suporte na rotina de gestão de pessoas.",
  },
  {
    tag: "Bônus 3",
    title: "Como Melhorar a Comunicação em Público (Livre-se da Timidez)",
    text: "Aprenda estratégias para se comunicar com mais segurança, controlar a timidez e transmitir suas ideias com mais clareza e confiança.",
  },
];

const packageItems = [
  "+500 Dinâmicas Prontas para RH",
  "Certificado de Conclusão",
  "Manual de Gestão de Recursos Humanos",
  "Como Melhorar a Comunicação em Público",
  "Acesso digital aos materiais",
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      {/* 1. BARRA DE DESTAQUE */}
      <div className="bg-brand-gradient px-4 py-2.5 text-center">
        <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-brand-foreground sm:text-sm">
          🔥 Oferta especial para profissionais de RH
        </p>
      </div>

      {/* 2. HERO */}
      <header className="bg-surface-gradient relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal/10 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:py-20">
          <div>
            <Reveal>
              <SectionLabel>Conteúdo prático para RH</SectionLabel>
              <h1 className="text-balance-tight mt-5 text-3xl font-extrabold leading-[1.1] text-brand sm:text-5xl">
                +500 Dinâmicas Prontas para RH{" "}
                <span className="text-teal">Com Certificado Incluso</span> + Bônus
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Tenha dinâmicas prontas para aplicar em treinamentos, integrações, reuniões e
                atividades de equipe, sem perder horas criando tudo do zero.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {heroBenefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-sm font-semibold text-brand sm:text-base"
                  >
                    <Check />
                    <span className="min-w-0">{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200} className="mt-9">
              <CtaButton pulse>Quero acessar agora</CtaButton>
              <p className="mt-3 text-xs text-muted-foreground sm:text-sm">
                🔒 Acesso digital • Pagamento seguro • Conteúdo pronto para usar
              </p>
            </Reveal>
          </div>

          <Reveal delay={100} className="relative">
            <div className="relative rounded-3xl bg-card p-3 shadow-card ring-1 ring-border">
              <img
                src={imgMockupMain}
                alt="Mockup do material +500 Dinâmicas Prontas para RH em tablet, manual impresso e cartões em PDF"
                width={1200}
                height={912}
                className="h-auto w-full rounded-2xl"
              />
            </div>
          </Reveal>
        </div>
      </header>

      {/* 3. VSL */}
      <section className="bg-brand-gradient px-5 py-12 sm:py-16" id="vsl">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-foreground sm:text-base">
              ▶️ Assista ao vídeo e veja tudo o que você vai receber
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-6">
            <div className="overflow-hidden rounded-3xl border border-brand-foreground/15 bg-brand-foreground/5 shadow-card">
              <div className="relative aspect-video w-full">
                {vsl.embedUrl ? (
                  <iframe
                    src={vsl.embedUrl}
                    title="Vídeo de apresentação do pacote +500 Dinâmicas Prontas para RH"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 h-full w-full border-0"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center gap-3 p-6 text-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-cta text-2xl text-cta-foreground shadow-cta">
                      ▶
                    </span>
                    <p className="text-sm font-semibold text-brand-foreground/80">
                      Espaço reservado para a VSL
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
          <Reveal delay={160} className="mt-8 flex flex-col items-center">
            <CtaButton>Quero acessar agora</CtaButton>
          </Reveal>
        </div>
      </section>

      {/* 4. O QUE VOCÊ VAI RECEBER */}
      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Conteúdo do pacote</SectionLabel>
            <SectionTitle className="mt-4">O que você vai receber</SectionTitle>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Um pacote completo de materiais práticos para facilitar sua rotina no RH e ajudar você
              a tornar treinamentos, reuniões e atividades com equipes muito mais dinâmicos e
              envolventes.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {deliverables.map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <article className="h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-card sm:p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-teal">
                    <d.icon className="h-6 w-6" strokeWidth={1.8} aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-brand sm:text-xl">{d.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {d.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BENEFÍCIOS */}
      <section className="bg-surface-gradient border-y border-border px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionTitle>Mais praticidade para a sua rotina de RH</SectionTitle>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.text} delay={i * 70}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-shadow duration-200 hover:shadow-card">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal/10 text-teal">
                    <b.icon className="h-5 w-5" strokeWidth={1.9} aria-hidden />
                  </span>
                  <p className="min-w-0 pt-1.5 text-sm font-semibold leading-snug text-brand sm:text-base">
                    {b.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="mx-auto mt-10 max-w-3xl rounded-3xl border border-teal/20 bg-card p-6 text-center text-base leading-relaxed text-brand shadow-soft sm:text-lg">
              Em vez de começar cada treinamento ou atividade do zero, tenha um acervo completo de
              dinâmicas prontas para consultar quando precisar.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6. DESTAQUE DO PRODUTO */}
      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <SectionLabel>Acervo completo</SectionLabel>
            <SectionTitle className="mt-4">
              Mais de 500 dinâmicas prontas para você usar
            </SectionTitle>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Uma coleção completa para você encontrar rapidamente uma dinâmica adequada para
              diferentes objetivos e momentos com sua equipe.
            </p>
            <ul className="mt-6 grid gap-3">
              {[
                "Integração de novos colaboradores",
                "Treinamentos e workshops internos",
                "Reuniões de equipe mais participativas",
                "Comunicação, liderança e trabalho em equipe",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-brand sm:text-base">
                  <Check />
                  <span className="min-w-0">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CtaButton>Quero ter acesso às +500 dinâmicas</CtaButton>
            </div>
          </Reveal>

          <Reveal delay={100} className="order-1 lg:order-2">
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-6 rounded-[2.5rem] bg-teal/10 blur-2xl"
              />
              <img
                src={imgTeam}
                alt="Equipe de profissionais em roda durante uma dinâmica de treinamento corporativo"
                width={1408}
                height={1008}
                loading="lazy"
                className="relative h-auto w-full rounded-3xl object-cover shadow-card ring-1 ring-border"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. BÔNUS */}
      <section className="bg-brand-gradient px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-cta px-4 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-cta-foreground">
              <Sparkles className="h-3.5 w-3.5" aria-hidden /> Bônus inclusos
            </span>
            <SectionTitle invert className="mt-5">
              E ainda tem mais...
            </SectionTitle>
            <p className="mt-4 text-base leading-relaxed text-brand-foreground/70">
              Além das +500 Dinâmicas Prontas para RH, você também recebe estes bônus:
            </p>
          </Reveal>

          <Reveal delay={80} className="mx-auto mt-10 max-w-3xl">
            <img
              src={imgMockupBonus}
              alt="Mockups dos bônus: certificado de conclusão, manual de gestão de recursos humanos e material de comunicação em público"
              width={1200}
              height={800}
              loading="lazy"
              className="h-auto w-full"
            />
          </Reveal>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {bonuses.map((b, i) => (
              <Reveal key={b.tag} delay={i * 90}>
                <article className="h-full rounded-3xl border border-brand-foreground/12 bg-brand-foreground/8 p-6 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 sm:p-7">
                  <span className="inline-flex rounded-full bg-cta/90 px-3 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-cta-foreground">
                    {b.tag}
                  </span>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-brand-foreground sm:text-xl">
                    {b.title} <span aria-hidden>✅</span>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-foreground/70 sm:text-base">
                    {b.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. VALOR */}
      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <SectionLabel>Pacote completo</SectionLabel>
            <SectionTitle className="mt-4">Um pacote completo para facilitar sua rotina</SectionTitle>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Tudo reunido em um único pacote para você ter mais praticidade na hora de preparar
              treinamentos, reuniões, integrações e atividades com equipes.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-9 grid gap-3 text-left sm:grid-cols-2">
            {[
              { icon: Layers, label: "+500 Dinâmicas Prontas para RH" },
              { icon: BookOpenCheck, label: "+ Certificado de Conclusão" },
              { icon: Users, label: "+ Manual de Gestão de Recursos Humanos" },
              { icon: MessagesSquare, label: "+ Como Melhorar a Comunicação em Público" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-teal">
                  <item.icon className="h-5 w-5" strokeWidth={1.9} aria-hidden />
                </span>
                <p className="min-w-0 text-sm font-bold text-brand sm:text-base">{item.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 9. OFERTA */}
      <section id="oferta" className="bg-surface-gradient border-y border-border px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-card">
              <div className="bg-brand-gradient px-6 py-6 text-center sm:px-10">
                <h2 className="text-xl font-extrabold uppercase tracking-tight text-brand-foreground sm:text-3xl">
                  Acesso completo ao pacote
                </h2>
              </div>

              <div className="px-6 py-8 sm:px-10 sm:py-10">
                <ul className="grid gap-3">
                  {packageItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border-b border-border pb-3 text-sm font-semibold text-brand last:border-0 last:pb-0 sm:text-base"
                    >
                      <Check />
                      <span className="min-w-0">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-3xl bg-brand-soft p-6 text-center">
                  {offer.priceLabel ? (
                    <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-teal">
                      {offer.priceLabel}
                    </p>
                  ) : null}
                  {offer.priceCompare ? (
                    <p className="mt-2 text-sm text-muted-foreground line-through">
                      {offer.priceCompare}
                    </p>
                  ) : null}
                  <p className="mt-1 font-display text-4xl font-extrabold text-brand sm:text-6xl">
                    {offer.price}
                  </p>
                  {offer.installments ? (
                    <p className="mt-2 text-sm font-semibold text-muted-foreground">
                      {offer.installments}
                    </p>
                  ) : null}
                </div>

                <div className="mt-7 flex flex-col items-center">
                  <CtaButton pulse>Quero garantir meu acesso</CtaButton>
                  <p className="mt-3 text-xs font-semibold text-muted-foreground sm:text-sm">
                    🔒 Compra segura
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10. ESCASSEZ / URGÊNCIA */}
      <section className="bg-brand-gradient px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="font-display text-xl font-extrabold uppercase tracking-tight text-cta sm:text-2xl">
              🔥 Oferta especial
            </p>
            <p className="mt-3 text-base text-brand-foreground/75 sm:text-lg">
              Garanta seu acesso enquanto esta condição estiver disponível.
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-7">
            <Countdown />
          </Reveal>
          <Reveal delay={160} className="mt-8 flex flex-col items-center">
            <CtaButton>Quero garantir meu acesso</CtaButton>
          </Reveal>
        </div>
      </section>

      {/* 11. GARANTIA */}
      <section className="px-5 py-14 sm:py-20">
        <Reveal className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center gap-5 rounded-3xl border border-border bg-card p-8 text-center shadow-soft sm:p-10">
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-teal/10 text-teal">
              <ShieldCheck className="h-8 w-8" strokeWidth={1.7} aria-hidden />
            </span>
            <SectionTitle>Você compra com segurança</SectionTitle>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              Seu acesso é feito de forma segura, com pagamento processado por uma plataforma de
              checkout.
              {guarantee.days
                ? ` A compra conta com garantia de ${guarantee.days} dias, conforme a política configurada no checkout.`
                : " Caso exista uma política de garantia configurada no checkout, ela será apresentada durante a finalização da compra."}
            </p>
          </div>
        </Reveal>
      </section>

      {/* 12. FAQ */}
      <section className="bg-surface-gradient border-y border-border px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal className="text-center">
            <SectionLabel>FAQ</SectionLabel>
            <SectionTitle className="mt-4">Dúvidas frequentes</SectionTitle>
          </Reveal>
          <Reveal delay={100} className="mt-8">
            <Accordion type="single" collapsible className="grid gap-3">
              {faq.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  value={`item-${i}`}
                  className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-soft"
                >
                  <AccordionTrigger className="py-4 text-left text-sm font-bold text-brand hover:no-underline sm:text-base">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* 13. CTA FINAL */}
      <section className="bg-brand-gradient px-5 py-16 sm:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionTitle invert>Pronto para facilitar sua rotina no RH?</SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-foreground/75 sm:text-lg">
            Tenha +500 dinâmicas prontas e materiais extras para tornar seus treinamentos, reuniões
            e atividades com equipes muito mais práticos e envolventes.
          </p>
          <div className="mt-9 flex flex-col items-center">
            <CtaButton pulse>Quero acessar agora</CtaButton>
            <p className="mt-3 text-xs text-brand-foreground/60 sm:text-sm">
              🔒 Acesso digital • Pagamento seguro
            </p>
          </div>
        </Reveal>
      </section>

      {/* 14. RODAPÉ */}
      <footer className="px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footer.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-brand"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <p className="text-xs text-muted-foreground sm:text-sm">{footer.copyright}</p>
        </div>
      </footer>

      {/* CTA FIXO MOBILE */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-4 py-3 shadow-[0_-8px_24px_-12px_oklch(0.28_0.082_259/0.3)] backdrop-blur md:hidden">
        <CtaButton size="md" className="max-w-none">
          Quero acessar agora
        </CtaButton>
      </div>
    </div>
  );
}
