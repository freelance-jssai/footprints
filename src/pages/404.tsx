import React, { FC } from 'react'
import { Layout } from 'src/molecules'
import { Wrapper } from 'src/atoms'
import PageNotFoundGraphic from '../images/page_not_found.svg'
import '../styles/pages/pagenotfound.scss'

const PageNotFound: FC = () => {
  return (
    <Layout
      title="404 | Page Not Found"
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
      <section className="page-not-found section">
        <Wrapper>
          <div className="form-button">
            <a href="/" title="Home">
              <button type="button">Home</button>
            </a>
          </div>
          <PageNotFoundGraphic />
        </Wrapper>
      </section>
    </Layout>
  )
}

export default PageNotFound
