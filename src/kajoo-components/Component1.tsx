/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Button } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component1.module.css'

const Component1 = (props) => {
  return (
    <Container
      className={` ${styles['container']} ${styles[props.rootClassName]} `}
    >
      <Image
        src="https://app.kajoo.ai/icons/default-imag.svg"
        alt="default-kajoo-image"
        className={'image-default'}
      />
      <Button text={props.fields.text} link="#" className={'button-default'} />
    </Container>
  )
}

Component1.defaultProps = {
  fields: {
    text: 'Erin Test Feature 2',
  },
  rootClassName: '',
}

Component1.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default Component1
