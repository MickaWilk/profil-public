export type JeuCase = {
  categorie: string;
  jeu: string | null;
  confirmed: boolean;
};

// Grille "About Me" jeux vidéo — à compléter avec Micka en session
// confirmed: true = validé, false = placeholder/à confirmer
export const jeuxGrid: JeuCase[] = [
  { categorie: "Overrated",               jeu: "Fortnite",         confirmed: true },
  { categorie: "Favorite Art Style",      jeu: "League of Legends", confirmed: false },
  { categorie: "Favorite Game",           jeu: null,               confirmed: false },
  { categorie: "Best Story",              jeu: null,               confirmed: false },
  { categorie: "Biggest Personal Impact", jeu: null,               confirmed: false },
  { categorie: "Best Combat",             jeu: null,               confirmed: false },
  { categorie: "Overthought",             jeu: null,               confirmed: false },
  { categorie: "Underrated",              jeu: null,               confirmed: false },
  { categorie: "Needs a Remake",          jeu: null,               confirmed: false },
  { categorie: "Criminally Overlooked",   jeu: null,               confirmed: false },
  { categorie: "Favorite Protagonist",    jeu: null,               confirmed: false },
  { categorie: "Favorite Antagonist",     jeu: null,               confirmed: false },
  { categorie: "Best Soundtrack",         jeu: null,               confirmed: false },
  { categorie: "Best Multiplayer",        jeu: null,               confirmed: false },
  { categorie: "Don't Uninstall My Thing",jeu: null,               confirmed: false },
  { categorie: "Turn My Brain Off",       jeu: null,               confirmed: false },
  { categorie: "Best With Friends",       jeu: null,               confirmed: false },
  { categorie: "Best Retro Combat",       jeu: "Kirby",            confirmed: false },
  { categorie: "Nostalgia Childhood",     jeu: "Pokémon",          confirmed: false },
  { categorie: "Everyone Should Play",    jeu: null,               confirmed: false },
];
