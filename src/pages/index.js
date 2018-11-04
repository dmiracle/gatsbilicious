import React from "react"
import Footrino from '../components/footer/footer'
import Headerino from '../components/header/header'
import './index.sass'

export default () => {
  return(
    <div>
      <Headerino/>
        <p>here's some text woo, and here's a footer:</p>
      <Footrino/>
    </div>
  )
}