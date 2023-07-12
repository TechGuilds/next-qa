/* eslint-disable */
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-react'

import { Helmet } from 'react-helmet'

import Component1 from '../../src/kajoo-components/Component1/index'
import './style.css'

const Home = (props) => {
  return (
    <Container className="home-root">
      <Helmet>
        <title>home</title>
        <meta property="og:description" content />
        <meta property="og:image" content />
        <meta property="og:title" content />
        <meta name="description" content />
        <meta name="title" content />
        <link rel="canonical" href />
      </Helmet>
      <Component1 rootClassName="component1-root-class-name" />
    </Container>
  )
}

export default Home
