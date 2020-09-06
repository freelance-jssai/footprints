import React, { FC, memo, useEffect } from 'react'
import './style.scss'

interface IProps {
  title: string
  description: string
  graphic: string
  id?: string
}

const ServiceCard: FC<IProps> = ({
  title = '',
  description = '',
  graphic = '',
  id = 'card'
}) => {
  useEffect(
    function handleIntersectionObserval() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
      const target: any = document.querySelector(`#${id}`)
      const callback = (entries: any[]) => {
        if (entries[0] && entries[0].isIntersecting) {
          target.style.opacity = 1
        }
      }
      const observer = new IntersectionObserver(callback, options)
      observer.observe(target)
      return () => {
        if (observer) {
          observer.unobserve(target)
          observer.disconnect()
        }
      }
    },
    [id]
  )

  return (
    <div className="card section" id={id}>
      <div className="graphic">
        <img src={graphic} alt={title} />
      </div>
      <div className="content">
        <h2 className="h2 semi-bold">{title}</h2>
        <p className="h3 regular">{description}</p>
      </div>
    </div>
  )
}

export default memo(ServiceCard)
