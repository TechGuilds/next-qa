// @ts-nocheck 
import { KajooLayoutFactory } from 'lib/kajoo-layout-factory';
/* eslint-disable */

import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs'

import { Helmet } from 'react-helmet'

import styles from './amica2.module.css'

const Amica2 = (props) => {
  return (
    <Container tag="body" className={styles['root']}>
      <Helmet>
        <title>amica2</title>
        <meta property="og:description" content />
        <meta property="og:image" content />
        <meta property="og:title" content />
        <meta name="description" content />
        <meta name="title" content />
        <link rel="canonical" href />
      </Helmet>
      <Container tag="div" className={styles['container']}>
        <Placeholder
          name="kajoo-main"
          rendering={props.layoutData.sitecore.route}
        />
      </Container>
    </Container>
  )
}

export default Amica2

KajooLayoutFactory.registerLayout("Amica2", Amica2)