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
  checkoutUrl: "#oferta",
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
import mockupPrincipal from "@/assets/mockup-principal.png.asset.json";
import bonusCertificado from "@/assets/bonus-certificado.webp.asset.json";
import bonusManual from "@/assets/bonus-manual.png.asset.json";
import bonusComunicacao from "@/assets/bonus-comunicacao.png.asset.json";

export const imgMockupMain = mockupPrincipal.url;
export const imgBonusCertificado = bonusCertificado.url;
export const imgBonusManual = bonusManual.url;
export const imgBonusComunicacao = bonusComunicacao.url;
export { default as imgTeam } from "@/assets/hero-equipe.jpg";

/** Planos / pacotes */
export const plans = {
  basic: {
    name: "Plano Básico",
    price: "R$ 10,00",
    checkoutUrl: "https://pay.wiapy.com/43LWWQj46YEB",
  },
  complete: {
    name: "Plano Completo",
    price: "R$ 19,90",
    checkoutUrl: "https://pay.wiapy.com/ATgQi4t2vmOz",
  },
  premium: {
    name: "Plano Premium",
    price: "R$ 12,90",
    checkoutUrl: "https://pay.wiapy.com/qXKLJSbPPKpM",
  },
};

/** Carrossel da seção "O que você vai receber" */
export { default as imgCarrossel1 } from "@/assets/carrossel-dinamicas.jpg.asset.json";
export { default as imgCarrossel2 } from "@/assets/carrossel-reunioes.jpg.asset.json";
export { default as imgCarrossel3 } from "@/assets/carrossel-nervosismo.jpg.asset.json";
export { default as imgCarrossel4 } from "@/assets/carrossel-recrutamento.jpg.asset.json";

/** Valores fictícios exibidos riscados nos bônus. */
export const bonusValues = {
  certificado: "R$ 47,00",
  manual: "R$ 67,00",
  comunicacao: "R$ 57,00",
};

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
    q: "O que são as +500 Dinâmicas?",
    a: "São atividades prontas que podem ser utilizadas por profissionais de RH em diferentes situações, como treinamentos, integrações, reuniões e atividades de equipe.",
  },
  {
    q: "Para quem é o material?",
    a: "Para profissionais de RH, gestores, líderes, coordenadores e pessoas que trabalham com equipes e desenvolvimento de colaboradores.",
  },
  {
    q: "Preciso criar as dinâmicas sozinho?",
    a: "Não. O objetivo do material é oferecer atividades prontas para facilitar sua rotina.",
  },
  {
    q: "Como recebo o material?",
    a: "O material é digital e o acesso é disponibilizado após a confirmação do pagamento.",
  },
  {
    q: "O certificado está incluso?",
    a: "Sim. O Certificado de Conclusão está incluso na oferta.",
  },
  {
    q: "Quais são os bônus?",
    a: 'Manual de Gestão de Recursos Humanos e o material "Como melhorar a comunicação em público (livre-se da timidez)".',
  },
];

