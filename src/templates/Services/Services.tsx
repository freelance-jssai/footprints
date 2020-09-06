import React, { FC, memo } from 'react'
import { Wrapper, ServiceCard } from 'src/atoms'
import { graphql, useStaticQuery } from 'gatsby'
import './style.scss'

interface IProps {
  graphic: any
}

interface ISerices {
  title: string
  description: string
  graphic: string
}

export const _Services: FC<IProps> = ({ graphic }) => {
  const services: ISerices[] = [
    {
      title: 'Web Development',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever
    since the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book`,
      graphic: graphic.website.publicURL
    },
    {
      title: 'Mobile application',
      description: `We design innovative and custom mobile apps that engagement and
      make your customers' life simple`,
      graphic: graphic.mobile.publicURL
    },
    {
      title: 'UX design',
      description: `We thrive to bring a simple yet effective user experience for your
      customers`,
      graphic: graphic.ux.publicURL
    },
    {
      title: 'SEO',
      description: `We not only make your website beautiful but also reachable to the
      masses`,
      graphic: graphic.seo.publicURL
    },
    {
      title: 'SMO',
      description: `We understand your audience and help your social media pages get
      followed by life minded people`,
      graphic: graphic.smo.publicURL
    },
    {
      title: 'Graphic design',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book.`,
      graphic: graphic.design.publicURL
    },
    {
      title: 'Content/ Copywriting',
      description: `We offer your platforms a voice that echoes with your ideas and
      business`,
      graphic: graphic.content.publicURL
    }
  ]
  return (
    <section className="services section">
      <Wrapper>
        <div className="heading">
          <h1 className="h1 bold">Our Services</h1>
          <p className="h3 regular">
            We carry the right arsenal to take your business online and design
            the best experience for your customers
          </p>
        </div>
        <div className="services-list">
          {services.map((s, i) => {
            return (
              <div className="card-container" key={i}>
                <ServiceCard
                  title={s.title}
                  description={s.description}
                  graphic={s.graphic}
                  id={`card-${i}`}
                />
              </div>
            )
          })}
        </div>
      </Wrapper>
    </section>
  )
}

const Services: FC = () => {
  const graphic = useStaticQuery(graphql`
    {
      website: file(relativePath: { eq: "service_website.svg" }) {
        publicURL
      }
      mobile: file(relativePath: { eq: "service_mobile.svg" }) {
        publicURL
      }
      seo: file(relativePath: { eq: "service_seo.svg" }) {
        publicURL
      }
      smo: file(relativePath: { eq: "service_smo.svg" }) {
        publicURL
      }
      design: file(relativePath: { eq: "service_design.svg" }) {
        publicURL
      }
      ux: file(relativePath: { eq: "service_ux.svg" }) {
        publicURL
      }
      content: file(relativePath: { eq: "service_content.svg" }) {
        publicURL
      }
    }
  `)
  return <_Services graphic={graphic} />
}

export default memo(Services)
