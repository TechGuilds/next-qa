/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, RichText } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AmicaBackToLife.module.css'

const AmicaBackToLife = (props) => {
  return (
    <Container>
      <Container bgImage className={styles['container']}>
        <Container
          bgImage={props.fields.bgImage}
          className={styles['container1']}
        >
          <Text text={props.fields.text} className={styles['text']} />
          <Container
            bgImage={props.fields.bgImage1}
            className={styles['container2']}
          >
            <RichText
              value={props.fields.value}
              className={styles['richtext']}
            />
          </Container>
          <Container
            bgImage={props.fields.bgImage2}
            className={styles['container3']}
          >
            <Container
              bgImage={props.fields.bgImage3}
              className={styles['container4']}
            >
              <Text text={props.fields.text1} className={styles['text1']} />
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

AmicaBackToLife.defaultProps = {
  fields: {},
}

AmicaBackToLife.propTypes = {
  fields: PropTypes.object,
}

export default AmicaBackToLife
