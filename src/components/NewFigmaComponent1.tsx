/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text, Button } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigmaComponent1.module.css'

const NewFigmaComponent1 = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Image
          src={props.fields.src}
          alt={props.fields.alt}
          className={styles['image']}
        />
        <Image
          alt={props.fields.alt1}
          src={props.fields.src1}
          className={styles['image01']}
        />
        <Text text={props.fields.text} className={styles['text']} />
        <Text text={props.fields.text1} className={styles['text1']} />
        <Image
          src={props.fields.src2}
          alt={props.fields.alt2}
          className={styles['image02']}
        />
        <Image
          src={props.fields.src3}
          alt={props.fields.alt3}
          className={styles['image03']}
        />
        <Image
          src={props.fields.src4}
          alt={props.fields.alt4}
          className={styles['image04']}
        />
        <Image
          src={props.fields.src5}
          alt={props.fields.alt5}
          className={styles['image05']}
        />
        <Image
          src={props.fields.src6}
          alt={props.fields.alt6}
          className={styles['image06']}
        />
        <Image
          src={props.fields.src7}
          alt={props.fields.alt7}
          className={styles['image07']}
        />
        <Container className={styles['container01']}>
          <Container className={styles['container02']}>
            <Container className={styles['container03']}>
              <Image
                src={props.fields.src11}
                alt={props.fields.alt11}
                className={styles['image08']}
              />
              <Image
                alt={props.fields.alt12}
                src={props.fields.src12}
                className={styles['image09']}
              />
              <Image
                src={props.fields.src13}
                alt={props.fields.alt13}
                className={styles['image10']}
              />
            </Container>
            <Container className={styles['container04']}>
              <Image
                alt={props.fields.alt14}
                src={props.fields.src14}
                className={styles['image11']}
              />
            </Container>
            <Container className={styles['container05']}>
              <Image
                alt={props.fields.alt15}
                src={props.fields.src15}
                className={styles['image12']}
              />
            </Container>
          </Container>
          <Container className={styles['container06']}>
            <Text text={props.fields.text5} className={styles['text2']} />
          </Container>
        </Container>
        <Container className={styles['container07']}>
          <Container className={styles['container08']}>
            <Image
              src={props.fields.src16}
              alt={props.fields.alt16}
              className={styles['image13']}
            />
            <Container className={styles['container09']}>
              <Image
                alt={props.fields.alt17}
                src={props.fields.src17}
                className={styles['image14']}
              />
            </Container>
            <Container className={styles['container10']}>
              <Image
                alt={props.fields.alt18}
                src={props.fields.src18}
                className={styles['image15']}
              />
            </Container>
            <Container className={styles['container11']}>
              <Image
                src={props.fields.src19}
                alt={props.fields.alt19}
                className={styles['image16']}
              />
              <Image
                alt={props.fields.alt20}
                src={props.fields.src20}
                className={styles['image17']}
              />
            </Container>
            <Container className={styles['container12']}>
              <Image
                alt={props.fields.alt21}
                src={props.fields.src21}
                className={styles['image18']}
              />
            </Container>
            <Container className={styles['container13']}>
              <Image
                src={props.fields.src22}
                alt={props.fields.alt22}
                className={styles['image19']}
              />
            </Container>
          </Container>
          <Image
            src={props.fields.src23}
            alt={props.fields.alt23}
            className={styles['image20']}
          />
        </Container>
        <Container>
          <Button className={styles['button']} />
          <Image
            src={props.fields.src8}
            alt={props.fields.alt8}
            className={styles['image21']}
          />
          <Text text={props.fields.text2} className={styles['text3']} />
        </Container>
        <Container>
          <Button className={styles['button1']} />
          <Image
            src={props.fields.src9}
            alt={props.fields.alt9}
            className={styles['image22']}
          />
          <Text text={props.fields.text3} className={styles['text4']} />
        </Container>
        <Container>
          <Button className={styles['button2']} />
          <Image
            src={props.fields.src10}
            alt={props.fields.alt10}
            className={styles['image23']}
          />
          <Text text={props.fields.text4} className={styles['text5']} />
        </Container>
      </Container>
    </Container>
  )
}

NewFigmaComponent1.defaultProps = {
  rootClassName: '',
  fields: {},
}

NewFigmaComponent1.propTypes = {
  rootClassName: PropTypes.string,
  fields: PropTypes.object,
}

export default NewFigmaComponent1
