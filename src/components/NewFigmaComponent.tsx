/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  Image,
  Button,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigmaComponent.module.css'

const NewFigmaComponent = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Container className={styles['container2']}>
            <Text text={props.fields.text} className={styles['text']} />
          </Container>
          <Container className={styles['container3']}>
            <Text text={props.fields.text1} className={styles['text1']} />
            <Image
              src={props.fields.src}
              alt={props.fields.alt}
              className={styles['image']}
            />
          </Container>
          <Container>
            <Button className={styles['button']} />
            <Text text={props.fields.text2} className={styles['text2']} />
          </Container>
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
