/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, RichText } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AmicaDiscoverLife.module.css'

const AmicaDiscoverLife = (props) => {
  return (
    <Container>
      <Container bgImage className={styles['container']}>
        <Container
          bgImage={props.fields.bgImage}
          className={styles['container1']}
        >
          <Container
            bgImage={props.fields.bgImage1}
            className={styles['container2']}
          >
            <Text text={props.fields.text} className={styles['text']} />
          </Container>
          <Container
            bgImage={props.fields.bgImage3}
            className={styles['container3']}
          >
            <Text text={props.fields.text1} className={styles['text1']} />
            <RichText
              value={props.fields.value}
              className={styles['richtext']}
            />
            <Text text={props.fields.text2} className={styles['text2']} />
            <RichText
              value={props.fields.value1}
              className={styles['richtext1']}
            />
            <RichText
              value={props.fields.value2}
              className={styles['richtext2']}
            />
            <RichText
              value={props.fields.value3}
              className={styles['richtext3']}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

AmicaDiscoverLife.defaultProps = {
  fields: {},
}

AmicaDiscoverLife.propTypes = {
  fields: PropTypes.object,
}

export default AmicaDiscoverLife
