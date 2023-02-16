/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Image,
  Text,
  Button,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Nwnofigma.module.css'

const Nwnofigma = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container01']}>
          <Image
            alt={props.fields.alt}
            src={props.fields.src}
            className={styles['image']}
          />
          <Container className={styles['container02']}>
            <Text text={props.fields.text} className={styles['text']} />
            <Container>
              <Button className={styles['button']} />
              <Container>
                <Button className={styles['button1']} />
                <Image
                  alt={props.fields.alt1}
                  src={props.fields.src1}
                  className={styles['image01']}
                />
                <Image
                  src={props.fields.src2}
                  alt={props.fields.alt2}
                  className={styles['image02']}
                />
              </Container>
              <Container>
                <Button className={styles['button2']} />
                <Image
                  alt={props.fields.alt3}
                  src={props.fields.src3}
                  className={styles['image03']}
                />
                <Image
                  src={props.fields.src4}
                  alt={props.fields.alt4}
                  className={styles['image04']}
                />
              </Container>
            </Container>
          </Container>
        </Container>
        <Container className={styles['container06']}>
          <Container className={styles['container07']}>
            <Image
              src={props.fields.src5}
              alt={props.fields.alt5}
              className={styles['image05']}
            />
            <Container className={styles['container08']}>
              <Image
                alt={props.fields.alt6}
                src={props.fields.src6}
                className={styles['image06']}
              />
              <Container className={styles['container09']}>
                <Container className={styles['container10']}>
                  <Text text={props.fields.text1} className={styles['text1']} />
                  <Text text={props.fields.text2} className={styles['text2']} />
                </Container>
                <Container className={styles['container11']}>
                  <Text text={props.fields.text3} className={styles['text3']} />
                  <Image
                    src={props.fields.src7}
                    alt={props.fields.alt7}
                    className={styles['image07']}
                  />
                </Container>
              </Container>
              <Image
                alt={props.fields.alt8}
                src={props.fields.src8}
                className={styles['image08']}
              />
            </Container>
          </Container>
          <Container className={styles['container12']}>
            <Image
              src={props.fields.src9}
              alt={props.fields.alt9}
              className={styles['image09']}
            />
            <Container className={styles['container13']}>
              <Image
                alt={props.fields.alt10}
                src={props.fields.src10}
                className={styles['image10']}
              />
              <Container className={styles['container14']}>
                <Container className={styles['container15']}>
                  <Text text={props.fields.text4} className={styles['text4']} />
                </Container>
                <Container className={styles['container16']}>
                  <Text text={props.fields.text5} className={styles['text5']} />
                  <Image
                    src={props.fields.src11}
                    alt={props.fields.alt11}
                    className={styles['image11']}
                  />
                </Container>
              </Container>
              <Image
                alt={props.fields.alt12}
                src={props.fields.src12}
                className={styles['image12']}
              />
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

Nwnofigma.defaultProps = {
  rootClassName: '',
  fields: {},
}

Nwnofigma.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default Nwnofigma
