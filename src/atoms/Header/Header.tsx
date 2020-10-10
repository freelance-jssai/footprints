import React, { FC, memo } from 'react'
import { Wrapper } from 'src/atoms'
import Logo from '../../images/FootprintsTech_svg.svg'
import './style.scss'

const Header: FC = () => {
  return (
    <header>
      <Wrapper>
        <div className="logo">
          <Logo />
        </div>
      </Wrapper>
    </header>
  )
}

export default memo(Header)
