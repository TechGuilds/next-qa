/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AbaHeroTaxpayers.module.css'

const AbaHeroTaxpayers = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Text text={props.fields.text} tag="h1" className={styles['text']} />
          <Text
            text={props.fields.text1}
            tag="span"
            className={styles['text1']}
          />
        </Container>
        <Container className={styles['container2']}>
          <Image
            src={props.fields.src}
            alt={props.fields.alt}
            className={` ${styles['image']} ${styles['image-default']} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

AbaHeroTaxpayers.defaultProps = {
  rootClassName: '',
  fields: {},
}

AbaHeroTaxpayers.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AbaHeroTaxpayers
