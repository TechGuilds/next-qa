/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AppleIPhoneComponent1.module.css'

const AppleIPhoneComponent1 = (props) => {
  return (
    <Container>
      <Container bgImage className={styles['container']}>
        <Container
          bgImage={props.fields.bgImage}
          className={styles['container01']}
        >
          <Container
            bgImage={props.fields.bgImage1}
            className={styles['container02']}
          >
            <Text text={props.fields.text} className={styles['text']} />
            <Text text={props.fields.text1} className={styles['text1']} />
          </Container>
          <Text text={props.fields.text2} className={styles['text2']} />
          <Container
            bgImage={props.fields.bgImage2}
            className={styles['container03']}
          >
            <Container
              bgImage={props.fields.bgImage3}
              className={styles['container04']}
            >
              <Text text={props.fields.text4} className={styles['text3']} />
              <Container
                bgImage={props.fields.bgImage4}
                className={styles['container05']}
              >
                <Container
                  bgImage={props.fields.bgImage5}
                  className={styles['container06']}
                >
                  <Image
                    src={props.fields.src}
                    alt={props.fields.alt}
                    className={styles['image']}
                  />
                </Container>
              </Container>
            </Container>
            <Container
              bgImage={props.fields.bgImage6}
              className={styles['container07']}
            >
              <Text text={props.fields.text5} className={styles['text4']} />
              <Container
                bgImage={props.fields.bgImage7}
                className={styles['container08']}
              >
                <Container
                  bgImage={props.fields.bgImage8}
                  className={styles['container09']}
                >
                  <Image
                    src={props.fields.src1}
                    alt={props.fields.alt1}
                    className={styles['image1']}
                  />
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
        <Image
          src={props.fields.src2}
          alt={props.fields.alt2}
          className={styles['image2']}
        />
        <Container
          bgImage={props.fields.bgImage9}
          className={styles['container10']}
        />
      </Container>
    </Container>
  )
}

AppleIPhoneComponent1.defaultProps = {
  fields: {},
}

AppleIPhoneComponent1.propTypes = {
  fields: PropTypes.object,
}

export default AppleIPhoneComponent1
