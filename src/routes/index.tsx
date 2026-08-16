import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  BookOpenCheck,
  CalendarCheck,
  Clock,
  Handshake,
  HeartHandshake,
  Layers,
  Lightbulb,
  MessagesSquare,
  MonitorSmartphone,
  Presentation,
  ShieldCheck,
  Sparkles,
  Target,
  UserPlus,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaButton, Check, Reveal, SectionLabel, SectionTitle } from "@/components/landing/parts";
import {
  faq,
  footer,
  guarantee,
  imgMockupBonus,
  imgMockupMain,
  imgTeam,
  offer,
} from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "+500 Dinâmicas Prontas para RH | Certificado + Bônus" },
      {
        name: "description",
        content:
          "Mais de 500 dinâmicas prontas para treinamentos, integrações e reuniões de equipe. Certificado de conclusão incluso e 2 bônus. Acesso digital.",
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

const heroHighlights = [
  "+500 dinâmicas prontas",
  "Certificado incluso",
  "2 bônus especiais",
  "Acesso imediato",
];

const problems = [
  "Perder tempo procurando atividades para treinamentos",
  "Ficar sem ideias para integração de equipes",
  "Ter dificuldade para estimular a participação dos colaboradores",
  "Precisar improvisar atividades durante reuniões",
  "Repetir sempre as mesmas dinâmicas",
];

const solutions = [
  {
    icon: Clock,
    title: "Economize tempo",
    text: "Pare de perder horas criando atividades do zero.",
  },
  {
    icon: BookOpenCheck,
    title: "Mais praticidade",
    text: "Tenha atividades prontas para consultar quando precisar.",
  },
  {
    icon: Users,
    title: "Engaje sua equipe",
    text: "Use dinâmicas para estimular participação e interação.",
  },
  {
    icon: Presentation,
    title: "Diversifique seus treinamentos",
    text: "Tenha diferentes opções para utilizar em vários momentos.",
  },
  {
    icon: Handshake,
    title: "Facilite integrações",
    text: "Torne momentos de integração mais leves e participativos.",
  },
  {
    icon: MonitorSmartphone,
    title: "Use quando precisar",
    text: "Material digital para consultar sempre que surgir uma necessidade.",
  },
];

const bonuses = [
  {
    tag: "Bônus 1",
    title: "Manual de Gestão de Recursos Humanos",
    text: "Um material complementar para ampliar seus conhecimentos e apoiar sua atuação na área de RH.",
  },
  {
    tag: "Bônus 2",
    title: "Como melhorar a comunicação em público (livre-se da timidez)",
    text: "Aprenda estratégias para se comunicar melhor, falar com mais segurança e desenvolver sua comunicação.",
  },
];

const useCases = [
  { icon: UserPlus, label: "Integração de novos colaboradores" },
  { icon: Presentation, label: "Treinamentos" },
  { icon: CalendarCheck, label: "Reuniões" },
  { icon: Users, label: "Trabalho em equipe" },
  { icon: HeartHandshake, label: "Desenvolvimento de pessoas" },
  { icon: MessagesSquare, label: "Comunicação" },
  { icon: Target, label: "Motivação" },
  { icon: Layers, label: "Atividades em grupo" },
];

const benefits = [
  "Economize tempo",
  "Tenha atividades prontas",
  "Evite improvisos",
  "Aumente a interação da equipe",
  "Torne treinamentos mais dinâmicos",
  "Tenha novas ideias sempre à mão",
];

const packageItems = [
  "+500 Dinâmicas Prontas para RH",
  "+ Certificado de Conclusão",
  "+ Manual de Gestão de Recursos Humanos",
  "+ Como melhorar a comunicação em público",
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      {/* BARRA DE DESTAQUE */}
      <div className="bg-brand-gradient px-4 py-2.5 text-center">
        <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-brand-foreground sm:text-sm">
          Oferta especial para profissionais de RH
        </p>
      </div>

      {/* HERO */}
      <header className="bg-surface-gradient relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal/10 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:py-20">
          <div>
            <Reveal>
              <SectionLabel>Material digital para RH</SectionLabel>
              <h1 className="text-balance-tight mt-5 text-3xl font-extrabold uppercase leading-[1.08] text-brand sm:text-5xl">
                +500 Dinâmicas Prontas <span className="text-teal">para RH</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Tenha dinâmicas prontas para tornar treinamentos, integrações e momentos com sua
                equipe muito mais práticos e envolventes.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {heroHighlights.map((b) => (
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
                Acesso rápido e fácil após a confirmação do pagamento.
              </p>
            </Reveal>
          </div>

          <Reveal delay={100} className="relative">
            <div className="relative rounded-3xl bg-card p-3 shadow-card ring-1 ring-border">
              <img
                src={imgMockupMain}
                alt="Mockup do material digital +500 Dinâmicas Prontas para RH em tablet e PDFs"
                width={1200}
                height={912}
                className="h-auto w-full rounded-2xl"
              />
            </div>
          </Reveal>
        </div>
      </header>

      {/* PROBLEMA */}
      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal className="text-center">
            <SectionLabel>A rotina real do RH</SectionLabel>
            <SectionTitle className="mt-4">Cansado de precisar criar dinâmicas do zero?</SectionTitle>
          </Reveal>

          <div className="mt-9 grid gap-3">
            {problems.map((p, i) => (
              <Reveal key={p} delay={i * 60}>
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft sm:p-5">
                  <span
                    aria-hidden
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-destructive/10 text-sm font-bold text-destructive"
                  >
                    ✕
                  </span>
                  <p className="min-w-0 text-sm leading-snug text-brand sm:text-base">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="mt-8 rounded-3xl border border-teal/20 bg-brand-soft p-6 text-center text-base leading-relaxed font-semibold text-brand sm:text-lg">
              Com um material pronto, você economiza tempo e encontra atividades para diferentes
              momentos da rotina de RH.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="bg-surface-gradient border-y border-border px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionLabel>A solução</SectionLabel>
            <SectionTitle className="mt-4">
              Tudo o que você precisa para ter dinâmicas prontas para diferentes situações
            </SectionTitle>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              O material reúne mais de 500 dinâmicas organizadas para facilitar a utilização por
              profissionais de RH em treinamentos, integrações, reuniões e atividades de equipe.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((d, i) => (
              <Reveal key={d.title} delay={i * 70}>
                <article className="h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-card">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-teal">
                    <d.icon className="h-6 w-6" strokeWidth={1.8} aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-brand">{d.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {d.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140} className="mt-10 flex flex-col items-center">
            <CtaButton>Quero acessar agora</CtaButton>
          </Reveal>
        </div>
      </section>

      {/* O QUE VOCÊ VAI RECEBER */}
      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Conteúdo da compra</SectionLabel>
            <SectionTitle className="mt-4">Veja tudo o que está incluso na sua compra</SectionTitle>
          </Reveal>

          {/* PRODUTO PRINCIPAL */}
          <Reveal delay={80} className="mt-10">
            <article className="grid items-center gap-8 rounded-[2rem] border border-border bg-card p-6 shadow-card sm:p-9 lg:grid-cols-2 lg:gap-12">
              <div className="order-2 lg:order-1">
                <span className="inline-flex rounded-full bg-teal/12 px-3.5 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-teal">
                  Produto principal
                </span>
                <h3 className="text-balance-tight mt-4 text-2xl font-extrabold uppercase leading-tight text-brand sm:text-3xl">
                  +500 Dinâmicas Prontas para RH
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Um grande acervo de dinâmicas prontas para utilizar em treinamentos, integrações,
                  reuniões, atividades em grupo e desenvolvimento de equipes.
                </p>
                <p className="mt-6 inline-flex rounded-2xl bg-brand-gradient px-5 py-3 font-display text-xl font-extrabold uppercase tracking-tight text-brand-foreground sm:text-2xl">
                  +500 dinâmicas
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src={imgMockupMain}
                  alt="Mockup do acervo +500 Dinâmicas Prontas para RH"
                  width={1200}
                  height={912}
                  loading="lazy"
                  className="h-auto w-full rounded-2xl"
                />
              </div>
            </article>
          </Reveal>

          {/* INCLUSO: CERTIFICADO */}
          <Reveal delay={120} className="mt-6">
            <article className="flex flex-col items-start gap-4 rounded-3xl border border-teal/25 bg-brand-soft p-6 sm:flex-row sm:items-center sm:p-8">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-card text-teal shadow-soft">
                <Award className="h-7 w-7" strokeWidth={1.7} aria-hidden />
              </span>
              <div className="min-w-0">
                <span className="inline-flex rounded-full bg-teal px-3 py-1 text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-teal-foreground">
                  Incluso na oferta
                </span>
                <h3 className="mt-3 text-lg font-bold text-brand sm:text-xl">
                  Certificado de Conclusão
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Receba seu certificado de conclusão junto com o material.
                </p>
              </div>
            </article>
          </Reveal>

          {/* BÔNUS */}
          <Reveal delay={160} className="mt-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-cta px-4 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-cta-foreground">
              <Sparkles className="h-3.5 w-3.5" aria-hidden /> E ainda: 2 bônus especiais
            </span>
          </Reveal>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {bonuses.map((b, i) => (
              <Reveal key={b.tag} delay={i * 90}>
                <article className="h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-transform duration-200 hover:-translate-y-1 sm:p-7">
                  <span className="inline-flex rounded-full bg-cta/90 px-3 py-1 text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-cta-foreground">
                    {b.tag}
                  </span>
                  <h3 className="text-balance-tight mt-4 text-lg font-bold leading-snug text-brand sm:text-xl">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {b.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mx-auto mt-8 max-w-3xl">
            <img
              src={imgMockupBonus}
              alt="Mockups dos materiais bônus: manual de gestão de recursos humanos e comunicação em público"
              width={1200}
              height={800}
              loading="lazy"
              className="h-auto w-full"
            />
          </Reveal>
        </div>
      </section>

      {/* ONDE USAR */}
      <section className="bg-brand-gradient px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionTitle invert>Onde você pode usar as dinâmicas?</SectionTitle>
            <p className="mt-4 text-base leading-relaxed text-brand-foreground/70">
              Tenha diferentes opções para escolher a atividade certa de acordo com o momento e o
              objetivo da sua equipe.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {useCases.map((u, i) => (
              <Reveal key={u.label} delay={i * 50}>
                <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-brand-foreground/12 bg-brand-foreground/8 p-5 text-center backdrop-blur-sm">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-foreground/12 text-brand-foreground">
                    <u.icon className="h-6 w-6" strokeWidth={1.8} aria-hidden />
                  </span>
                  <p className="min-w-0 text-sm font-semibold leading-snug text-brand-foreground">
                    {u.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <SectionLabel>Benefícios</SectionLabel>
            <SectionTitle className="mt-4">Mais praticidade para a sua rotina de RH</SectionTitle>
            <ul className="mt-7 grid gap-3">
              {benefits.map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm font-semibold text-brand shadow-soft sm:text-base"
                >
                  <Check />
                  <span className="min-w-0">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CtaButton>Quero acessar as +500 dinâmicas</CtaButton>
            </div>
          </Reveal>

          <Reveal delay={100} className="order-1 lg:order-2">
            <div className="relative">
              <div aria-hidden className="absolute inset-6 rounded-[2.5rem] bg-teal/10 blur-2xl" />
              <img
                src={imgTeam}
                alt="Profissionais reunidos durante uma dinâmica de treinamento corporativo"
                width={1408}
                height={1008}
                loading="lazy"
                className="relative h-auto w-full rounded-3xl object-cover shadow-card ring-1 ring-border"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* OFERTA */}
      <section
        id="oferta"
        className="bg-surface-gradient border-y border-border px-5 py-14 sm:py-20"
      >
        <div className="mx-auto max-w-3xl">
          <Reveal className="text-center">
            <SectionLabel>Oferta completa</SectionLabel>
            <SectionTitle className="mt-4">
              Leve o pacote completo para sua rotina de RH
            </SectionTitle>
          </Reveal>

          <Reveal delay={100} className="mt-9">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-card">
              <div className="bg-brand-gradient px-6 py-6 text-center sm:px-10">
                <p className="font-display text-lg font-extrabold uppercase tracking-tight text-brand-foreground sm:text-2xl">
                  Acesso completo ao pacote
                </p>
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
                  <p className="mt-3 text-center text-xs font-semibold text-muted-foreground sm:text-sm">
                    Pagamento seguro • Acesso digital • Liberação após confirmação
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* URGÊNCIA */}
      <section className="bg-brand-gradient px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="font-display text-xl font-extrabold uppercase tracking-tight text-cta sm:text-2xl">
              Oferta especial
            </p>
            <p className="mt-3 text-base text-brand-foreground/75 sm:text-lg">
              Garanta seu acesso enquanto esta condição estiver disponível.
            </p>
          </Reveal>
          <Reveal delay={140} className="mt-8 flex flex-col items-center">
            <CtaButton>Quero garantir meu acesso</CtaButton>
          </Reveal>
        </div>
      </section>

      {/* GARANTIA / COMPRA SEGURA */}
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

      {/* FAQ */}
      <section className="bg-surface-gradient border-y border-border px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal className="text-center">
            <SectionLabel>FAQ</SectionLabel>
            <SectionTitle className="mt-4">Perguntas frequentes</SectionTitle>
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

      {/* CTA FINAL */}
      <section className="bg-brand-gradient px-5 py-16 sm:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionTitle invert>
            Tenha +500 dinâmicas prontas para facilitar sua rotina de RH
          </SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-foreground/75 sm:text-lg">
            Mais praticidade, mais opções e menos tempo criando atividades do zero.
          </p>
          <div className="mt-9 flex flex-col items-center">
            <CtaButton pulse>Quero acessar as +500 dinâmicas</CtaButton>
            <p className="mt-3 text-xs text-brand-foreground/60 sm:text-sm">
              Acesso digital • Certificado incluso • Bônus inclusos
            </p>
          </div>
        </Reveal>
      </section>

      {/* RODAPÉ */}
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

function _unusedIcons() {
  return [Lightbulb];
}
