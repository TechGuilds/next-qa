/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './FigmaTestNur.module.css'

const FigmaTestNur = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Image
          src={props.fields.src}
          alt={props.fields.alt}
          className={styles['image']}
        />
        <Container className={styles['container01']}>
          <Container tag="span" className={styles['container02']}>
            <Text text={props.fields.text} className={styles['text']} />
          </Container>
          <Container tag="span" className={styles['container03']}>
            <Text text={props.fields.text1} className={styles['text01']} />
          </Container>
          <Container tag="span" className={styles['container04']}>
            <Text text={props.fields.text2} className={styles['text02']} />
          </Container>
          <Container tag="span" className={styles['container05']}>
            <Text text={props.fields.text3} className={styles['text03']} />
          </Container>
        </Container>
        <Image
          alt={props.fields.alt1}
          src={props.fields.src1}
          className={styles['image1']}
        />
        <Container className={styles['container06']}>
          <Container className={styles['container07']}>
            <Container tag="span" className={styles['container08']}>
              <Text text={props.fields.text4} className={styles['text04']} />
            </Container>
            <Container tag="span" className={styles['container09']}>
              <Text text={props.fields.text5} className={styles['text05']} />
              <Text text={props.fields.text6} className={styles['text06']} />
              <Text text={props.fields.text7} className={styles['text07']} />
              <Text text={props.fields.text8} className={styles['text08']} />
              <Text text={props.fields.text9} className={styles['text09']} />
              <Text tag="br" />
              <Text text={props.fields.text10} className={styles['text11']} />
            </Container>
          </Container>
          <Container className={styles['container10']}>
            <Container tag="span" className={styles['container11']}>
              <Text text={props.fields.text11} className={styles['text12']} />
            </Container>
            <Container tag="span" className={styles['container12']}>
              <Text text={props.fields.text12} className={styles['text13']} />
              <Text tag="br" />
              <Text text={props.fields.text13} className={styles['text15']} />
              <Text tag="br" />
              <Text text={props.fields.text14} className={styles['text17']} />
            </Container>
          </Container>
          <Container className={styles['container13']}>
            <Container className={styles['container14']}>
              <Container tag="span" className={styles['container15']}>
                <Text text={props.fields.text15} className={styles['text18']} />
              </Container>
              <Container tag="span" className={styles['container16']}>
                <Text text={props.fields.text16} className={styles['text19']} />
              </Container>
            </Container>
            <Container className={styles['container17']}>
              <Container tag="span" className={styles['container18']}>
                <Text text={props.fields.text17} className={styles['text20']} />
              </Container>
              <Container tag="span" className={styles['container19']}>
                <Text text={props.fields.text18} className={styles['text21']} />
              </Container>
            </Container>
          </Container>
        </Container>
        <Image
          src={props.fields.src2}
          alt={props.fields.alt2}
          className={styles['image2']}
        />
        <Container className={styles['container20']}>
          <Container tag="span" className={styles['container21']}>
            <Text text={props.fields.text19} className={styles['text22']} />
          </Container>
        </Container>
        <Container className={styles['container22']}>
          <Container tag="span" className={styles['container23']}>
            <Text text={props.fields.text20} className={styles['text23']} />
          </Container>
        </Container>
        <Container className={styles['container24']}>
          <Container tag="span" className={styles['container25']}>
            <Text text={props.fields.text21} className={styles['text24']} />
          </Container>
          <Container tag="span" className={styles['container26']}>
            <Text text={props.fields.text22} className={styles['text25']} />
          </Container>
          <Container tag="span" className={styles['container27']}>
            <Text text={props.fields.text23} className={styles['text26']} />
          </Container>
          <Container tag="span" className={styles['container28']}>
            <Text text={props.fields.text24} className={styles['text27']} />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

FigmaTestNur.defaultProps = {
  fields: {
    src: 'https://kajoo.nyc3.digitaloceanspaces.com/containers/orgs/60d5efadff0a5060c3aaa66d/assets/1wv00E_eDQzOhq5_uoijr.svg',
    alt: 'Rectangle97I12095913712',
    text: 'Accessibility',
    text1: 'Terms',
    text2: 'Privacy',
    text3: 'Feedback',
    alt1: 'Vector16I12095913718',
    src1: 'https://kajoo.nyc3.digitaloceanspaces.com/containers/orgs/60d5efadff0a5060c3aaa66d/assets/iudPk9eB4aezSrunJFoTn.svg',
    text4: 'Care',
    text5: 'Independant Living',
    text6: 'Assisted Living',
    text7: 'Memory Care',
    text8: 'Life at Amica',
    text9: 'Health & Safety',
    text10: 'Healthcare Professionals',
    text11: 'About',
    text12: 'Diversity, equality & Inclusion',
    text13: 'Leadership Team',
    text14: 'Helping Hands Charity',
    text15: 'Careers',
    text16: 'Volunteers',
    text17: 'Resources',
    text18: 'Webinars',
    src2: 'https://kajoo.nyc3.digitaloceanspaces.com/containers/orgs/60d5efadff0a5060c3aaa66d/assets/3p7t22WcIqO8PY5TDXDeK.png',
    alt2: '2AmicaSLCorpLogoPMSntefy01I12095913733',
    text19: 'Find a residence',
    text20: 'Book a tour',
    text21: 'Contact',
    text22: 'Press',
    text23: 'Partnerships',
    text24: 'Blog',
  },
  rootClassName: '',
}

FigmaTestNur.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default FigmaTestNur
