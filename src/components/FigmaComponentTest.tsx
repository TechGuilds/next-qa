/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  Button,
  Image,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './FigmaComponentTest.module.css'

const FigmaComponentTest = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Container className={styles['container2']}>
            <Text text={props.fields.text} className={styles['text']} />
            <Text text={props.fields.text1} className={styles['text1']} />
          </Container>
          <Container className={styles['container3']}>
            <Text text={props.fields.text2} className={styles['text2']} />
            <Container>
              <Button className={styles['button']} />
              <Text text={props.fields.text3} className={styles['text3']} />
            </Container>
          </Container>
        </Container>
        <Image
          alt={props.fields.alt}
          src={props.fields.src}
          className={styles['image']}
        />
      </Container>
    </Container>
  )
}

FigmaComponentTest.defaultProps = {
  rootClassName: '',
  fields: {},
}

FigmaComponentTest.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default FigmaComponentTest
