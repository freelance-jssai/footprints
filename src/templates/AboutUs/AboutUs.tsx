import React, { FC, memo } from 'react'
import { Wrapper } from 'src/atoms'
import { graphql, useStaticQuery } from 'gatsby'
import './style.scss'

interface IProps {
  graphic: any
}

export const _AboutUs: FC<IProps> = ({ graphic }) => {
  return (
    <section className="about-us section">
      <Wrapper>
        <div className="about-graphic">
          <img src={graphic.about_us.publicURL} alt="about us" />
        </div>
        <div className="about-content">
          <h1 className="h1 bold">About Us</h1>
          <p className="h3 regular">
            A great output is a result of great teamwork and a great team is a
            result of strong individuals that contribute and play their part
            efficiently. Footprint tech is one such amalgamation of young minds
            that collaborate to offer the best platform for any business that is
            looking to make their online presence felt in this digital age.
          </p>
          <p className="h3 regular">
            We don’t service clients, we engage with them in their journey and
            work with them as a team. Every member of Footprint Tech takes a
            stake in the ownership of their respective roles as we believe
            passion drives productivity and efficiency.
          </p>
          <p className="h3 regular">
            If you are one such organisation wanting to take your business truly
            digital, you are already on the right track and we would love to
            collaborate with you. Ask us a question.
          </p>
        </div>
      </Wrapper>
    </section>
  )
}

const AboutUs: FC = () => {
  const graphic = useStaticQuery(graphql`
    {
      about_us: file(relativePath: { eq: "about_us.svg" }) {
        publicURL
      }
    }
  `)
  return <_AboutUs graphic={graphic} />
}

export default memo(AboutUs)
