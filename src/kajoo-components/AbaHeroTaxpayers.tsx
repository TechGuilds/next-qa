/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-nextjs'

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
          <Text text={props.text} tag="h1" className={styles['text']} />
          <Text text={props.text1} tag="span" className={styles['text1']} />
        </Container>
        <Container className={styles['container2']}>
          <Image
            src={props.src}
            alt={props.alt}
            className={` ${styles['image']} ${styles['image-default']} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

AbaHeroTaxpayers.defaultProps = {
  rootClassName: '',
  text: 'Cost to Taxpayers',
  text1:
    'The federal income tax exemption for credit unions sticks taxpayers with a hefty bill: nearly $24 billion over 10 years. But with no public accountability for their contributions to their communities, it’s fair to ask: What do taxpayers get in return?',
  src: 'https://www.reformcreditunions.com/wp-content/uploads/2021/08/tax-icon2.svg',
  alt: '',
}

AbaHeroTaxpayers.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
}

export default AbaHeroTaxpayers
