export const faqCategories = [
  { slug: "comecando", label: "Primeiros passos" },
  { slug: "organizacao", label: "Organização financeira" },
  { slug: "investimentos", label: "Investimentos e sonhos" },
  { slug: "atendimento", label: "Como funciona o atendimento" },
] as const;

export type FaqCategory = (typeof faqCategories)[number]["slug"];
