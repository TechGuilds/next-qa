/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  Button,
  Image,
  RichText,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './0NewsletterBanner1Component2.module.css'

const NewsletterBanner1Component2 = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container01']}>
          <Text text={props.fields.text} className={styles['text']} />
          <Text text={props.fields.text1} className={styles['text01']} />
        </Container>
        <Container className={styles['container02']}>
          <Container className={styles['container03']}>
            <Container className={styles['container04']}>
              <Container className={styles['container05']}>
                <Text text={props.fields.text2} className={styles['text02']} />
              </Container>
              <Container className={styles['container06']}>
                <Text text={props.fields.text3} className={styles['text03']} />
              </Container>
            </Container>
            <Container className={styles['container07']}>
              <Container className={styles['container08']}>
                <Text text={props.fields.text4} className={styles['text04']} />
              </Container>
            </Container>
            <Button className={styles['button']}>
              <Text text={props.fields.text5} className={styles['text05']} />
            </Button>
          </Container>
          <Container className={styles['container09']}>
            <Container className={styles['container10']}>
              <Text text={props.fields.text6} className={styles['text06']} />
              <Container className={styles['container11']}>
                <Container className={styles['container12']}>
                  <Container className={styles['container13']}>
                    <Image
                      src={props.fields.src}
                      alt={props.fields.alt}
                      className={styles['image']}
                    />
                    <Text
                      text={props.fields.text7}
                      className={styles['text07']}
                    />
                  </Container>
                  <Container className={styles['container14']}>
                    <Image
                      src={props.fields.src1}
                      alt={props.fields.alt1}
                      className={styles['image1']}
                    />
                    <Text
                      text={props.fields.text8}
                      className={styles['text08']}
                    />
                  </Container>
                  <Container className={styles['container15']}>
                    <Image
                      src={props.fields.src2}
                      alt={props.fields.alt2}
                      className={styles['image2']}
                    />
                    <Text
                      text={props.fields.text9}
                      className={styles['text09']}
                    />
                  </Container>
                  <Container className={styles['container16']}>
                    <Image
                      src={props.fields.src3}
                      alt={props.fields.alt3}
                      className={styles['image3']}
                    />
                    <Text
                      text={props.fields.text10}
                      className={styles['text10']}
                    />
                  </Container>
                </Container>
                <Container className={styles['container17']}>
                  <Container className={styles['container18']}>
                    <Image
                      src={props.fields.src4}
                      alt={props.fields.alt4}
                      className={styles['image4']}
                    />
                    <Text
                      text={props.fields.text11}
                      className={styles['text11']}
                    />
                  </Container>
                </Container>
              </Container>
            </Container>
            <RichText
              value={props.fields.value}
              className={styles['richtext']}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

NewsletterBanner1Component2.defaultProps = {
  rootClassName: '',
  fields: {},
}

NewsletterBanner1Component2.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default NewsletterBanner1Component2
