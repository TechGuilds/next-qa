/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Image,
  Text,
  RichText,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Poiuyt.module.css'

const Poiuyt = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container01']}>
          <Container className={styles['container02']}>
            <Image
              src={props.fields.src}
              alt={props.fields.alt}
              className={styles['image']}
            />
          </Container>
          <Container className={styles['container03']}>
            <Container className={styles['container04']}>
              <Container className={styles['container05']}>
                <Text text={props.fields.text} className={styles['text']} />
                <Text text={props.fields.text1} className={styles['text1']} />
              </Container>
              <RichText
                value={props.fields.value}
                className={styles['richtext']}
              />
            </Container>
            <Container className={styles['container06']}>
              <Container className={styles['container07']}>
                <Container className={styles['container08']}>
                  <Container className={styles['container09']}>
                    <Image
                      src={props.fields.src1}
                      alt={props.fields.alt1}
                      className={styles['image1']}
                    />
                  </Container>
                  <Text text={props.fields.text2} className={styles['text2']} />
                </Container>
                <Container className={styles['container10']}>
                  <Image
                    src={props.fields.src2}
                    alt={props.fields.alt2}
                    className={styles['image2']}
                  />
                </Container>
              </Container>
              <Container className={styles['container11']}>
                <Container className={styles['container12']}>
                  <Container className={styles['container13']}>
                    <Image
                      src={props.fields.src3}
                      alt={props.fields.alt3}
                      className={styles['image3']}
                    />
                  </Container>
                  <Text text={props.fields.text3} className={styles['text3']} />
                </Container>
                <Container className={styles['container14']}>
                  <Image
                    src={props.fields.src4}
                    alt={props.fields.alt4}
                    className={styles['image4']}
                  />
                </Container>
              </Container>
              <Container className={styles['container15']}>
                <Text text={props.fields.text4} className={styles['text4']} />
                <Container className={styles['container16']}>
                  <Container className={styles['container17']}>
                    <Image
                      src={props.fields.src5}
                      alt={props.fields.alt5}
                      className={styles['image5']}
                    />
                  </Container>
                  <Container className={styles['container18']}>
                    <Image
                      src={props.fields.src6}
                      alt={props.fields.alt6}
                      className={styles['image6']}
                    />
                  </Container>
                  <Container className={styles['container19']}>
                    <Image
                      src={props.fields.src7}
                      alt={props.fields.alt7}
                      className={styles['image7']}
                    />
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
        <Container className={styles['container20']}>
          <Image
            alt={props.fields.alt8}
            src={props.fields.src8}
            className={styles['image8']}
          />
        </Container>
      </Container>
    </Container>
  )
}

Poiuyt.defaultProps = {
  rootClassName: '',
  fields: {},
}

Poiuyt.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default Poiuyt
