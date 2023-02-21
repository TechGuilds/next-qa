/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Button, Link } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './ContentBlockswithLink221.module.css'

const ContentBlockswithLink221 = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container01']}>
          <Container className={styles['container02']}>
            <Container className={styles['container03']}>
              <Text text={props.fields.text} className={styles['text']} />
            </Container>
            <Container className={styles['container04']}>
              <Text text={props.fields.text1} className={styles['text1']} />
            </Container>
          </Container>
          <Container className={styles['container05']}>
            <Container className={styles['container06']}>
              <Text text={props.fields.text2} className={styles['text2']} />
            </Container>
            <Container className={styles['container07']}>
              <Text text={props.fields.text3} className={styles['text3']} />
            </Container>
          </Container>
        </Container>
        <Container className={styles['container08']}>
          <Container className={styles['container09']}>
            <Container className={styles['container10']}>
              <Text text={props.fields.text4} className={styles['text4']} />
            </Container>
            <Container className={styles['container11']}>
              <Text text={props.fields.text5} className={styles['text5']} />
            </Container>
          </Container>
          <Container className={styles['container12']}>
            <Container className={styles['container13']}>
              <Text text={props.fields.text6} className={styles['text6']} />
            </Container>
            <Container className={styles['container14']}>
              <Text text={props.fields.text7} className={styles['text7']} />
            </Container>
          </Container>
        </Container>
      </Container>
      <Container className={styles['container15']}>
        <Button
          text={props.fields.text9}
          className={` ${styles['button']} ${styles['button-default']} `}
        />
        <Link
          href={props.fields.href}
          className={` ${styles['link']} ${styles['link-default']} `}
        />
      </Container>
    </Container>
  )
}

ContentBlockswithLink221.defaultProps = {
  rootClassName: '',
  fields: {},
}

ContentBlockswithLink221.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default ContentBlockswithLink221
