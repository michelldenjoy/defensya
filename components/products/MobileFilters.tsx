// components/productos/MobileFilters.tsx
import clsx from "clsx"

export default function MobileFilters({ filtro, setFiltro, countFor, CATS }) {
  return (
    <div className="def-mfilter flex overflow-x-auto border-b border-[var(--bdr)]">
      {CATS.map(cat => {
        const active = filtro === cat.key

        return (
          <button
            key={cat.key}
            onClick={() => setFiltro(cat.key)}
            className={clsx("mft px-4 py-3", active && "mfa")}
          >
            <div className="font-mono text-sm">
              {String(countFor(cat.key)).padStart(2, "0")}
            </div>
            <div className="text-[10px] uppercase">
              {cat.tag}
            </div>
          </button>
        )
      })}
    </div>
  )
}