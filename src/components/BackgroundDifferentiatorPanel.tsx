/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-nextjs'
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs'

import PropTypes from 'prop-types'

import styles from './BackgroundDifferentiatorPanel.module.css'

const BackgroundDifferentiatorPanel = (props) => {
  return (
    <Container
      tag="section"
      id
      role="complementary"
      aria-label="Background Panel"
      className={` ${styles['root']} ${styles[props.rootClassName]} `}
    >
      <Container tag="div" className={styles['container']}>
        <Container tag="div" className={styles['container1']}>
          <Text tag="h2" text={props.fields.text} className={styles['text']} />
          <Container tag="div" className={styles['container2']}>
            <Container
              tag="div"
              data-kajoo-element-type="rich-text"
              className={styles['container3']}
            >
              <Text tag="span" text={props.fields.text1} />
            </Container>
          </Container>
          <Placeholder className={styles['sitecore-placeholder']} />
        </Container>
        <Container tag="div" className={styles['container4']} />
        <Image
          tag="img"
          src={props.fields.src}
          alt={props.fields.alt}
          className={styles['image']}
        />
      </Container>
    </Container>
  )
}

BackgroundDifferentiatorPanel.defaultProps = {
  fields: {
    text: 'Webinars for seniors',
    text1:
      '\nGet expert tips and ideas for better sleep, enhanced memory, managing stress, downsizing and more in our new online workshops.\n',
    name: '/main/phCTA-{C9075793-9240-458E-B224-6B457A050037}-0',
    src: 'https://amica.kajoo.ca/-/media/310bbf8c62b247f49ee51e2d1f068582.ashx?db=master&la=en&vs=1&ts=20230913t1633522702',
    alt: 'Webinars for seniors',
  },
  rootClassName: '',
}

BackgroundDifferentiatorPanel.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default BackgroundDifferentiatorPanel
