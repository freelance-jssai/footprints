import React, { ReactNode, FC } from 'react'
import { Seo, Header } from 'src/atoms'

interface IMeta {
  property: string
  content: string
}

interface IProps {
  children: ReactNode
  title: string
  meta?: IMeta[]
}

const Layout: FC<IProps> = ({ title, meta, children }) => {
  return (
    <React.Fragment>
      <Seo title={title} meta={meta} />
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </React.Fragment>
  )
}

export default Layout
