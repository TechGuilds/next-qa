/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, RichText } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ContentBlock.module.css'

const ContentBlock = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container tag="section" className={styles['container']}>
        <Container tag="div" className={styles['container1']}>
          <RichText value={props.fields.Title} className={styles['richtext']} />
          <RichText
            value={props.fields.Description}
            className={styles['richtext1']}
          />
        </Container>
      </Container>
    </Container>
  )
}

ContentBlock.defaultProps = {
  fields: {
    text: 'naturally beautiful.',
    text1: 'naturally biolage.',
    Title: '<h1>naturally beautiful.<br>naturally biolage.</h1>',
    Description:
      'at biolage we are committed to creating hair care that combines the best of science and nature.',
  },
  rootClassName: '',
}

ContentBlock.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default ContentBlock
