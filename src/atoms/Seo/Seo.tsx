import React, { memo, FC } from 'react'
import { Helmet } from 'react-helmet'

interface IMeta {
  property: string
  content: string
}

interface IProps {
  title?: string
  meta?: IMeta[]
}
const Seo: FC<IProps> = ({ title = '', meta = [] }) => {
  return (
    <Helmet>
      <title>{title} | FootPrints Tech</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      {meta?.map((m, i) => (
        <meta key={i} property={m.property} content={m.content} />
      ))}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
  )
}

export default memo(Seo)
