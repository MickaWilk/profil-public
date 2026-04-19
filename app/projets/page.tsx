import type { Metadata } from "next";
import { projets, type Projet } from "@/data/projets";

export const metadata: Metadata = {
  title: "Projets — Micka Wilk",
};

const statutLabel: Record<Projet["statut"], { label: string; color: string }> = {
  "en-ligne": { label: "En ligne", color: "#4a7c6b" },
  "en-cours": { label: "En cours", color: "#4a7db5" },
  "actif":    { label: "Actif",    color: "#5c3a6b" },
};

export default function Projets() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-[#e8ecf4] mb-2">Projets</h1>
      <p className="text-[#7a8499] mb-16">Ce que j&apos;ai construit — side projects, outils, expérimentations.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projets.map((p) => {
          const st = statutLabel[p.statut];
          return (
            <article
              key={p.titre}
              className="p-6 rounded-xl border border-[#1e2330] bg-[#13161d] flex flex-col gap-4"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-lg font-semibold text-[#e8ecf4]">{p.titre}</h2>
                <span
                  className="text-xs px-2 py-0.5 rounded-full border shrink-0 mt-0.5"
                  style={{ color: st.color, borderColor: st.color + "40" }}
                >
                  {st.label}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#7a8499] leading-relaxed flex-1">{p.description}</p>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded border border-[#1e2330] text-[#3d4558]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              {(p.lien || p.repo) && (
                <div className="flex gap-4 pt-1 text-xs">
                  {p.lien && (
                    <a
                      href={p.lien}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4a7db5] hover:text-[#6b9fd4] transition-colors"
                    >
                      Voir le site →
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3d4558] hover:text-[#7a8499] transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
