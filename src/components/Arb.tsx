/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  RichText,
  Image,
  Button,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import NewComponent from '../kajoo-components/NewComponent'
import styles from './Arb.module.css'

const Arb = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Text text={props.fields.text} className={styles['text']} />
        <RichText value={props.fields.value} className={styles['richtext']} />
        <Container className={styles['container1']}>
          <Image
            src={props.fields.src}
            alt={props.fields.alt}
            className={styles['image']}
          />
        </Container>
        <Container>
          <Button className={styles['button']} />
          <Image
            alt={props.fields.alt1}
            src={props.fields.src1}
            className={styles['image1']}
          />
        </Container>
      </Container>
      <NewComponent rootClassName="root-class-name" />
    </Container>
  )
}

Arb.defaultProps = {
  rootClassName: '',
  fields: {},
}

Arb.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default Arb
