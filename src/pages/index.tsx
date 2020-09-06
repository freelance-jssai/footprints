import React, { FC } from 'react'
import { Layout } from 'src/molecules'
import { HomeBanner, AboutUs, Services, ContactUs } from 'src/templates'

const Home: FC = () => {
  return (
    <div>
      <Layout
        title="Home"
        meta={[
          {
            property: 'og:description',
            content: ''
          },
          {
            property: 'og.keywords',
            content: ''
          }
        ]}
      >
        <HomeBanner />
        <ContactUs />
        <AboutUs />
        <Services />
      </Layout>
    </div>
  )
}

export default Home