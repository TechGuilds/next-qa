/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AppleTiles.module.css'

const AppleTiles = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container01']}>
          <Container className={styles['container02']}>
            <Container className={styles['container03']}>
              <Container className={styles['container04']}>
                <Image
                  src={props.fields.src}
                  alt={props.fields.alt}
                  className={styles['image']}
                />
                <Text text={props.fields.text} className={styles['text']} />
              </Container>
              <Text text={props.fields.text1} className={styles['text1']} />
            </Container>
            <Container className={styles['container05']}>
              <Container className={styles['container06']}>
                <Text text={props.fields.text2} className={styles['text2']} />
                <Container className={styles['container07']}>
                  <Container className={styles['container08']}>
                    <Image
                      src={props.fields.src1}
                      alt={props.fields.alt1}
                      className={styles['image1']}
                    />
                  </Container>
                </Container>
              </Container>
              <Container className={styles['container09']}>
                <Text text={props.fields.text3} className={styles['text3']} />
                <Container className={styles['container10']}>
                  <Container className={styles['container11']}>
                    <Image
                      src={props.fields.src2}
                      alt={props.fields.alt2}
                      className={styles['image2']}
                    />
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>
          <Image
            src={props.fields.src3}
            alt={props.fields.alt3}
            className={styles['image3']}
          />
        </Container>
        <Container className={styles['container12']}>
          <Container className={styles['container13']}>
            <Container className={styles['container14']}>
              <Container className={styles['container15']}>
                <Image
                  src={props.fields.src4}
                  alt={props.fields.alt4}
                  className={styles['image4']}
                />
                <Container className={styles['container16']}>
                  <Text text={props.fields.text4} className={styles['text4']} />
                  <Text text={props.fields.text5} className={styles['text5']} />
                </Container>
              </Container>
            </Container>
            <Container className={styles['container17']}>
              <Container className={styles['container18']}>
                <Text text={props.fields.text6} className={styles['text6']} />
                <Container className={styles['container19']}>
                  <Container className={styles['container20']}>
                    <Image
                      src={props.fields.src5}
                      alt={props.fields.alt5}
                      className={styles['image5']}
                    />
                  </Container>
                </Container>
              </Container>
              <Container className={styles['container21']}>
                <Text text={props.fields.text7} className={styles['text7']} />
                <Container className={styles['container22']}>
                  <Container className={styles['container23']}>
                    <Image
                      src={props.fields.src6}
                      alt={props.fields.alt6}
                      className={styles['image6']}
                    />
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>
          <Image
            src={props.fields.src7}
            alt={props.fields.alt7}
            className={styles['image7']}
          />
          <Text text={props.fields.text8} className={styles['text8']} />
        </Container>
      </Container>
    </Container>
  )
}

AppleTiles.defaultProps = {
  rootClassName: '',
  fields: {},
}

AppleTiles.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AppleTiles
