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

import styles from './RepeaterComponent.module.css'

const RepeaterComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index}>
            <Container className={styles['container2']}>
              <Container
                className={` ${styles['container3']} ${styles['ddc5978ab38b52e8f36454']} `}
              >
                <Text text={item.text} tag="h1" className={styles['text']} />
                <Image
                  src={item.src}
                  alt={item.alt}
                  className={` ${styles['image']} ${styles['ddc5978ab38b52e8f36455']} `}
                />
                <Button
                  text={item.text1}
                  link={item.link}
                  className={` ${styles['button']} ${styles['ddc5978ab38b52e8f36451']} `}
                />
              </Container>
            </Container>
          </Container>
        ))}
      </Container>
    </Container>
  )
}

RepeaterComponent.defaultProps = {
  rootClassName: '',
  fields: {},
}

RepeaterComponent.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default RepeaterComponent
