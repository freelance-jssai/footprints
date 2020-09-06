import React, { memo, ReactNode, FC } from 'react'
import './style.scss'

interface IProps {
  children: ReactNode
}
const Wrapper: FC<IProps> = ({ children }) => {
  return <div className="wrapper">{children}</div>
}

export default memo(Wrapper)
