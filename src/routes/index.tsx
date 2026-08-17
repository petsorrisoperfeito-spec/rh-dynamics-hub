import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  CalendarCheck,
  Crown,
  Gift,
  HeartHandshake,
  Layers,
  MessagesSquare,
  Presentation,
  ShieldCheck,
  Sparkles,
  Target,
  UserPlus,
  Users,
  X,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  CtaButton,
  Check,
  PlanButton,
  Reveal,
  SectionLabel,
  SectionTitle,
} from "@/components/landing/parts";
import imgSarah from "@/assets/sarah-martins.jpg";

import {
  bonusValues,
  faq,
  footer,
  guarantee,
  imgBonusCertificado,
  imgBonusComunicacao,
  imgBonusManual,
  imgCarrossel1,
  imgCarrossel2,
  imgCarrossel3,
  imgMockupMain,
  imgTeam,
  plans,
} from "@/config/site";

/** Amostras do material exibidas no carrossel. */
const previews = [
  {
    src: imgCarrossel1,
    tag: "+500 Dinâmicas Prontas para RH",
    alt: "Página com dinâmicas de grupo detalhadas: objetivo, participantes, tempo e materiais",
  },
  {
    src: imgCarrossel2,
    tag: "Manual de Gestão de Recursos Humanos",
    alt: "Página sobre como conduzir reuniões, apresentações, treinamentos e entrevistas",
  },
  {
    src: imgCarrossel3,
    tag: "Como melhorar a comunicação em público",
    alt: "Página sobre como controlar o nervosismo e a ansiedade antes de falar",
  },
];

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
  "3 bônus especiais",
  "Acesso imediato",
];

const problems = [
  "Perder tempo procurando atividades para treinamentos",
  "Ficar sem ideias para integração de equipes",
  "Ter dificuldade para estimular a participação dos colaboradores",
  "Precisar improvisar atividades durante reuniões",
  "Repetir sempre as mesmas dinâmicas",
  "Dificuldade de integrar novos funcionários",
];

const bonuses = [
  {
    tag: "Bônus 1",
    title: "Certificado de Conclusão",
    image: imgBonusCertificado,
    value: bonusValues.certificado,
  },
  {
    tag: "Bônus 2",
    title: "Manual de Gestão de Recursos Humanos",
    image: imgBonusManual,
    value: bonusValues.manual,
  },
  {
    tag: "Bônus 3",
    title: "Como melhorar a comunicação em público",
    image: imgBonusComunicacao,
    value: bonusValues.comunicacao,
  },
];

const bonusNames = [
  "Certificado de Conclusão",
  "Manual de Gestão de Recursos Humanos",
  "Como melhorar a comunicação em público",
];

