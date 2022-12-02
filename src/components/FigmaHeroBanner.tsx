/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './FigmaHeroBanner.module.css'

const FigmaHeroBanner = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Container className={styles['container2']}>
            <Text text={props.fields.text} className={styles['text']} />
            <Text text={props.fields.text1} className={styles['text1']} />
          </Container>
          <Container className={styles['container3']}>
            <Container className={styles['container4']}>
              <Container className={styles['container5']}>
                <Text text={props.fields.text2} className={styles['text2']} />
                <Container className={styles['container6']}>
                  <Image
                    alt={props.fields.alt}
                    src={props.fields.src}
                    className={styles['image']}
                  />
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
        <Image
          src={props.fields.src1}
          alt={props.fields.text}
          className={styles['image1']}
        />
      </Container>
    </Container>
  )
}

FigmaHeroBanner.defaultProps = {
  rootClassName: '',
  fields: {},
}

FigmaHeroBanner.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default FigmaHeroBanner
