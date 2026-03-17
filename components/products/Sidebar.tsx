// components/productos/Sidebar.tsx
import clsx from "clsx"

export default function Sidebar({ filtro, setFiltro, countFor, CATS }) {
  return (
    <aside className="def-sidebar">
      <div className="p-6 border-b border-[var(--bdr)] font-bold uppercase">
        Defensya
      </div>

      <div className="p-4 text-xs uppercase tracking-widest">
        Filtrar por
      </div>

      <nav>
        {CATS.map(cat => {
          const active = filtro === cat.key

          return (
            <button
              key={cat.key}
              onClick={() => setFiltro(cat.key)}
              className={clsx(
                "sf",
                active && "sa"
              )}
            >
              <span className="font-mono text-lg min-w-[36px]">
                {String(countFor(cat.key)).padStart(2, "0")}
              </span>

              <div className="flex flex-col">
                <span>{cat.label}</span>
                <span className="text-[10px] opacity-50">
                  {cat.tag}
                </span>
              </div>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}