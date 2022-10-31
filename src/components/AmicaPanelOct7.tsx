/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Button } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AmicaPanelOct7.module.css'

const NewFigmaComponent1 = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Container className={styles['container2']}>
            <Text text={props.text} className={styles['text']} />
            <Container className={styles['container3']}>
              <Text text={props.text2} className={styles['text1']} />
            </Container>
            <Button
              text={props.text3}
              link={props.link}
              className={` ${styles['button-default']} ${styles['button']} `}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

NewFigmaComponent1.defaultProps = {
  fuzjcTP0sL5GNYYavTMq_:
    'Get expert tips and ideas for better sleep, enhanced memory, managing stress, downsizing and more in our new online workshops.',
  KkXYGFCG3zVhEsBkUAJ_o:
    '<span style="border-bottom-color: rgb(88, 122, 141); \nborder-bottom-style: solid; \nborder-bottom-width: 1px; \nborder-left-color: rgb(88, 122, 141); \nborder-left-style: solid; \nborder-left-width: 1px; \nborder-right-color: rgb(88, 122, 141); \nborder-right-style: solid; \nborder-right-width: 1px; \nborder-top-color: rgb(88, 122, 141); \nborder-top-style: solid; \nborder-top-width: 1px; \nborder-width: 1px; \nbox-sizing: border-box; \ncolor: rgb(88, 122, 141); \ndisplay: inline-block; \nfont-family: "Open Sans", sans-serif; \nfont-size: 14px; \nheight: 47px; \nline-height: 21px; \npadding-bottom: 12px; \npadding-left: 12px; \npadding-right: 12px; \npadding-top: 12px; \ntext-align: center; \ntext-decoration-color: transparent; \ntext-decoration-line: none; \ntext-transform: uppercase; \nvertical-align: middle; \nwidth: 250px; \n"><span /><span >Watch now</span><span /></span>',
  rootClassName: '',
  text: 'Webinars for Seniors',
  text2:
    'Get expert tips and ideas for better sleep, enhanced memory, managing stress, downsizing and more in our new online workshops.',
  text3: 'Button',
  link: '',
}

NewFigmaComponent1.propTypes = {
  fuzjcTP0sL5GNYYavTMq_: PropTypes.string,
  KkXYGFCG3zVhEsBkUAJ_o: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  link: PropTypes.string,
}

export default NewFigmaComponent1
