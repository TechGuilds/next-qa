/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Button } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import Text from './Text'
import styles from './Component2.module.css'

const Component2 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Image
        src={props.src}
        className={` ${styles['image']} ${styles['image-default']} `}
      />
      <Text rootClassName="root-class-name" />
      <Button
        text={props.text2}
        className={` ${styles['button']} ${styles['button-default']} `}
      />
    </Container>
  )
}

Component2.defaultProps = {
  rootClassName: '',
  src: '/icons/default-imag.svg',
  text2: 'Button',
}

Component2.propTypes = {
  rootClassName: PropTypes.string,
  src: PropTypes.string,
  text2: PropTypes.string,
}

export default Component2
