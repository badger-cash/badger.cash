// @flow

import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChrome, faFirefox } from '@fortawesome/free-brands-svg-icons'

import SmartLink from '../atoms/SmartLink'
import Title from '../atoms/Title'
import Text from '../atoms/Text'
import H3 from '../atoms/H3'
import H2 from '../atoms/H2'
import Button from '../atoms/Button'

import Layout from '../components/Layout'
import Image from '../components/image'
import SEO from '../components/Seo'
import Container from '../components/Container'

const HeroContent = styled.div`
  text-align: center;
  z-index: 1;
  padding-bottom: 35px;
`

const Hero = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  min-height: 90vh;
  background-color: red;
  position: relative;
  overflow-x: hidden;
  color: ${props => props.theme.heroText};
`

const DownloadRow = styled.div`
  display: grid;
  grid-gap: 15px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 200px);
`

const Section = styled.div`
  padding: 30px 0;
  border-bottom: 1px solid #777;
`

const Example = styled.div``

const ImageArea = styled.div``
const Caption = styled.div``

type Props = {
  location: any,
  data: { heroImage: any },
}

const IndexPage = ({ location, data }: Props) => (
  <Layout location={location}>
    <SEO
      title="Badger Wallet - Home"
      keywords={[
        `Badger wallet`,
        `bitcoin cash`,
        `BCH`,
        'cryptocurrency',
        'wallet',
      ]}
    />
    <Hero>
      <Img
        style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
        fluid={data.heroImage.childImageSharp.fluid}
      />
      <HeroContent>
        <Title>Badger</Title>
        <H3>Your gateway to Bitcoin Cash (BCH) apps.</H3>
        <DownloadRow>
          <SmartLink to="https://chrome.google.com/webstore/detail/badger-wallet/jadobjbcgibiopkifknkfnohlelpocll">
            <Button>
              <Text>
                <FontAwesomeIcon icon={faChrome} /> Chrome{' '}
              </Text>
            </Button>
          </SmartLink>
          <SmartLink to="https://addons.mozilla.org/en-US/firefox/addon/badger-wallet/">
            <Button>
              <Text>
                <FontAwesomeIcon icon={faFirefox} /> Firefox{' '}
              </Text>
            </Button>
          </SmartLink>
        </DownloadRow>
      </HeroContent>
    </Hero>
    <Container>
      <Section>
        <Container thin>
          <H2 center>Identity</H2>
          <Text center>
            Badger is a secure identity vault for Bitcoin Cash (BCH). It allows
            you to hold Bitcoin Cash (BCH) & tokens; serving as your bridge to
            decentralized applications (dapps).
          </Text>
        </Container>
        <Example>
          <ImageArea />
          <Caption />
        </Example>
      </Section>

      <Section>
        <Container thin>
          <H2 center>Identity</H2>
          <Text center>
            Badger is a secure identity vault for Bitcoin Cash (BCH). It allows
            you to hold Bitcoin Cash (BCH) & tokens; serving as your bridge to
            decentralized applications (dapps).
          </Text>
        </Container>
      </Section>
    </Container>

    <h1>Content after the hero</h1>
  </Layout>
)

export default IndexPage

// Duotone colours must be manually updated
export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "bg-masthead.jpg" }) {
      childImageSharp {
        fluid(
          duotone: { highlight: "#f9b016", shadow: "#191919" }
          maxWidth: 2000
          quality: 85
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
