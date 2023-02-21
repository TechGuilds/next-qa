/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ProductCardRepeater.module.css'

const ProductCardRepeater = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index}>
            <Container className={styles['container02']}>
              <Text
                text={item.fields.text6}
                tag="h1"
                className={styles['text']}
              />
              <Container className={styles['container03']}>
                <Image
                  src={item.fields.src2}
                  alt={item.fields.alt2}
                  className={` ${styles['image']} ${styles['acece83e7e5d4e62c6a6c']} `}
                />
                <Text
                  text={item.fields.text7}
                  tag="span"
                  className={styles['text1']}
                />
              </Container>
            </Container>
          </Container>
        ))}
      </Container>
      <Container className={styles['container04']}>
        <Container className={styles['container05']}>
          <Container className={styles['container06']}>
            <Container className={styles['container07']}>
              <Text text={props.fields.text} className={styles['text2']} />
              <Container className={styles['container08']}>
                <Text text={props.fields.text1} className={styles['text3']} />
              </Container>
            </Container>
            <Container className={styles['container09']}>
              <Container className={styles['container10']}>
                <Container className={styles['container11']}>
                  <Image
                    src={props.fields.src}
                    alt={props.fields.alt}
                    className={styles['image1']}
                  />
                  <Text text={props.fields.text2} className={styles['text4']} />
                </Container>
                <Container className={styles['container12']}>
                  <Container className={styles['container13']}>
                    <Text
                      text={props.fields.text3}
                      className={styles['text5']}
                    />
                    <Text
                      text={props.fields.text4}
                      className={styles['text6']}
                    />
                  </Container>
                </Container>
              </Container>
              <Container className={styles['container14']}>
                <Container className={styles['container15']}>
                  <Container className={styles['container16']}>
                    <Image
                      src={props.fields.src1}
                      alt={props.fields.alt1}
                      className={styles['image2']}
                    />
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
        <Container
          bgImage={props.fields.bgImage}
          className={styles['container17']}
        />
        <Container className={styles['container18']}>
          <Container className={styles['container19']} />
          <Text text={props.fields.text5} className={styles['text7']} />
        </Container>
      </Container>
    </Container>
  )
}

ProductCardRepeater.defaultProps = {
  rootClassName: '',
  fields: {},
}

ProductCardRepeater.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default ProductCardRepeater
