/* eslint-disable */
import React from 'react'
import { Container, RichText, Image, Text } from '@kajoo-ai/sitecore-react'

import { Helmet } from 'react-helmet'

import './style.css'

const TypeScriptToZodSchema = (props) => {
  return (
    <Container tag="body" className="type-script-to-zod-schema-root">
      <Helmet>
        <title>TypeScript to Zod Schema</title>
        <meta property="og:description" content />
        <meta property="og:image" content />
        <meta property="og:title" content />
        <meta name="description" content />
        <meta name="title" content />
        <link rel="canonical" href />
      </Helmet>
      <Container
        tag="div"
        id="__next"
        className="type-script-to-zod-schema-container"
      >
        <Container
          tag="header"
          className="type-script-to-zod-schema-container001"
        >
          <Container
            tag="div"
            className="type-script-to-zod-schema-container002"
          >
            <RichText value='&lt;svg xmlns="http://www.w3.org/2000/svg" width="90px" height="19px" viewBox="0 0 306 62" style="margin-top:-4px"&gt;&lt;path fill="#fff" fill-rule="nonzero" stroke="none" stroke-width="1" d="M172.339 71.14V98h-7.91V71.14h-3.376v-7.382h3.375V51.207h7.91v12.55h6.153v7.384h-6.152zm11.989-7.382h7.91v3.058c1.453-1.523 2.742-2.566 3.867-3.129 1.149-.585 2.508-.878 4.078-.878 2.086 0 4.266.68 6.54 2.039L203.1 72.09c-1.5-1.078-2.964-1.617-4.394-1.617-4.313 0-6.469 3.257-6.469 9.773V98h-7.91V63.758zm52.138 0h7.945V98h-7.945v-3.586c-3.258 3.047-6.762 4.57-10.512 4.57-4.734 0-8.648-1.71-11.742-5.132-3.07-3.493-4.606-7.852-4.606-13.079 0-5.132 1.536-9.41 4.606-12.832 3.07-3.421 6.914-5.132 11.531-5.132 3.985 0 7.559 1.64 10.723 4.921v-3.972zm-18.774 17.015c0 3.282.88 5.954 2.637 8.016 1.805 2.086 4.078 3.129 6.82 3.129 2.93 0 5.297-1.008 7.102-3.023 1.805-2.086 2.707-4.735 2.707-7.946 0-3.21-.902-5.86-2.707-7.945-1.805-2.04-4.148-3.059-7.031-3.059-2.719 0-4.992 1.032-6.82 3.094-1.805 2.086-2.708 4.664-2.708 7.734zm37.162-17.015h7.945v3.164c2.766-2.742 5.883-4.113 9.352-4.113 3.984 0 7.09 1.253 9.316 3.761 1.922 2.133 2.883 5.614 2.883 10.442V98h-7.945V78.875c0-3.375-.47-5.707-1.407-6.996-.914-1.313-2.578-1.969-4.992-1.969-2.625 0-4.488.867-5.59 2.602-1.078 1.71-1.617 4.699-1.617 8.965V98h-7.945V63.758zm59.837 5.836l-6.54 3.48c-1.03-2.11-2.308-3.164-3.831-3.164-.727 0-1.348.24-1.864.72-.515.481-.773 1.097-.773 1.847 0 1.312 1.523 2.613 4.57 3.902 4.196 1.805 7.02 3.469 8.473 4.992 1.453 1.524 2.18 3.574 2.18 6.152 0 3.305-1.22 6.07-3.657 8.297-2.367 2.11-5.226 3.164-8.578 3.164-5.742 0-9.808-2.8-12.199-8.402l6.75-3.129c.938 1.64 1.652 2.684 2.145 3.129.96.89 2.109 1.336 3.445 1.336 2.672 0 4.008-1.219 4.008-3.656 0-1.407-1.032-2.719-3.094-3.938-.797-.398-1.594-.785-2.39-1.16-.798-.375-1.606-.762-2.426-1.16-2.297-1.125-3.914-2.25-4.852-3.375-1.195-1.43-1.793-3.27-1.793-5.52 0-2.976 1.02-5.437 3.059-7.382 2.086-1.946 4.617-2.918 7.593-2.918 4.383 0 7.641 2.261 9.774 6.785zm17.966 1.547V98h-7.945V71.14h-2.813v-7.382h2.813V50.539c0-4.312.75-7.36 2.25-9.14 2.062-2.485 5.062-3.727 9-3.727 1.406 0 3.175.41 5.308 1.23v8.086l-.808-.422c-1.711-.867-3.118-1.3-4.22-1.3-1.405 0-2.355.504-2.847 1.511-.492.985-.738 2.883-.738 5.696v11.285h8.613v7.383h-8.613zm12.903 9.492c0-4.946 1.77-9.153 5.309-12.621 3.539-3.469 7.851-5.203 12.937-5.203 5.11 0 9.446 1.746 13.008 5.238 3.516 3.492 5.274 7.781 5.274 12.867 0 5.133-1.77 9.434-5.309 12.902-3.562 3.446-7.933 5.168-13.113 5.168-5.133 0-9.434-1.757-12.903-5.273-3.468-3.469-5.203-7.828-5.203-13.078zm8.086.14c0 3.422.914 6.13 2.742 8.122 1.875 2.015 4.348 3.023 7.418 3.023 3.094 0 5.567-.996 7.418-2.988 1.852-1.993 2.778-4.653 2.778-7.98 0-3.329-.926-5.99-2.778-7.981-1.875-2.016-4.347-3.024-7.418-3.024-3.023 0-5.472 1.008-7.347 3.024-1.875 2.015-2.813 4.617-2.813 7.804zm37.267-17.015h7.91v3.058c1.453-1.523 2.742-2.566 3.867-3.129 1.149-.585 2.508-.878 4.079-.878 2.085 0 4.265.68 6.539 2.039l-3.622 7.242c-1.5-1.078-2.964-1.617-4.394-1.617-4.313 0-6.469 3.257-6.469 9.773V98h-7.91V63.758zm28.478 0h7.91v3.164c1.523-1.594 2.824-2.672 3.902-3.234 1.149-.586 2.59-.88 4.324-.88 3.868 0 6.926 1.688 9.176 5.063 2.485-3.375 5.848-5.062 10.09-5.062 7.711 0 11.566 4.675 11.566 14.027V98h-7.945V78.98c0-3.28-.398-5.601-1.195-6.96-.82-1.383-2.168-2.075-4.043-2.075-2.18 0-3.768.82-4.764 2.461-.996 1.64-1.494 4.278-1.494 7.91V98h-7.945V79.086c0-6.094-1.758-9.14-5.274-9.14-2.226 0-3.85.831-4.869 2.495-1.02 1.664-1.53 4.29-1.53 7.875V98h-7.91V63.758z" transform="translate(-161 -37)"&gt;&lt;/path&gt;&lt;/svg&gt;' />
          </Container>
          <Container
            tag="div"
            className="type-script-to-zod-schema-container003"
          >
            <button
              aria-describedby="evergreen-tooltip-47"
              className="type-script-to-zod-schema-html-element"
            >
              <RichText value='&lt;svg data-icon="moon" style="fill:#66788A" viewBox="0 0 16 16" class="📦w_12px 📦h_12px 📦box-szg_border-box"&gt;&lt;path d="M15 11.38A7.835 7.835 0 017.85 16C3.51 16 0 12.49 0 8.15 0 4.97 1.89 2.23 4.62 1c-.45.99-.7 2.08-.7 3.23a7.85 7.85 0 007.85 7.85c1.15 0 2.24-.25 3.23-.7z" fill-rule="evenodd"&gt;&lt;/path&gt;&lt;/svg&gt;' />
            </button>
          </Container>
          <Container
            tag="div"
            className="type-script-to-zod-schema-container004"
          >
            <a
              href="https://github.com/ritz078/transform"
              className="type-script-to-zod-schema-html-element001"
            >
              <Image
                tag="img"
                src="https://img.shields.io/github/stars/ritz078/transform?style=social"
                alt
                className="type-script-to-zod-schema-image"
              />
            </a>
            <a
              href="https://github.com/ritz078/transform"
              target="_blank"
              className="type-script-to-zod-schema-html-element002"
            >
              <button className="type-script-to-zod-schema-html-element003">
                <Text tag="span" text="GitHub" />
              </button>
            </a>
          </Container>
        </Container>
        <Container tag="div" className="type-script-to-zod-schema-container005">
          <Container
            tag="div"
            className="type-script-to-zod-schema-container006"
          >
            <Container
              tag="div"
              className="type-script-to-zod-schema-container007"
            >
              <Container
                tag="div"
                role="combobox"
                aria-expanded="false"
                aria-haspopup="listbox"
                aria-labelledby="downshift-12-label"
                className="type-script-to-zod-schema-container008"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container009"
                >
                  <Container
                    tag="div"
                    className="type-script-to-zod-schema-container010"
                  >
                    <RichText value='&lt;svg data-icon="search" style="fill:#66788A" viewBox="0 0 16 16" class="📦z-idx_3 📦w_12px 📦h_12px 📦box-szg_border-box"&gt;&lt;path d="M15.55 13.43l-2.67-2.68a6.94 6.94 0 001.11-3.76c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.39 0 2.68-.42 3.76-1.11l2.68 2.67a1.498 1.498 0 102.12-2.12zm-8.56-1.44c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" fill-rule="evenodd"&gt;&lt;/path&gt;&lt;/svg&gt;' />
                  </Container>
                  <input
                    type="search"
                    placeholder="Search"
                    spellcheck="true"
                    aria-invalid="false"
                    value
                    aria-autocomplete="list"
                    aria-labelledby="downshift-12-label"
                    autocomplete="off"
                    id="downshift-12-input"
                    className="type-script-to-zod-schema-html-element004"
                  />
                </Container>
              </Container>
            </Container>
            <Container
              tag="div"
              className="type-script-to-zod-schema-container011"
            >
              <Container
                tag="div"
                className="type-script-to-zod-schema-container012"
              >
                <h2 className="type-script-to-zod-schema-html-element005">
                  <Text tag="span" text="SVG" />
                </h2>
              </Container>
              <a href="/" className="type-script-to-zod-schema-html-element006">
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container013"
                >
                  <span className="type-script-to-zod-schema-html-element007">
                    <Text tag="span" text="to JSX" />
                  </span>
                </Container>
              </a>
              <a
                href="/svg-to-react-native"
                className="type-script-to-zod-schema-html-element008"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container014"
                >
                  <span className="type-script-to-zod-schema-html-element009">
                    <Text tag="span" text="to React Native" />
                  </span>
                </Container>
              </a>
              <Container
                tag="div"
                className="type-script-to-zod-schema-container015"
              >
                <h2 className="type-script-to-zod-schema-html-element010">
                  <Text tag="span" text="HTML" />
                </h2>
              </Container>
              <a
                href="/html-to-jsx"
                className="type-script-to-zod-schema-html-element011"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container016"
                >
                  <span className="type-script-to-zod-schema-html-element012">
                    <Text tag="span" text="to JSX" />
                  </span>
                </Container>
              </a>
              <a
                href="/html-to-pug"
                className="type-script-to-zod-schema-html-element013"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container017"
                >
                  <span className="type-script-to-zod-schema-html-element014">
                    <Text tag="span" text="to Pug" />
                  </span>
                </Container>
              </a>
              <Container
                tag="div"
                className="type-script-to-zod-schema-container018"
              >
                <h2 className="type-script-to-zod-schema-html-element015">
                  <Text tag="span" text="JSON" />
                </h2>
              </Container>
              <a
                href="/json-to-big-query"
                className="type-script-to-zod-schema-html-element016"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container019"
                >
                  <span className="type-script-to-zod-schema-html-element017">
                    <Text tag="span" text="to Big Query Schema" />
                  </span>
                </Container>
              </a>
              <a
                href="/json-to-flow"
                className="type-script-to-zod-schema-html-element018"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container020"
                >
                  <span className="type-script-to-zod-schema-html-element019">
                    <Text tag="span" text="to Flow" />
                  </span>
                </Container>
              </a>
              <a
                href="/json-to-go-bson"
                className="type-script-to-zod-schema-html-element020"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container021"
                >
                  <span className="type-script-to-zod-schema-html-element021">
                    <Text tag="span" text="to Go Bson" />
                  </span>
                </Container>
              </a>
              <a
                href="/json-to-go"
                className="type-script-to-zod-schema-html-element022"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container022"
                >
                  <span className="type-script-to-zod-schema-html-element023">
                    <Text tag="span" text="to Go Struct" />
                  </span>
                </Container>
              </a>
              <a
                href="/json-to-graphql"
                className="type-script-to-zod-schema-html-element024"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container023"
                >
                  <span className="type-script-to-zod-schema-html-element025">
                    <Text tag="span" text="to GraphQL" />
                  </span>
                </Container>
              </a>
              <a
                href="/json-to-io-ts"
                className="type-script-to-zod-schema-html-element026"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container024"
                >
                  <span className="type-script-to-zod-schema-html-element027">
                    <Text tag="span" text="to io-ts" />
                  </span>
                </Container>
              </a>
              <a
                href="/json-to-java"
                className="type-script-to-zod-schema-html-element028"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container025"
                >
                  <span className="type-script-to-zod-schema-html-element029">
                    <Text tag="span" text="to Java" />
                  </span>
                </Container>
              </a>
              <a
                href="/json-to-jsdoc"
                className="type-script-to-zod-schema-html-element030"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container026"
                >
                  <span className="type-script-to-zod-schema-html-element031">
                    <Text tag="span" text="to JSDoc" />
                  </span>
                </Container>
              </a>
              <a
                href="/json-to-json-schema"
                className="type-script-to-zod-schema-html-element032"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container027"
                >
                  <span className="type-script-to-zod-schema-html-element033">
                    <Text tag="span" text="to JSON Schema" />
                  </span>
                </Container>
              </a>
              <a
                href="/json-to-kotlin"
                className="type-script-to-zod-schema-html-element034"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container028"
                >
                  <span className="type-script-to-zod-schema-html-element035">
                    <Text tag="span" text="to Kotlin" />
                  </span>
                </Container>
              </a>
              <a
                href="/json-to-mobx-state-tree"
                className="type-script-to-zod-schema-html-element036"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container029"
                >
                  <span className="type-script-to-zod-schema-html-element037">
                    <Text tag="span" text="to MobX-State-Tree Model" />
                  </span>
                </Container>
              </a>
              <a
                href="/json-to-mongoose"
                className="type-script-to-zod-schema-html-element038"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container030"
                >
                  <span className="type-script-to-zod-schema-html-element039">
                    <Text tag="span" text="to Mongoose Schema" />
                  </span>
                </Container>
              </a>
              <a
                href="/json-to-mysql"
                className="type-script-to-zod-schema-html-element040"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container031"
                >
                  <span className="type-script-to-zod-schema-html-element041">
                    <Text tag="span" text="to MySQL" />
                  </span>
                </Container>
              </a>
              <a
                href="/json-to-proptypes"
                className="type-script-to-zod-schema-html-element042"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container032"
                >
                  <span className="type-script-to-zod-schema-html-element043">
                    <Text tag="span" text="to React PropTypes" />
                  </span>
                </Container>
              </a>
              <a
                href="/json-to-rust-serde"
                className="type-script-to-zod-schema-html-element044"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container033"
                >
                  <span className="type-script-to-zod-schema-html-element045">
                    <Text tag="span" text="to Rust Serde" />
                  </span>
                </Container>
              </a>
              <a
                href="/json-to-sarcastic"
                className="type-script-to-zod-schema-html-element046"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container034"
                >
                  <span className="type-script-to-zod-schema-html-element047">
                    <Text tag="span" text="to Sarcastic" />
                  </span>
                </Container>
              </a>
              <a
                href="/json-to-scala-case-class"
                className="type-script-to-zod-schema-html-element048"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container035"
                >
                  <span className="type-script-to-zod-schema-html-element049">
                    <Text tag="span" text="to Scala Case Class" />
                  </span>
                </Container>
              </a>
              <a
                href="/json-to-toml"
                className="type-script-to-zod-schema-html-element050"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container036"
                >
                  <span className="type-script-to-zod-schema-html-element051">
                    <Text tag="span" text="to TOML" />
                  </span>
                </Container>
              </a>
              <a
                href="/json-to-typescript"
                className="type-script-to-zod-schema-html-element052"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container037"
                >
                  <span className="type-script-to-zod-schema-html-element053">
                    <Text tag="span" text="to TypeScript" />
                  </span>
                </Container>
              </a>
              <a
                href="/json-to-yaml"
                className="type-script-to-zod-schema-html-element054"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container038"
                >
                  <span className="type-script-to-zod-schema-html-element055">
                    <Text tag="span" text="to YAML" />
                  </span>
                </Container>
              </a>
              <a
                href="/json-to-zod"
                className="type-script-to-zod-schema-html-element056"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container039"
                >
                  <span className="type-script-to-zod-schema-html-element057">
                    <Text tag="span" text="to Zod Schema" />
                  </span>
                </Container>
              </a>
              <Container
                tag="div"
                className="type-script-to-zod-schema-container040"
              >
                <h2 className="type-script-to-zod-schema-html-element058">
                  <Text tag="span" text="JSON Schema" />
                </h2>
              </Container>
              <a
                href="json-schema-to-openapi-schema"
                className="type-script-to-zod-schema-html-element059"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container041"
                >
                  <span className="type-script-to-zod-schema-html-element060">
                    <Text tag="span" text="to OpenAPI Schema" />
                  </span>
                </Container>
              </a>
              <a
                href="json-schema-to-protobuf"
                className="type-script-to-zod-schema-html-element061"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container042"
                >
                  <span className="type-script-to-zod-schema-html-element062">
                    <Text tag="span" text="to Protobuf" />
                  </span>
                </Container>
              </a>
              <a
                href="/json-schema-to-typescript"
                className="type-script-to-zod-schema-html-element063"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container043"
                >
                  <span className="type-script-to-zod-schema-html-element064">
                    <Text tag="span" text="to TypeScript" />
                  </span>
                </Container>
              </a>
              <a
                href="json-schema-to-zod"
                className="type-script-to-zod-schema-html-element065"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container044"
                >
                  <span className="type-script-to-zod-schema-html-element066">
                    <Text tag="span" text="to Zod Schema" />
                  </span>
                </Container>
              </a>
              <Container
                tag="div"
                className="type-script-to-zod-schema-container045"
              >
                <h2 className="type-script-to-zod-schema-html-element067">
                  <Text tag="span" text="CSS" />
                </h2>
              </Container>
              <a
                href="/css-to-js"
                className="type-script-to-zod-schema-html-element068"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container046"
                >
                  <span className="type-script-to-zod-schema-html-element069">
                    <Text tag="span" text="to JS Objects" />
                  </span>
                </Container>
              </a>
              <a
                href="/css-to-tailwind"
                className="type-script-to-zod-schema-html-element070"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container047"
                >
                  <span className="type-script-to-zod-schema-html-element071">
                    <Text tag="span" text="to TailwindCSS" />
                  </span>
                </Container>
              </a>
              <a
                href="/object-styles-to-template-literal"
                className="type-script-to-zod-schema-html-element072"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container048"
                >
                  <span className="type-script-to-zod-schema-html-element073">
                    <Text tag="span" text="to template literal" />
                  </span>
                </Container>
              </a>
              <Container
                tag="div"
                className="type-script-to-zod-schema-container049"
              >
                <h2 className="type-script-to-zod-schema-html-element074">
                  <Text tag="span" text="JavaScript" />
                </h2>
              </Container>
              <a
                href="/js-object-to-json"
                className="type-script-to-zod-schema-html-element075"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container050"
                >
                  <span className="type-script-to-zod-schema-html-element076">
                    <Text tag="span" text="to JSON" />
                  </span>
                </Container>
              </a>
              <Container
                tag="div"
                className="type-script-to-zod-schema-container051"
              >
                <h2 className="type-script-to-zod-schema-html-element077">
                  <Text tag="span" text="GraphQL" />
                </h2>
              </Container>
              <a
                href="/graphql-to-components"
                className="type-script-to-zod-schema-html-element078"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container052"
                >
                  <span className="type-script-to-zod-schema-html-element079">
                    <Text tag="span" text="to Components" />
                  </span>
                </Container>
              </a>
              <a
                href="/graphql-to-flow"
                className="type-script-to-zod-schema-html-element080"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container053"
                >
                  <span className="type-script-to-zod-schema-html-element081">
                    <Text tag="span" text="to Flow" />
                  </span>
                </Container>
              </a>
              <a
                href="/graphql-to-fragment-matcher"
                className="type-script-to-zod-schema-html-element082"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container054"
                >
                  <span className="type-script-to-zod-schema-html-element083">
                    <Text tag="span" text="to Fragment Matcher" />
                  </span>
                </Container>
              </a>
              <a
                href="/graphql-to-introspection-json"
                className="type-script-to-zod-schema-html-element084"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container055"
                >
                  <span className="type-script-to-zod-schema-html-element085">
                    <Text tag="span" text="to Introspection JSON" />
                  </span>
                </Container>
              </a>
              <a
                href="/graphql-to-java"
                className="type-script-to-zod-schema-html-element086"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container056"
                >
                  <span className="type-script-to-zod-schema-html-element087">
                    <Text tag="span" text="to JAVA" />
                  </span>
                </Container>
              </a>
              <a
                href="/graphql-to-resolvers-signature"
                className="type-script-to-zod-schema-html-element088"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container057"
                >
                  <span className="type-script-to-zod-schema-html-element089">
                    <Text tag="span" text="to Resolvers Signature" />
                  </span>
                </Container>
              </a>
              <a
                href="/graphql-to-schema-ast"
                className="type-script-to-zod-schema-html-element090"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container058"
                >
                  <span className="type-script-to-zod-schema-html-element091">
                    <Text tag="span" text="to Schema AST" />
                  </span>
                </Container>
              </a>
              <a
                href="/graphql-to-typescript"
                className="type-script-to-zod-schema-html-element092"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container059"
                >
                  <span className="type-script-to-zod-schema-html-element093">
                    <Text tag="span" text="to TypeScript" />
                  </span>
                </Container>
              </a>
              <a
                href="/graphql-to-typescript-mongodb"
                className="type-script-to-zod-schema-html-element094"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container060"
                >
                  <span className="type-script-to-zod-schema-html-element095">
                    <Text tag="span" text="to TypeScript MongoDB" />
                  </span>
                </Container>
              </a>
              <Container
                tag="div"
                className="type-script-to-zod-schema-container061"
              >
                <h2 className="type-script-to-zod-schema-html-element096">
                  <Text tag="span" text="JSON-LD" />
                </h2>
              </Container>
              <a
                href="/jsonld-to-compacted"
                className="type-script-to-zod-schema-html-element097"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container062"
                >
                  <span className="type-script-to-zod-schema-html-element098">
                    <Text tag="span" text="to Compacted" />
                  </span>
                </Container>
              </a>
              <a
                href="/jsonld-to-expanded"
                className="type-script-to-zod-schema-html-element099"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container063"
                >
                  <span className="type-script-to-zod-schema-html-element100">
                    <Text tag="span" text="to Expanded" />
                  </span>
                </Container>
              </a>
              <a
                href="/jsonld-to-flattened"
                className="type-script-to-zod-schema-html-element101"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container064"
                >
                  <span className="type-script-to-zod-schema-html-element102">
                    <Text tag="span" text="to Flattened" />
                  </span>
                </Container>
              </a>
              <a
                href="/jsonld-to-framed"
                className="type-script-to-zod-schema-html-element103"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container065"
                >
                  <span className="type-script-to-zod-schema-html-element104">
                    <Text tag="span" text="to Framed" />
                  </span>
                </Container>
              </a>
              <a
                href="/jsonld-to-nquads"
                className="type-script-to-zod-schema-html-element105"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container066"
                >
                  <span className="type-script-to-zod-schema-html-element106">
                    <Text tag="span" text="to N-Quads" />
                  </span>
                </Container>
              </a>
              <a
                href="jsonld-to-normalized"
                className="type-script-to-zod-schema-html-element107"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container067"
                >
                  <span className="type-script-to-zod-schema-html-element108">
                    <Text tag="span" text="to Normalized" />
                  </span>
                </Container>
              </a>
              <Container
                tag="div"
                className="type-script-to-zod-schema-container068"
              >
                <h2 className="type-script-to-zod-schema-html-element109">
                  <Text tag="span" text="TypeScript" />
                </h2>
              </Container>
              <a
                href="/typescript-to-flow"
                className="type-script-to-zod-schema-html-element110"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container069"
                >
                  <span className="type-script-to-zod-schema-html-element111">
                    <Text tag="span" text="to Flow" />
                  </span>
                </Container>
              </a>
              <a
                href="/typescript-to-json-schema"
                className="type-script-to-zod-schema-html-element112"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container070"
                >
                  <span className="type-script-to-zod-schema-html-element113">
                    <Text tag="span" text="to JSON Schema" />
                  </span>
                </Container>
              </a>
              <a
                href="/typescript-to-javascript"
                className="type-script-to-zod-schema-html-element114"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container071"
                >
                  <span className="type-script-to-zod-schema-html-element115">
                    <Text tag="span" text="to plain JavaScript" />
                  </span>
                </Container>
              </a>
              <a
                href="/typescript-to-typescript-declaration"
                className="type-script-to-zod-schema-html-element116"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container072"
                >
                  <span className="type-script-to-zod-schema-html-element117">
                    <Text tag="span" text="to TypeScript Declaration" />
                  </span>
                </Container>
              </a>
              <a
                href="/typescript-to-zod"
                className="type-script-to-zod-schema-html-element118"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container073"
                >
                  <span className="type-script-to-zod-schema-html-element119">
                    <Text tag="span" text="to Zod Schema" />
                  </span>
                </Container>
              </a>
              <Container
                tag="div"
                className="type-script-to-zod-schema-container074"
              >
                <h2 className="type-script-to-zod-schema-html-element120">
                  <Text tag="span" text="Flow" />
                </h2>
              </Container>
              <a
                href="/flow-to-javascript"
                className="type-script-to-zod-schema-html-element121"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container075"
                >
                  <span className="type-script-to-zod-schema-html-element122">
                    <Text tag="span" text="to plain JavaScript" />
                  </span>
                </Container>
              </a>
              <a
                href="/flow-to-typescript"
                className="type-script-to-zod-schema-html-element123"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container076"
                >
                  <span className="type-script-to-zod-schema-html-element124">
                    <Text tag="span" text="to TypeScript" />
                  </span>
                </Container>
              </a>
              <a
                href="/flow-to-typescript-declaration"
                className="type-script-to-zod-schema-html-element125"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container077"
                >
                  <span className="type-script-to-zod-schema-html-element126">
                    <Text tag="span" text="to TypeScript Declaration" />
                  </span>
                </Container>
              </a>
              <Container
                tag="div"
                className="type-script-to-zod-schema-container078"
              >
                <h2 className="type-script-to-zod-schema-html-element127">
                  <Text tag="span" text="Others" />
                </h2>
              </Container>
              <a
                href="/cadence-to-go"
                className="type-script-to-zod-schema-html-element128"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container079"
                >
                  <span className="type-script-to-zod-schema-html-element129">
                    <Text tag="span" text="Cadence to Go" />
                  </span>
                </Container>
              </a>
              <a
                href="/markdown-to-html"
                className="type-script-to-zod-schema-html-element130"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container080"
                >
                  <span className="type-script-to-zod-schema-html-element131">
                    <Text tag="span" text="Markdown to HTML" />
                  </span>
                </Container>
              </a>
              <a
                href="/toml-to-json"
                className="type-script-to-zod-schema-html-element132"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container081"
                >
                  <span className="type-script-to-zod-schema-html-element133">
                    <Text tag="span" text="TOML to JSON" />
                  </span>
                </Container>
              </a>
              <a
                href="/toml-to-yaml"
                className="type-script-to-zod-schema-html-element134"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container082"
                >
                  <span className="type-script-to-zod-schema-html-element135">
                    <Text tag="span" text="TOML to YAML" />
                  </span>
                </Container>
              </a>
              <a
                href="/xml-to-json"
                className="type-script-to-zod-schema-html-element136"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container083"
                >
                  <span className="type-script-to-zod-schema-html-element137">
                    <Text tag="span" text="XML to JSON" />
                  </span>
                </Container>
              </a>
              <a
                href="/yaml-to-json"
                className="type-script-to-zod-schema-html-element138"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container084"
                >
                  <span className="type-script-to-zod-schema-html-element139">
                    <Text tag="span" text="YAML to JSON" />
                  </span>
                </Container>
              </a>
              <a
                href="/yaml-to-toml"
                className="type-script-to-zod-schema-html-element140"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container085"
                >
                  <span className="type-script-to-zod-schema-html-element141">
                    <Text tag="span" text="YAML to TOML" />
                  </span>
                </Container>
              </a>
            </Container>
            <Container
              tag="div"
              className="type-script-to-zod-schema-container086"
            >
              <a
                href="https://vercel.com?utm_source=ritz078&amp;utm_campaign=oss"
                target="_blank"
                className="type-script-to-zod-schema-html-element142"
              >
                <Image
                  tag="img"
                  src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"
                  alt="Vercel"
                  className="type-script-to-zod-schema-image1"
                />
              </a>
              <h2 className="type-script-to-zod-schema-html-element143">
                <Text tag="span" text="Created by" />
                <a
                  href="https://twitter.com/ritz078"
                  target="_blank"
                  className="type-script-to-zod-schema-html-element144"
                >
                  <Text tag="span" text="@ritz078" />
                </a>
              </h2>
            </Container>
          </Container>
          <Container
            tag="div"
            className="type-script-to-zod-schema-container087"
          >
            <Container
              tag="div"
              className="type-script-to-zod-schema-container088"
            >
              <Container
                tag="div"
                className="type-script-to-zod-schema-container089"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container090"
                >
                  <Container
                    tag="div"
                    className="type-script-to-zod-schema-container091"
                  >
                    <h2 className="type-script-to-zod-schema-html-element145">
                      <Text tag="span" text="TypeScript" />
                    </h2>
                  </Container>
                  <button className="type-script-to-zod-schema-html-element146">
                    <RichText value='&lt;svg data-icon="cog" style="fill:currentColor" viewBox="0 0 16 16" class="📦ml_-3px 📦mr_8px 📦w_12px 📦h_12px 📦box-szg_border-box"&gt;&lt;path d="M15.19 6.39h-1.85c-.11-.37-.27-.71-.45-1.04l1.36-1.36c.31-.31.31-.82 0-1.13l-1.13-1.13a.803.803 0 00-1.13 0l-1.36 1.36c-.33-.17-.67-.33-1.04-.44V.79c0-.44-.36-.8-.8-.8h-1.6c-.44 0-.8.36-.8.8v1.86c-.39.12-.75.28-1.1.47l-1.3-1.3c-.3-.3-.79-.3-1.09 0L1.82 2.91c-.3.3-.3.79 0 1.09l1.3 1.3c-.2.34-.36.7-.48 1.09H.79c-.44 0-.8.36-.8.8v1.6c0 .44.36.8.8.8h1.85c.11.37.27.71.45 1.04l-1.36 1.36c-.31.31-.31.82 0 1.13l1.13 1.13c.31.31.82.31 1.13 0l1.36-1.36c.33.18.67.33 1.04.44v1.86c0 .44.36.8.8.8h1.6c.44 0 .8-.36.8-.8v-1.86c.39-.12.75-.28 1.1-.47l1.3 1.3c.3.3.79.3 1.09 0l1.09-1.09c.3-.3.3-.79 0-1.09l-1.3-1.3c.19-.35.36-.71.48-1.1h1.85c.44 0 .8-.36.8-.8v-1.6a.816.816 0 00-.81-.79zm-7.2 4.6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" fill-rule="evenodd"&gt;&lt;/path&gt;&lt;/svg&gt;' />
                    <Text tag="span" text="Settings" />
                  </button>
                  <button
                    role="button"
                    aria-haspopup="true"
                    aria-describedby="evergreen-tooltip-48"
                    className="type-script-to-zod-schema-html-element147"
                  >
                    <RichText value='&lt;svg data-icon="upload" style="fill:#66788A" viewBox="0 0 16 16" class="📦w_12px 📦h_12px 📦box-szg_border-box"&gt;&lt;path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3 8c-.28 0-.53-.11-.71-.29L9 6.41V12c0 .55-.45 1-1 1s-1-.45-1-1V6.41l-1.29 1.3a1.003 1.003 0 01-1.42-1.42l3-3C7.47 3.11 7.72 3 8 3s.53.11.71.29l3 3A1.003 1.003 0 0111 8z" fill-rule="evenodd"&gt;&lt;/path&gt;&lt;/svg&gt;' />
                  </button>
                  <button
                    aria-describedby="evergreen-tooltip-49"
                    className="type-script-to-zod-schema-html-element148"
                  >
                    <RichText value='&lt;svg data-icon="trash" style="fill:currentColor" viewBox="0 0 16 16" class="📦w_12px 📦h_12px 📦box-szg_border-box"&gt;&lt;path d="M14.49 3.99h-13c-.28 0-.5.22-.5.5s.22.5.5.5h.5v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-10h.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zm-8.5 9c0 .55-.45 1-1 1s-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1v6zm3 0c0 .55-.45 1-1 1s-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1v6zm3 0c0 .55-.45 1-1 1s-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1v6zm2-12h-4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1h-4c-.55 0-1 .45-1 1v1h14v-1c0-.55-.45-1-1-1z" fill-rule="evenodd"&gt;&lt;/path&gt;&lt;/svg&gt;' />
                  </button>
                </Container>
                <Container
                  tag="div"
                  tabindex="0"
                  className="type-script-to-zod-schema-container092"
                >
                  <Container
                    tag="section"
                    className="type-script-to-zod-schema-container093"
                  >
                    <Container
                      tag="div"
                      data-keybinding-context="1"
                      data-mode-id="typescript"
                      className="type-script-to-zod-schema-container094"
                    >
                      <Container
                        tag="div"
                        role="code"
                        data-uri="inmemory://model/1"
                        className="type-script-to-zod-schema-container095"
                      >
                        <Container
                          tag="div"
                          data-mprt="3"
                          className="type-script-to-zod-schema-container096"
                        >
                          <Container
                            tag="div"
                            role="presentation"
                            aria-hidden="true"
                            className="type-script-to-zod-schema-container097"
                          >
                            <Container
                              tag="div"
                              className="type-script-to-zod-schema-container098"
                            />
                            <Container
                              tag="div"
                              role="presentation"
                              aria-hidden="true"
                              className="type-script-to-zod-schema-container099"
                            />
                            <Container
                              tag="div"
                              role="presentation"
                              aria-hidden="true"
                              className="type-script-to-zod-schema-container100"
                            >
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container101"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container102"
                                />
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container103"
                                />
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container104"
                                >
                                  <Text tag="span" text="1" />
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container105"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container106"
                                >
                                  <Text tag="span" text="2" />
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container107"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container108"
                                >
                                  <Text tag="span" text="3" />
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container109"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container110"
                                >
                                  <Text tag="span" text="4" />
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container111"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container112"
                                >
                                  <Text tag="span" text="5" />
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container113"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container114"
                                >
                                  <Text tag="span" text="6" />
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container115"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container116"
                                >
                                  <Text tag="span" text="7" />
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container117"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container118"
                                />
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container119"
                                >
                                  <Text tag="span" text="8" />
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container120"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container121"
                                >
                                  <Text tag="span" text="9" />
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container122"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container123"
                                >
                                  <Text tag="span" text="10" />
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container124"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container125"
                                >
                                  <Text tag="span" text="11" />
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container126"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container127"
                                >
                                  <Text tag="span" text="12" />
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container128"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container129"
                                >
                                  <Text tag="span" text="13" />
                                </Container>
                              </Container>
                            </Container>
                          </Container>
                          <Container
                            tag="div"
                            role="presentation"
                            data-mprt="5"
                            className="type-script-to-zod-schema-container130"
                          >
                            <Container
                              tag="div"
                              className="type-script-to-zod-schema-container131"
                            >
                              <Container
                                tag="div"
                                role="presentation"
                                aria-hidden="true"
                                className="type-script-to-zod-schema-container132"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container133"
                                >
                                  <Container
                                    tag="div"
                                    className="type-script-to-zod-schema-container134"
                                  />
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container135"
                                >
                                  <Container
                                    tag="div"
                                    className="type-script-to-zod-schema-container136"
                                  />
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container137"
                                >
                                  <Container
                                    tag="div"
                                    className="type-script-to-zod-schema-container138"
                                  />
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container139"
                                >
                                  <Container
                                    tag="div"
                                    className="type-script-to-zod-schema-container140"
                                  />
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container141"
                                >
                                  <Container
                                    tag="div"
                                    className="type-script-to-zod-schema-container142"
                                  />
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container143"
                                />
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container144"
                                />
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container145"
                                />
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container146"
                                >
                                  <Container
                                    tag="div"
                                    className="type-script-to-zod-schema-container147"
                                  />
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container148"
                                >
                                  <Container
                                    tag="div"
                                    className="type-script-to-zod-schema-container149"
                                  />
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container150"
                                >
                                  <Container
                                    tag="div"
                                    className="type-script-to-zod-schema-container151"
                                  />
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container152"
                                >
                                  <Container
                                    tag="div"
                                    className="type-script-to-zod-schema-container153"
                                  />
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container154"
                                />
                              </Container>
                              <Container
                                tag="div"
                                role="presentation"
                                aria-hidden="true"
                                className="type-script-to-zod-schema-container155"
                              />
                              <Container
                                tag="div"
                                role="presentation"
                                aria-hidden="true"
                                className="type-script-to-zod-schema-container156"
                              />
                              <Container
                                tag="div"
                                role="presentation"
                                aria-hidden="true"
                                data-mprt="7"
                                className="type-script-to-zod-schema-container157"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container158"
                                >
                                  <span className="type-script-to-zod-schema-html-element149">
                                    <span className="type-script-to-zod-schema-html-element150">
                                      <Text tag="span" text="export" />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element151">
                                      <Text tag="span" text=" " />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element152">
                                      <Text tag="span" text="interface" />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element153">
                                      <Text tag="span" text=" " />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element154">
                                      <Text tag="span" text="Root" />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element155">
                                      <Text tag="span" text=" &#123;" />
                                    </span>
                                  </span>
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container159"
                                >
                                  <span className="type-script-to-zod-schema-html-element156">
                                    <span className="type-script-to-zod-schema-html-element157">
                                      <Text tag="span" text="  userId: " />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element158">
                                      <Text tag="span" text="number" />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element159">
                                      <Text tag="span" text=";" />
                                    </span>
                                  </span>
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container160"
                                >
                                  <span className="type-script-to-zod-schema-html-element160">
                                    <span className="type-script-to-zod-schema-html-element161">
                                      <Text tag="span" text="  id: " />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element162">
                                      <Text tag="span" text="number" />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element163">
                                      <Text tag="span" text=";" />
                                    </span>
                                  </span>
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container161"
                                >
                                  <span className="type-script-to-zod-schema-html-element164">
                                    <span className="type-script-to-zod-schema-html-element165">
                                      <Text tag="span" text="  title: " />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element166">
                                      <Text tag="span" text="string" />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element167">
                                      <Text tag="span" text=";" />
                                    </span>
                                  </span>
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container162"
                                >
                                  <span className="type-script-to-zod-schema-html-element168">
                                    <span className="type-script-to-zod-schema-html-element169">
                                      <Text tag="span" text="  completed: " />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element170">
                                      <Text tag="span" text="boolean" />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element171">
                                      <Text tag="span" text=";" />
                                    </span>
                                  </span>
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container163"
                                >
                                  <span className="type-script-to-zod-schema-html-element172">
                                    <span className="type-script-to-zod-schema-html-element173">
                                      <Text tag="span" text="&#125;" />
                                    </span>
                                  </span>
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container164"
                                >
                                  <span className="type-script-to-zod-schema-html-element174">
                                    <Text
                                      tag="span"
                                      className="type-script-to-zod-schema-text111"
                                    />
                                  </span>
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container165"
                                >
                                  <span className="type-script-to-zod-schema-html-element175">
                                    <span className="type-script-to-zod-schema-html-element176">
                                      <Text tag="span" text="export" />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element177">
                                      <Text tag="span" text=" " />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element178">
                                      <Text tag="span" text="interface" />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element179">
                                      <Text tag="span" text=" " />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element180">
                                      <Text tag="span" text="Props" />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element181">
                                      <Text tag="span" text=" &#123;" />
                                    </span>
                                  </span>
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container166"
                                >
                                  <span className="type-script-to-zod-schema-html-element182">
                                    <span className="type-script-to-zod-schema-html-element183">
                                      <Text tag="span" text="  " />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element184">
                                      <Text
                                        tag="span"
                                        text="/** The user's name */"
                                      />
                                    </span>
                                  </span>
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container167"
                                >
                                  <span className="type-script-to-zod-schema-html-element185">
                                    <span className="type-script-to-zod-schema-html-element186">
                                      <Text tag="span" text="  name: " />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element187">
                                      <Text tag="span" text="string" />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element188">
                                      <Text tag="span" text=";" />
                                    </span>
                                  </span>
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container168"
                                >
                                  <span className="type-script-to-zod-schema-html-element189">
                                    <span className="type-script-to-zod-schema-html-element190">
                                      <Text tag="span" text="  " />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element191">
                                      <Text
                                        tag="span"
                                        text="/** Should the name be rendered in bold */"
                                      />
                                    </span>
                                  </span>
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container169"
                                >
                                  <span className="type-script-to-zod-schema-html-element192">
                                    <span className="type-script-to-zod-schema-html-element193">
                                      <Text tag="span" text="  priority?: " />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element194">
                                      <Text tag="span" text="boolean" />
                                    </span>
                                  </span>
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container170"
                                >
                                  <span className="type-script-to-zod-schema-html-element195">
                                    <span className="type-script-to-zod-schema-html-element196">
                                      <Text tag="span" text="&#125;" />
                                    </span>
                                  </span>
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                data-mprt="1"
                                className="type-script-to-zod-schema-container171"
                              >
                                <Container
                                  tag="div"
                                  widgetid="LightBulbWidget"
                                  title="Show Fixes (Ctrl+.)"
                                  className="type-script-to-zod-schema-container172"
                                />
                              </Container>
                              <Container
                                tag="div"
                                role="presentation"
                                aria-hidden="true"
                                className="type-script-to-zod-schema-container173"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container174"
                                />
                              </Container>
                            </Container>
                            <Container
                              tag="div"
                              role="presentation"
                              aria-hidden="true"
                              className="type-script-to-zod-schema-container175"
                            >
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container176"
                              />
                            </Container>
                            <canvas
                              aria-hidden="true"
                              width="14"
                              height="9798"
                              className="type-script-to-zod-schema-html-element197"
                            />
                            <Container
                              tag="div"
                              role="presentation"
                              aria-hidden="true"
                              className="type-script-to-zod-schema-container177"
                            >
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container178"
                              />
                            </Container>
                          </Container>
                          <Container
                            tag="div"
                            role="presentation"
                            aria-hidden="true"
                            className="type-script-to-zod-schema-container179"
                          />
                          <textarea
                            data-mprt="6"
                            wrap="off"
                            autocorrect="off"
                            autocapitalize="off"
                            autocomplete="off"
                            spellcheck="false"
                            aria-label="Editor content;Press Alt+F1 for Accessibility Options."
                            tabindex="0"
                            role="textbox"
                            aria-roledescription="editor"
                            aria-multiline="true"
                            aria-haspopup="false"
                            aria-autocomplete="both"
                            className="type-script-to-zod-schema-html-element198"
                          />
                          <Container
                            tag="div"
                            className="type-script-to-zod-schema-container180"
                          />
                          <Container
                            tag="div"
                            data-mprt="4"
                            className="type-script-to-zod-schema-container181"
                          >
                            <Container
                              tag="div"
                              role="dialog"
                              aria-hidden="true"
                              widgetid="editor.contrib.accessibilityHelpWidget"
                              className="type-script-to-zod-schema-container182"
                            >
                              <Container
                                tag="div"
                                role="document"
                                className="type-script-to-zod-schema-container183"
                              />
                            </Container>
                            <Container
                              tag="div"
                              widgetid="editor.contrib.quickInputWidget"
                              className="type-script-to-zod-schema-container184"
                            />
                          </Container>
                          <Container
                            tag="div"
                            data-mprt="8"
                            role="presentation"
                            aria-hidden="true"
                            className="type-script-to-zod-schema-container185"
                          >
                            <Container
                              tag="div"
                              className="type-script-to-zod-schema-container186"
                            />
                            <canvas
                              width="0"
                              height="9798"
                              className="type-script-to-zod-schema-html-element199"
                            />
                            <canvas
                              width="0"
                              height="9798"
                              className="type-script-to-zod-schema-html-element200"
                            />
                            <Container
                              tag="div"
                              className="type-script-to-zod-schema-container187"
                            >
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container188"
                              />
                            </Container>
                          </Container>
                        </Container>
                        <Container
                          tag="div"
                          data-mprt="2"
                          className="type-script-to-zod-schema-container189"
                        >
                          <Container
                            tag="div"
                            widgetid="__renameInputWidget"
                            className="type-script-to-zod-schema-container190"
                          >
                            <input
                              type="text"
                              aria-label="Rename input. Type new name and press Enter to commit."
                              className="type-script-to-zod-schema-html-element201"
                            />
                            <Container
                              tag="div"
                              className="type-script-to-zod-schema-container191"
                            >
                              <Text
                                tag="span"
                                text="Enter to Rename, Shift+Enter to Preview"
                              />
                            </Container>
                          </Container>
                        </Container>
                        <Container
                          tag="div"
                          aria-hidden="true"
                          className="type-script-to-zod-schema-container192"
                        />
                      </Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>
            <Container
              tag="div"
              className="type-script-to-zod-schema-container193"
            >
              <Container
                tag="div"
                className="type-script-to-zod-schema-container194"
              >
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container195"
                >
                  <Container
                    tag="div"
                    className="type-script-to-zod-schema-container196"
                  >
                    <h2 className="type-script-to-zod-schema-html-element202">
                      <Text tag="span" text="Zod Schema" />
                    </h2>
                  </Container>
                  <a
                    href="https://www.npmjs.com/package/ts-to-zod"
                    target="_blank"
                    className="type-script-to-zod-schema-html-element203"
                  >
                    <RichText value='&lt;svg xmlns="http://www.w3.org/2000/svg" id="npm" x="0px" y="0px" enable-background="new 0 0 780 250" viewBox="0 0 780 250" xml:space="preserve" height="20" style="margin-right:10px"&gt;&lt;style&gt;.st0&#123;fill:#C12127;&#125;&lt;/style&gt;&lt;path d="M240 250h100v-50h100V0H240v250zM340 50h50v100h-50V50zM480 0v200h100V50h50v150h50V50h50v150h50V0H480zM0 200h100V50h50v150h50V0H0v200z" class="st0"&gt;&lt;/path&gt;&lt;/svg&gt;' />
                  </a>
                  <button className="type-script-to-zod-schema-html-element204">
                    <RichText value='&lt;svg data-icon="duplicate" style="fill:currentColor" viewBox="0 0 16 16" class="📦ml_-3px 📦mr_8px 📦w_12px 📦h_12px 📦box-szg_border-box"&gt;&lt;path d="M15 0H5c-.55 0-1 .45-1 1v2h2V2h8v7h-1v2h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-4 4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 10H2V6h8v8z" fill-rule="evenodd"&gt;&lt;/path&gt;&lt;/svg&gt;' />
                    <Text tag="span" text="Copy" />
                  </button>
                </Container>
                <Container
                  tag="div"
                  className="type-script-to-zod-schema-container197"
                >
                  <Container
                    tag="section"
                    className="type-script-to-zod-schema-container198"
                  >
                    <Container
                      tag="div"
                      data-keybinding-context="2"
                      data-mode-id="typescript"
                      className="type-script-to-zod-schema-container199"
                    >
                      <Container
                        tag="div"
                        role="code"
                        data-uri="inmemory://model/2"
                        className="type-script-to-zod-schema-container200"
                      >
                        <Container
                          tag="div"
                          data-mprt="3"
                          className="type-script-to-zod-schema-container201"
                        >
                          <Container
                            tag="div"
                            role="presentation"
                            aria-hidden="true"
                            className="type-script-to-zod-schema-container202"
                          >
                            <Container
                              tag="div"
                              className="type-script-to-zod-schema-container203"
                            />
                            <Container
                              tag="div"
                              role="presentation"
                              aria-hidden="true"
                              className="type-script-to-zod-schema-container204"
                            />
                            <Container
                              tag="div"
                              role="presentation"
                              aria-hidden="true"
                              className="type-script-to-zod-schema-container205"
                            >
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container206"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container207"
                                />
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container208"
                                >
                                  <Text tag="span" text="1" />
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container209"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container210"
                                >
                                  <Text tag="span" text="2" />
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container211"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container212"
                                />
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container213"
                                >
                                  <Text tag="span" text="3" />
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container214"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container215"
                                >
                                  <Text tag="span" text="4" />
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container216"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container217"
                                >
                                  <Text tag="span" text="5" />
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container218"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container219"
                                >
                                  <Text tag="span" text="6" />
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container220"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container221"
                                >
                                  <Text tag="span" text="7" />
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container222"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container223"
                                >
                                  <Text tag="span" text="8" />
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container224"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container225"
                                >
                                  <Text tag="span" text="9" />
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container226"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container227"
                                />
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container228"
                                >
                                  <Text tag="span" text="10" />
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container229"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container230"
                                >
                                  <Text tag="span" text="11" />
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container231"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container232"
                                >
                                  <Text tag="span" text="12" />
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container233"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container234"
                                >
                                  <Text tag="span" text="13" />
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container235"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container236"
                                >
                                  <Text tag="span" text="14" />
                                </Container>
                              </Container>
                            </Container>
                          </Container>
                          <Container
                            tag="div"
                            role="presentation"
                            data-mprt="5"
                            className="type-script-to-zod-schema-container237"
                          >
                            <Container
                              tag="div"
                              className="type-script-to-zod-schema-container238"
                            >
                              <Container
                                tag="div"
                                role="presentation"
                                aria-hidden="true"
                                className="type-script-to-zod-schema-container239"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container240"
                                >
                                  <Container
                                    tag="div"
                                    className="type-script-to-zod-schema-container241"
                                  />
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container242"
                                />
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container243"
                                />
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container244"
                                >
                                  <Container
                                    tag="div"
                                    className="type-script-to-zod-schema-container245"
                                  />
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container246"
                                >
                                  <Container
                                    tag="div"
                                    className="type-script-to-zod-schema-container247"
                                  />
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container248"
                                >
                                  <Container
                                    tag="div"
                                    className="type-script-to-zod-schema-container249"
                                  />
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container250"
                                >
                                  <Container
                                    tag="div"
                                    className="type-script-to-zod-schema-container251"
                                  />
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container252"
                                />
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container253"
                                />
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container254"
                                />
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container255"
                                >
                                  <Container
                                    tag="div"
                                    className="type-script-to-zod-schema-container256"
                                  />
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container257"
                                >
                                  <Container
                                    tag="div"
                                    className="type-script-to-zod-schema-container258"
                                  />
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container259"
                                />
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container260"
                                />
                              </Container>
                              <Container
                                tag="div"
                                role="presentation"
                                aria-hidden="true"
                                className="type-script-to-zod-schema-container261"
                              />
                              <Container
                                tag="div"
                                role="presentation"
                                aria-hidden="true"
                                className="type-script-to-zod-schema-container262"
                              />
                              <Container
                                tag="div"
                                role="presentation"
                                aria-hidden="true"
                                data-mprt="7"
                                className="type-script-to-zod-schema-container263"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container264"
                                >
                                  <span className="type-script-to-zod-schema-html-element205">
                                    <span className="type-script-to-zod-schema-html-element206">
                                      <Text tag="span" text="import" />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element207">
                                      <Text
                                        tag="span"
                                        text=" &#123; z &#125; "
                                      />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element208">
                                      <Text tag="span" text="from" />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element209">
                                      <Text tag="span" text=" " />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element210">
                                      <Text tag="span" text='"zod"' />
                                    </span>
                                  </span>
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container265"
                                >
                                  <span className="type-script-to-zod-schema-html-element211">
                                    <Text
                                      tag="span"
                                      className="type-script-to-zod-schema-text150"
                                    />
                                  </span>
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container266"
                                >
                                  <span className="type-script-to-zod-schema-html-element212">
                                    <span className="type-script-to-zod-schema-html-element213">
                                      <Text tag="span" text="export" />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element214">
                                      <Text tag="span" text=" " />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element215">
                                      <Text tag="span" text="const" />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element216">
                                      <Text
                                        tag="span"
                                        text=" rootSchema = z."
                                      />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element217">
                                      <Text tag="span" text="object" />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element218">
                                      <Text tag="span" text="(&#123;" />
                                    </span>
                                  </span>
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container267"
                                >
                                  <span className="type-script-to-zod-schema-html-element219">
                                    <span className="type-script-to-zod-schema-html-element220">
                                      <Text tag="span" text="  userId: z." />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element221">
                                      <Text tag="span" text="number" />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element222">
                                      <Text tag="span" text="()," />
                                    </span>
                                  </span>
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container268"
                                >
                                  <span className="type-script-to-zod-schema-html-element223">
                                    <span className="type-script-to-zod-schema-html-element224">
                                      <Text tag="span" text="  id: z." />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element225">
                                      <Text tag="span" text="number" />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element226">
                                      <Text tag="span" text="()," />
                                    </span>
                                  </span>
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container269"
                                >
                                  <span className="type-script-to-zod-schema-html-element227">
                                    <span className="type-script-to-zod-schema-html-element228">
                                      <Text tag="span" text="  title: z." />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element229">
                                      <Text tag="span" text="string" />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element230">
                                      <Text tag="span" text="()," />
                                    </span>
                                  </span>
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container270"
                                >
                                  <span className="type-script-to-zod-schema-html-element231">
                                    <span className="type-script-to-zod-schema-html-element232">
                                      <Text tag="span" text="  completed: z." />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element233">
                                      <Text tag="span" text="boolean" />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element234">
                                      <Text tag="span" text="()" />
                                    </span>
                                  </span>
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container271"
                                >
                                  <span className="type-script-to-zod-schema-html-element235">
                                    <span className="type-script-to-zod-schema-html-element236">
                                      <Text tag="span" text="&#125;)" />
                                    </span>
                                  </span>
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container272"
                                >
                                  <span className="type-script-to-zod-schema-html-element237">
                                    <Text
                                      tag="span"
                                      className="type-script-to-zod-schema-text170"
                                    />
                                  </span>
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container273"
                                >
                                  <span className="type-script-to-zod-schema-html-element238">
                                    <span className="type-script-to-zod-schema-html-element239">
                                      <Text tag="span" text="export" />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element240">
                                      <Text tag="span" text=" " />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element241">
                                      <Text tag="span" text="const" />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element242">
                                      <Text
                                        tag="span"
                                        text=" propsSchema = z."
                                      />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element243">
                                      <Text tag="span" text="object" />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element244">
                                      <Text tag="span" text="(&#123;" />
                                    </span>
                                  </span>
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container274"
                                >
                                  <span className="type-script-to-zod-schema-html-element245">
                                    <span className="type-script-to-zod-schema-html-element246">
                                      <Text tag="span" text="  name: z." />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element247">
                                      <Text tag="span" text="string" />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element248">
                                      <Text tag="span" text="()," />
                                    </span>
                                  </span>
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container275"
                                >
                                  <span className="type-script-to-zod-schema-html-element249">
                                    <span className="type-script-to-zod-schema-html-element250">
                                      <Text tag="span" text="  priority: z." />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element251">
                                      <Text tag="span" text="boolean" />
                                    </span>
                                    <span className="type-script-to-zod-schema-html-element252">
                                      <Text tag="span" text="().optional()" />
                                    </span>
                                  </span>
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container276"
                                >
                                  <span className="type-script-to-zod-schema-html-element253">
                                    <span className="type-script-to-zod-schema-html-element254">
                                      <Text tag="span" text="&#125;)" />
                                    </span>
                                  </span>
                                </Container>
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container277"
                                >
                                  <span className="type-script-to-zod-schema-html-element255">
                                    <Text
                                      tag="span"
                                      className="type-script-to-zod-schema-text184"
                                    />
                                  </span>
                                </Container>
                              </Container>
                              <Container
                                tag="div"
                                data-mprt="1"
                                className="type-script-to-zod-schema-container278"
                              />
                              <Container
                                tag="div"
                                role="presentation"
                                aria-hidden="true"
                                className="type-script-to-zod-schema-container279"
                              >
                                <Container
                                  tag="div"
                                  className="type-script-to-zod-schema-container280"
                                />
                              </Container>
                            </Container>
                            <Container
                              tag="div"
                              role="presentation"
                              aria-hidden="true"
                              className="type-script-to-zod-schema-container281"
                            >
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container282"
                              />
                            </Container>
                            <canvas
                              aria-hidden="true"
                              width="14"
                              height="9798"
                              className="type-script-to-zod-schema-html-element256"
                            />
                            <Container
                              tag="div"
                              role="presentation"
                              aria-hidden="true"
                              className="type-script-to-zod-schema-container283"
                            >
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container284"
                              />
                            </Container>
                          </Container>
                          <Container
                            tag="div"
                            role="presentation"
                            aria-hidden="true"
                            className="type-script-to-zod-schema-container285"
                          />
                          <textarea
                            data-mprt="6"
                            wrap="off"
                            autocorrect="off"
                            autocapitalize="off"
                            autocomplete="off"
                            spellcheck="false"
                            aria-label="Editor content;Press Alt+F1 for Accessibility Options."
                            tabindex="0"
                            role="textbox"
                            aria-roledescription="editor"
                            aria-multiline="true"
                            aria-haspopup="false"
                            aria-autocomplete="both"
                            className="type-script-to-zod-schema-html-element257"
                          />
                          <Container
                            tag="div"
                            className="type-script-to-zod-schema-container286"
                          />
                          <Container
                            tag="div"
                            data-mprt="4"
                            className="type-script-to-zod-schema-container287"
                          >
                            <Container
                              tag="div"
                              role="dialog"
                              aria-hidden="true"
                              widgetid="editor.contrib.accessibilityHelpWidget"
                              className="type-script-to-zod-schema-container288"
                            >
                              <Container
                                tag="div"
                                role="document"
                                className="type-script-to-zod-schema-container289"
                              />
                            </Container>
                            <Container
                              tag="div"
                              widgetid="editor.contrib.quickInputWidget"
                              className="type-script-to-zod-schema-container290"
                            />
                          </Container>
                          <Container
                            tag="div"
                            data-mprt="8"
                            role="presentation"
                            aria-hidden="true"
                            className="type-script-to-zod-schema-container291"
                          >
                            <Container
                              tag="div"
                              className="type-script-to-zod-schema-container292"
                            />
                            <canvas
                              width="0"
                              height="9798"
                              className="type-script-to-zod-schema-html-element258"
                            />
                            <canvas
                              width="0"
                              height="9798"
                              className="type-script-to-zod-schema-html-element259"
                            />
                            <Container
                              tag="div"
                              className="type-script-to-zod-schema-container293"
                            >
                              <Container
                                tag="div"
                                className="type-script-to-zod-schema-container294"
                              />
                            </Container>
                          </Container>
                        </Container>
                        <Container
                          tag="div"
                          data-mprt="2"
                          className="type-script-to-zod-schema-container295"
                        >
                          <Container
                            tag="div"
                            widgetid="__renameInputWidget"
                            className="type-script-to-zod-schema-container296"
                          >
                            <input
                              type="text"
                              aria-label="Rename input. Type new name and press Enter to commit."
                              className="type-script-to-zod-schema-html-element260"
                            />
                            <Container
                              tag="div"
                              className="type-script-to-zod-schema-container297"
                            >
                              <Text
                                tag="span"
                                text="Enter to Rename, Shift+Enter to Preview"
                              />
                            </Container>
                          </Container>
                        </Container>
                        <Container
                          tag="div"
                          aria-hidden="true"
                          className="type-script-to-zod-schema-container298"
                        />
                      </Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
      <Container
        tag="div"
        data-evergreen-toaster-container
        className="type-script-to-zod-schema-container299"
      >
        <Text tag="span" className="type-script-to-zod-schema-text186" />
      </Container>
      <next-route-announcer className="type-script-to-zod-schema-html-element261">
        <Text
          tag="p"
          aria-live="assertive"
          id="__next-route-announcer__"
          role="alert"
          className="type-script-to-zod-schema-text187"
        />
      </next-route-announcer>
      <Container
        tag="div"
        id="a11y-status-message"
        role="status"
        aria-live="polite"
        aria-relevant="additions text"
        className="type-script-to-zod-schema-container300"
      />
      <Container tag="div" className="type-script-to-zod-schema-container301">
        <Container
          tag="div"
          role="alert"
          aria-atomic="true"
          className="type-script-to-zod-schema-container302"
        />
        <Container
          tag="div"
          role="alert"
          aria-atomic="true"
          className="type-script-to-zod-schema-container303"
        />
        <Container
          tag="div"
          role="complementary"
          aria-live="polite"
          aria-atomic="true"
          className="type-script-to-zod-schema-container304"
        />
        <Container
          tag="div"
          role="complementary"
          aria-live="polite"
          aria-atomic="true"
          className="type-script-to-zod-schema-container305"
        />
      </Container>
    </Container>
  )
}

export default TypeScriptToZodSchema

KajooLayoutFactory.registerLayout("TypeScriptToZodSchema", TypeScriptToZodSchema)