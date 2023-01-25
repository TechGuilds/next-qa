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

import styles from './BlogList.module.css'

const RepeaterLocalComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Text
        text={props.fields.CollectionTitle}
        tag="span"
        className={styles['text']}
      />
      <Container className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index}>
            <Container className={styles['container2']}>
              <Container className={styles['container3']}>
                <Image
                  src={item.Image}
                  alt={item.alt}
                  className={` ${styles['image']} ${styles['a41d4370946d97c938c466']} `}
                />
                <RichText
                  value={item.Description}
                  className={styles['richtext']}
                />
              </Container>
              <Text
                text={item.BlogTitle}
                tag="h1"
                className={styles['text1']}
              />
            </Container>
          </Container>
        ))}
      </Container>
    </Container>
  )
}

RepeaterLocalComponent.defaultProps = {
  rootClassName: '',
  fields: {},
}

RepeaterLocalComponent.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default RepeaterLocalComponent
