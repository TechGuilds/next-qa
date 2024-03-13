/* eslint-disable */
// @ts-nocheck 
import { KajooLayoutFactory } from '@kajoo-ai/sitecore-nextjs';



import React from 'react'
import {
  Container,
  Image,
  Link,
  Text,
  RichText,
  Button,
} from '@kajoo-ai/sitecore-nextjs'
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs'

import { Helmet } from 'react-helmet'

import styles from './Biolage.module.css'

const Biolage = (props) => {
  return (
    <Container tag="body" className={styles['root']}>
      <Helmet>
        <title>Biolage</title>
        <meta property="og:description" content />
        <meta property="og:image" content />
        <meta property="og:title" content />
        <meta name="description" content />
        <meta name="title" content />
        <link rel="canonical" href />
      </Helmet>
      <Container tag="header" className={styles['container']}>
        <Container className={styles['container01']}>
          <Image
            src="https://www.biolage.ca/dist/img/logo.png"
            alt="Biolage Professional"
            className={styles['image']}
          />
        </Container>
        <Link href="fr/index.html" text="FR" className={styles['link']} />
      </Container>
      <Container className={styles['container02']}>
        <Container tag="section" className={styles['container03']}>
          <Container className={styles['container04']} />
        </Container>
        <Container tag="section" className={styles['container05']}>
          <Container className={styles['container06']}>
            <h1 className={styles['html-element']}>
              <Placeholder name rendering={props.layoutData.sitecore.route} />
              <br className={styles['html-element01']} />
              <Text text="naturally biolage." />
            </h1>
            <Text
              tag="p"
              text="at biolage we are committed to creating hair care that combines the best of science and nature."
              className={styles['text01']}
            />
          </Container>
        </Container>
        <Container tag="section" className={styles['container07']}>
          <Container className={styles['container08']}>
            <h2 className={styles['html-element02']}>
              <Text text="get inspired by our " />
              <Text text="collections" className={styles['text03']} />
            </h2>
          </Container>
          <Container className={styles['container09']}>
            <RichText value='&lt;svg class="arrow arrow_left" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 50"&gt;&lt;path opacity=".5" fill="#2E3841" d="M36 50H0V0h36z"&gt;&lt;/path&gt;&lt;path d="M22.91 34.818 13.09 25l9.818-9.818" stroke="#fff" stroke-width="2"&gt;&lt;/path&gt;&lt;/svg&gt;' />
            <RichText value='&lt;svg class="arrow arrow_right" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 50"&gt;&lt;path opacity=".5" fill="#2E3841" d="M0 0h36v50H0z"&gt;&lt;/path&gt;&lt;path d="M13.09 15.182 22.91 25l-9.818 9.818" stroke="#fff" stroke-width="2"&gt;&lt;/path&gt;&lt;/svg&gt;' />
            <Container className={styles['container10']}>
              <Container className={styles['container11']}>
                <Container className={styles['container12']}>
                  <Container className={styles['container13']}>
                    <Image
                      src="https://www.biolage.ca/dist/img/biolage-bond-therapy.jpg"
                      alt="Biolage Bond Therapy"
                      className={styles['image01']}
                    />
                  </Container>
                  <Container className={styles['container14']}>
                    <Text text="NEW!" className={styles['text04']} />
                    <Text
                      tag="h3"
                      text="Bond Therapy"
                      className={styles['text05']}
                    />
                    <p className={styles['html-element03']}>
                      <Text text="Bond building meets" />
                      <br className={styles['html-element04']} />
                      <Text text="nourishing care\n                " />
                    </p>
                    <Text
                      tag="p"
                      text="Bond Therapy is the utlimate bond care, leaving hair feeling soft and deeply conditioned. The formulas are created to build bonds within your hair with continued use, all while protecting hair from heat and styling."
                      className={styles['text08']}
                    />
                    <Link
                      href="https://www.biolage.ca/bond-therapy.html"
                      target="_blank"
                      text="Learn More"
                      className={styles['link01']}
                    />
                  </Container>
                </Container>
                <Image
                  src="https://www.biolage.ca/dist/img/biolage-bond-therapy-hero-cream.png"
                  alt="Bond Therapy texture"
                  className={styles['image02']}
                />
              </Container>
              <Container className={styles['container15']}>
                <Container className={styles['container16']}>
                  <Container className={styles['container17']}>
                    <Image
                      src="https://www.biolage.ca/dist/img/hydra-source.jpg"
                      alt="Hydra Source Products"
                      className={styles['image03']}
                    />
                  </Container>
                  <Container className={styles['container18']}>
                    <h3 className={styles['html-element05']}>
                      <Text text="Hydra Source" />
                      <br className={styles['html-element06']} />
                      <Text text="Blowdry shaping Lotion" />
                    </h3>
                    <Text
                      tag="p"
                      text="The perfect combination of heat protection, weightless hydration and shape memory to reduce drying time and protect from up to 450°F heat."
                      className={styles['text11']}
                    />
                    <Container className={styles['container19']}>
                      <Container className={styles['container20']}>
                        <Image
                          src="https://www.biolage.ca/dist/img/icon_vegan_formula.png"
                          alt="vegan formula"
                          className={styles['image04']}
                        />
                      </Container>
                      <Container className={styles['container21']}>
                        <Image
                          src="https://www.biolage.ca/dist/img/icon_cruelty_free.png"
                          alt="cruelty free"
                          className={styles['image05']}
                        />
                      </Container>
                    </Container>
                    <Link
                      href="https://www.biolage.ca/hydra-source.html"
                      target="_blank"
                      text="Learn More"
                      className={styles['link02']}
                    />
                  </Container>
                </Container>
                <Image
                  src="https://www.biolage.ca/dist/img/collection_hydra_source_texture.png"
                  alt="hydra source texture"
                  className={styles['image06']}
                />
              </Container>
              <Container className={styles['container22']}>
                <Container className={styles['container23']}>
                  <Container className={styles['container24']}>
                    <Image
                      src="https://www.biolage.ca/dist/img/collection_hydra_source_visuel.jpg"
                      alt="Hydra Source Products"
                      className={styles['image07']}
                    />
                  </Container>
                  <Container className={styles['container25']}>
                    <Text
                      tag="h3"
                      text="Hydra Source"
                      className={styles['text12']}
                    />
                    <Text
                      tag="p"
                      text="Quench dry, thirsty hair with formulas inspired by nature that mimic the moisture-retaining properties of the aloe plant. Dry hair moisture levels are balanced leaving hair soft and more manageable."
                      className={styles['text13']}
                    />
                  </Container>
                </Container>
                <Image
                  src="https://www.biolage.ca/dist/img/collection_hydra_source_texture.png"
                  alt="hydra source texture"
                  className={styles['image08']}
                />
              </Container>
              <Container className={styles['container26']}>
                <Container className={styles['container27']}>
                  <Container className={styles['container28']}>
                    <Image
                      src="https://www.biolage.ca/dist/img/collection_strength_recovery_visuel.jpg"
                      alt="Hydra Source Products"
                      className={styles['image09']}
                    />
                  </Container>
                  <Container className={styles['container29']}>
                    <Text
                      tag="h3"
                      text="Strength Recovery"
                      className={styles['text14']}
                    />
                    <Text
                      tag="p"
                      text="Repair that cares. Instant strength and care for damaged hair. Infused with vegan squalene, sourced from olive trees to protect &amp; strengthen hair."
                      className={styles['text15']}
                    />
                    <Link
                      href="https://www.biolage.ca/strength-recovery.html"
                      target="_blank"
                      text="Learn More"
                      className={styles['link03']}
                    />
                  </Container>
                </Container>
                <Image
                  src="https://www.biolage.ca/dist/img/collection_hydra_source_texture.png"
                  alt="hydra source texture"
                  className={styles['image10']}
                />
              </Container>
              <Container className={styles['container30']}>
                <Container className={styles['container31']}>
                  <Container className={styles['container32']}>
                    <Image
                      src="https://www.biolage.ca/dist/img/collection_color_last_visuel.jpg"
                      alt="Color Last Products"
                      className={styles['image11']}
                    />
                  </Container>
                  <Container className={styles['container33']}>
                    <Text
                      tag="h3"
                      text="Color Last"
                      className={styles['text16']}
                    />
                    <Text
                      tag="p"
                      text="Let your true color shine. Formulas inspired by the anti-fade properties of the vibrant orchid help protect color-treated hair, balance moisture and even out the hair’s surface for saturated, shiny, vibrant color that stays truer."
                      className={styles['text17']}
                    />
                  </Container>
                </Container>
                <Image
                  src="https://www.biolage.ca/dist/img/collection_color_last_texture.png"
                  alt="Color Last texture"
                  className={styles['image12']}
                />
              </Container>
              <Container className={styles['container34']}>
                <Container className={styles['container35']}>
                  <Container className={styles['container36']}>
                    <Image
                      src="https://www.biolage.ca/dist/img/collection_smooth_proof_visuel.png"
                      alt="Smooth Proof Products"
                      className={styles['image13']}
                    />
                  </Container>
                  <Container className={styles['container37']}>
                    <Text
                      tag="h3"
                      text="Smooth Proof"
                      className={styles['text18']}
                    />
                    <Text
                      tag="p"
                      text="Prove yourself smooth. Let go of frizz and unwanted volume with formulas inspired by the water-resistant properties of the camellia flower. Formulas help lock out moisture for control &amp; smoothness even in 97% humidity."
                      className={styles['text19']}
                    />
                  </Container>
                </Container>
                <Image
                  src="https://www.biolage.ca/dist/img/collection_smooth_proof_texture.png"
                  alt="Smooth Proof texture"
                  className={styles['image14']}
                />
              </Container>
              <Container className={styles['container38']}>
                <Container className={styles['container39']}>
                  <Container className={styles['container40']}>
                    <Image
                      src="https://www.biolage.ca/dist/img/collection_volume_bloom_visuel.png"
                      alt="Volume Bloom Products"
                      className={styles['image15']}
                    />
                  </Container>
                  <Container className={styles['container41']}>
                    <Text
                      tag="h3"
                      text="Volume Bloom"
                      className={styles['text20']}
                    />
                    <Text
                      tag="p"
                      text="Get volume that won’t let you down. Formulas inspired by the expansive properties of the cotton flow. Hair is plumped and expanded with long lasting, bouncy volume."
                      className={styles['text21']}
                    />
                  </Container>
                </Container>
                <Image
                  src="https://www.biolage.ca/dist/img/collection_volume_bloom_texture.png"
                  alt="Volume Bloom texture"
                  className={styles['image16']}
                />
              </Container>
            </Container>
          </Container>
        </Container>
        <Container tag="section" className={styles['container42']}>
          <Container className={styles['container43']}>
            <h2 className={styles['html-element07']}>
              <Text text="discover our " />
              <Text text="bestsellers" className={styles['text23']} />
            </h2>
          </Container>
          <Container className={styles['container44']}>
            <RichText value='&lt;svg class="arrow arrow_left" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 50"&gt;&lt;path opacity=".5" fill="#2E3841" d="M36 50H0V0h36z"&gt;&lt;/path&gt;&lt;path d="M22.91 34.818 13.09 25l9.818-9.818" stroke="#fff" stroke-width="2"&gt;&lt;/path&gt;&lt;/svg&gt;' />
            <RichText value='&lt;svg class="arrow arrow_right" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 50"&gt;&lt;path opacity=".5" fill="#2E3841" d="M0 0h36v50H0z"&gt;&lt;/path&gt;&lt;path d="M13.09 15.182 22.91 25l-9.818 9.818" stroke="#fff" stroke-width="2"&gt;&lt;/path&gt;&lt;/svg&gt;' />
            <Container className={styles['container45']}>
              <Container className={styles['container46']}>
                <Link href="#cta" text className={styles['link04']}>
                  <Image
                    src="https://www.biolage.ca/dist/img/bestseller_hydra_source_shampoo.png"
                    alt="Hydra Source Shampoo"
                    className={styles['image17']}
                  />
                  <Image
                    src="https://www.biolage.ca/dist/img/bestseller_hydra_source_texture.png"
                    alt="Hydra Source Texture"
                    className={styles['image18']}
                  />
                  <Text
                    tag="p"
                    text="Get this product"
                    className={styles['text24']}
                  />
                </Link>
                <Container className={styles['container47']}>
                  <Text
                    tag="h5"
                    text="Hydra Source"
                    className={styles['text25']}
                  />
                  <Text tag="p" text="Shampoo" className={styles['text26']} />
                  <small className={styles['html-element08']}>
                    <Text text="for dry hair" />
                  </small>
                  <Container className={styles['container48']}>
                    <Text text="4.7 " className={styles['text28']} />
                    <RichText value='&lt;svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17"&gt;&lt;path d="m9 0 2.02 6.219h6.54l-5.29 3.843 2.02 6.22L9 12.437 3.71 16.28l2.02-6.219L.44 6.22h6.54L9 0Z" fill="#789D4A"&gt;&lt;/path&gt;&lt;/svg&gt;' />
                    <Text text=" on Amazon" className={styles['text29']} />
                  </Container>
                </Container>
              </Container>
              <Container className={styles['container49']}>
                <Link href="#cta" text className={styles['link05']}>
                  <Image
                    src="https://www.biolage.ca/dist/img/bestseller_volume_bloom_shampoo.png"
                    alt="Volume Bloom Shampoo"
                    className={styles['image19']}
                  />
                  <Image
                    src="https://www.biolage.ca/dist/img/bestseller_volume_bloom_texture.png"
                    alt="Volume Bloom Texture"
                    className={styles['image20']}
                  />
                  <Text
                    tag="p"
                    text="Get this product"
                    className={styles['text30']}
                  />
                </Link>
                <Container className={styles['container50']}>
                  <Text
                    tag="h5"
                    text="Volume bloom"
                    className={styles['text31']}
                  />
                  <Text tag="p" text="Shampoo" className={styles['text32']} />
                  <small className={styles['html-element09']}>
                    <Text text="for fine and thinning hair" />
                  </small>
                  <Container className={styles['container51']}>
                    <Text text="4.4 " className={styles['text34']} />
                    <RichText value='&lt;svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17"&gt;&lt;path d="m9 0 2.02 6.219h6.54l-5.29 3.843 2.02 6.22L9 12.437 3.71 16.28l2.02-6.219L.44 6.22h6.54L9 0Z" fill="#789D4A"&gt;&lt;/path&gt;&lt;/svg&gt;' />
                    <Text text=" on Amazon" className={styles['text35']} />
                  </Container>
                </Container>
              </Container>
              <Container className={styles['container52']}>
                <Link href="#cta" text className={styles['link06']}>
                  <Image
                    src="https://www.biolage.ca/dist/img/bestseller_ultra_hydra_source_leavein.png"
                    alt="Ultra Hydra Source Shampoo"
                    className={styles['image21']}
                  />
                  <Image
                    src="https://www.biolage.ca/dist/img/bestseller_ultra_hydra_source_texture.png"
                    alt="Ultra Hydra Source Texture"
                    className={styles['image22']}
                  />
                  <Text
                    tag="p"
                    text="Get this product"
                    className={styles['text36']}
                  />
                </Link>
                <Container className={styles['container53']}>
                  <Text
                    tag="h5"
                    text="Ultra Hydra Source"
                    className={styles['text37']}
                  />
                  <Text
                    tag="p"
                    text="Conditioning Balm"
                    className={styles['text38']}
                  />
                  <small className={styles['html-element10']}>
                    <Text text="for very dry hair" />
                  </small>
                  <Container className={styles['container54']}>
                    <Text text="4.6 " className={styles['text40']} />
                    <RichText value='&lt;svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17"&gt;&lt;path d="m9 0 2.02 6.219h6.54l-5.29 3.843 2.02 6.22L9 12.437 3.71 16.28l2.02-6.219L.44 6.22h6.54L9 0Z" fill="#789D4A"&gt;&lt;/path&gt;&lt;/svg&gt;' />
                    <Text text=" on Amazon" className={styles['text41']} />
                  </Container>
                </Container>
              </Container>
              <Container className={styles['container55']}>
                <Link href="#cta" text className={styles['link07']}>
                  <Image
                    src="https://www.biolage.ca/dist/img/bestseller_smooth_proof_shampoo.png"
                    alt="Ultra Hydra Source Shampoo"
                    className={styles['image23']}
                  />
                  <Image
                    src="https://www.biolage.ca/dist/img/bestseller_smooth_proof_texture.png"
                    alt="Ultra Hydra Source Texture"
                    className={styles['image24']}
                  />
                  <Text
                    tag="p"
                    text="Get this product"
                    className={styles['text42']}
                  />
                </Link>
                <Container className={styles['container56']}>
                  <Text
                    tag="h5"
                    text="Smooth Proof"
                    className={styles['text43']}
                  />
                  <Text tag="p" text="Shampoo" className={styles['text44']} />
                  <small className={styles['html-element11']}>
                    <Text text="for frizzy hair" />
                  </small>
                  <Container className={styles['container57']}>
                    <Text text="4.6 " className={styles['text46']} />
                    <RichText value='&lt;svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17"&gt;&lt;path d="m9 0 2.02 6.219h6.54l-5.29 3.843 2.02 6.22L9 12.437 3.71 16.28l2.02-6.219L.44 6.22h6.54L9 0Z" fill="#789D4A"&gt;&lt;/path&gt;&lt;/svg&gt;' />
                    <Text text=" on Amazon" className={styles['text47']} />
                  </Container>
                </Container>
              </Container>
              <Container className={styles['container58']}>
                <Link href="#cta" text className={styles['link08']}>
                  <Image
                    src="https://www.biolage.ca/dist/img/bestseller_color_last_shampoo.png"
                    alt="Ultra Hydra Source Shampoo"
                    className={styles['image25']}
                  />
                  <Image
                    src="https://www.biolage.ca/dist/img/bestseller_color_last_texture.png"
                    alt="Ultra Hydra Source Texture"
                    className={styles['image26']}
                  />
                  <Text
                    tag="p"
                    text="Get this product"
                    className={styles['text48']}
                  />
                </Link>
                <Container className={styles['container59']}>
                  <Text
                    tag="h5"
                    text="Color Last"
                    className={styles['text49']}
                  />
                  <Text tag="p" text="Shampoo" className={styles['text50']} />
                  <small className={styles['html-element12']}>
                    <Text text="for color-treated hair" />
                  </small>
                  <Container className={styles['container60']}>
                    <Text text="4.7 " className={styles['text52']} />
                    <RichText value='&lt;svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17"&gt;&lt;path d="m9 0 2.02 6.219h6.54l-5.29 3.843 2.02 6.22L9 12.437 3.71 16.28l2.02-6.219L.44 6.22h6.54L9 0Z" fill="#789D4A"&gt;&lt;/path&gt;&lt;/svg&gt;' />
                    <Text text=" on Amazon" className={styles['text53']} />
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>
          <Container id="cta" className={styles['container61']}>
            <Text tag="h3" text="Shop Now" className={styles['text54']} />
            <Container className={styles['container62']}>
              <Container className={styles['container63']}>
                <Container className={styles['container64']}>
                  <Text
                    tag="p"
                    text="I am a stylist"
                    className={styles['text55']}
                  />
                  <p className={styles['html-element13']}>
                    <RichText value='&lt;svg viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"&gt;&lt;path d="m13 1.5-6 6-6-6" stroke="#ffffff" stroke-width="2"&gt;&lt;/path&gt;&lt;/svg&gt;' />
                  </p>
                </Container>
                <ul className={styles['html-element14']}>
                  <li className={styles['html-element15']}>
                    <Link
                      onclick="dataLayer.push(&#123;'event': 'uaevent','event_name': 'buy_now','eventAction': 'click to buy','eventCategory': 'Ecommerce Stylist','eventLabel': 'Beaute Star','product_info': 'All Biolage Products EN'&#125;);"
                      href="https://www.beautestar.com/en/all-products?brand=Biolage"
                      target="_blank"
                      text="Beaute star"
                      className={styles['link09']}
                    />
                  </li>
                  <li className={styles['html-element16']}>
                    <Link
                      onclick="dataLayer.push(&#123;'event': 'uaevent','event_name': 'buy_now','eventAction': 'click to buy','eventCategory': 'Ecommerce Stylist','eventLabel': 'Cosmoprofbeauty','product_info': 'All Biolage Products EN'&#125;);"
                      href="https://www.cosmoprofbeauty.ca/biolage-2"
                      target="_blank"
                      text="Cosmo Prof"
                      className={styles['link10']}
                    />
                  </li>
                  <li className={styles['html-element17']}>
                    <Link
                      onclick="dataLayer.push(&#123;'event': 'uaevent','event_name': 'buy_now','eventAction': 'click to buy','eventCategory': 'Ecommerce Stylist','eventLabel': 'Intenational Beauty','product_info': 'All Biolage Products EN'&#125;);"
                      href="https://www.internationalbeauty.ca/search?type=product%2Carticle&amp;options%5Bprefix%5D=last&amp;q=biolage"
                      target="_blank"
                      text="International Beauty Services"
                      className={styles['link11']}
                    />
                  </li>
                  <li className={styles['html-element18']}>
                    <Link
                      onclick="dataLayer.push(&#123;'event': 'uaevent','event_name': 'buy_now','eventAction': 'click to buy','eventCategory': 'Ecommerce Stylist','eventLabel': 'TBBS','product_info': 'All Biolage Products EN'&#125;);"
                      href="https://www.tbbs.ca/liquid-luxuries"
                      target="_blank"
                      text="Liquid Luxuries"
                      className={styles['link12']}
                    />
                  </li>
                  <li className={styles['html-element19']}>
                    <Link
                      onclick="dataLayer.push(&#123;'event': 'uaevent','event_name': 'buy_now','eventAction': 'click to buy','eventCategory': 'Ecommerce Stylist','eventLabel': 'Maritime Beauty Shop','product_info': 'All Biolage Products EN'&#125;);"
                      href="https://www.maritimebeautyshop.com/manufacturer/310/biolage"
                      target="_blank"
                      text="Maritime Beauty Shop"
                      className={styles['link13']}
                    />
                  </li>
                </ul>
              </Container>
              <Container className={styles['container65']}>
                <Container className={styles['container66']}>
                  <Text
                    tag="p"
                    text="I am a consumer"
                    className={styles['text56']}
                  />
                  <p className={styles['html-element20']}>
                    <RichText value='&lt;svg viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"&gt;&lt;path d="m13 1.5-6 6-6-6" stroke="#ffffff" stroke-width="2"&gt;&lt;/path&gt;&lt;/svg&gt;' />
                  </p>
                </Container>
                <ul className={styles['html-element21']}>
                  <li className={styles['html-element22']}>
                    <Link
                      onclick="dataLayer.push(&#123;'event': 'uaevent','event_name': 'buy_now','eventAction': 'click to buy','eventCategory': 'Ecommerce Consumer','eventLabel': 'Amazon','product_info': 'All Biolage Products EN'&#125;);"
                      href="https://www.amazon.ca/stores/page/5815C95C-3376-4436-BAFE-28E48CABE488/?_encoding=UTF8&amp;store_ref=SB_A10127613MEDWYHWRR4B9&amp;pd_rd_plhdr=t&amp;aaxitk=f4bcdb7c84e96d40501f6f30195bb5c6&amp;hsa_cr_id=6363512840801&amp;lp_asins=B00ILBUEVK%2CB00IK1CJZU%2CB00IRDAZ7K&amp;lp_query=biolage&amp;lp_slot=auto-sparkle-hsa-tetris&amp;ref_=sbx_be_s_sparkle_lsi4d_logo&amp;pd_rd_w=Db4fr&amp;content-id=amzn1.sym.2391ded4-5342-4a72-ab16-54835c13e968%3Aamzn1.sym.2391ded4-5342-4a72-ab16-54835c13e968&amp;pf_rd_p=2391ded4-5342-4a72-ab16-54835c13e968&amp;pf_rd_r=MG5CE8YBTTVMJ1KWGE2X&amp;pd_rd_wg=T1Z2p&amp;pd_rd_r=958f90f2-5b04-47a9-aece-23cb3d85bbc9"
                      target="_blank"
                      text="Amazon"
                      className={styles['link14']}
                    />
                  </li>
                  <li className={styles['html-element23']}>
                    <Link
                      onclick="dataLayer.push(&#123;'event': 'uaevent','event_name': 'buy_now','eventAction': 'click to buy','eventCategory': 'Ecommerce Consumer','eventLabel': 'Beaute Star','product_info': 'All Biolage Products EN'&#125;);"
                      href="https://www.beautestar.com/en/all-products?brand=Biolage"
                      target="_blank"
                      text="Beaute star"
                      className={styles['link15']}
                    />
                  </li>
                  <li className={styles['html-element24']}>
                    <Link
                      onclick="dataLayer.push(&#123;'event': 'uaevent','event_name': 'buy_now','eventAction': 'click to buy','eventCategory': 'Ecommerce Consumer','eventLabel': 'Coastal Beauty','product_info': 'All Biolage Products EN'&#125;);"
                      href="https://coastalbeauty.ca/manufacturer/310/biolage"
                      target="_blank"
                      text="Coastal Beauty"
                      className={styles['link16']}
                    />
                  </li>
                  <li className={styles['html-element25']}>
                    <Link
                      onclick="dataLayer.push(&#123;'event': 'uaevent','event_name': 'buy_now','eventAction': 'click to buy','eventCategory': 'Ecommerce Consumer','eventLabel': 'Chatters','product_info': 'All Biolage Products EN'&#125;);"
                      href="https://chatters.ca/collections/biolage"
                      target="_blank"
                      text="Chatters"
                      className={styles['link17']}
                    />
                  </li>
                  <li className={styles['html-element26']}>
                    <Link
                      onclick="dataLayer.push(&#123;'event': 'uaevent','event_name': 'buy_now','eventAction': 'click to buy','eventCategory': 'Ecommerce Consumer','eventLabel': 'Tommy Guns','product_info': 'All Biolage Products EN'&#125;);"
                      href="https://ca.tommyguns.com/collections/biolage"
                      target="_blank"
                      text="Tommy Guns"
                      className={styles['link18']}
                    />
                  </li>
                  <li className={styles['html-element27']}>
                    <Link
                      onclick="dataLayer.push(&#123;'event': 'uaevent','event_name': 'buy_now','eventAction': 'click to buy','eventCategory': 'Ecommerce Consumer','eventLabel': 'TBBS','product_info': 'All Biolage Products EN'&#125;);"
                      href="https://shoptbbs.ca/collections/biolage"
                      target="_blank"
                      text="TBBS"
                      className={styles['link19']}
                    />
                  </li>
                </ul>
              </Container>
            </Container>
          </Container>
        </Container>
        <Container tag="section" className={styles['container67']}>
          <Container className={styles['container68']}>
            <h2 className={styles['html-element28']}>
              <Text text="what others say about " />
              <Text text="BIOLAGE" className={styles['text58']} />
            </h2>
          </Container>
          <Container className={styles['container69']}>
            <Container className={styles['container70']}>
              <video
                autoplay
                muted
                playsinline
                loop
                className={styles['html-element29']}
              >
                <source
                  src="https://www.biolage.ca/dist/video/biolage_video_1080x1080.mp4"
                  type="video/mp4"
                  className={styles['html-element30']}
                />
              </video>
            </Container>
            <Container className={styles['container71']}>
              <Container className={styles['container72']}>
                <RichText value='&lt;svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111 20"&gt;&lt;path d="m11.125 0 2.435 6.877h7.88l-6.375 4.25 2.435 6.877-6.375-4.25-6.376 4.25 2.435-6.877-6.376-4.25H8.69L11.125 0ZM33.22 0l2.526 6.877h8.173l-6.612 4.25 2.525 6.877-6.611-4.25-6.612 4.25 2.525-6.877-6.612-4.25h8.173L33.221 0ZM77.412 0l2.526 6.877h8.172l-6.611 4.25 2.525 6.877-6.612-4.25-6.612 4.25 2.526-6.877-6.612-4.25h8.173L77.412 0ZM55.316 0l2.436 6.877h7.88l-6.375 4.25 2.435 6.877-6.376-4.25-6.375 4.25 2.435-6.877L45 6.877h7.881L55.316 0ZM99.508 0l2.435 6.877h7.881l-6.376 4.25 2.436 6.877-6.376-4.25-6.376 4.25 2.436-6.877-6.376-4.25h7.88L99.509 0Z" fill="#789D4A"&gt;&lt;/path&gt;&lt;/svg&gt;' />
                <Text
                  tag="h3"
                  text="“The scent is unmatched”"
                  className={styles['text59']}
                />
                <p className={styles['html-element31']}>
                  <Text text="My hair's picky but the Color Last line is amazing. My hair never gets weighed down and it helps the color last a longer time in between my hair appointments." />
                  <br className={styles['html-element32']} />
                  <strong className={styles['html-element33']}>
                    <Text text="- Customer from Amazon" />
                  </strong>
                </p>
              </Container>
              <Container className={styles['container73']}>
                <RichText value='&lt;svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111 20"&gt;&lt;path d="m11.125 0 2.435 6.877h7.88l-6.375 4.25 2.435 6.877-6.375-4.25-6.376 4.25 2.435-6.877-6.376-4.25H8.69L11.125 0ZM33.22 0l2.526 6.877h8.173l-6.612 4.25 2.525 6.877-6.611-4.25-6.612 4.25 2.525-6.877-6.612-4.25h8.173L33.221 0ZM77.412 0l2.526 6.877h8.172l-6.611 4.25 2.525 6.877-6.612-4.25-6.612 4.25 2.526-6.877-6.612-4.25h8.173L77.412 0ZM55.316 0l2.436 6.877h7.88l-6.375 4.25 2.435 6.877-6.376-4.25-6.375 4.25 2.435-6.877L45 6.877h7.881L55.316 0ZM99.508 0l2.435 6.877h7.881l-6.376 4.25 2.436 6.877-6.376-4.25-6.376 4.25 2.436-6.877-6.376-4.25h7.88L99.509 0Z" fill="#789D4A"&gt;&lt;/path&gt;&lt;/svg&gt;' />
                <Text
                  tag="h3"
                  text="“All my clients love it”"
                  className={styles['text62']}
                />
                <p className={styles['html-element34']}>
                  <Text text="I've been a hairstylist for 8 years and love Biolage. The smell is divine and there's something for every hair type, especially color-treated hair." />
                  <br className={styles['html-element35']} />
                  <strong className={styles['html-element36']}>
                    <Text text="- Hairstylist in Ontario" />
                  </strong>
                </p>
              </Container>
              <Container className={styles['container74']}>
                <RichText value='&lt;svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 20"&gt;&lt;path d="m11.125 0 2.435 6.877h7.88l-6.375 4.25 2.435 6.877-6.375-4.25-6.376 4.25 2.435-6.877-6.376-4.25H8.69L11.125 0ZM33.22 0l2.526 6.877h8.173l-6.612 4.25 2.525 6.877-6.611-4.25-6.612 4.25 2.525-6.877-6.612-4.25h8.173L33.221 0ZM77.412 0l2.526 6.877h8.172l-6.611 4.25 2.525 6.877-6.612-4.25-6.612 4.25 2.526-6.877-6.612-4.25h8.173L77.412 0Z" fill="#789D4A"&gt;&lt;/path&gt;&lt;path d="m100.249 0 2.525 6.877h8.173l-6.612 4.25 2.526 6.877-6.612-4.25-6.612 4.25 2.525-6.877-6.611-4.25h8.172L100.25 0Z" fill="url(#a)"&gt;&lt;/path&gt;&lt;path d="m55.316 0 2.436 6.877h7.88l-6.375 4.25 2.435 6.877-6.376-4.25-6.375 4.25 2.435-6.877L45 6.877h7.881L55.316 0Z" fill="#789D4A"&gt;&lt;/path&gt;&lt;defs&gt;&lt;linearGradient id="a" x1="100" y1="9.5" x2="101" y2="9.5" gradientUnits="userSpaceOnUse"&gt;&lt;stop stop-color="#789D4A"&gt;&lt;/stop&gt;&lt;stop offset="1" stop-color="#959595"&gt;&lt;/stop&gt;&lt;/linearGradient&gt;&lt;/defs&gt;&lt;/svg&gt;' />
                <Text
                  tag="h3"
                  text="“Get a personalized haircare routine”"
                  className={styles['text65']}
                />
                <p className={styles['html-element37']}>
                  <Text text="Biolage allows you to customize your hair routine. I can't live without the Full Density line, reducing hair loss and fuller-feeling hair. I also use All-In-One Shampoo Scrub to exfoliate and clean in just one step." />
                  <br className={styles['html-element38']} />
                  <strong className={styles['html-element39']}>
                    <Text text="- Hairstylist in Alberta" />
                  </strong>
                </p>
              </Container>
            </Container>
          </Container>
        </Container>
        <Container tag="section" className={styles['container75']}>
          <Container className={styles['container76']}>
            <h2 className={styles['html-element40']}>
              <Text text="you might have " />
              <span className={styles['html-element41']}>
                <Text text="seen us" className={styles['text69']} />
                <Text text=" on" />
              </span>
            </h2>
            <Container className={styles['container77']}>
              <Container className={styles['container78']}>
                <Placeholder name rendering={props.layoutData.sitecore.route} />
              </Container>
              <Container className={styles['container79']}>
                <Image
                  src="https://www.biolage.ca/dist/img/logo_chatelaine_magazine.png"
                  alt="Chatelaine"
                  className={styles['image27']}
                />
              </Container>
              <Container className={styles['container80']}>
                <Image
                  src="https://www.biolage.ca/dist/img/logo_salon_magazine.png"
                  alt="Salon"
                  className={styles['image28']}
                />
              </Container>
              <Container className={styles['container81']}>
                <Image
                  src="https://www.biolage.ca/dist/img/logo_clin_oeil_magazine.png"
                  alt="Clin d'oeil"
                  className={styles['image29']}
                />
              </Container>
              <Container className={styles['container82']}>
                <Image
                  src="https://www.biolage.ca/dist/img/logo_canadian_living_magazine.png"
                  alt="Canadian_Living"
                  className={styles['image30']}
                />
              </Container>
              <Container className={styles['container83']}>
                <Image
                  src="https://www.biolage.ca/dist/img/logo_narcity_magazine.png"
                  alt="Narcity"
                  className={styles['image31']}
                />
              </Container>
            </Container>
          </Container>
        </Container>
        <Placeholder name rendering={props.layoutData.sitecore.route} />
        <Button text="Button" link="#" className={'button-default'} />
        <Container tag="section" className={styles['container84']}>
          <Container className={styles['container85']}>
            <h2 className={styles['html-element42']}>
              <Text text="let’s be " />
              <Text text="friends" className={styles['text72']} />
            </h2>
            <Text
              tag="p"
              text="Sign up for our newsletter to receive information on new product innovations, promotions, contests, trends &amp; more. Your hair will love it!"
              className={styles['text73']}
            />
            <Text tag="h3" text="Subscribe now" className={styles['text74']} />
            <Container className={styles['container86']}>
              <Link
                onclick="dataLayer.push(&#123;'event': 'uaevent','event_name': 'body_button_click','eventAction': 'Subscribe','eventCategory':'Newsletter','eventLabel': 'subscribe::https://cloud.mail.professionalproducts.loreal.ca/biolage_stylist_sign_up','cta_name': 'Subscribe Stylist EN','link_url': 'https://cloud.mail.professionalproducts.loreal.ca/biolage_stylist_sign_up','module_name': 'Signup for newsletters'&#125;);"
                href="https://cloud.mail.professionalproducts.loreal.ca/biolage_stylist_sign_up"
                text="I am a stylist"
                className={styles['link20']}
              />
              <Link
                onclick="dataLayer.push(&#123;'event': 'uaevent','event_name': 'body_button_click','eventAction': 'Subscribe','eventCategory':'Newsletter','eventLabel': 'subscribe::https://mcqg7tb-yjgl2414mz73fvhqnjg1.pub.sfmc-content.com/0ctil10dqf1','cta_name': 'Subscribe Conso EN','link_url': 'https://mcqg7tb-yjgl2414mz73fvhqnjg1.pub.sfmc-content.com/0ctil10dqf1','module_name': 'Signup for newsletters'&#125;);"
                href="https://mcqg7tb-yjgl2414mz73fvhqnjg1.pub.sfmc-content.com/0ctil10dqf1"
                text="I am a consumer"
                className={styles['link21']}
              />
            </Container>
          </Container>
          <Image
            src="https://www.biolage.ca/dist/img/texture_last_section-1.png"
            alt="Texture"
            className={styles['image32']}
          />
          <Image
            src="https://www.biolage.ca/dist/img/texture_last_section-2.png"
            alt="Texture"
            className={styles['image33']}
          />
          <Container className={styles['container87']}>
            <RichText value='&lt;svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"&gt;&lt;circle cx="18" cy="18" r="18" fill="#789D4A"&gt;&lt;/circle&gt;&lt;path d="M8.182 22.91 18 13.09l9.818 9.818" stroke="#fff" stroke-width="2"&gt;&lt;/path&gt;&lt;/svg&gt;' />
          </Container>
        </Container>
      </Container>
      <Container tag="footer" className={styles['container88']}>
        <Container className={styles['container89']}>
          <Container className={styles['container90']}>
            <Container className={styles['container91']}>
              <Container className={styles['container92']}>
                <Text tag="h5" text="Contact Us" className={styles['text75']} />
                <p className={styles['html-element43']}>
                  <Text text="Call us at " />
                  <Link
                    href="tel:1-888-422-6879"
                    text="1-888-422-6879"
                    className={styles['link22']}
                  />
                </p>
                <Text
                  tag="p"
                  text="Mail us at Biolage Canada, 1500 Boul. Robert-Bourassa, Bureau 600, Montreal, Quebec, H3A 3S8"
                  className={styles['text77']}
                />
              </Container>
              <Container className={styles['container93']}>
                <Text
                  tag="h5"
                  text="For Professionals"
                  className={styles['text78']}
                />
                <p className={styles['html-element44']}>
                  <Link
                    href="https://club.matrixprofessional.ca/en-ca/my-account"
                    target="_blank"
                    text="Explore exclusive deals for Club members"
                    className={styles['link23']}
                  />
                </p>
                <p className={styles['html-element45']}>
                  <Text text="Become a Biolage Ambassador" />
                  <br className={styles['html-element46']} />
                  <Text text="E-mail us at " />
                  <Link
                    href="mailto:CACORP.BiolageAmbassador@loreal.com"
                    text="CACORP.BiolageAmbassador@loreal.com"
                    className={styles['link24']}
                  />
                </p>
              </Container>
              <Container className={styles['container94']}>
                <Text tag="h5" text="Follow Us" className={styles['text81']} />
                <Container className={styles['container95']}>
                  <Link
                    href="https://www.facebook.com/Biolage-Canada-286334252184370"
                    target="_blank"
                    text
                    className={styles['link25']}
                  >
                    <RichText value='&lt;svg fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"&gt;&lt;path fill-rule="evenodd" clip-rule="evenodd" d="M15.801 0A2.2 2.2 0 0 1 18 2.199V15.8A2.2 2.2 0 0 1 15.801 18h-3.743v-6.782H14.4l.446-2.905h-2.787V6.428c0-.794.39-1.569 1.637-1.569h1.268V2.386s-1.15-.196-2.25-.196c-2.295 0-3.795 1.391-3.795 3.91v2.213H6.366v2.905h2.552V18h-6.72A2.2 2.2 0 0 1 0 15.801V2.2A2.2 2.2 0 0 1 2.199 0H15.8Z" fill="#fff"&gt;&lt;/path&gt;&lt;/svg&gt;' />
                  </Link>
                  <Link
                    href="https://www.youtube.com/c/Biolage/featured"
                    target="_blank"
                    text
                    className={styles['link26']}
                  >
                    <RichText value='&lt;svg fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="18" viewBox="0 0 26 18"&gt;&lt;path d="M10.4 12.857V5.143L17.155 9 10.4 12.857ZM25.457 2.81A3.239 3.239 0 0 0 23.158.537C21.13 0 13 0 13 0S4.87 0 2.842.537A3.24 3.24 0 0 0 .543 2.81C0 4.816 0 9 0 9s0 4.184.543 6.19a3.237 3.237 0 0 0 2.299 2.273C4.869 18 13 18 13 18s8.13 0 10.158-.537a3.238 3.238 0 0 0 2.299-2.274C26 13.186 26 9 26 9s0-4.184-.543-6.19Z" fill="#fff"&gt;&lt;/path&gt;&lt;/svg&gt;' />
                  </Link>
                  <Link
                    href="https://www.instagram.com/biolage/"
                    target="_blank"
                    text
                    className={styles['link27']}
                  >
                    <RichText value='&lt;svg fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"&gt;&lt;g clip-path="url(#a)" fill="#fff"&gt;&lt;path d="M9 1.621c2.403 0 2.688.01 3.636.053.878.04 1.355.186 1.672.31.42.163.72.358 1.035.673.315.315.51.614.673 1.035.123.317.27.793.31 1.671.043.95.052 1.234.052 3.637s-.01 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.42-.358.72-.673 1.036-.315.315-.615.51-1.035.673-.318.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.01-3.637-.052c-.878-.04-1.354-.187-1.671-.31a2.789 2.789 0 0 1-1.035-.673 2.784 2.784 0 0 1-.673-1.035c-.124-.318-.27-.794-.31-1.671-.043-.95-.053-1.234-.053-3.637s.01-2.688.053-3.637c.04-.878.186-1.354.31-1.671.163-.42.358-.72.673-1.035.315-.315.614-.51 1.035-.673.317-.124.793-.27 1.67-.31C6.313 1.63 6.598 1.62 9 1.62ZM9 0C6.555 0 6.25.01 5.29.054 4.33.098 3.676.25 3.103.473A4.42 4.42 0 0 0 1.51 1.511c-.5.5-.808 1.002-1.038 1.594C.25 3.677.098 4.332.054 5.29.01 6.25-.001 6.556-.001 9c0 2.445.01 2.751.055 3.711.043.958.196 1.612.418 2.185A4.42 4.42 0 0 0 1.51 16.49c.5.5 1.002.808 1.594 1.038.573.223 1.227.375 2.185.419C6.25 17.99 6.555 18 9 18c2.445 0 2.752-.01 3.712-.054.958-.044 1.612-.196 2.184-.419a4.42 4.42 0 0 0 1.595-1.038c.5-.5.808-1.002 1.037-1.594.223-.572.375-1.227.419-2.185.044-.96.054-1.267.054-3.71 0-2.445-.01-2.751-.054-3.711-.044-.958-.196-1.612-.419-2.185a4.419 4.419 0 0 0-1.037-1.594A4.41 4.41 0 0 0 14.895.473C14.323.25 13.67.098 12.711.054 11.75.01 11.444 0 9 0Z"&gt;&lt;/path&gt;&lt;path d="M14.884 4.196a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0ZM9 4.379a4.621 4.621 0 1 0 0 9.242A4.621 4.621 0 0 0 9 4.38Zm0 7.62A3 3 0 1 1 9 6a3 3 0 0 1 0 6Z"&gt;&lt;/path&gt;&lt;/g&gt;&lt;defs&gt;&lt;clipPath id="a"&gt;&lt;path fill="#fff" d="M0 0h18v18H0z"&gt;&lt;/path&gt;&lt;/clipPath&gt;&lt;/defs&gt;&lt;/svg&gt;' />
                  </Link>
                </Container>
              </Container>
            </Container>
          </Container>
          <Container className={styles['container96']}>
            <Container className={styles['container97']}>
              <Container className={styles['container98']}>
                <Text
                  tag="p"
                  text="© Biolage Ltd. 2022, All Rights Reserved"
                  className={styles['text82']}
                />
                <p className={styles['html-element47']}>
                  <Text text="This site is for Canada only. Cookies and related technology are used for advertising." />
                  <br className={styles['html-element48']} />
                  <Text text="To learn about your choices see our " />
                  <Link
                    href="https://brandassets.lorealpublications.com/biolage-landing-2022/Biolage.ca_Privacy_Policy.pdf"
                    target="_blank"
                    text="privacy policy"
                    className={styles['link28']}
                  />
                  <Text text=" and " />
                  <Link
                    href="https://brandassets.lorealpublications.com/biolage-landing-2022/Biolage.ca_Terms_Of_Use.pdf"
                    target="_blank"
                    text="terms of use"
                    className={styles['link29']}
                  />
                  <Text text="." />
                </p>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
      <iframe
        height="0"
        width="0"
        src="https://6493187.fls.doubleclick.net/activityi;src=6493187;type=allus0;cat=allpa0;ord=1;num=5678078983367;npa=0;auiddc=371381669.1710345659;u1=desktop;u2=undefined;u3=undefined;u4=undefined;u5=undefined;u6=undefined;u7=undefined;u8=;u9=;u10=;u11=;u12=;u13=;u14=;u15=;u16=;u17=;u18=undefined;u19=undefined;u20=undefined;u21=;u22=;u23=0;u24=;u25=;u26=undefined;u27=undefined;u28=undefined;u29=undefined;u30=undefined;u31=undefined;u32=undefined;u33=undefined;u34=undefined;u35=undefined;u36=undefined;u37=undefined;u99=%2F;u100=undefined;pscdl=noapi;gtm=45fe43b0z8893895283za201;gcs=G111;gcd=13n3n3l3l5;dma=0;uaa=x86;uab=64;uafvl=Chromium%3B115.0.5790.98%7CNot%252FA)Brand%3B99.0.0.0;uamb=0;uam=;uap=Windows;uapv=10.0.0;uaw=0;epver=2;~oref=https%3A%2F%2Fwww.biolage.ca%2F?"
        className={styles['html-element49']}
      />
    </Container>
  )
}

export default Biolage

KajooLayoutFactory.registerLayout("Biolage", Biolage)