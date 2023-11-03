// @ts-nocheck 
import { KajooLayoutFactory } from 'lib/kajoo-layout-factory';
/* eslint-disable */

import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import { Helmet } from 'react-helmet'

import MainNavigation from '../components/MainNavigation'
import HeroBanner from '../components/HeroBanner'
import IntroOneColumn from '../components/IntroOneColumn'
import DifferentiatorPanel from '../components/DifferentiatorPanel'
import ReverseDifferentiatorPanel from '../components/ReverseDifferentiatorPanel'
import BackgroundDifferentiatorPanel from '../components/BackgroundDifferentiatorPanel'
import CorporateFooter from '../components/CorporateFooter'
import styles from './amica.module.css'

const Amica = (props) => {
  return (
    <Container tag="body" className={styles['root']}>
      <Helmet>
        <title>amica</title>
        <meta property="og:description" content />
        <meta property="og:image" content />
        <meta property="og:title" content />
        <meta name="description" content />
        <meta name="title" content />
        <link rel="canonical" href />
      </Helmet>
      <Container tag="div" className={styles['container']}>
        <MainNavigation name="kajoo-main" rootClassName="root-class-name" />
        <HeroBanner name="kajoo-main" rootClassName="root-class-name" />
        <IntroOneColumn name="kajoo-main" rootClassName="root-class-name" />
        <DifferentiatorPanel
          name="kajoo-main"
          rootClassName="root-class-name"
        />
        <IntroOneColumn name="kajoo-main" rootClassName="root-class-name1" />
        <ReverseDifferentiatorPanel
          name="kajoo-main"
          rootClassName="root-class-name"
        />
        <BackgroundDifferentiatorPanel
          name="kajoo-main"
          rootClassName="root-class-name"
        />
        <ReverseDifferentiatorPanel
          name="kajoo-main"
          rootClassName="root-class-name1"
        />
        <BackgroundDifferentiatorPanel
          name="kajoo-main"
          rootClassName="root-class-name1"
        />
        <ReverseDifferentiatorPanel
          name="kajoo-main"
          rootClassName="root-class-name2"
        />
        <CorporateFooter name="kajoo-main" rootClassName="root-class-name" />
      </Container>
    </Container>
  )
}

export default Amica

KajooLayoutFactory.registerLayout("Amica", Amica)