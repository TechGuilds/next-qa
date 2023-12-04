/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Button } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import BannerAndTwoImage1 from '../kajoo-components/BannerAndTwoImage1'
import styles from './Component1.module.css'

const Component1 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Text
        text={props.fields.text}
        tag="h1"
        className={` ${styles['text']} ${styles['header-default']} `}
      />
      <Text text={props.fields.text1} tag="p" />
      <Button
        link={props.fields.link}
        className={` ${styles['button']} ${styles['button-default']} `}
      />
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      />
      <BannerAndTwoImage1 rootClassName="root-class-name1" />
    </Container>
  )
}

Component1.defaultProps = {
  fields: {
    text: 'Heading',
    text1:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    text2: 'Button',
    link: '#',
  },
  rootClassName: '',
}

Component1.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Component1
