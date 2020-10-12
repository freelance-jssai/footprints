import React, { FC, memo } from 'react'
import { Wrapper } from 'src/atoms'
import Logo from '../../images/FootprintsTech_svg.svg'
import Whatsapp from '../../images/whatsapp.svg'
import './style.scss'

const Header: FC = () => {
  return (
    <header>
      <Wrapper>
        <div className="logo">
          <Logo />
        </div>
        <div className="contact">
          <div className="whatsapp">
            <Whatsapp />
            <p className="h4 semi-bold">+91 9029-357-493</p>
          </div>
        </div>
      </Wrapper>
    </header>
  )
}

export default memo(Header)
