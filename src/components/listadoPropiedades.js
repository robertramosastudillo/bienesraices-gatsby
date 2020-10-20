import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import usePropiedades from "../hooks/usePropiedades"
import PropiedadReview from "./propiedadPreview"
import listadoPropiedadesCSS from "../css/listadoPropiedades.module.css"
import useFiltro from "../hooks/useFiltro"

const ListadoPropiedades = () => {
  const resultado = usePropiedades()
  const [propiedades] = useState(resultado)
  const [filtradas, guardarFiltradas] = useState([])

  // Filtrado de propiedades
  const { categoria, FiltroUI } = useFiltro()
  console.log(categoria)

  useEffect(() => {
    if (categoria) {
      const filro = propiedades.filter(
        propiedad => propiedad.categoria.nombre === categoria
      )
      guardarFiltradas(filro)
    } else {
      guardarFiltradas(propiedades)
    }
  }, [categoria, propiedades])

  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Nuestras Propiedades
      </h2>

      {FiltroUI()}

      <ul className={listadoPropiedadesCSS.propiedades}>
        {filtradas.map(propiedad => (
          <PropiedadReview key={propiedad.id} propiedad={propiedad} />
        ))}
      </ul>
    </>
  )
}

export default ListadoPropiedades
