export type Projet = {
  titre: string;
  description: string;
  stack: string[];
  lien?: string;
  repo?: string;
  statut: "en-ligne" | "en-cours" | "actif";
};

export const projets: Projet[] = [
  {
    titre: "BowlingStats",
    description: "Tracker de sessions de bowling avec stats avancées — saisie frame par frame, historique, graphes.",
    stack: ["React", "Cloudflare Workers", "Supabase"],
    lien: "https://bowlingstats.micka-wilk.workers.dev",
    repo: "https://github.com/MickaWilk/bowlingstats",
    statut: "en-ligne",
  },
  {
    titre: "POP-VERSUS",
    description: "Jeu de classement pop culture multijoueur en temps réel — films, séries, animes.",
    stack: ["Next.js", "Supabase Realtime", "React"],
    statut: "en-cours",
  },
  {
    titre: "Timeline Maker",
    description: "Outil de création de timelines visuelles interactives.",
    stack: ["Next.js 15", "Supabase", "shadcn/ui"],
    repo: "https://github.com/MickaWilk/timeline-maker",
    statut: "en-cours",
  },
  {
    titre: "TTMC Cards",
    description: "Générateur de cartes personnalisées pour le jeu Tu Te Mets Combien — export PNG.",
    stack: ["Vanilla JS", "HTML", "CSS"],
    repo: "https://github.com/MickaWilk/TTMCCards",
    statut: "en-ligne",
  },
  {
    titre: "Pépite",
    description: "Site de publication poétique — 6 textes publiés.",
    stack: ["Web"],
    statut: "en-ligne",
  },
  {
    titre: "Infornia",
    description: "Contenu Reels IA — pipeline PixVerse + ElevenLabs + CapCut.",
    stack: ["PixVerse", "ElevenLabs", "CapCut"],
    lien: "https://www.instagram.com/infornia",
    statut: "actif",
  },
];
