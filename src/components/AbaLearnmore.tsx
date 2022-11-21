/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  Image,
  RichText,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AbaLearnmore.module.css'

const AbaLearnmore = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container01']}>
          <Container className={styles['container02']}>
            <Text text={props.fields.text3} className={styles['text']} />
          </Container>
        </Container>
        <Container className={styles['container03']}>
          <Container className={styles['container04']}>
            <Container className={styles['container05']}>
              <Container className={styles['container06']}>
                <Container className={styles['container07']}>
                  <Container className={styles['container08']}>
                    <Text
                      text={props.fields.text19}
                      className={styles['text1']}
                    />
                  </Container>
                </Container>
                <Container className={styles['container09']}>
                  <Container
                    className={` ${styles['container10']} ${styles['container-test']} `}
                  >
                    <Container className={styles['container11']}>
                      <Container className={styles['container12']}>
                        <Image
                          src={props.fields.src}
                          alt={props.fields.alt}
                          className={` ${styles['image']} ${styles['image-default']} `}
                        />
                      </Container>
                      <Container className={styles['container13']}>
                        <RichText
                          value={props.fields.value1}
                          className={styles['richtext']}
                        />
                        <Text
                          text={props.fields.text25}
                          className={styles['text2']}
                        />
                      </Container>
                    </Container>
                  </Container>
                </Container>
                <Container className={styles['container14']}>
                  <Container className={styles['container15']}>
                    <Container className={styles['container16']}>
                      <Container className={styles['container17']}>
                        <Image
                          src={props.fields.src1}
                          alt={props.fields.alt1}
                          className={` ${styles['image1']} ${styles['image-default']} `}
                        />
                      </Container>
                      <Container className={styles['container18']}>
                        <RichText
                          value={props.fields.value3}
                          className={styles['richtext1']}
                        />
                        <Text
                          text={props.fields.text31}
                          className={styles['text3']}
                        />
                      </Container>
                    </Container>
                  </Container>
                </Container>
                <Container className={styles['container19']}>
                  <Container className={styles['container20']}>
                    <Container className={styles['container21']}>
                      <Container className={styles['container22']}>
                        <Image
                          src={props.fields.src2}
                          alt={props.fields.alt2}
                          className={` ${styles['image2']} ${styles['image-default']} `}
                        />
                      </Container>
                      <Container className={styles['container23']}>
                        <RichText
                          value={props.fields.value5}
                          className={styles['richtext2']}
                        />
                        <Text
                          text={props.fields.text37}
                          className={styles['text4']}
                        />
                      </Container>
                    </Container>
                  </Container>
                </Container>
                <Container className={styles['container24']}>
                  <Container className={styles['container25']}>
                    <Container className={styles['container26']}>
                      <Container className={styles['container27']}>
                        <Image
                          src={props.fields.src3}
                          alt={props.fields.alt3}
                          className={` ${styles['image3']} ${styles['image-default']} `}
                        />
                      </Container>
                      <Container className={styles['container28']}>
                        <RichText
                          value={props.fields.value7}
                          className={styles['richtext3']}
                        />
                        <Text
                          text={props.fields.text43}
                          className={styles['text5']}
                        />
                      </Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>
            <Container className={styles['container29']}>
              <Container className={styles['container30']}>
                <Container className={styles['container31']}>
                  <Container className={styles['container32']}>
                    <Text
                      text={props.fields.text53}
                      className={styles['text6']}
                    />
                  </Container>
                </Container>
                <Container className={styles['container33']}>
                  <Container className={styles['container34']}>
                    <Container className={styles['container35']}>
                      <Container className={styles['container36']}>
                        <Container className={styles['container37']}>
                          <Text
                            text={props.fields.text}
                            tag="span"
                            className={styles['text7']}
                          />
                        </Container>
                      </Container>
                    </Container>
                    <Container className={styles['container38']}>
                      <Container className={styles['container39']}>
                        <RichText
                          value={props.fields.value9}
                          className={styles['richtext4']}
                        />
                      </Container>
                    </Container>
                    <Container className={styles['container40']}>
                      <Container className={styles['container41']}>
                        <Container className={styles['container42']}>
                          <li className={styles['li']}>
                            <Text
                              text={props.fields.text84}
                              className={styles['text8']}
                            />
                          </li>
                        </Container>
                      </Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

AbaLearnmore.defaultProps = {
  rootClassName: '',
  fields: {},
}

AbaLearnmore.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AbaLearnmore
