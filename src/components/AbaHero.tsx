/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  RichText,
  Dropdown,
  Link,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AbaHero.module.css'

const AbaHero = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Text text={props.fields.text2} tag="span" className={styles['text']} />
        <Text text={props.fields.text} tag="span" className={styles['text1']} />
        <RichText
          value={props.fields.value}
          className={` ${styles['richtext']} ${styles['richtext-default']} `}
        />
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Dropdown
            className={` ${styles['dropdown']} ${styles['dropdown-default']} `}
          />
          <Link
            href={props.fields.href}
            className={` ${styles['link']} ${styles['link-cta-link']} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

AbaHero.defaultProps = {
  rootClassName: '',
  fields: {},
}

AbaHero.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AbaHero
