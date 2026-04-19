import type { Metadata } from "next";
import { films, filmsMentions } from "@/data/films";
import { series } from "@/data/series";
import { animes } from "@/data/animes";
import { jeuxGrid } from "@/data/jeux-video";

export const metadata: Metadata = {
  title: "Goûts — Micka Wilk",
};

export default function Gouts() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-[#e8ecf4] mb-2">Goûts</h1>
      <p className="text-[#7a8499] mb-16">Pop culture — ce qui a compté, ce qui compte encore.</p>

      {/* Films */}
      <section className="mb-16">
        <h2 className="text-xs font-mono text-[#4a7db5] uppercase tracking-widest mb-6">
          Films — Top 10
        </h2>
        <ol className="space-y-2">
          {films.map((f) => (
            <li key={f.rang} className="flex items-baseline gap-4 group">
              <span className="text-xs font-mono text-[#3d4558] w-5 shrink-0">
                {f.rang}
              </span>
              <span className="text-[#e8ecf4] group-hover:text-[#6b9fd4] transition-colors">
                {f.titre}
              </span>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-xs text-[#3d4558]">
          Mentions : {filmsMentions.join(", ")}
        </p>
      </section>

      {/* Séries */}
      <section className="mb-16">
        <h2 className="text-xs font-mono text-[#4a7db5] uppercase tracking-widest mb-6">
          Séries
        </h2>
        <div className="flex flex-wrap gap-3">
          {series.map((s) => (
            <span
              key={s}
              className="px-4 py-2 rounded-lg border border-[#1e2330] bg-[#13161d] text-sm text-[#e8ecf4]"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Animes */}
      <section className="mb-16">
        <h2 className="text-xs font-mono text-[#4a7db5] uppercase tracking-widest mb-6">
          Animes
        </h2>
        <div className="space-y-2">
          {animes.map((a) => (
            <div key={a.titre} className="flex items-center gap-4">
              <span className="text-xs font-mono text-[#3d4558] w-16 shrink-0">
                {a.rang}
              </span>
              <span className="text-[#e8ecf4]">{a.titre}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Jeux vidéo */}
      <section>
        <h2 className="text-xs font-mono text-[#4a7db5] uppercase tracking-widest mb-6">
          Jeux vidéo — Grille About Me
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {jeuxGrid.map((c) => (
            <div
              key={c.categorie}
              className="p-3 rounded-lg border border-[#1e2330] bg-[#13161d]"
            >
              <p className="text-xs text-[#3d4558] mb-1">{c.categorie}</p>
              <p className={`text-sm ${c.confirmed ? "text-[#e8ecf4]" : "text-[#3d4558] italic"}`}>
                {c.jeu ?? "—"}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-[#3d4558]">
          Grille à compléter — cases grises = non confirmées
        </p>
      </section>
    </div>
  );
}
