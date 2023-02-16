/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  Link,
  Button,
  Image,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './HeroLinkTest.module.css'

const HeroLinkTest = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Container className={styles['container2']}>
            <Text text={props.fields.text} className={styles['text']} />
            <Text text={props.fields.text1} className={styles['text1']} />
          </Container>
          <Container className={styles['container3']}>
            <Link
              href="#"
              text="Link"
              className={` ${styles['link']} ${styles['link-default']} `}
            />
            <Button
              text="Button"
              link
              className={` ${styles['button']} ${styles['button-default']} `}
            />
          </Container>
        </Container>
        <Image
          src={props.fields.src2}
          alt={props.fields.alt2}
          className={styles['image']}
        />
      </Container>
    </Container>
  )
}

HeroLinkTest.defaultProps = {
  rootClassName: '',
  fields: {},
}

HeroLinkTest.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default HeroLinkTest
