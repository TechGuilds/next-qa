/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Image,
  Text,
  Button,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigmaComponent.module.css'

const NewFigmaComponent = (props) => {
  return (
    <Container className={styles[props.rootClassName]}>
      <Container className={styles['container']}>
        <Container className={styles['container01']}>
          <Image alt={props.alt} src={props.src} className={styles['image']} />
          <Container className={styles['container02']}>
            <Text text={props.text} className={styles['text']} />
            <Container>
              <Button className={styles['button']} />
              <Container>
                <Button className={styles['button1']} />
                <Image
                  alt={props.alt1}
                  src={props.src1}
                  className={styles['image01']}
                />
                <Image
                  src={props.src2}
                  alt={props.alt2}
                  className={styles['image02']}
                />
              </Container>
              <Container>
                <Button className={styles['button2']} />
                <Image
                  alt={props.alt3}
                  src={props.src3}
                  className={styles['image03']}
                />
                <Image
                  src={props.src4}
                  alt={props.alt4}
                  className={styles['image04']}
                />
              </Container>
            </Container>
          </Container>
        </Container>
        <Container className={styles['container06']}>
          <Container className={styles['container07']}>
            <Image
              src={props.src5}
              alt={props.alt5}
              className={styles['image05']}
            />
            <Container className={styles['container08']}>
              <Image
                alt={props.alt6}
                src={props.src6}
                className={styles['image06']}
              />
              <Container className={styles['container09']}>
                <Container className={styles['container10']}>
                  <Text text={props.text1} className={styles['text1']} />
                  <Text text={props.text2} className={styles['text2']} />
                </Container>
                <Container className={styles['container11']}>
                  <Text text={props.text3} className={styles['text3']} />
                  <Image
                    src={props.src7}
                    alt={props.alt7}
                    className={styles['image07']}
                  />
                </Container>
              </Container>
              <Image
                alt={props.alt8}
                src={props.src8}
                className={styles['image08']}
              />
            </Container>
          </Container>
          <Container className={styles['container12']}>
            <Image
              src={props.src9}
              alt={props.alt9}
              className={styles['image09']}
            />
            <Container className={styles['container13']}>
              <Image
                alt={props.alt10}
                src={props.src10}
                className={styles['image10']}
              />
              <Container className={styles['container14']}>
                <Container className={styles['container15']}>
                  <Text text={props.text4} className={styles['text4']} />
                </Container>
                <Container className={styles['container16']}>
                  <Text text={props.text5} className={styles['text5']} />
                  <Image
                    src={props.src11}
                    alt={props.alt11}
                    className={styles['image11']}
                  />
                </Container>
              </Container>
              <Image
                alt={props.alt12}
                src={props.src12}
                className={styles['image12']}
              />
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

NewFigmaComponent.defaultProps = {
  rootClassName: '',
  alt: 'borderlineI296237124110758824',
  src: 'https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/components/fbxRd_FusSfrok_1-voLg.svg',
  text: 'Featured Reports',
  alt1: 'containerI296237124110758881110758842',
  src1: 'https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/components/sK9yQ32iYp2MhlxyCiYrC.svg',
  src2: 'https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/components/gHBwwJbxGVYVbjAwUdxCr.svg',
  alt2: 'ChevronLeftFilledI296237124110758881110758843',
  alt3: 'containerI296237124110758880110758836',
  src3: 'https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/components/5VgMuWT_Jqk2yEDBYDiMf.svg',
  src4: 'https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/components/qMvRThK9n2pgPWWjjVSVr.svg',
  alt4: 'ChevronRightFilledI296237124110758880110758837',
  src5: 'https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/components/SPqMXPFGKiQYqnw-MDVjh.png',
  alt5: 'imagecontainerI296237124111258678110758811',
  alt6: 'borderlineI296237124111258678110758809',
  src6: 'https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/components/PksPZsmvOdICVACDQYzAS.svg',
  text1: 'NWMO Annual Report 2021',
  text2:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie nulla eu magna morbi.',
  text3: 'Learn more',
  src7: 'https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/components/XfbVdDF7VFn-YhGK10tK_.svg',
  alt7: 'NWMOchevronI296237124111258678111258665110558073',
  alt8: 'borderlineI296237124111258678110758810',
  src8: 'https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/components/iUdIVDPQPqPLr_T7ESxmj.svg',
  src9: 'https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/components/GcUuLDmN-Pt0bwV0xyaCf.png',
  alt9: 'imagecontainerI296237124111258692111258710',
  alt10: 'borderlineI296237124111258692111258712',
  src10:
    'https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/components/VuTbcjWnH7nHWuHC-ocGL.svg',
  text4: 'Implementing Adaptive Phased Management 2022 to 2026',
  text5: 'Learn more',
  src11:
    'https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/components/JAJ3EBcG9WOI9E897Aqkg.svg',
  alt11: 'NWMOchevronI296237124111258692111258717110558073',
  alt12: 'borderlineI296237124111258692111258718',
  src12:
    'https://kajoo.nyc3.digitaloceanspaces.com/development/orgs/TechGuilds%20Consulting%20Inc._60d5efadff0a5060c3aaa66d/components/-TLZHR0eYVIOTAQjHs2BQ.svg',
}

NewFigmaComponent.propTypes = {
  rootClassName: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.string,
  text: PropTypes.string,
  alt1: PropTypes.string,
  src1: PropTypes.string,
  src2: PropTypes.string,
  alt2: PropTypes.string,
  alt3: PropTypes.string,
  src3: PropTypes.string,
  src4: PropTypes.string,
  alt4: PropTypes.string,
  src5: PropTypes.string,
  alt5: PropTypes.string,
  alt6: PropTypes.string,
  src6: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  src7: PropTypes.string,
  alt7: PropTypes.string,
  alt8: PropTypes.string,
  src8: PropTypes.string,
  src9: PropTypes.string,
  alt9: PropTypes.string,
  alt10: PropTypes.string,
  src10: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  src11: PropTypes.string,
  alt11: PropTypes.string,
  alt12: PropTypes.string,
  src12: PropTypes.string,
}

export default NewFigmaComponent
