import type { Metadata } from "next";
import { cv } from "@/data/cv";

export const metadata: Metadata = {
  title: "CV — Micka Wilk",
};

export default function CV() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Header */}
      <section className="mb-16">
        <p className="text-xs font-mono text-[#4a7db5] uppercase tracking-widest mb-3">
          {cv.localisation} · {cv.disponibilite}
        </p>
        <h1 className="text-4xl font-bold text-[#e8ecf4] mb-2">Micka Wilk</h1>
        <p className="text-xl text-[#7a8499]">{cv.titre}</p>
        <p className="text-sm text-[#3d4558] mt-1">{cv.sousTitre}</p>
      </section>

      {/* Expériences */}
      <section className="mb-16">
        <h2 className="text-xs font-mono text-[#4a7db5] uppercase tracking-widest mb-8">
          Expériences
        </h2>
        <div className="space-y-8">
          {cv.experiences.map((e) => (
            <div key={e.entreprise + e.periode} className="flex gap-6">
              <div className="flex flex-col items-center pt-1.5">
                <div className="w-2 h-2 rounded-full bg-[#4a7db5] shrink-0" />
                <div className="w-px flex-1 bg-[#1e2330] mt-2" />
              </div>
              <div className="pb-8">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <h3 className="font-semibold text-[#e8ecf4]">{e.poste}</h3>
                  <span className="text-[#4a7db5] font-medium">{e.entreprise}</span>
                </div>
                <div className="flex gap-3 mb-3 text-xs text-[#3d4558]">
                  <span>{e.periode}</span>
                  <span>·</span>
                  <span>{e.type}</span>
                </div>
                <p className="text-sm text-[#7a8499] leading-relaxed">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="mb-16">
        <h2 className="text-xs font-mono text-[#4a7db5] uppercase tracking-widest mb-6">
          Stack technique
        </h2>
        <div className="flex flex-wrap gap-2">
          {cv.stack.map((t) => (
            <span
              key={t}
              className="text-sm px-3 py-1.5 rounded-lg border border-[#1e2330] bg-[#13161d] text-[#e8ecf4]"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Langues */}
      <section className="mb-16">
        <h2 className="text-xs font-mono text-[#4a7db5] uppercase tracking-widest mb-6">
          Langues
        </h2>
        <div className="flex gap-6">
          {cv.langues.map((l) => (
            <div key={l.langue}>
              <p className="text-[#e8ecf4] text-sm font-medium">{l.langue}</p>
              <p className="text-xs text-[#3d4558]">{l.niveau}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="p-6 rounded-xl border border-[#1e2330] bg-[#13161d]">
        <h2 className="text-xs font-mono text-[#4a7db5] uppercase tracking-widest mb-4">
          Contact
        </h2>
        <p className="text-sm text-[#7a8499]">
          Disponible pour des opportunités full remote à partir de juin 2026.
        </p>
        <a
          href="https://github.com/MickaWilk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-sm text-[#4a7db5] hover:text-[#6b9fd4] transition-colors"
        >
          GitHub →
        </a>
      </section>
    </div>
  );
}
