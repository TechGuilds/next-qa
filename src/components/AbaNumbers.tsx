/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AbaNumbers.module.css'

const AbaNumbers = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container01']}>
          <Container className={styles['container02']}>
            <Container className={styles['container03']}>
              <Text text={props.fields.text6} className={styles['text']} />
            </Container>
          </Container>
          <Container className={styles['container04']}>
            <Container className={styles['container05']}>
              <Container className={styles['container06']}>
                <Container className={styles['container07']}>
                  <Container className={styles['container08']}>
                    <Text text={props.fields.text15} />
                    <Container className={styles['container09']}>
                      <Text text={props.fields.text16} />
                      <Container className={styles['container10']}>
                        <Text text={props.fields.text17} />
                        <Text text={props.fields.text19} />
                        <Text
                          text={props.fields.text20}
                          className={styles['text05']}
                        />
                        <Text text={props.fields.text21} />
                        <Text text={props.fields.text22} />
                      </Container>
                      <Text text={props.fields.text23} />
                    </Container>
                    <Text text={props.fields.text24} />
                  </Container>
                </Container>
                <Container className={styles['container11']}>
                  <Container className={styles['container12']}>
                    <Text
                      text={props.fields.text29}
                      className={styles['text10']}
                    />
                  </Container>
                </Container>
              </Container>
            </Container>
            <Container className={styles['container13']}>
              <Container className={styles['container14']}>
                <Container className={styles['container15']}>
                  <Container className={styles['container16']}>
                    <Text
                      text={props.fields.text43}
                      className={styles['text11']}
                    />
                  </Container>
                </Container>
              </Container>
              <Container className={styles['container17']}>
                <Container className={styles['container18']}>
                  <Text
                    text={props.fields.text53}
                    className={styles['text12']}
                  />
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

AbaNumbers.defaultProps = {
  rootClassName: '',
  fields: {},
}

AbaNumbers.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AbaNumbers
