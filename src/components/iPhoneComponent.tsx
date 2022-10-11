/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Link, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './iPhoneComponent.module.css'

const IPhoneComponent = (props) => {
  return (
    <Container>
      <Container bgImage className={styles['container']}>
        <Container bgImage={props.bgImage} className={styles['container01']}>
          <Container bgImage={props.bgImage1} className={styles['container02']}>
            <Text text={props.text} className={styles['text']} />
            <Text text={props.text1} className={styles['text1']} />
          </Container>
          <Text text={props.text2} className={styles['text2']} />
          <Container bgImage={props.bgImage2} className={styles['container03']}>
            <Container
              bgImage={props.bgImage3}
              className={` ${styles['container04']} ${styles['container-default']} `}
            >
              <Link
                href="#"
                target="_blank"
                rel="noreferrer noopener"
                text={props.text4}
                className={` ${styles['link']} ${styles['link-default']} `}
              />
              <Container
                bgImage={props.bgImage4}
                className={styles['container05']}
              >
                <Container
                  bgImage={props.bgImage5}
                  className={styles['container06']}
                >
                  <Image
                    src={props.src}
                    alt={props.alt}
                    className={styles['image']}
                  />
                </Container>
              </Container>
            </Container>
            <Container
              bgImage={props.bgImage6}
              className={styles['container07']}
            >
              <Text text={props.text5} className={styles['text3']} />
              <Container
                bgImage={props.bgImage7}
                className={styles['container08']}
              >
                <Container
                  bgImage={props.bgImage8}
                  className={styles['container09']}
                >
                  <Image
                    src={props.src1}
                    alt={props.alt1}
                    className={styles['image1']}
                  />
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
        <Image src={props.src2} alt={props.alt2} className={styles['image2']} />
      </Container>
    </Container>
  )
}

IPhoneComponent.defaultProps = {
  'lP5m_ll_Bc-q_-_Z-mD4z': 'Learn more',
  bgImage: '',
  bgImage1: '',
  text: 'iPhone 14 Pro',
  text1: 'Pro. Beyond.',
  text2: 'Available starting 9:16',
  bgImage2: '',
  bgImage3: '',
  text4: 'Learn more',
  bgImage4: '',
  bgImage5: '',
  src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTcnIGhlaWdodD0nMTYnIHZpZXdCb3g9JzAgMCAxNyAxNicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTYuNDQwNDMgMTMuMjhMMTAuNzg3MSA4LjkzMzNDMTEuMzAwNCA4LjQxOTk3IDExLjMwMDQgNy41Nzk5NyAxMC43ODcxIDcuMDY2NjRMNi40NDA0MyAyLjcxOTk3JyBzdHJva2U9JyMyOTk3RkYnIHN0cm9rZS13aWR0aD0nMS41JyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcvPgo8L3N2Zz4K',
  alt: 'arrowright128614779',
  bgImage6: '',
  text5: 'Pre-order',
  bgImage7: '',
  bgImage8: '',
  src1: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTcnIGhlaWdodD0nMTYnIHZpZXdCb3g9JzAgMCAxNyAxNicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTYuNDQwNDMgMTMuMjhMMTAuNzg3MSA4LjkzMzNDMTEuMzAwNCA4LjQxOTk3IDExLjMwMDQgNy41Nzk5NyAxMC43ODcxIDcuMDY2NjRMNi40NDA0MyAyLjcxOTk3JyBzdHJva2U9JyMyOTk3RkYnIHN0cm9rZS13aWR0aD0nMS41JyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcvPgo8L3N2Zz4K',
  alt1: 'arrowrightI128614784128614779',
  src2: 'https://www.apple.com/v/home/as/images/heroes/iphone-14-pro/hero_iphone14pro__e5xbgo5ffhg2_largetall.jpg',
  alt2: 'heroiphone14propreordercc1jjc6hq7malargetall2x128614785',
}

IPhoneComponent.propTypes = {
  'lP5m_ll_Bc-q_-_Z-mD4z': PropTypes.string,
  bgImage: PropTypes.string,
  bgImage1: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  bgImage2: PropTypes.string,
  bgImage3: PropTypes.string,
  text4: PropTypes.string,
  bgImage4: PropTypes.string,
  bgImage5: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  bgImage6: PropTypes.string,
  text5: PropTypes.string,
  bgImage7: PropTypes.string,
  bgImage8: PropTypes.string,
  src1: PropTypes.string,
  alt1: PropTypes.string,
  src2: PropTypes.string,
  alt2: PropTypes.string,
}

export default IPhoneComponent
