import React from 'react'
import CompCarousel from '../Carousel/carousel'
import Card from '../Card/card'
import Invision from '../Invision/Invision'

import { useSelector } from 'react-redux'

import './home.scss'

const Home = () => {
  const auth = useSelector(state => state.homeReducer.auth)

  return (
    <div id="home">
      {
        auth ?
          <Invision />
          :
          <>
            <CompCarousel />
            <Card />
          </>
      }
    </div>
  )
}

export default Home