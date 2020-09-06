import React, { FC, memo } from 'react'
import { Wrapper } from 'src/atoms'
import './style.scss'

const ContactUs: FC = () => {
  return (
    <section className="contact-us">
      <Wrapper>
        <div className="form">
          <div className="heading">
            <h1 className="h1 bold">Contact Us</h1>
          </div>
          <div className="form-group">
            <label className="h4 regular" htmlFor="fullname">
              Fullname
            </label>
            <input type="text" id="fullname" placeholder="Enter Fullname" />
          </div>
          <div className="form-group">
            <label className="h4 regular" htmlFor="email">
              Email ID
            </label>
            <input type="text" id="email" placeholder="Enter Email ID" />
          </div>
          <div className="form-group">
            <label className="h4 regular" htmlFor="phone">
              Phone
            </label>
            <input type="text" id="phone" placeholder="Enter Contact Number" />
          </div>
          <div className="form-button">
            <button type="button">Submit</button>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default memo(ContactUs)
