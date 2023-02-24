/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Repeat3.module.css'

const Repeat3 = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']} />
      <Container className={styles['container01']}>
        {props.fields.items.map((item, index) => (
          <Container key={index}>
            <Container className={styles['container03']}>
              <Container
                className={` ${styles['container04']} ${styles['acece83e7e5d4e62c6a6b']} `}
              >
                <Container className={styles['container05']}>
                  <Image
                    src={item.fields.src}
                    className={` ${styles['image']} ${styles['acece83e7e5d4e62c6a6c']} `}
                  />
                  <Container
                    className={` ${styles['container06']} ${styles['acece83e7e5d4e62c6a6b']} `}
                  >
                    <Container className={styles['container07']}>
                      <Container className={styles['container08']}>
                        <Image
                          src={item.fields.src1}
                          className={` ${styles['image1']} ${styles['acece83e7e5d4e62c6a6c']} `}
                        />
                        <Text
                          text={item.fields.text2}
                          className={` ${styles['text']} ${styles['acece83e7e5d4e62c6a60']} `}
                        />
                        <Text
                          text={item.fields.text3}
                          className={` ${styles['text1']} ${styles['acece83e7e5d4e62c6a60']} `}
                        />
                      </Container>
                      <Container
                        className={` ${styles['container09']} ${styles['acece83e7e5d4e62c6a6b']} `}
                      >
                        <Image
                          src={item.fields.src2}
                          className={` ${styles['image2']} ${styles['acece83e7e5d4e62c6a6c']} `}
                        />
                        <Text
                          text={item.fields.text4}
                          className={` ${styles['text2']} ${styles['acece83e7e5d4e62c6a60']} `}
                        />
                        <Text
                          text={item.fields.text5}
                          className={` ${styles['text3']} ${styles['acece83e7e5d4e62c6a60']} `}
                        />
                      </Container>
                    </Container>
                  </Container>
                </Container>
                <Text
                  text={item.fields.text}
                  className={` ${styles['text4']} ${styles['acece83e7e5d4e62c6a60']} `}
                />
                <Text
                  text={item.fields.text1}
                  className={` ${styles['text5']} ${styles['acece83e7e5d4e62c6a60']} `}
                />
              </Container>
            </Container>
          </Container>
        ))}
      </Container>
    </Container>
  )
}

Repeat3.defaultProps = {
  rootClassName: '',
  fields: {},
}

Repeat3.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default Repeat3
