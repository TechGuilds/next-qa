/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text, Button } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigmaComponent.module.css'

const NewFigmaComponent = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Image
          src={props.fields.src}
          alt={props.fields.alt}
          className={styles['image']}
        />
        <Container className={styles['container01']}>
          <Text text={props.fields.text} className={styles['text']} />
        </Container>
        <Container className={styles['container02']}>
          <Image
            src={props.fields.src1}
            alt={props.fields.alt1}
            className={styles['image01']}
          />
          <Text text={props.fields.text1} className={styles['text1']} />
        </Container>
        <Container className={styles['container03']}>
          <Image
            src={props.fields.src2}
            alt={props.fields.alt2}
            className={styles['image02']}
          />
          <Text text={props.fields.text2} className={styles['text2']} />
        </Container>
        <Image
          alt={props.fields.alt4}
          src={props.fields.src4}
          className={styles['image03']}
        />
        <Container className={styles['container04']}>
          <Container className={styles['container05']}>
            <Container className={styles['container06']}>
              <Image
                src={props.fields.src5}
                alt={props.fields.alt5}
                className={styles['image04']}
              />
              <Image
                alt={props.fields.alt6}
                src={props.fields.src6}
                className={styles['image05']}
              />
              <Image
                src={props.fields.src7}
                alt={props.fields.alt7}
                className={styles['image06']}
              />
            </Container>
            <Container className={styles['container07']}>
              <Image
                alt={props.fields.alt8}
                src={props.fields.src8}
                className={styles['image07']}
              />
            </Container>
            <Container className={styles['container08']}>
              <Image
                alt={props.fields.alt9}
                src={props.fields.src9}
                className={styles['image08']}
              />
            </Container>
          </Container>
          <Container className={styles['container09']}>
            <Text text={props.fields.text4} className={styles['text3']} />
          </Container>
        </Container>
        <Container>
          <Button className={styles['button']} />
          <Image
            src={props.fields.src3}
            alt={props.fields.alt3}
            className={styles['image09']}
          />
          <Text text={props.fields.text3} className={styles['text4']} />
        </Container>
      </Container>
    </Container>
  )
}

NewFigmaComponent.defaultProps = {
  rootClassName: '',
  fields: {},
}

NewFigmaComponent.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default NewFigmaComponent
