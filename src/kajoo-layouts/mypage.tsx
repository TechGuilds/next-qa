// @ts-nocheck 
import { KajooLayoutFactory } from 'lib/kajoo-layout-factory';
/* eslint-disable */

import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import { Helmet } from 'react-helmet'

import MyFirstComp from '../components/MyFirstComp'
import styles from './mypage.module.css'

const MyPage = (props) => {
  return (
    <Container className={styles['root']}>
      <Helmet>
        <title>my page</title>
        <meta property="og:description" content />
        <meta property="og:image" content />
        <meta property="og:title" content />
        <meta name="description" content />
        <meta name="title" content />
        <link rel="canonical" href />
      </Helmet>
      <MyFirstComp rootClassName="root-class-name" />
    </Container>
  )
}

export default MyPage

KajooLayoutFactory.registerLayout("MyPage", MyPage)