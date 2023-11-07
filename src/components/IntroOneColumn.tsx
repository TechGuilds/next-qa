/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs'

import PropTypes from 'prop-types'

import styles from './IntroOneColumn.module.css'

const IntroOneColumn = (props) => {
  return (
    <Container
      tag="div"
      className={` ${styles['root']} ${styles[props.rootClassName]} `}
    >
      <Container tag="div" className={styles['container']}>
        <Container tag="div" className={styles['container1']}>
          <Container
            tag="div"
            aria-label="Content"
            className={styles['container2']}
          >
            <Text
              tag="h1"
              text={props.fields.text}
              className={styles['text']}
            />
            <Container tag="div" className={styles['container3']}>
              <Text
                tag="p"
                text={props.fields.text1}
                className={styles['text1']}
              />
              <Container
                tag="div"
                data-kajoo-element-type="rich-text"
                className={styles['container4']}
              >
                <Text tag="span" text={props.fields.text2} />
              </Container>
              <Text
                tag="p"
                text={props.fields.text3}
                className={styles['text3']}
              />
              <Container tag="div" className={styles['container5']}>
                <Placeholder className={styles['sitecore-placeholder']} />
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

IntroOneColumn.defaultProps = {
  fields: {
    text: 'At Amica, every day is yours to spend exactly as you wish',
    text1: '',
    text2:
      '\nAmica offers an exceptional senior living experience unlike any other. Every residence offers elegant and purposeful designs, premium amenities, unparalleled care that evolves as you do and a lifestyle that leaves you in full control. At Amica, you’ll never have to move again. And you’ll never want to.\n',
    text3: '',
    name: '/main/phCTA-{5FD01DDD-7EBC-4CC8-ACFC-3E701E3FD55C}-0',
  },
  rootClassName: '',
}

IntroOneColumn.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default IntroOneColumn
