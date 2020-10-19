import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import usePropiedades from "../hooks/usePropiedades"
import PropiedadReview from "./propiedadPreview"
import listadoPropiedadesCSS from "../css/listadoPropiedades.module.css"

const ListadoPropiedades = () => {
  const resultado = usePropiedades()
  const [propiedades, guardarPropiedades] = useState([])

  useEffect(() => {
    guardarPropiedades(resultado)
  }, [])

  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Nuestras Propiedades
      </h2>

      <ul className={listadoPropiedadesCSS.propiedades}>
        {propiedades.map(propiedad => (
          <PropiedadReview key={propiedad.id} propiedad={propiedad} />
        ))}
      </ul>
    </>
  )
}

export default ListadoPropiedades
