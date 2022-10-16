/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Button, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ComponentLocal.module.css'

const ComponentLocal = (props) => {
  return (
    <Container className={styles['root']}>
      <Container className={styles['container']}>
        <Container
          className={` ${styles['container1']} ${styles['container-default']} `}
        >
          <Button
            text={props.fields.text12}
            className={` ${styles['button']} ${styles['button-variad']} `}
          />
          <Button
            text="Statics"
            link="www.statics.com"
            className={` ${styles['button1']} ${styles['button-btn']} `}
          />
          <Button
            link={props.fields.link4}
            className={` ${styles['button2']} ${styles['button-default']} `}
          />
          <Button
            text={props.fields.text15}
            link="LinkStatic.com"
            className={` ${styles['button3']} ${styles['button-default']} `}
          />
          <Button
            link={props.fields.link6}
            className={` ${styles['button4']} ${styles['button-default']} `}
          />
        </Container>
        <Container
          className={` ${styles['container2']} ${styles['container-default']} `}
        >
          <Link
            href={props.fields.href5}
            className={` ${styles['link']} ${styles['link-default']} `}
          />
          <Link
            href="#"
            text="Statics"
            className={` ${styles['link1']} ${styles['link-link-350']} `}
          />
          <Link
            href={props.fields.href7}
            className={` ${styles['link2']} ${styles['link-link-350']} `}
          />
          <Link
            href="LinkStatic.com"
            text={props.fields.text18}
            className={` ${styles['link3']} ${styles['link-link-350']} `}
          />
          <Link
            href={props.fields.href9}
            className={` ${styles['link4']} ${styles['link-link-350']} `}
          />
        </Container>
        <Button
          link={props.fields.link7}
          className={styles['button-default']}
        />
      </Container>
    </Container>
  )
}

ComponentLocal.defaultProps = {
  fields: {},
}

ComponentLocal.propTypes = {
  fields: PropTypes.object,
}

export default ComponentLocal
