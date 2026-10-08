const areas = [
  {
    nombre: "Directorio de trabajo",
    detalle: "Los archivos que editas en tu PC.",
    color: "border-amber-400 bg-amber-50 dark:bg-amber-950/40",
  },
  {
    nombre: "Staging (índice)",
    detalle: "Los cambios elegidos para el próximo commit.",
    color: "border-sky-400 bg-sky-50 dark:bg-sky-950/40",
  },
  {
    nombre: "Repositorio local",
    detalle: "El historial de commits guardado en .git.",
    color: "border-emerald-400 bg-emerald-50 dark:bg-emerald-950/40",
  },
  {
    nombre: "GitHub (remoto)",
    detalle: "Una copia del repositorio en la nube.",
    color: "border-violet-400 bg-violet-50 dark:bg-violet-950/40",
  },
];

const pasos = ["git add", "git commit", "git push"];

const comandos = [
  { cmd: "git init", desc: "Crea un repositorio nuevo en la carpeta actual." },
  { cmd: "git status", desc: "Muestra qué archivos han cambiado." },
  { cmd: "git add <archivo>", desc: "Pasa cambios al staging." },
  { cmd: 'git commit -m "mensaje"', desc: "Guarda una foto del proyecto en el historial." },
  { cmd: "git switch -c <rama>", desc: "Crea una rama nueva y se cambia a ella." },
  { cmd: "git push", desc: "Sube tus commits a GitHub." },
  { cmd: "git pull", desc: "Descarga y une los cambios de GitHub." },
  { cmd: "git log --oneline", desc: "Lista el historial de commits." },
];

export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-4xl px-6 py-16 sm:px-10">
        <header className="mb-14">
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
            ¿Qué es Git y qué es GitHub?
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Se usan juntos, pero no son lo mismo: Git es la herramienta que guarda
            el historial de tu proyecto, y GitHub es un sitio web donde compartes
            ese historial.
          </p>
        </header>

        <section className="mb-14 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-white p-6 dark:border-white/15 dark:bg-zinc-900">
            <h2 className="text-2xl font-semibold text-orange-600">Git</h2>
            <ul className="mt-4 space-y-2 text-zinc-700 dark:text-zinc-300">
              <li>• Programa que se instala en tu PC.</li>
              <li>• Guarda versiones (commits) de tus archivos.</li>
              <li>• Permite trabajar en ramas paralelas.</li>
              <li>• Funciona sin internet.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-6 dark:border-white/15 dark:bg-zinc-900">
            <h2 className="text-2xl font-semibold text-violet-600 dark:text-violet-400">GitHub</h2>
            <ul className="mt-4 space-y-2 text-zinc-700 dark:text-zinc-300">
              <li>• Servicio web que aloja repositorios Git.</li>
              <li>• Copia de seguridad en la nube.</li>
              <li>• Colaboración: pull requests, issues, revisiones.</li>
              <li>• Necesita internet y una cuenta.</li>
            </ul>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-zinc-50">
            El camino de un cambio
          </h2>
          <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
            {areas.map((area, i) => (
              <div key={area.nombre} className="contents">
                <div className={`flex-1 rounded-xl border-2 p-4 ${area.color}`}>
                  <p className="font-semibold text-black dark:text-zinc-50">{area.nombre}</p>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{area.detalle}</p>
                </div>
                {i < pasos.length && (
                  <div className="flex flex-col items-center text-zinc-500">
                    <code className="whitespace-nowrap rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-xs dark:bg-white/[.08]">
                      {pasos[i]}
                    </code>
                    <span className="text-xl md:-rotate-90 md:mt-1">↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-zinc-500">
            Las tres primeras áreas son Git en tu PC; solo <code>git push</code> llega a GitHub.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-zinc-50">
            Ramas: líneas de trabajo paralelas
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-black/10 bg-white p-6 dark:border-white/15 dark:bg-zinc-900">
            <svg viewBox="0 0 560 150" className="min-w-[480px] w-full" role="img" aria-label="Diagrama de ramas: main y una rama que se separa y vuelve a unirse">
              <line x1="40" y1="40" x2="520" y2="40" className="stroke-emerald-500" strokeWidth="4" />
              <path d="M160 40 C 200 40, 200 110, 240 110 L 360 110 C 400 110, 400 40, 440 40" fill="none" className="stroke-sky-500" strokeWidth="4" />
              {[40, 160, 440, 520].map((x) => (
                <circle key={x} cx={x} cy="40" r="10" className="fill-emerald-500" />
              ))}
              {[240, 360].map((x) => (
                <circle key={x} cx={x} cy="110" r="10" className="fill-sky-500" />
              ))}
              <text x="40" y="20" className="fill-zinc-600 dark:fill-zinc-400" fontSize="14">main</text>
              <text x="240" y="140" className="fill-zinc-600 dark:fill-zinc-400" fontSize="14">pagina-git-github</text>
              <text x="440" y="20" className="fill-zinc-600 dark:fill-zinc-400" fontSize="14" textAnchor="middle">merge</text>
            </svg>
          </div>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Una rama te deja probar cambios sin tocar <code>main</code>. Cuando están listos,
            se unen (merge), normalmente mediante un pull request en GitHub.
          </p>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-zinc-50">
            Comandos básicos
          </h2>
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white dark:border-white/15 dark:bg-zinc-900">
            {comandos.map((c) => (
              <div
                key={c.cmd}
                className="flex flex-col gap-1 border-b border-black/5 px-5 py-3 last:border-0 sm:flex-row sm:items-center sm:gap-6 dark:border-white/10"
              >
                <code className="font-mono text-sm text-black sm:w-56 sm:shrink-0 dark:text-zinc-50">{c.cmd}</code>
                <span className="text-zinc-600 dark:text-zinc-400">{c.desc}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
