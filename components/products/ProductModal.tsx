"use client"

import { useState } from "react"
import HeroSection from "@/components/shared/HeroSection"
import ProductCard from "@/components/productos/ProductCard"
import ProductModal from "@/components/productos/ProductModal"
import Sidebar from "@/components/productos/Sidebar"
import MobileFilters from "@/components/productos/MobileFilters"
import { useProductos } from "@/hooks/useProductos"
import { PRODUCTOS } from "@/data/productos"

const CATS = [
  { key: "Todos", label: "Todos", tag: "ALL" },
  { key: "Vision", label: "Visión", tag: "VIS" },
  { key: "Datos", label: "Datos", tag: "DAT" },
  { key: "Test", label: "Soporte", tag: "TST" },
]

export default function ProductosPage() {
  const [filtro, setFiltro] = useState("Todos")
  const [selected, setSelected] = useState(null)

  const { filtrados, countFor } = useProductos(filtro)

  return (
    <div className="bg-[var(--bg)] text-[var(--t1)]">
      <HeroSection
        title="Nuestras soluciones"
        subtitle="Ingeniería de alto impacto"
        video="/products.mp4"
      />

      <div className="flex">
        <Sidebar
          filtro={filtro}
          setFiltro={setFiltro}
          countFor={countFor}
          CATS={CATS}
        />

        <main className="flex-1 p-10">
          <MobileFilters
            filtro={filtro}
            setFiltro={setFiltro}
            countFor={countFor}
            CATS={CATS}
          />

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtrados.map((p, i) => (
              <ProductCard
                key={p.id}
                producto={p}
                index={i}
                onOpen={() => setSelected(p)}
              />
            ))}
          </div>
        </main>
      </div>

      <ProductModal
        producto={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </div>
  )
}