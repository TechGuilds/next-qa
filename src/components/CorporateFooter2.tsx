/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Link, Image } from '@kajoo-ai/sitecore-nextjs'
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs'

import PropTypes from 'prop-types'

import styles from './CorporateFooter2.module.css'

const CorporateFooter2 = (props) => {
  return (
    <Container
      tag="footer"
      className={` ${styles['root']} ${styles[props.rootClassName]} `}
    >
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Container className={styles['container2']}>
            <Text
              tag="h2"
              text={props.fields.text}
              className={styles['text']}
            />
            <p className={styles['html-element']}>
              <Text text={props.fields.text1} />
              <br className={styles['html-element01']} />
              <Text text={props.fields.text2} />
              <br className={styles['html-element02']} />
              <Text text={props.fields.text3} />
              <br className={styles['html-element03']} />
              <Text text={props.fields.text4} className={styles['text4']} />
            </p>
          </Container>
          <Container className={styles['container3']}>
            <Placeholder className={styles['sitecore-placeholder']} />
            <Placeholder className={styles['sitecore-placeholder1']} />
          </Container>
          <hr className={styles['html-element04']} />
          <ul className={styles['html-element05']}>
            <li className={styles['html-element06']}>
              <Link
                href={props.fields.href}
                text={props.fields.text5}
                className={styles['link']}
              />
            </li>
            <li className={styles['html-element07']}>
              <Link
                href={props.fields.href1}
                text={props.fields.text6}
                className={styles['link01']}
              />
            </li>
            <li className={styles['html-element08']}>
              <Link
                href={props.fields.href2}
                text={props.fields.text7}
                className={styles['link02']}
              />
            </li>
            <li className={styles['html-element09']}>
              <Link
                href={props.fields.href3}
                text={props.fields.text8}
                className={styles['link03']}
              />
            </li>
            <li className={styles['html-element10']}>
              <Link
                href={props.fields.href4}
                text={props.fields.text9}
                className={styles['link04']}
              />
            </li>
          </ul>
          <hr className={styles['html-element11']} />
          <Container className={styles['container4']}>
            <Text
              tag="h2"
              text={props.fields.text10}
              className={styles['text5']}
            />
            <Container className={styles['container5']}>
              <Container className={styles['container6']}>
                <Link
                  id="facebook"
                  href={props.fields.href5}
                  text={props.fields.text11}
                  className={styles['link05']}
                >
                  <Image
                    src={props.fields.src}
                    alt={props.fields.alt}
                    height="25"
                    width="25"
                    className={styles['image']}
                  />
                </Link>
                <Link
                  id="linkedin"
                  href={props.fields.href6}
                  text={props.fields.text12}
                  className={styles['link06']}
                >
                  <Image
                    src={props.fields.src1}
                    alt={props.fields.alt1}
                    height="25"
                    width="25"
                    className={styles['image1']}
                  />
                </Link>
                <Link
                  id="instagram"
                  href={props.fields.href7}
                  text={props.fields.text13}
                  className={styles['link07']}
                >
                  <Image
                    src={props.fields.src2}
                    alt={props.fields.alt2}
                    height="25"
                    width="25"
                    className={styles['image2']}
                  />
                </Link>
                <Link
                  id="youtube"
                  href={props.fields.href8}
                  text={props.fields.text14}
                  className={styles['link08']}
                >
                  <Image
                    src={props.fields.src3}
                    alt={props.fields.alt3}
                    height="25"
                    width="25"
                    className={styles['image3']}
                  />
                </Link>
                <Link
                  id="pinterest"
                  href={props.fields.href9}
                  text={props.fields.text15}
                  className={styles['link09']}
                >
                  <Image
                    src={props.fields.src4}
                    alt={props.fields.alt4}
                    height="25"
                    width="25"
                    className={styles['image4']}
                  />
                </Link>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
      <Container className={styles['container7']}>
        <Container className={styles['container8']}>
          <ul className={styles['html-element12']}>
            <li className={styles['html-element13']}>
              <Link
                href={props.fields.href10}
                text={props.fields.text16}
                className={styles['link10']}
              />
            </li>
            <li className={styles['html-element14']}>
              <Link
                href={props.fields.href11}
                text={props.fields.text17}
                className={styles['link11']}
              />
            </li>
            <li className={styles['html-element15']}>
              <Link
                href={props.fields.href12}
                text={props.fields.text18}
                className={styles['link12']}
              />
            </li>
          </ul>
          <Text
            tag="p"
            text={props.fields.text19}
            className={styles['text6']}
          />
        </Container>
      </Container>
    </Container>
  )
}

CorporateFooter2.defaultProps = {
  fields: {
    text: 'Contact Us',
    text1: '\n                        20 Queen St W #3200,',
    text2: 'Toronto, ON',
    text3: 'M5H 3R3',
    text4: '(416) 487-2020',
    name: '/main/phCTA-{BD945FD4-9BAA-4BD9-AC81-DC1C0177D725}-0',
    name1: '/main/phCTA-{BD945FD4-9BAA-4BD9-AC81-DC1C0177D725}-0',
    href: 'https://www.amica.ca/amica-difference/about-amica',
    text5: 'ABOUT AMICA',
    href1: 'https://www.amica.ca/careers',
    text6: 'CAREERS',
    href2: 'https://www.amica.ca/healthcare-professionals',
    text7: 'HEALTHCARE PROFESSIONALS',
    href3: 'https://www.amica.ca/helping-hands-charity',
    text8: 'HELPING HANDS CHARITY',
    href4: 'https://www.amica.ca/press',
    text9: 'Press',
    text10: 'Follow Us',
    href5: 'https://www.facebook.com/AmicaSeniorLifestyles/',
    text11: '',
    src: 'https://amica.kajoo.ca/-/media/0fe2da91a6404d78a74157f83698153d.ashx?db=master&la=en&vs=1&ts=20230913t1702387148',
    alt: 'Facebook',
    href6: 'https://www.linkedin.com/company/amica-senior-lifestyles/',
    text12: '',
    src1: 'https://amica.kajoo.ca/-/media/fc0355ac817a480abbdd1a19798ca014.ashx?db=master&la=en&vs=1&ts=20230913t1703039351',
    alt1: 'Linkedin',
    href7: 'https://www.instagram.com/amicaseniorlifestyles/',
    text13: '',
    src2: 'https://amica.kajoo.ca/-/media/238879b709704f11967b188051ede7dc.ashx?db=master&la=en&vs=1&ts=20230914t1526065887',
    alt2: '',
    href8: 'https://www.youtube.com/channel/UCXyqMibqd9ppUjdR_OzH2AQ/featured',
    text14: '',
    src3: 'https://amica.kajoo.ca/-/media/e65c3eb0cec049608077fb9cc5b809d2.ashx?db=master&la=en&vs=1&ts=20230914t1525056366',
    alt3: '',
    href9: 'https://www.pinterest.ca/AmicaSeniorLifestyles/_created/',
    text15: '',
    src4: 'https://amica.kajoo.ca/-/media/9b8d29469aa7491487debf4b4b3973ca.ashx?db=master&la=en&vs=1&ts=20230914t1526337959',
    alt4: '',
    href10: 'https://www.amica.ca/accessibility-policy',
    text16: 'Accessibility Policy',
    href11: 'https://www.amica.ca/privacy-policy',
    text17: 'Privacy Policy',
    href12: 'https://www.amica.ca/terms-of-use',
    text18: 'Terms of Use',
    text19: '\n                © Amica Senior Lifestyles 2024\n            ',
  },
  rootClassName: '',
}

CorporateFooter2.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default CorporateFooter2
