/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './CardsCollection.module.css'

const REpeattted = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        {props.fields.items.map((item, index) => (
          <Container key={index}>
            <Container className={styles['container2']}>
              <Text
                text={item.fields.title}
                tag="span"
                className={styles['text']}
              />
              <Image
                src={item.fields.image}
                alt={item.fields.title}
                className={` ${styles['image']} ${styles['acece83e7e5d4e62c6a6c']} `}
              />
              <Text
                text={item.fields.title}
                tag="span"
                className={styles['text1']}
              />
            </Container>
          </Container>
        ))}
      </Container>
    </Container>
  )
}

REpeattted.defaultProps = {
  rootClassName: '',
  fields: {},
}

REpeattted.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default REpeattted
