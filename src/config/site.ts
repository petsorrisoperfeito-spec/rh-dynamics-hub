/**
 * ============================================================
 *  CONFIGURAÇÃO EDITÁVEL DA PÁGINA
 *  Altere apenas os valores abaixo. Nada mais precisa ser mexido.
 * ============================================================
 */

export const offer = {
  /** Preço principal exibido na oferta. Ex.: "R$ 47,00" */
  price: "R$ 00,00",
  /** Preço "de" (riscado). Deixe "" para esconder. */
  priceCompare: "",
  /** Texto de parcelamento. Deixe "" para esconder. */
  installments: "",
  /** Selo curto acima do preço. Deixe "" para esconder. */
  priceLabel: "Pagamento único",
  /** Link do checkout (Kiwify, Hotmart, Braip, etc.) */
  checkoutUrl: "#checkout",
};

/** Vídeo da VSL. Aceita link de embed (YouTube/Vimeo/Panda/VTurb). */
export const vsl = {
  /** Ex.: "https://www.youtube.com/embed/SEU_ID" — deixe "" para exibir o placeholder */
  embedUrl: "",
};

/**
 * Garantia — NÃO invente prazo.
 * Preencha `days` somente se existir garantia configurada no checkout.
 * Deixe null para exibir apenas a mensagem de compra segura.
 */
export const guarantee = {
  days: null as number | null,
};




/** Imagens/mockups — troque os arquivos em src/assets ou aponte para uma URL. */
export { default as imgMockupMain } from "@/assets/mockup-dinamicas.png";
export { default as imgMockupBonus } from "@/assets/mockup-bonus.png";
export { default as imgTeam } from "@/assets/hero-equipe.jpg";

/** Rodapé */
export const footer = {
  copyright: "© 2026 +500 Dinâmicas Prontas para RH. Todos os direitos reservados.",
  links: [
    { label: "Termos de Uso", href: "#" },
    { label: "Política de Privacidade", href: "#" },
    { label: "Contato", href: "#" },
  ],
};

/** FAQ — respostas totalmente configuráveis. */
export const faq = [
  {
    q: "Como vou receber os materiais?",
    a: "Após a confirmação do pagamento, você recebe o acesso aos materiais digitais por e-mail, na área de entrega do checkout.",
  },
  {
    q: "Os materiais são digitais?",
    a: "Sim. Todo o conteúdo é digital, para você consultar quando precisar. Não há envio de material físico.",
  },
  {
    q: "Posso acessar pelo celular?",
    a: "Sim. O acesso é digital e funciona em celular, tablet e computador.",
  },
  {
    q: "Para quem são as dinâmicas?",
    a: "Para profissionais de RH, gestores, líderes, coordenadores e profissionais de treinamento e desenvolvimento que trabalham diretamente com equipes.",
  },
  {
    q: "O conteúdo serve para treinamentos e reuniões?",
    a: "Sim. As dinâmicas foram organizadas para diferentes situações, como treinamentos, integrações, reuniões, comunicação e atividades de equipe.",
  },
  {
    q: "O pagamento é único?",
    a: "Sim, o pagamento é único para o acesso ao pacote, conforme as condições apresentadas no checkout.",
  },
  {
    q: "Quando recebo o acesso?",
    a: "O acesso é liberado logo após a confirmação do pagamento pelo checkout.",
  },
];