function useTodayLabel() {
  const [label, setLabel] = useState("");
  useEffect(() => {
    setLabel(
      new Date().toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
    );
  }, []);
  return label;
}

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
  const today = useTodayLabel();
  const [upsellOpen, setUpsellOpen] = useState(false);
  const checkoutTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearDialogLocks = useCallback(() => {
    const { body } = document;
    body.style.pointerEvents = "";
    body.style.overflow = "";
    body.removeAttribute("data-scroll-locked");
    body.removeAttribute("aria-hidden");
  }, []);

  const goToCheckout = (url: string) => {
    setUpsellOpen(false);
    clearDialogLocks();
    if (checkoutTimerRef.current) clearTimeout(checkoutTimerRef.current);
    checkoutTimerRef.current = setTimeout(() => {
      window.location.assign(url);
    }, 250);
  };

  /**
   * Ao voltar do checkout (inclusive via cache de navegação do browser), garante
   * que o modal esteja fechado e que nenhum bloqueio de clique/scroll continue ativo.
   */
  useEffect(() => {
    const reset = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.location.reload();
        return;
      }
      if (checkoutTimerRef.current) {
        clearTimeout(checkoutTimerRef.current);
        checkoutTimerRef.current = null;
      }
      setUpsellOpen(false);
      clearDialogLocks();
    };
    window.addEventListener("pageshow", reset);
    return () => {
      window.removeEventListener("pageshow", reset);
      if (checkoutTimerRef.current) clearTimeout(checkoutTimerRef.current);
    };
  }, [clearDialogLocks]);


  return (
    <div className="min-h-screen bg-background">
      {/* BARRA DE DESTAQUE */}
      <div className="bg-promo px-4 py-2.5 text-center">
        <p className="animate-pulse-text inline-block origin-center text-[0.72rem] font-bold uppercase tracking-[0.14em] text-promo-foreground sm:text-sm">
          Oferta válida apenas hoje{today ? ` — ${today}` : ""}
        </p>
      </div>

      {/* HERO */}
      <header className="bg-surface-gradient relative flex min-h-[calc(100svh-3rem)] items-center overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal/10 blur-3xl"
        />
        <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center px-5 pb-20 pt-6 text-center md:pb-8 md:pt-8">
          <SectionLabel>Material digital para RH</SectionLabel>
          <h1 className="text-balance-tight mt-3 text-[1.65rem] font-extrabold uppercase leading-[1.08] text-brand sm:text-4xl lg:text-5xl">
            +500 Dinâmicas Prontas <span className="text-teal">para RH</span>
          </h1>

          <div className="mt-4 w-full max-w-[16rem] rounded-2xl bg-card p-2 shadow-card ring-1 ring-border sm:max-w-sm lg:max-w-md">
            <img
              src={imgMockupMain}
              alt="Mockup do material digital +500 Dinâmicas Prontas para RH em tablet e PDFs"
              width={1200}
              height={912}
              className="h-auto w-full rounded-xl"
            />
          </div>


          <ul className="mt-4 grid w-full max-w-xl grid-cols-2 gap-x-4 gap-y-2 text-left">
            {heroHighlights.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2 text-[0.82rem] font-semibold leading-snug text-brand sm:text-base"
              >
                <Check className="h-5 w-5 text-xs" />
                <span className="min-w-0">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex w-full flex-col items-center">
            <CtaButton pulse href="#bonus">Acessar agora</CtaButton>
            <p className="mt-2 text-[0.7rem] text-muted-foreground sm:text-sm">
              Acesso rápido e fácil após a confirmação do pagamento.
            </p>
          </div>
        </div>
      </header>

      {/* PROBLEMA */}
      <section className="px-5 pb-10 pt-5 sm:pb-12 sm:pt-6">
        <div className="mx-auto max-w-4xl">
          <Reveal className="text-center">
            <SectionLabel>A rotina real do RH</SectionLabel>
            <SectionTitle className="mt-3">Cansado de precisar criar dinâmicas do zero?</SectionTitle>
          </Reveal>

          <div className="mt-7 grid gap-3">

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

      {/* BÔNUS */}
      <section id="bonus" className="bg-surface-gradient border-y border-border px-5 py-10 sm:py-14 scroll-mt-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-cta px-4 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-cta-foreground">
              <Sparkles className="h-3.5 w-3.5" aria-hidden /> Bônus
            </span>
            <SectionTitle className="mt-4">Bônus</SectionTitle>
          </Reveal>

          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {bonuses.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <article className="flex h-full flex-col items-center text-center">
                  <img
                    src={b.image}
                    alt={`Imagem do bônus ${b.title}`}
                    loading="lazy"
                    className="h-auto w-auto max-h-56 max-w-full object-contain sm:max-h-64"
                  />
                  <span className="mt-5 inline-flex rounded-full bg-cta/90 px-3 py-1 text-[0.6rem] font-extrabold uppercase tracking-[0.16em] text-cta-foreground">
                    {b.tag}
                  </span>
                  <h3 className="text-balance-tight mt-3 text-base font-bold leading-snug text-brand sm:text-lg">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-sm font-semibold text-danger-price line-through">
                    {b.value}
                  </p>
                  <p className="animate-pulse-free mt-1 font-display text-xl font-extrabold uppercase tracking-tight text-success">
                    Grátis
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* O QUE VOCÊ VAI RECEBER */}
      <section className="px-5 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Conteúdo da compra</SectionLabel>
            <SectionTitle className="mt-4">O que você vai receber</SectionTitle>
          </Reveal>

          {/* CARROSSEL DE AMOSTRAS */}
          <Reveal className="mt-8">
            <Carousel opts={{ align: "start", loop: true }} className="mx-auto w-full max-w-4xl">
              <CarouselContent>
                {previews.map((p) => (
                  <CarouselItem key={p.src} className="sm:basis-1/2">
                    <figure className="flex h-full flex-col items-center px-2">
                      <figcaption className="text-center text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-teal sm:text-[0.7rem]">
                        {p.tag}
                      </figcaption>
                      <img
                        src={p.src}
                        alt={p.alt}
                        loading="lazy"
                        className="mt-3 h-auto w-auto max-h-[22rem] max-w-full object-contain sm:max-h-[26rem]"
                      />
                    </figure>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-1 sm:-left-5" />
              <CarouselNext className="right-1 sm:-right-5" />
            </Carousel>
          </Reveal>



          <Reveal delay={120} className="mt-6">
            <ul className="grid gap-3 rounded-3xl border border-teal/25 bg-brand-soft p-6 sm:grid-cols-2 sm:p-8">
              {packageItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm font-semibold text-brand sm:text-base"
                >
                  <Check />
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-8 flex justify-center">
            <a
              href="#oferta"
              className="animate-pulse-soft inline-flex w-full max-w-md items-center justify-center gap-2 rounded-2xl bg-cta px-6 py-4 text-center font-display text-base font-extrabold uppercase tracking-tight text-cta-foreground shadow-cta transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cta/40 sm:text-lg"
            >
              Acessar agora <span aria-hidden>→</span>
            </a>
          </div>

        </div>
      </section>

      {/* ONDE USAR */}
      <section className="bg-brand-gradient px-5 py-10 sm:py-14">
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
      <section className="px-5 py-10 sm:py-14">
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

          </Reveal>

          <Reveal delay={100} className="order-1 lg:order-2">
            <div className="relative">
              <div aria-hidden className="absolute inset-6 rounded-[2.5rem] bg-teal/10 blur-2xl" />
              <img
                src={imgTeam}
                alt="Profissionais reunidos durante uma dinâmica de treinamento corporativo"
                width={1408}
                height={1008}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="relative h-auto w-full rounded-3xl object-cover shadow-card ring-1 ring-border"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PLANOS */}
      <section
        id="oferta"
        className="bg-surface-gradient border-y border-border px-5 py-10 sm:py-14"
      >
        <div className="mx-auto max-w-5xl">
          <Reveal className="text-center">
            <SectionLabel>Escolha seu plano</SectionLabel>
            <SectionTitle className="mt-4">
              Leve o pacote completo para sua rotina de RH
            </SectionTitle>
          </Reveal>

          <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
            {/* BÁSICO */}
            <Reveal>
              <article className="flex h-full flex-col rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-8">
                <p className="text-center font-display text-lg font-extrabold uppercase tracking-tight text-brand">
                  {plans.basic.name}
                </p>
                <p className="animate-pulse-zoom mt-4 origin-center text-center font-display text-3xl font-extrabold text-cta sm:text-4xl">
                  {plans.basic.price}
                </p>


                <ul className="mt-6 grid gap-3">
                  <li className="flex items-start gap-3 text-sm font-semibold text-brand sm:text-base">
                    <Check />
                    <span className="min-w-0">+500 Dinâmicas Prontas para RH</span>
                  </li>
                  {bonusNames.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm font-semibold text-muted-foreground line-through sm:text-base"
                    >
                      <span
                        aria-hidden
                        className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-destructive/10 text-destructive"
                      >
                        <X className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span className="min-w-0">{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-destructive">
                  Sem os bônus
                </p>
                <div className="mt-6">
                  <PlanButton
                    variant="outline"
                    label="Quero o Plano Básico"
                    onClick={() => setUpsellOpen(true)}
                  />
                </div>

              </article>

            </Reveal>

            {/* COMPLETO */}
            <Reveal delay={100}>
              <article className="relative flex h-full flex-col rounded-[2rem] border-2 border-cta bg-card p-6 shadow-card sm:p-8">
                <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-cta px-4 py-1.5 text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-cta-foreground">
                  <Crown className="h-3.5 w-3.5" aria-hidden /> Mais vantajoso
                </span>
                <p className="mt-3 text-center font-display text-lg font-extrabold uppercase tracking-tight text-brand">
                  {plans.complete.name}
                </p>
                <p className="animate-pulse-zoom mt-4 origin-center text-center font-display text-4xl font-extrabold text-cta sm:text-5xl">
                  {plans.complete.price}
                </p>



                <ul className="mt-6 grid gap-3">
                  <li className="flex items-start gap-3 text-sm font-semibold text-brand sm:text-base">
                    <Check />
                    <span className="min-w-0">+500 Dinâmicas Prontas para RH</span>
                  </li>
                  {bonusNames.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm font-semibold text-brand sm:text-base"
                    >
                      <span
                        aria-hidden
                        className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cta/15 text-cta"
                      >
                        <Gift className="h-3.5 w-3.5" strokeWidth={2.2} />
                      </span>
                      <span className="min-w-0">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-col items-center">
                  <PlanButton
                    href={plans.complete.checkoutUrl}
                    label="Quero o Plano Completo"
                  />

                  <p className="mt-3 text-center text-xs font-semibold text-muted-foreground sm:text-sm">
                    Pagamento seguro • Acesso digital • Liberação após confirmação
                  </p>
                </div>

              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SOBRE A AUTORA */}
      <section className="border-y border-border px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <SectionLabel>Quem criou o material</SectionLabel>
            <SectionTitle className="mt-4">Sobre a autora</SectionTitle>
          </div>
          <div className="mt-8 grid items-center gap-8 rounded-[2rem] border border-border bg-card p-6 shadow-card sm:p-9 md:grid-cols-[minmax(0,14rem)_1fr] md:gap-10">
            <div className="mx-auto w-40 max-w-full sm:w-52 md:w-full">
              <img
                src={imgSarah}
                alt="Sarah Martins, autora do material +500 Dinâmicas Prontas para RH"
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-square h-auto w-full rounded-3xl object-cover shadow-soft ring-1 ring-border"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-brand sm:text-3xl">
                Sarah Martins
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Sarah Martins atua na área de Recursos Humanos e desenvolvimento de equipes. Criou
                estratégias para tornar treinamentos mais dinâmicos. Reuniu recursos práticos para
                facilitar a rotina do RH. Ajuda empresas a fortalecer suas equipes. Seu propósito é
                tornar o RH mais simples e eficiente.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* GARANTIA / COMPRA SEGURA */}
      <section className="px-5 py-10 sm:py-14">
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
      <section className="bg-surface-gradient border-y border-border px-5 py-10 sm:py-14">
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
      <section className="bg-brand-gradient px-5 py-12 sm:py-16">
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

      {/* POP-UP DE UPGRADE PARA O PLANO PREMIUM */}
      {upsellOpen && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-foreground/80 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setUpsellOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="upsell-title"
            aria-describedby="upsell-description"
            className="relative grid w-full max-w-[92vw] gap-4 rounded-3xl border-2 border-cta bg-card p-6 text-center shadow-lg sm:max-w-md sm:p-8"
          >
            <button
              type="button"
              aria-label="Fechar"
              onClick={() => setUpsellOpen(false)}
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-sm text-muted-foreground transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <X className="h-4 w-4" />
            </button>
            <span
              aria-hidden
              className="animate-pulse-zoom mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-cta/12 text-3xl"
            >
              🎁
            </span>
            <h2
              id="upsell-title"
              className="text-balance-tight mt-2 font-display text-lg font-extrabold uppercase leading-tight tracking-tight text-brand sm:text-xl"
            >
              Espere! Tem um presentinho para você
            </h2>
            <p
              id="upsell-description"
              className="text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
              Leve o <strong className="text-brand">Plano Premium</strong> por apenas{" "}
              <strong className="text-cta">{plans.premium.price}</strong>. Aproveite essa condição
              especial antes de finalizar sua compra.
            </p>
            <div className="mt-2 grid gap-3">
              <a
                href={plans.premium.checkoutUrl}
                onClick={(event) => {
                  event.preventDefault();
                  goToCheckout(plans.premium.checkoutUrl);
                }}
                className="animate-pulse-soft inline-flex w-full items-center justify-center rounded-2xl bg-cta px-5 py-4 font-display text-sm font-extrabold uppercase tracking-tight text-cta-foreground shadow-cta transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 sm:text-base"
              >
                🎁 Quero o Plano Premium
              </a>
              <a
                href={plans.basic.checkoutUrl}
                onClick={(event) => {
                  event.preventDefault();
                  goToCheckout(plans.basic.checkoutUrl);
                }}
                className="text-sm font-semibold text-muted-foreground underline-offset-4 transition-colors hover:text-brand hover:underline"
              >
                Não, quero apenas o Plano Básico
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
