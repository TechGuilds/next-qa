// @ts-nocheck 
import { KajooLayoutFactory } from 'lib/kajoo-layout-factory';
/* eslint-disable */

import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = (props) => {
  return <Container className={styles['root']} />
}

export default Home

KajooLayoutFactory.registerLayout("Home", Home)