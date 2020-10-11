import React, { FC } from 'react'
import { Layout } from 'src/molecules'
import { HomeBanner, AboutUs, Services } from 'src/templates'

const Home: FC = () => {
  return (
    <div>
      <Layout
        title="Home"
        meta={[
          {
            property: 'title',
            content: 'FootPrints Tech'
          },
          {
            property: 'image',
            content:
              'https://res.cloudinary.com/dfiywgv6u/image/upload/v1596086104/footprintstech_cbajxc.png'
          },
          {
            property: 'description',
            content:
              'Get digital solution for your idea, Honest, righteous and to the point defines us, defines FootPrints Tech.'
          },
          {
            property: 'keywords',
            content:
              'app, website, development, app development, website development'
          },
          {
            property: 'og:title',
            content: 'FootPrints Tech'
          },
          {
            property: 'og:image',
            content:
              'https://res.cloudinary.com/dfiywgv6u/image/upload/v1596086104/footprintstech_cbajxc.png'
          },
          {
            property: 'og:description',
            content:
              'Get digital solution for your idea, Honest, righteous and to the point defines us, defines FootPrints Tech.'
          },
          {
            property: 'og:keywords',
            content:
              'app, website, development, app development, website development'
          }
        ]}
      >
        <HomeBanner />
        <AboutUs />
        <Services />
      </Layout>
    </div>
  )
}

export default Home
