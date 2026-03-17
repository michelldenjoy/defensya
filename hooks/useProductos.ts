// hooks/useProductos.ts
import { PRODUCTOS } from "@/data/productos"

export function useProductos(filtro: string) {
  const filtrados =
    filtro === "Todos"
      ? PRODUCTOS
      : PRODUCTOS.filter(p => p.categoria === filtro)

  const countFor = (k: string) =>
    k === "Todos"
      ? PRODUCTOS.length
      : PRODUCTOS.filter(p => p.categoria === k).length

  return { filtrados, countFor }
}