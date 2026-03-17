// components/productos/ProductCard.tsx
import Image from "next/image"
import { DiagonalBadge } from "@/components/ui/DiagonalBadge"

export default function ProductCard({ producto, index, onOpen }) {
  return (
    <article
      onClick={onOpen}
      className="dc cri cursor-pointer"
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      <div className="relative h-[215px] overflow-hidden">
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          fill
          className="object-cover dc-img"
        />

        <div className="absolute inset-0 bg-[var(--img-ov)]" />
        <DiagonalBadge>{producto.categoria}</DiagonalBadge>

        <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold uppercase">
          {producto.nombre}
        </h3>
      </div>

      <div className="p-4 border-t border-[var(--bdr)]">
        <p className="text-sm text-[var(--t2)] line-clamp-2 mb-3">
          {producto.descripcion}
        </p>

        <div className="flex items-center gap-2">
          <span className="text-[10px] tracking-widest uppercase text-[var(--t4)]">
            Ver ficha técnica
          </span>
          <div className="flex-1 h-[1px] bg-[var(--bdr)]" />
          <span className="text-[var(--acc)]">→</span>
        </div>
      </div>

      <div className="dc-bar" />
    </article>
  )
}