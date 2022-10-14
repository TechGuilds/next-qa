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

import styles from './AppleFooter.module.css'

const AppleFooter = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Image
          alt={props.fields.alt}
          src={props.fields.src}
          className={styles['image']}
        />
        <Container className={styles['container01']}>
          <Container className={styles['container02']}>
            <Text text={props.fields.text} className={styles['text']} />
            <Container className={styles['container03']}>
              <RichText
                value={props.fields.value1}
                className={styles['richtext']}
              />
            </Container>
          </Container>
          <Container className={styles['container04']}>
            <Container className={styles['container05']}>
              <Text text={props.fields.text1} className={styles['text01']} />
              <Container className={styles['container06']}>
                <RichText
                  value={props.fields.value2}
                  className={styles['richtext01']}
                />
              </Container>
            </Container>
            <Container className={styles['container07']}>
              <Text text={props.fields.text2} className={styles['text02']} />
              <Container className={styles['container08']}>
                <RichText
                  value={props.fields.value3}
                  className={styles['richtext02']}
                />
              </Container>
            </Container>
          </Container>
          <Container className={styles['container09']}>
            <Text text={props.fields.text3} className={styles['text03']} />
            <Container className={styles['container10']}>
              <RichText
                value={props.fields.value4}
                className={styles['richtext03']}
              />
            </Container>
          </Container>
          <Container className={styles['container11']}>
            <Container className={styles['container12']}>
              <Text text={props.fields.text4} className={styles['text04']} />
              <Container className={styles['container13']}>
                <RichText
                  value={props.fields.value5}
                  className={styles['richtext04']}
                />
              </Container>
            </Container>
            <Container className={styles['container14']}>
              <Text text={props.fields.text5} className={styles['text05']} />
              <Container className={styles['container15']}>
                <RichText
                  value={props.fields.value6}
                  className={styles['richtext05']}
                />
              </Container>
            </Container>
            <Container className={styles['container16']}>
              <Text text={props.fields.text6} className={styles['text06']} />
              <Container className={styles['container17']}>
                <RichText
                  value={props.fields.value7}
                  className={styles['richtext06']}
                />
              </Container>
            </Container>
            <Container className={styles['container18']}>
              <Text text={props.fields.text7} className={styles['text07']} />
              <Container className={styles['container19']}>
                <RichText
                  value={props.fields.value8}
                  className={styles['richtext07']}
                />
              </Container>
            </Container>
          </Container>
          <Container className={styles['container20']}>
            <Container className={styles['container21']}>
              <Text text={props.fields.text8} className={styles['text08']} />
              <Container className={styles['container22']}>
                <RichText
                  value={props.fields.value9}
                  className={styles['richtext08']}
                />
              </Container>
            </Container>
            <Container className={styles['container23']}>
              <Text text={props.fields.text9} className={styles['text09']} />
              <Container className={styles['container24']}>
                <RichText
                  value={props.fields.value10}
                  className={styles['richtext09']}
                />
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

AppleFooter.defaultProps = {
  rootClassName: '',
  fields: {},
}

AppleFooter.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AppleFooter
