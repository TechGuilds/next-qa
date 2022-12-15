/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './AbaHeader.module.css'

const AbaHeader = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Image
          src={props.fields.src}
          alt={props.fields.alt}
          className={` ${styles['image']} ${styles['image-default']} `}
        />
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Container
            className={` ${styles['container2']} ${styles['container-default']} `}
          >
            <Link
              href={props.fields.href}
              className={styles['link-cta-link']}
            />
          </Container>
          <Container
            className={` ${styles['container3']} ${styles['container-default']} `}
          >
            <Link
              href={props.fields.href1}
              className={styles['link-nav-link']}
            />
            <Link
              href={props.fields.href2}
              className={styles['link-nav-link']}
            />
            <Link
              href={props.fields.href3}
              className={styles['link-nav-link']}
            />
            <Link
              href={props.fields.href4}
              className={` ${styles['link4']} ${styles['link-nav-link']} `}
            />
            <Link
              href={props.fields.href5}
              className={styles['link-nav-link']}
            />
            <Link
              href={props.fields.href6}
              className={styles['link-nav-link']}
            />
          </Container>
          <Container
            className={` ${styles['container4']} ${styles['container-default']} `}
          >
            <Image
              src={props.fields.src2}
              alt={props.fields.alt2}
              className={` ${styles['image1']} ${styles['image-default']} `}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

AbaHeader.defaultProps = {
  rootClassName: '',
  fields: {},
}

AbaHeader.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default AbaHeader
