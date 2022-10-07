/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AmicaPanelOct7.module.css'

const AmicaPanelOct7 = (props) => {
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
            <Container
              bgImage={props.fields.bgImage2}
              className={styles['container3']}
            >
              <Text text={props.fields.text} className={styles['text']} />
              <Image
                src={props.fields.src}
                alt={props.fields.alt}
                className={styles['image']}
              />
            </Container>
            <Container
              bgImage={props.fields.bgImage3}
              className={styles['container4']}
            >
              <Text text={props.fields.text1} className={styles['text1']} />
            </Container>
            <Container
              bgImage={props.fields.bgImage4}
              className={styles['container5']}
            >
              <Container
                bgImage={props.fields.bgImage5}
                className={styles['container6']}
              >
                <Text text={props.fields.text2} className={styles['text2']} />
              </Container>
            </Container>
          </Container>
        </Container>
        <Container
          bgImage={props.fields.bgImage6}
          className={styles['container7']}
        >
          <Image
            src={props.fields.src1}
            alt={props.fields.alt1}
            className={styles['image1']}
          />
        </Container>
      </Container>
    </Container>
  )
}

AmicaPanelOct7.defaultProps = {
  fields: {},
}

AmicaPanelOct7.propTypes = {
  fields: PropTypes.object,
}

export default AmicaPanelOct7
