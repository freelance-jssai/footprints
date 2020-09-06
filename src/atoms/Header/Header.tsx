import React, { FC, memo } from 'react'
import { Wrapper } from 'src/atoms'
import { graphql, useStaticQuery } from 'gatsby'
import './style.scss'

const Header: FC = () => {
  const graphic = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "footprintstech.png" }) {
        publicURL
      }
    }
  `)
  return (
    <header>
      <Wrapper>
        <div className="logo">
          <img src={graphic.logo.publicURL} alt="footprints tech" />
        </div>
      </Wrapper>
    </header>
  )
}

export default memo(Header)
