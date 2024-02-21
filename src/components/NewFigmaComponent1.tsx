/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigmaComponent1.module.css'

const NewFigmaComponent1 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Image
          src={props.fields.src}
          alt={props.fields.alt}
          className={styles['image']}
        />
        <Container className={styles['container01']}>
          <Container className={styles['container02']}>
            <Text text={props.fields.text} className={styles['text']} />
            <Text text={props.fields.text1} className={styles['text1']} />
          </Container>
          <Text text={props.fields.text2} className={styles['text2']} />
          <Container className={styles['container03']}>
            <Container className={styles['container04']}>
              <Text text={props.fields.text3} className={styles['text3']} />
              <Container className={styles['container05']}>
                <Container className={styles['container06']}>
                  <Image
                    src={props.fields.src1}
                    alt={props.fields.alt1}
                    className={styles['image1']}
                  />
                </Container>
              </Container>
            </Container>
            <Container className={styles['container07']}>
              <Text text={props.fields.text4} className={styles['text4']} />
              <Container className={styles['container08']}>
                <Container className={styles['container09']}>
                  <Image
                    src={props.fields.src2}
                    alt={props.fields.alt2}
                    className={styles['image2']}
                  />
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

NewFigmaComponent1.defaultProps = {
  fields: {
    src: 'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/OTtMx00-8c8b.png',
    alt: 'heroiphone14propreordercc1jjc6hq7malargetall2x3286',
    text: 'iPhone 14 Pro',
    text1: 'Pro. Beyond.',
    text2: 'Available starting 9:16',
    text3: 'Learn more',
    src1: 'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/GVt0gXt5rSUM.svg',
    alt1: 'arrowright3294',
    text4: 'Pre-order',
    src2: 'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/_lPg1thk3zXq.svg',
    alt2: 'arrowrightI33513294',
  },
  rootClassName: '',
}

NewFigmaComponent1.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default NewFigmaComponent1
