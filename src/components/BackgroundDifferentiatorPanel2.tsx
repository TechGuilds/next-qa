/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, RichText, Image } from '@kajoo-ai/sitecore-nextjs'
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs'

import PropTypes from 'prop-types'

import styles from './BackgroundDifferentiatorPanel2.module.css'

const BackgroundDifferentiatorPanel2 = (props) => {
  return (
    <Container
      tag="section"
      id
      role="complementary"
      aria-label="Background Panel"
      className={` ${styles['root']} ${styles[props.rootClassName]} `}
    >
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Text tag="h2" text={props.fields.text} className={styles['text']} />
          <Container className={styles['container2']}>
            <RichText value={props.fields.value} />
          </Container>
          <Placeholder className={styles['sitecore-placeholder']} />
        </Container>
        <Container className={styles['container3']} />
        <Image
          src={props.fields.src}
          alt={props.fields.alt}
          className={styles['image']}
        />
      </Container>
    </Container>
  )
}

BackgroundDifferentiatorPanel2.defaultProps = {
  fields: {
    text: 'Webinars for seniors',
    value:
      '<div data-kajoo-element-type="rich-text">\nGet expert&nbsp;tips and ideas for better sleep, enhanced memory, managing stress, downsizing and more in our new online workshops.\n</div>',
    name: '/main/phCTA-{C9075793-9240-458E-B224-6B457A050037}-0',
    src: 'https://amica.kajoo.ca/-/media/310bbf8c62b247f49ee51e2d1f068582.ashx?db=master&la=en&vs=1&ts=20230913t1633522702',
    alt: 'Webinars for seniors',
  },
  rootClassName: '',
}

BackgroundDifferentiatorPanel2.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default BackgroundDifferentiatorPanel2
