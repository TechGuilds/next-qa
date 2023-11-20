/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigmaComponent.module.css'

const NewFigmaComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container className={styles['container01']}>
          <Container className={styles['container02']}>
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAACJCAYAAAAYJBvJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK8SURBVHgB7d3NbRRBEIbhXkwk3LiRAJJNCHCGVOBAHKSCCAFx4AYpkMGCLZUl411/+zMzOz3zPFIH0NKrOla11pHrtx8+vvn3GpO6ap24DWSz2X5qm3b94uWr9vvn92+NSXQRyX0gRSiTmn0kjwIpQpnMrCPZG0gRyiRmG0kMpAhldLOM5OBAilBGNbtIjg6kCGU0s4rk5ECKUEYxm0jODqQIZXCziGSwQIpQBnXxSAYPpAhlMBeNZLRAilAGcbFIRg+kCOVsF4lkskCKUM4yeSSTB1KEcrJJI7lYIEUoJ5kskosHUoRytEkimU0gRShHGT2S2QVShHKwUSOZbSBFKAcZLZLZB1KEEo0SSTeBFKE8afBIugukCGWvQSPpNpAilJ0Gi6T7QIpQHhkkksUEUoTywNmRLC6QIpR7Z0Wy2ECKUO6cHMniAylCOS2S1QRSVh7K0ZGsLpCy4lCOimS1gZSVhnJwJKsPpKwwlIMiEch/VhZKjEQge6wolCcjEUiwklD2RiKQA60glJ2RCORICw/lUSQCOdGCQ3kQiUDOtNBQ7iMRyEAWGMpdJAIZ2MJCuRLISBYUyubrrz/b1pGbLz9aR7bt8+tnrXPdf4DxiYRIJEQiIRIJkUiIREIkEiKREImESCREIiESCZFIiERCJBIikRCJhEgkRCIhEgmRSIhEQiQSIpEQiYRIJEQiIRIJkUiIREIkEiKREImESCREIiESCZFIiERCJBIikRCJhEgkRCIhEgmRSIhEQiQSoueNEW03N+/ed3V0aoetSUIkEiKREImESCREIiESCZFIiERCJBIikRCJhEgkRCIhEgmRSIhEQiQSIpEQiYRIJEQiIRIJkUiIREIkEiKREImESCREIiESCZFIiERCJBIikRCJhEgkRCIhEgmRSIhEQiQSotu14b2vtZ6xTVuCv3HfOxkeS7JQAAAAAElFTkSuQmCC"
              alt="imagecontainer2219"
              className={styles['image']}
            />
            <Container className={styles['container03']}>
              <Text
                text="Selecting a Site"
                tag="span"
                className={styles['text']}
              />
              <Container className={styles['container04']}>
                <Text text="Overview" tag="span" className={styles['text01']} />
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTInIGhlaWdodD0nMTInIHZpZXdCb3g9JzAgMCAxMiAxMicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPGcgY2xpcC1wYXRoPSd1cmwoI2NsaXAwXzI4NTg2Xzg3NiknPgo8cGF0aCBkPSdNMyAxMkgwTDMgNkwwIDBIM0w2IDZMMyAxMlonIGZpbGw9JyNCRUQ3M0QnLz4KPHBhdGggZD0nTTkgMTJINkw5IDZMNiAwSDlMMTIgNkw5IDEyWicgZmlsbD0nI0JFRDczRCcvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9J2NsaXAwXzI4NTg2Xzg3Nic+CjxyZWN0IHdpZHRoPScxMicgaGVpZ2h0PScxMicgZmlsbD0nd2hpdGUnLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                  alt="NWMOchevronI2219"
                  className={styles['image1']}
                />
              </Container>
            </Container>
          </Container>
          <Container className={styles['container05']}>
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScyNjMnIHZpZXdCb3g9JzAgMCAxIDI2MycgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPGxpbmUgeDE9JzAuNScgeDI9JzAuNScgeTI9JzI2Mycgc3Ryb2tlPScjQTBBOUFFJy8+Cjwvc3ZnPgo="
              alt="borderline2219"
              className={styles['image2']}
            />
            <Container className={styles['container06']}>
              <Text
                text="How We Got Here"
                tag="span"
                className={styles['text02']}
              />
              <Text
                text="Other Sites Considered"
                tag="span"
                className={styles['text03']}
              />
            </Container>
          </Container>
          <Container className={styles['container07']}>
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScyNjMnIHZpZXdCb3g9JzAgMCAxIDI2MycgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPGxpbmUgeDE9JzAuNScgeTE9JzIuMjU0NDVlLTA4JyB4Mj0nMC40OTk5ODknIHkyPScyNjMnIHN0cm9rZT0nI0NGRDRENicvPgo8L3N2Zz4K"
              alt="borderline2219"
              className={styles['image3']}
            />
            <Container className={styles['container08']}>
              <Text
                text="Ignace and WLON Area"
                tag="span"
                className={styles['text04']}
              />
              <Text
                text="South Bruce and SON Area"
                tag="span"
                className={styles['text05']}
              />
            </Container>
          </Container>
          <Container className={styles['container09']}>
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScyNjMnIHZpZXdCb3g9JzAgMCAxIDI2MycgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPGxpbmUgeDE9JzAuNScgeTE9JzIuMjU0NDVlLTA4JyB4Mj0nMC40OTk5ODknIHkyPScyNjMnIHN0cm9rZT0nI0NGRDRENicvPgo8L3N2Zz4K"
              alt="borderline2219"
              className={styles['image4']}
            />
            <Container className={styles['container10']}>
              <Container className={styles['container11']}>
                <Text
                  text="Conmmunity and National Benefits"
                  tag="span"
                  className={styles['text06']}
                />
                <Text
                  text="Community Wellbeing Framework"
                  tag="span"
                  className={styles['text07']}
                />
                <Text
                  text="Corporate Funding for the Community"
                  tag="span"
                  className={styles['text08']}
                />
                <Text
                  text="Economics"
                  tag="span"
                  className={styles['text09']}
                />
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

NewFigmaComponent.defaultProps = {
  fields: {},
  rootClassName: '',
}

NewFigmaComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default NewFigmaComponent
