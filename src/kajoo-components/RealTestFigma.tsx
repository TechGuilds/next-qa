/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './RealTestFigma.module.css'

const RealTestFigma = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Image src={props.src} alt={props.alt} className={styles['image']} />
        <Container className={styles['container01']}>
          <Container className={styles['container02']}>
            <Image
              src={props.src1}
              alt={props.alt1}
              className={styles['image01']}
            />
          </Container>
          <Container className={styles['container03']}>
            <Text text={props.text} className={styles['text']} />
          </Container>
        </Container>
        <Image
          src={props.src2}
          alt={props.alt2}
          className={styles['image02']}
        />
        <Image
          src={props.src3}
          alt={props.alt3}
          className={styles['image03']}
        />
        <Image
          src={props.src4}
          alt={props.alt4}
          className={styles['image04']}
        />
        <Image
          src={props.src5}
          alt={props.alt5}
          className={styles['image05']}
        />
        <Image
          alt={props.alt6}
          src={props.src6}
          className={styles['image06']}
        />
        <Text text={props.text1} className={styles['text01']} />
        <Text text={props.text2} className={styles['text02']} />
        <Text text={props.text3} className={styles['text03']} />
        <Text text={props.text4} className={styles['text04']} />
        <Text text={props.text5} className={styles['text05']} />
        <Text text={props.text6} className={styles['text06']} />
        <Text text={props.text7} className={styles['text07']} />
        <Text text={props.text8} className={styles['text08']} />
        <Image
          alt={props.alt7}
          src={props.src7}
          className={styles['image07']}
        />
        <Image
          alt={props.alt8}
          src={props.src8}
          className={styles['image08']}
        />
        <Image
          alt={props.alt9}
          src={props.src9}
          className={styles['image09']}
        />
        <Container className={styles['container04']}>
          <Container className={styles['container05']}>
            <Container className={styles['container06']}>
              <Image
                src={props.src10}
                alt={props.alt10}
                className={styles['image10']}
              />
              <Image
                alt={props.alt11}
                src={props.src11}
                className={styles['image11']}
              />
              <Image
                src={props.src12}
                alt={props.alt12}
                className={styles['image12']}
              />
            </Container>
            <Container className={styles['container07']}>
              <Image
                alt={props.alt13}
                src={props.src13}
                className={styles['image13']}
              />
            </Container>
            <Container className={styles['container08']}>
              <Image
                alt={props.alt14}
                src={props.src14}
                className={styles['image14']}
              />
            </Container>
          </Container>
          <Container className={styles['container09']}>
            <Text text={props.text9} className={styles['text09']} />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

RealTestFigma.defaultProps = {
  rootClassName: '',
  src: 'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/FItwfzmVj4hl3buLDPJsT.svg',
  alt: 'Rectangle0703',
  src1: 'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/5w3LeAKuz-O7IV_1MCtvk.svg',
  alt1: 'Background0706',
  text: 'Chats',
  src2: 'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/9VxLbyX9eQ8zTSQYDy-2I.svg',
  alt2: 'Background0709',
  src3: 'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/EL_wXO5W4WSaySVIkyfrE.svg',
  alt3: 'Background0710',
  src4: 'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/EbgbYaQtF4CF5uOlTrzTT.svg',
  alt4: 'Background0711',
  src5: 'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/HCfJ-FsC2wYVauDsmmRyo.svg',
  alt5: 'Background0712',
  alt6: 'Ellipse0713',
  src6: 'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/GI2fi-yP7ctS4MD5pkYQU.svg',
  text1: 'Thank you! That was very helpful!',
  text2: 'James',
  text3: 'I know... I’m trying to get the funds.',
  text4: 'Will Kenny',
  text5:
    'I’m looking for tips around capturing the milky way. I have a 6D with a 24-100mm...',
  text6: 'Beth Williams',
  text7: 'Wanted to ask if you’re available for a portrait shoot next week.',
  text8: 'Rev Shawn',
  alt7: 'Ellipse0722',
  src7: 'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/ByhSBfa52I33DKSGUORP8.svg',
  alt8: 'Ellipse0723',
  src8: 'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/SFsycdl8h17wcTZQ3Xc8L.svg',
  alt9: 'Ellipse0724',
  src9: 'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/nNbkbZtlArx2TVqwy8Xdk.svg',
  src10:
    'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/JIVo4_Qp9Ivb1y-uzW9u5.png',
  alt10: 'Border01103',
  alt11: 'Cap01104',
  src11:
    'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/CbseGhKsf-wEU-6G9mdp5.svg',
  src12:
    'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/dr89LpSjSUV_xXXgORMui.svg',
  alt12: 'Capacity01105',
  alt13: 'Wifi01107',
  src13:
    'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/7-mY8MhUbdMW94hk5CU-R.svg',
  alt14: 'Cell01112',
  src14:
    'https://kajoo.nyc3.digitaloceanspaces.com/qa/orgs/60d5efadff0a5060c3aaa66d/assets/6JXkRaPG21ZP5Z5S2c2rd.svg',
  text9: '9:27',
}

RealTestFigma.propTypes = {
  rootClassName: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  src1: PropTypes.string,
  alt1: PropTypes.string,
  text: PropTypes.string,
  src2: PropTypes.string,
  alt2: PropTypes.string,
  src3: PropTypes.string,
  alt3: PropTypes.string,
  src4: PropTypes.string,
  alt4: PropTypes.string,
  src5: PropTypes.string,
  alt5: PropTypes.string,
  alt6: PropTypes.string,
  src6: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  alt7: PropTypes.string,
  src7: PropTypes.string,
  alt8: PropTypes.string,
  src8: PropTypes.string,
  alt9: PropTypes.string,
  src9: PropTypes.string,
  src10: PropTypes.string,
  alt10: PropTypes.string,
  alt11: PropTypes.string,
  src11: PropTypes.string,
  src12: PropTypes.string,
  alt12: PropTypes.string,
  alt13: PropTypes.string,
  src13: PropTypes.string,
  alt14: PropTypes.string,
  src14: PropTypes.string,
  text9: PropTypes.string,
}

export default RealTestFigma
