import React, { FC, memo } from 'react'
import { Wrapper } from 'src/atoms'
import { graphql, useStaticQuery } from 'gatsby'
import './style.scss'

interface IProps {
  graphic: any
}

export const _HomeBanner: FC<IProps> = ({ graphic }) => {
  return (
    <section className="home-banner section">
      <Wrapper>
        <div className="banner-content">
          <h1 className="h1 bold">Get digital solution for your idea</h1>
          <p className="h3 regular">
            Honest, righteous and to the point defines us, defines FootPrints
            Tech.
          </p>
          <div className="form-button">
            <a href="https://forms.gle/ikzmNASNVZEf3Tas9" target="_blank">
              <button type="button">Get a quote</button>
            </a>
          </div>
        </div>
        <div className="banner-graphic">
          <img src={graphic.banner.publicURL} alt="home banner" />
        </div>
      </Wrapper>
    </section>
  )
}

const HomeBanner: FC = () => {
  const graphic = useStaticQuery(graphql`
    {
      banner: file(relativePath: { eq: "home_banner.svg" }) {
        publicURL
      }
    }
  `)
  return <_HomeBanner graphic={graphic} />
}

export default memo(HomeBanner)
