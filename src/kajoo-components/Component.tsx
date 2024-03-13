/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text, Button } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component.module.css'

const AppComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container tag="section" className={styles['container']}>
        <Container className={styles['container01']}>
          <Container className={styles['container02']}>
            <Image
              src="https://www.biolage.ca/dist/img/about_us_logo.jpg"
              alt="About Biolage"
              className={styles['image']}
            />
          </Container>
          <Container className={styles['container03']}>
            <h2 className={styles['html-element']}>
              <Text text="about " />
              <Text text="us" className={styles['text01']} />
            </h2>
            <p className={styles['html-element1']}>
              <Text text="BIOLAGE" className={styles['text02']} />
              <Text text=" is recognized worldwide as a leader in the professional haircare field. This is because " />
              <Text text="BIOLAGE" className={styles['text04']} />
              <Text text=" is constantly improving — taking haircare to new levels by offering high-performance, professional-quality products powered by botanicals." />
            </p>
          </Container>
        </Container>
      </Container>
      <Container className={styles['container04']}>
        <Container className={styles['container05']}>
          <Container
            tag="section"
            id="promise"
            className={styles['container06']}
          >
            <Container className={styles['container07']}>
              <h2 className={styles['html-element2']}>
                <Text text="sustainability" className={styles['text06']} />
                <Text text=" is an " />
                <Text text="everyday" className={styles['text08']} />
                <Text text=" promise" />
              </h2>
              <Container className={styles['container08']}>
                <Container className={styles['container09']}>
                  <Image
                    src="https://www.biolage.ca/dist/img/green_icon_vegan_formula.png"
                    alt="vegan formula"
                    className={styles['image1']}
                  />
                  <Text
                    tag="h5"
                    text="VEGAN FORMULA"
                    className={styles['text10']}
                  />
                  <Text
                    tag="p"
                    text="All our formulas are now 100% vegan."
                    className={styles['text11']}
                  />
                </Container>
                <Container className={styles['container10']}>
                  <Image
                    src="https://www.biolage.ca/dist/img/green_icon_cruelty_free.png"
                    alt="cruelty free"
                    className={styles['image2']}
                  />
                  <Text
                    tag="h5"
                    text="CRUELTY FREE"
                    className={styles['text12']}
                  />
                  <Text
                    tag="p"
                    text="Approved as cruelty-free under the Leaping Bunny programme."
                    className={styles['text13']}
                  />
                </Container>
                <Container className={styles['container11']}>
                  <Image
                    src="https://www.biolage.ca/dist/img/green_icon_plastic_pledge.png"
                    alt="plastic pledge"
                    className={styles['image3']}
                  />
                  <Text
                    tag="h5"
                    text="PLASTIC PLEDGE"
                    className={styles['text14']}
                  />
                  <Text
                    tag="p"
                    text="Our bottles are now made with 100% recycled plastic."
                    className={styles['text15']}
                  />
                </Container>
                <Container className={styles['container12']}>
                  <Image
                    src="https://www.biolage.ca/dist/img/green_icon_the_ingredients.png"
                    alt="ingredients"
                    className={styles['image4']}
                  />
                  <Text
                    tag="h5"
                    text="THE INGREDIENTS"
                    className={styles['text16']}
                  />
                  <Text
                    tag="p"
                    text="Natural and chosen to rival the most potent synthetic ones."
                    className={styles['text17']}
                  />
                </Container>
                <Container className={styles['container13']}>
                  <Image
                    src="https://www.biolage.ca/dist/img/green_icon_manufacturing.png"
                    alt="manufacturing"
                    className={styles['image5']}
                  />
                  <Text
                    tag="h5"
                    text="MANUFACTURING"
                    className={styles['text18']}
                  />
                  <Text
                    tag="p"
                    text="100% carbon-neutral primary manufacturing facility sends zero waste to landfill."
                    className={styles['text19']}
                  />
                </Container>
                <Container className={styles['container14']}>
                  <Image
                    src="https://www.biolage.ca/dist/img/green_icon_formula_standards.png"
                    alt="formula standards"
                    className={styles['image6']}
                  />
                  <Text
                    tag="h5"
                    text="FORMULA STANDARDS"
                    className={styles['text20']}
                  />
                  <Text
                    tag="p"
                    text="Minimum of 85% biodegradable*, paraben-free**."
                    className={styles['text21']}
                  />
                  <small className={styles['html-element3']}>
                    <Text text="*All shampoos,**All shampoos and conditioners" />
                  </small>
                </Container>
              </Container>
            </Container>
            <Button
              text={props.fields.text1}
              link={props.fields.link}
              className={'button-default'}
            />
          </Container>
          <Text
            text={props.fields.text3}
            tag="h1"
            className={'header-defaultfsd'}
          />
        </Container>
        <Text
          text={props.fields.text2}
          tag="h1"
          className={'header-defaultfsd'}
        />
      </Container>
    </Container>
  )
}

AppComponent.defaultProps = {
  fields: {
    text: 'Heading',
    text1: 'Button',
    link: '#',
    text2: 'Heading',
    text3: 'Heading',
  },
  rootClassName: '',
}

AppComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default AppComponent
