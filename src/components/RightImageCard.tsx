/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Text, Link, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './RightImageCard.module.css'

const RightImageCard = (props) => {
  return (
    <Container
      tag="section"
      role="complementary"
      aria-label="Panel"
      className={` ${styles['right-image-card']} ${styles[props.rootClassName]} ${props.params?.styles} `}
    >
      <Container className={styles['div']}>
        <Container className={styles['div1']}>
          <Text tag="h2" text={props.fields.Title} className={styles['h-2']} />
          <Container className={styles['div2']}>
            <Text
              tag="p"
              text={props.fields.Description}
              className={styles['p']}
            />
          </Container>
          <Link
            aria-label="Link"
            href={props.fields.Link.href}
            text={props.fields.Link.text}
            className={styles['a']}
          />
        </Container>
        <Container className={styles['div3']}>
          <Image
            src={props.fields.Image.src}
            title="Occ_SenWoman760x546webp"
            className={styles['img']}
          />
        </Container>
      </Container>
    </Container>
  )
}

RightImageCard.defaultProps = {
  rendering: {},
  rootClassName: '',
  fields: {},
}

RightImageCard.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default withDatasourceCheck()(RightImageCard)
