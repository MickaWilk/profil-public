import Link from "next/link";

const sections = [
  {
    href: "/gouts",
    label: "Goûts",
    description: "Films · Séries · Animes · Jeux vidéo",
    accent: "#4a7db5",
  },
  {
    href: "/projets",
    label: "Projets",
    description: "Ce que j'ai construit",
    accent: "#4a7c6b",
  },
  {
    href: "/cv",
    label: "CV",
    description: "Parcours · Stack · Expériences",
    accent: "#5c3a6b",
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      {/* Hero */}
      <section className="mb-24">
        <div className="mb-4">
          <span className="text-xs font-mono text-[#4a7db5] tracking-widest uppercase">
            Bordeaux · Disponible juin 2026
          </span>
        </div>
        <h1 className="text-5xl font-bold text-[#e8ecf4] tracking-tight mb-4">
          Micka Wilk
        </h1>
        <p className="text-xl text-[#7a8499] mb-2">Ingénieur IA</p>
        <p className="text-[#3d4558] max-w-lg mt-6 leading-relaxed">
          Je construis des outils IA, des interfaces qui tiennent la route, et des projets
          qui partent d&apos;une vraie frustration. Spécialité : LLM, RAG, automatisation,
          et dashboards React qui font sens.
        </p>
      </section>

      {/* Cards sections */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group block p-6 rounded-xl border border-[#1e2330] bg-[#13161d] hover:bg-[#1a1e28] hover:border-[#2a3045] transition-all"
          >
            <div
              className="text-xs font-mono mb-3 tracking-widest uppercase"
              style={{ color: s.accent }}
            >
              {s.label}
            </div>
            <p className="text-sm text-[#7a8499] group-hover:text-[#a0aabb] transition-colors">
              {s.description}
            </p>
          </Link>
        ))}
      </section>

      {/* Stack rapide */}
      <section className="mt-20 pt-20 border-t border-[#1e2330]">
        <p className="text-xs text-[#3d4558] mb-4 uppercase tracking-widest">Stack</p>
        <div className="flex flex-wrap gap-2">
          {["Python", "React", "Next.js", "Supabase", "Cloudflare Workers", "LLM / RAG", "ComfyUI"].map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full border border-[#1e2330] text-[#7a8499]"
            >
              {t}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
