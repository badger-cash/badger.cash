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

import media from '../styles/media'

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
  padding: 50px 0;
  border-bottom: 1px solid ${props => props.theme.fg100};
`
const SectionTopGroup = styled.div`
  margin-bottom: 50px;
`

const Example = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr;
`

const CaptionArea = styled.div`
  display: grid;
  align-content: center;
`

const Caption = styled.div`
  ${media.large`
    border-left: 8px solid ${props => props.theme.brand};
    padding-left: 18px;
  `}
`

type Props = {
  location: any,
  data: { heroImage: any, identityImage: any, cashIDImage: any },
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
          <SectionTopGroup>
            <H2 center>Identity</H2>
            <Text center>
              Badger is a secure identity vault for Bitcoin Cash (BCH). It
              allows you to hold Bitcoin Cash (BCH) & tokens; serving as your
              bridge to decentralized applications (dapps).
            </Text>
          </SectionTopGroup>
        </Container>
        <Example>
          <Img fluid={data.identityImage.childImageSharp.fluid} />
          <CaptionArea>
            <Caption>
              <H3>Bitcoin Cash Gateway</H3>
              <Text>
                Bitcoin Cash and tokens enable an entirely new dimension to the
                web with micro-payments, smart-assets, decentralized exchanges,
                distributed autonomous organizations and much more.
              </Text>
            </Caption>
          </CaptionArea>
        </Example>
      </Section>

      <Section>
        <Container thin>
          <SectionTopGroup>
            <H2 center>CashID</H2>
            <Text center>
              CashID enables users to sign in to web pages using their Bitcoin
              Cash keys.
            </Text>
          </SectionTopGroup>
        </Container>
        <Example>
          <Img fluid={data.cashIDImage.childImageSharp.fluid} />
          <CaptionArea>
            <Caption>
              <H3>Your Identity Vault</H3>
              <Text>
                We see this as an entirely new paradigm in identity management
                and an enabling technology in our goal to be your idenity vault
                and gateway to BCH dapps.{' '}
                <SmartLink to="https://cashid.badgerwallet.cash/">
                  Try out a CashID demo
                </SmartLink>
                .
              </Text>
            </Caption>
          </CaptionArea>
        </Example>
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
    identityImage: file(relativePath: { eq: "wallet.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cashIDImage: file(relativePath: { eq: "cashid.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
