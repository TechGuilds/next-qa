/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ContentBlock.module.css'

const ArticleBlog = (props) => {
  return (
    <Container className={styles['root']}>
      <Text
        text={props.heading}
        tag="span"
        className={` ${styles['text']} ${styles['article-blog-header-header-677']} `}
      />
      <Image
        src={props.image_src}
        alt={props.image_alt}
        className={` ${styles['image']} ${styles['article-blog-image-default']} `}
      />
      <Text
        text={props.text1}
        tag="span"
        className={` ${styles['text1']} ${styles['article-blog-text-test-12']} `}
      />
      <Text text={props.text} tag="span" className={styles['text2']} />
      <Text text={props.text} tag="span" className={styles['text3']} />
    </Container>
  )
}

ArticleBlog.defaultProps = {
  heading:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  image_src: '/icons/default-imag.svg',
  image_alt: '',
  text1:
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
}

ArticleBlog.propTypes = {
  heading: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default ArticleBlog
