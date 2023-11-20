/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigmaComponent6.module.css'

const NewFigmaComponent6 = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Text
            text="Do you have a question?"
            tag="span"
            className={styles['text']}
          />
          <Container className={styles['container2']}>
            <Text text="More FAQ" tag="span" className={styles['text1']} />
          </Container>
        </Container>
        <Container className={styles['container3']}>
          <Container className={styles['container4']}>
            <Text
              text="Lorem ipsum dolor amet consectetur adipiscing elit?"
              tag="span"
              className={styles['text2']}
            />
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzInIGhlaWdodD0nMzInIHZpZXdCb3g9JzAgMCAzMiAzMicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTI1LjMzMzcgMTcuMzMyN0gxNy4zMzM3VjI1LjMzMjdIMTQuNjY3VjE3LjMzMjdINi42NjY5OVYxNC42NjZIMTQuNjY3VjYuNjY2MDJIMTcuMzMzN1YxNC42NjZIMjUuMzMzN1YxNy4zMzI3WicgZmlsbD0nIzAwN0NDMycvPgo8L3N2Zz4K"
              alt="AddFilledI2219"
              className={styles['image']}
            />
          </Container>
          <Container className={styles['container5']}>
            <Text
              text="Lorem ipsum dolor amet consectetur adipiscing elit?"
              tag="span"
              className={styles['text3']}
            />
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzInIGhlaWdodD0nMzInIHZpZXdCb3g9JzAgMCAzMiAzMicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTI1LjMzMzcgMTcuMzMyN0gxNy4zMzM3VjI1LjMzMjdIMTQuNjY3VjE3LjMzMjdINi42NjY5OVYxNC42NjZIMTQuNjY3VjYuNjY2MDJIMTcuMzMzN1YxNC42NjZIMjUuMzMzN1YxNy4zMzI3WicgZmlsbD0nIzAwN0NDMycvPgo8L3N2Zz4K"
              alt="AddFilledI2219"
              className={styles['image1']}
            />
          </Container>
          <Container className={styles['container6']}>
            <Container className={styles['container7']}>
              <Text
                text="Lorem ipsum dolor amet consectetur adipiscing elit?"
                tag="span"
                className={styles['text4']}
              />
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzInIGhlaWdodD0nMzInIHZpZXdCb3g9JzAgMCAzMiAzMicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTI1LjMzMzcgMTcuMzMyN0g2LjY2Njk5VjE0LjY2NkgyNS4zMzM3VjE3LjMzMjdaJyBmaWxsPScjMDA3Q0MzJy8+Cjwvc3ZnPgo="
                alt="RemoveFilledI2219"
                className={styles['image2']}
              />
            </Container>
            <Text
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel aenean arcu fringilla ut pretium, orci, vel dui. Et, sed fermentum semper faucibus cras fermentum purus. Pharetra in ac quam morbi in vestibulum lectus ut viverra. Et lacus, consequat faucibus lectus diam. Id elementum lobortis dolor id mi neque. Ac pellentesque commodo massa nulla odio scelerisque. Maecenas nullam semper."
              tag="span"
              className={styles['text5']}
            />
          </Container>
          <Container className={styles['container8']}>
            <Text
              text="Lorem ipsum dolor amet consectetur adipiscing elit?"
              tag="span"
              className={styles['text6']}
            />
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzInIGhlaWdodD0nMzInIHZpZXdCb3g9JzAgMCAzMiAzMicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTI1LjMzMzcgMTcuMzMyN0gxNy4zMzM3VjI1LjMzMjdIMTQuNjY3VjE3LjMzMjdINi42NjY5OVYxNC42NjZIMTQuNjY3VjYuNjY2MDJIMTcuMzMzN1YxNC42NjZIMjUuMzMzN1YxNy4zMzI3WicgZmlsbD0nIzAwN0NDMycvPgo8L3N2Zz4K"
              alt="AddFilledI2219"
              className={styles['image3']}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

NewFigmaComponent6.defaultProps = {
  fields: {},
  rootClassName: '',
}

NewFigmaComponent6.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default NewFigmaComponent6
