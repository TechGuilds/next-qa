/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Button,
  Image,
  Link,
  Text,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AmicaHeroBannerNov9.module.css'

const AmicaHeroBannerNov9 = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Container className={styles['container2']}>
            <Container className={styles['container3']}>
              <Button
                text={props.fields.text}
                className={styles['button-default']}
              />
              <Image
                src={props.fields.src}
                alt={props.fields.alt}
                className={styles['image']}
              />
            </Container>
            <Container className={styles['container4']}>
              <Link
                href={props.fields.href1}
                className={` ${styles['link']} ${styles['link-default']} `}
              />
              <Text text={props.fields.text1} className={styles['text']} />
              <Button
                text={props.fields.text4}
                className={` ${styles['button-button-773']} ${styles['button1']} `}
              />
            </Container>
            <Container className={styles['container5']}>
              <Link
                href={props.fields.href}
                className={` ${styles['link1']} ${styles['link-default']} `}
              />
            </Container>
          </Container>
        </Container>
        <Container className={styles['container6']}>
          <Image
            src={props.fields.src1}
            alt={props.fields.alt1}
            className={styles['image1']}
          />
        </Container>
      </Container>
    </Container>
  )
}

AmicaHeroBannerNov9.defaultProps = {
  rootClassName: '',
  fields: {},
}

AmicaHeroBannerNov9.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AmicaHeroBannerNov9
