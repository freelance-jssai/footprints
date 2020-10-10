import React, { FC, memo } from 'react'
import Wrapper from '../Wrapper/Wrapper'
import './style.scss'

const Footer: FC = () => {
  const date = new Date()
  return (
    <footer>
      <Wrapper>
        <p>&copy;&reg; {date.getFullYear()} All rights are reserved Footprints Tech</p>
      </Wrapper>
    </footer>
  )
}

export default memo(Footer)
