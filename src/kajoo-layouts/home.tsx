/* eslint-disable */
// @ts-nocheck 
import { KajooLayoutFactory } from '@kajoo-ai/sitecore-nextjs';



import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = (props) => {
  return <Container className={styles['container']} />
}

export default Home

KajooLayoutFactory.registerLayout("Home", Home)