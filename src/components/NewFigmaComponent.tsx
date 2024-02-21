/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigmaComponent.module.css'

const NewFigmaComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Image
        src={props.fields.src}
        alt={props.fields.alt}
        className={'image-default'}
      />
    </Container>
  )
}

NewFigmaComponent.defaultProps = {
  fields: {
    src: 'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/-pBf1g4PU9JsSgmmvEiiJ.png',
    alt: 'image-asset',
  },
  rootClassName: '',
}

NewFigmaComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default NewFigmaComponent
