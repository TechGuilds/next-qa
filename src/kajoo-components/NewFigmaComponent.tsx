/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {
  Container,
  Text,
  RichText,
  Image,
} from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewFigmaComponent.module.css'

const NewFigmaComponent = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} `}>
      <Text text={props.text} className={styles['text']} />
      <Text text={props.text1} className={styles['text01']} />
      <Text text={props.text2} className={styles['text02']} />
      <RichText value={props.value} className={styles['richtext']} />
      <Image src={props.src} alt={props.alt} className={styles['image']} />
      <Image src={props.src1} alt={props.alt1} className={styles['image01']} />
      <Image src={props.src2} alt={props.alt2} className={styles['image02']} />
      <Image src={props.src3} alt={props.alt3} className={styles['image03']} />
      <Image alt={props.alt4} src={props.src4} className={styles['image04']} />
      <Image alt={props.alt5} src={props.src5} className={styles['image05']} />
      <Image src={props.src6} alt={props.alt6} className={styles['image06']} />
      <Image src={props.src7} alt={props.alt7} className={styles['image07']} />
      <Image src={props.src8} alt={props.alt8} className={styles['image08']} />
      <Image src={props.src9} alt={props.alt9} className={styles['image09']} />
      <Container className={styles['container']}>
        <Image
          src={props.src10}
          alt={props.alt10}
          className={styles['image10']}
        />
      </Container>
      <RichText value={props.value1} className={styles['richtext1']} />
      <Image
        src={props.src11}
        alt={props.alt11}
        className={styles['image11']}
      />
      <Image
        src={props.src12}
        alt={props.alt12}
        className={styles['image12']}
      />
      <Image
        src={props.src13}
        alt={props.alt13}
        className={styles['image13']}
      />
      <Image
        src={props.src14}
        alt={props.alt14}
        className={styles['image14']}
      />
      <Text text={props.text3} className={styles['text03']} />
      <Text text={props.text4} className={styles['text04']} />
      <Text text={props.text5} className={styles['text05']} />
      <Text text={props.text6} className={styles['text06']} />
      <RichText value={props.value2} className={styles['richtext2']} />
      <RichText value={props.value3} className={styles['richtext3']} />
      <RichText value={props.value4} className={styles['richtext4']} />
      <RichText value={props.value5} className={styles['richtext5']} />
      <Image
        src={props.src15}
        alt={props.alt15}
        className={styles['image15']}
      />
      <Image
        src={props.src16}
        alt={props.alt16}
        className={styles['image16']}
      />
      <Image
        src={props.src17}
        alt={props.alt17}
        className={styles['image17']}
      />
      <Image
        src={props.src18}
        alt={props.alt18}
        className={styles['image18']}
      />
      <Image
        src={props.src19}
        alt={props.alt19}
        className={styles['image19']}
      />
      <Image
        src={props.src20}
        alt={props.alt20}
        className={styles['image20']}
      />
      <Image
        src={props.src21}
        alt={props.alt21}
        className={styles['image21']}
      />
      <Image
        src={props.src22}
        alt={props.alt22}
        className={styles['image22']}
      />
      <Image
        src={props.src23}
        alt={props.alt23}
        className={styles['image23']}
      />
      <Image
        src={props.src24}
        alt={props.alt24}
        className={styles['image24']}
      />
      <Image
        alt={props.alt25}
        src={props.src25}
        className={styles['image25']}
      />
      <Image
        src={props.src26}
        alt={props.alt26}
        className={styles['image26']}
      />
      <Image
        src={props.src27}
        alt={props.alt27}
        className={styles['image27']}
      />
      <Text text={props.text7} className={styles['text07']} />
      <Image
        src={props.src28}
        alt={props.alt28}
        className={styles['image28']}
      />
      <Image
        src={props.src29}
        alt={props.alt29}
        className={styles['image29']}
      />
      <Container className={styles['container1']}>
        <Image
          src={props.src30}
          alt={props.alt30}
          className={styles['image30']}
        />
      </Container>
      <Container className={styles['container2']}>
        <Image
          src={props.src31}
          alt={props.alt31}
          className={styles['image31']}
        />
      </Container>
      <Container className={styles['container3']}>
        <Container className={styles['container4']} />
        <Text text={props.text8} className={styles['text08']} />
      </Container>
      <Text text={props.text9} className={styles['text09']} />
      <Image
        src={props.src32}
        alt={props.alt32}
        className={styles['image32']}
      />
      <RichText value={props.value6} className={styles['richtext6']} />
      <Image
        src={props.src33}
        alt={props.alt33}
        className={styles['image33']}
      />
      <Image
        alt={props.alt34}
        src={props.src34}
        className={styles['image34']}
      />
      <Text text={props.text10} className={styles['text10']} />
      <Image
        alt={props.alt35}
        src={props.src35}
        className={styles['image35']}
      />
      <Image
        alt={props.alt36}
        src={props.src36}
        className={styles['image36']}
      />
    </Container>
  )
}

NewFigmaComponent.defaultProps = {
  rootClassName: '',
  text: 'Blog',
  text1: 'Contact Us',
  text2: 'Sign In',
  value:
    '<span style="color: rgba(255, 255, 255, 1); \nwidth: ; \nheight: auto; \nfont-weight: 500; \nfont-family: FS Meridian Trial; \ntext-align: left; \nline-height: 63px; \nfont-size: 60px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: absolute; \ntext-decoration: none; \n"><span style="color: rgba(255, 255, 255, 1); \nwidth: ; \nheight: auto; \nfont-weight: 500; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n">The</span><span style="color: rgba(31, 199, 126, 1); \nwidth: ; \nheight: auto; \nfont-weight: 500; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span > All-in-One</span><br /><span /></span><span style="color: rgba(255, 255, 255, 1); \nwidth: ; \nheight: auto; \nfont-weight: 500; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span >Solution for</span><br /><span >Conversational AI</span></span></span>',
  src: 'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/w6K4-chr7sjkzGojL-ZTA.svg',
  alt: 'Rectangle130553174972',
  src1: 'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/s6P3052X2HBpKmnR7PmNs.svg',
  alt1: 'Rectangle130583174973',
  src2: 'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/8oIrBkDg6_uV8AUM1K8d6.svg',
  alt2: 'Rectangle130573174974',
  src3: 'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/vO4R9WAWbKVmPTyKWiisy.svg',
  alt3: 'Rectangle130563174975',
  alt4: 'Ellipse943174976',
  src4: 'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/xNA8aZROSvFfCdW_QQBIg.svg',
  alt5: 'Ellipse953174977',
  src5: 'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/8kuqLs4N_o8h8lbQz2AwM.svg',
  src6: 'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/47LxQHhCLz7Lref97l6tU.svg',
  alt6: 'Rectangle130593174978',
  src7: 'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/aBLH7nw9UOlhz-yCjO41C.svg',
  alt7: 'Rectangle130673174979',
  src8: 'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/u250Eqt3AInx88KAaoUp8.svg',
  alt8: 'Rectangle130683174980',
  src9: 'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/VIxi5CEqFg1wUvQdMqSKZ.svg',
  alt9: 'Rectangle130603174981',
  src10:
    'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/-pBf1g4PU9JsSgmmvEiiJ.png',
  alt10: 'pexelsfauxels3182812BackgroundRemoved13174984',
  value1:
    '<span style="color: rgba(244, 250, 255, 1); \nwidth: 253px; \nheight: auto; \nfont-weight: 500; \nfont-family: General Sans; \ntext-align: left; \nline-height: 25px; \nfont-size: 18px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: absolute; \ntext-decoration: none; \n"><span style="color: rgba(244, 250, 255, 1); \nwidth: 253px; \nheight: auto; \nfont-weight: 500; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n">@OmniGPT</span><span style="color: rgba(244, 250, 255, 1); \nwidth: 253px; \nheight: auto; \nfont-weight: 400; \ntext-align: left; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span > Can you give us</span><br /><span >an update on the latest project</span><br /><span >status?</span></span></span>',
  src11:
    'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/icDiXPKLvxoGHoQO44VAw.svg',
  alt11: 'Rectangle130623174986',
  src12:
    'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/g0Fuj1c5rxDujYvDqN2NS.svg',
  alt12: 'Rectangle130773174987',
  src13:
    'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/Bu_tVDV0lxTneiqzkB9gq.svg',
  alt13: 'Rectangle130753174988',
  src14:
    'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/53FPCWuVyld7JxRnTyE2k.svg',
  alt14: 'Rectangle130783174989',
  text3: 'Seamless Collaboration',
  text4: 'Advanced AI Capabilitie',
  text5: 'Multi-Channel Support',
  text6: 'Multi-Channel Support',
  value2:
    '<span style="color: rgba(0, 0, 0, 1); \nwidth: ; \nheight: auto; \nfont-weight: 400; \nfont-family: General Sans; \ntext-align: left; \nline-height: normal; \nfont-size: 14px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: absolute; \ntext-decoration: none; \n"><span >Easily collaborate with team members</span><br /><span >on projects and ideas in real-time, boosting</span><br /><span >productivity and teamwork</span></span>',
  value3:
    '<span style="color: rgba(255, 255, 255, 1); \nwidth: ; \nheight: auto; \nfont-weight: 400; \nfont-family: General Sans; \ntext-align: left; \nline-height: normal; \nfont-size: 14px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: absolute; \ntext-decoration: none; \n"><span >Leverage the power of Chat GPT-4 technology</span><br /><span >for intelligent suggestions, deep insights,</span><br /><span >and natural language processing</span></span>',
  value4:
    '<span style="color: rgba(255, 255, 255, 1); \nwidth: ; \nheight: auto; \nfont-weight: 400; \nfont-family: General Sans; \ntext-align: left; \nline-height: normal; \nfont-size: 14px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: absolute; \ntext-decoration: none; \n"><span >Stay connected and communicate effortlessly</span><br /><span >through popular channels like WhatsApp,</span><br /><span >Slack and Telegram</span></span>',
  value5:
    '<span style="color: rgba(255, 255, 255, 1); \nwidth: ; \nheight: auto; \nfont-weight: 400; \nfont-family: General Sans; \ntext-align: left; \nline-height: normal; \nfont-size: 14px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: absolute; \ntext-decoration: none; \n"><span >Stay connected and communicate effortlessly</span><br /><span >through popular channels like WhatsApp,</span><br /><span >Slack and Telegram</span></span>',
  src15:
    'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/cVtI6OaUg6zBFwx4yX6pq.svg',
  alt15: 'Rectangle130633174998',
  src16:
    'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/Q2DJjrH2-gvcT10TUBpNW.svg',
  alt16: 'Rectangle130793174999',
  src17:
    'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/wOlrWFNZ2cvit4uYDpetn.svg',
  alt17: 'Rectangle130763175000',
  src18:
    'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/Nr6f1vGjrUC7-Gl9-72eq.svg',
  alt18: 'Rectangle130803175001',
  src19:
    'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/VRXkZzNRnEIcAP6fOso_0.png',
  alt19: 'collaboration13175002',
  src20:
    'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/S4adqiEPtJQhjA9itmKr_.png',
  alt20: 'collaboration33175003',
  src21:
    'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/2mFZ4VtDJoleRKPTOsdch.png',
  alt21: 'collaboration23175004',
  src22:
    'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/W3MJG3Cj8aND0KM1MGDZj.png',
  alt22: 'collaboration43175005',
  src23:
    'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/5D8_MPz8Bx29Msi4JFF4m.png',
  alt23: 'Rectangle130533175006',
  src24:
    'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/BJDsRMtMaUUj2tAWLjwGi.png',
  alt24: 'appleiphone14promax2022medium13175007',
  alt25: 'Ellipse963175008',
  src25:
    'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/EHLWmIloiqbPvc0mQGmuc.svg',
  src26:
    'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/EN_olefdB0nAnp6jFV5T5.png',
  alt26: 'FacebookMessengerlogo202013175009',
  src27:
    'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/czdpRJvHqhw0gtl9ijQKt.png',
  alt27: 'WhatsApp13175010',
  text7: 'Try for free! 15-day trial, no credit card required.',
  src28:
    'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/Ge3dyuVUNSxjKq2rEmdpZ.png',
  alt28: 'omnigptLogo2203230913175046',
  src29: '',
  alt29: 'Rectangle130543175047',
  src30:
    'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/fP2NmERNeUze_P3PhmsPh.png',
  alt30: 'pexelsandreapiacquadio920382BackgroundRemoved13175050',
  src31:
    'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/EWSVdxejI6sE8znW-xpLA.png',
  alt31: 'pexelskindelmedia7688458BackgroundRemoved13175053',
  text8: 'Start your free trial',
  text9: 'Powered by Chat GPT-4',
  src32:
    'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/rfS-oS4IUaGw0-x6j0zWy.svg',
  alt32: 'GraphicElements3175059',
  value6:
    '<span style="color: rgba(255, 255, 255, 1); \nwidth: ; \nheight: auto; \nfont-weight: 500; \nfont-family: FS Meridian Trial; \ntext-align: left; \nline-height: 96px; \nfont-size: 80px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: absolute; \ntext-decoration: none; \n"><span >Seamless</span><br /><span >Communication</span><br /><span >with OmniGPT</span></span>',
  src33:
    'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/LWNEU2vsr50vfPSXfEmRb.svg',
  alt33: 'Group133403175062',
  alt34: 'Shape3175071',
  src34:
    'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/rTCtfIwOR5O-w8qzlm-5A.svg',
  text10: '11:41',
  alt35: 'Vector3175075',
  src35:
    'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/IrCBQD7DSRyqfACl6iKI9.svg',
  alt36: 'Vector3175076',
  src36:
    'https://kajoo.nyc3.digitaloceanspaces.com/local/orgs/60d5efadff0a5060c3aaa66d/assets/j0xIBCS1cpPpuC1tGEUd0.svg',
}

NewFigmaComponent.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  value: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  src1: PropTypes.string,
  alt1: PropTypes.string,
  src2: PropTypes.string,
  alt2: PropTypes.string,
  src3: PropTypes.string,
  alt3: PropTypes.string,
  alt4: PropTypes.string,
  src4: PropTypes.string,
  alt5: PropTypes.string,
  src5: PropTypes.string,
  src6: PropTypes.string,
  alt6: PropTypes.string,
  src7: PropTypes.string,
  alt7: PropTypes.string,
  src8: PropTypes.string,
  alt8: PropTypes.string,
  src9: PropTypes.string,
  alt9: PropTypes.string,
  src10: PropTypes.string,
  alt10: PropTypes.string,
  value1: PropTypes.string,
  src11: PropTypes.string,
  alt11: PropTypes.string,
  src12: PropTypes.string,
  alt12: PropTypes.string,
  src13: PropTypes.string,
  alt13: PropTypes.string,
  src14: PropTypes.string,
  alt14: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  value2: PropTypes.string,
  value3: PropTypes.string,
  value4: PropTypes.string,
  value5: PropTypes.string,
  src15: PropTypes.string,
  alt15: PropTypes.string,
  src16: PropTypes.string,
  alt16: PropTypes.string,
  src17: PropTypes.string,
  alt17: PropTypes.string,
  src18: PropTypes.string,
  alt18: PropTypes.string,
  src19: PropTypes.string,
  alt19: PropTypes.string,
  src20: PropTypes.string,
  alt20: PropTypes.string,
  src21: PropTypes.string,
  alt21: PropTypes.string,
  src22: PropTypes.string,
  alt22: PropTypes.string,
  src23: PropTypes.string,
  alt23: PropTypes.string,
  src24: PropTypes.string,
  alt24: PropTypes.string,
  alt25: PropTypes.string,
  src25: PropTypes.string,
  src26: PropTypes.string,
  alt26: PropTypes.string,
  src27: PropTypes.string,
  alt27: PropTypes.string,
  text7: PropTypes.string,
  src28: PropTypes.string,
  alt28: PropTypes.string,
  src29: PropTypes.string,
  alt29: PropTypes.string,
  src30: PropTypes.string,
  alt30: PropTypes.string,
  src31: PropTypes.string,
  alt31: PropTypes.string,
  text8: PropTypes.string,
  text9: PropTypes.string,
  src32: PropTypes.string,
  alt32: PropTypes.string,
  value6: PropTypes.string,
  src33: PropTypes.string,
  alt33: PropTypes.string,
  alt34: PropTypes.string,
  src34: PropTypes.string,
  text10: PropTypes.string,
  alt35: PropTypes.string,
  src35: PropTypes.string,
  alt36: PropTypes.string,
  src36: PropTypes.string,
}

export default NewFigmaComponent
