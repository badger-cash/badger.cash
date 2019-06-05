// @flow

import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { BadgerBadge } from 'badger-components-react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChrome,
  faFirefox,
  faTwitter,
  faGithub,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons'

import SmartLink from '../atoms/SmartLink'
import Title from '../atoms/Title'
import Text from '../atoms/Text'
import H3 from '../atoms/H3'
import H2 from '../atoms/H2'
import Button from '../atoms/Button'

import Layout from '../components/Layout'
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
  justify-content: center;
  min-height: 93vh;
  background-color: ${props => props.theme.brand};
  position: relative;
  overflow-x: hidden;
  color: ${props => props.theme.heroText};
`

const DownloadGrid = styled.div`
  display: grid;
  grid-gap: 15px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 200px);
  ${media.large`
    grid-template-columns: 200px 200px;
  `}
`

const AppImageHolder = styled.div`
  align-items: center;
  justify-content: center;
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
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-gap: 25px;
  ${media.large`
    grid-template-columns: 1.6fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 0;
  `}
`

const CaptionArea = styled.div`
  display: grid;
  align-content: center;
`

const Caption = styled.div`
  text-align: center;
  ${media.large`
    text-align: left;
    border-left: 8px solid ${props => props.theme.brand};
    padding-left: 18px;
  `}
`

const BadgerButtonExample = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-gap: 25px;
  ${media.large`
    grid-template-columns: 1fr 1.5fr;
    grid-gap: 0;
    grid-template-rows: 1fr;
  `}
`

const BadgerButtonExampleText = styled.div`
  text-align: center;
  ${media.large`
    text-align: left;
  `}
`

const ButtonHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const SocialLinks = styled.div`
  display: grid;
  grid-gap: 15px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 50px);
  text-align: center;
`

const SocialCircle = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${props => props.theme.fg900};
  color: ${props => props.theme.brand};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${props => props.theme.brand};
    color: ${props => props.theme.bg};
  }
`

type Props = {
  location: any,
  data: {
    heroImage: any,
    identityImage: any,
    cashIDImage: any,
    slpImage: any,
    playStoreImage: any,
    appStoreImage: any,
  },
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
        'distributed applications',
        'dapp',
        'bitcoin cash wallet',
        'slp tokens',
        'bitcoin cash tokens',
        'slp wallet',
      ]}
    />
    <Hero>
      <Img
        style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
        fluid={data.heroImage.childImageSharp.fluid}
      />
      <HeroContent>
        <Title>Badger</Title>
        <H3>Your gateway to the world of Bitcoin Cash (BCH) apps</H3>

        <DownloadGrid>
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
          <SmartLink to="https://google.com">
            <AppImageHolder>
              <Img fluid={data.appStoreImage.childImageSharp.fluid} />
            </AppImageHolder>
          </SmartLink>
          <SmartLink to="https://google.com">
            <AppImageHolder>
              <Img fluid={data.playStoreImage.childImageSharp.fluid} />
            </AppImageHolder>
          </SmartLink>
        </DownloadGrid>
      </HeroContent>
    </Hero>

    <Container>
      <Section>
        <Container thin>
          <SectionTopGroup>
            <H2 center>SLP Token Vault</H2>
            <Text center>
              Full support for Simple Ledger Protocol (SLP) tokens on the
              Bitcoin Cash (BCH) blockchain. Badger wallet has full support for
              receiving and sending all SLP tokens.
            </Text>
          </SectionTopGroup>
        </Container>
        <Example>
          <Img fluid={data.slpImage.childImageSharp.fluid} />
          <CaptionArea>
            <Caption>
              <H3>Token Vault</H3>
              <Text>
                Hold, store, and send all of your SLP tokens with Badger wallet.
                SLP is the leading protocol to tokenize anything ontop of
                Bitcoin Cash (BCH)
              </Text>
            </Caption>
          </CaptionArea>
        </Example>
      </Section>
      <Section>
        <Container thin>
          <SectionTopGroup>
            <H2 center>Badger Button</H2>
            <Text center>
              Badger is your identity on this new web. You can pay for premium
              content, run smart contracts and experience Bitcoin Cash apps
              seamlessly and trust free. Install Badger to test the Badger
              Button demo below now.
            </Text>
          </SectionTopGroup>
        </Container>
        <BadgerButtonExample>
          <BadgerButtonExampleText>
            <H3>Micropayments</H3>
            <Text>
              Paywalls, in-app purchases, tokens and smart-contracts. Experience
              an entirely new web seamlessly.
            </Text>
          </BadgerButtonExampleText>
          <ButtonHolder>
            <BadgerBadge
              to="bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g"
              text="Donate to EatBCH"
              tag="Donate"
              showBrand={false}
              price={0.01}
              successFn={() => console.log('Success Fn Called')}
              failFn={() => console.log('Fail Fn Called')}
            />
          </ButtonHolder>
        </BadgerButtonExample>
      </Section>
      <Section>
        <Container thin>
          <SectionTopGroup>
            <H2 center>Identity</H2>
            <Text center>
              Badger is a secure identity vault for Bitcoin Cash. It allows you
              to hold Bitcoin Cash & tokens&mdash;serving as your bridge to BCH
              applications.
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
              CashID enables users to sign in to web pages using their BCH keys.
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
                and an enabling technology in our goal to be your identity vault
                and gateway to Bitcoin Cash apps.
              </Text>
            </Caption>
          </CaptionArea>
        </Example>
      </Section>

      <Section>
        <Container thin>
          <SectionTopGroup>
            <H2 center>Documentation</H2>
            <Text center>
              Check out our{' '}
              <SmartLink to="https://developer.bitcoin.com/badger">
                Developer Documentation
              </SmartLink>{' '}
              and use Badger to build your next Bitcoin Cash (BCH) project with
              ease.
            </Text>
          </SectionTopGroup>
        </Container>
      </Section>

      <Section style={{ borderBottom: 'none' }}>
        <Container thin>
          <SocialLinks>
            <SocialCircle
              href="https://twitter.com/badgerwallet"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </SocialCircle>
            <SocialCircle
              href="https://github.com/Bitcoin-com/badger/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </SocialCircle>
            <SocialCircle
              href="https://t.me/joinchat/IoTQ_hGflnfwd3YJSF8cRQ"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTelegram} />
            </SocialCircle>
          </SocialLinks>
        </Container>
      </Section>
      <Section style={{ borderBottom: 'none', padding: 0 }}>
        <Container thin>
          <SmartLink to="/terms-of-use">
            <Text center>Terms of Use</Text>
          </SmartLink>
        </Container>
      </Section>
    </Container>
  </Layout>
)

export default IndexPage

// Duotone colours must be manually updated
export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "bg-masthead.jpg" }) {
      childImageSharp {
        fluid(
          duotone: { highlight: "#444444", shadow: "#191919" }
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
    slpImage: file(relativePath: { eq: "slp-tokens.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    playStoreImage: file(relativePath: { eq: "google-play-badge.png" }) {
      childImageSharp {
        fluid(maxWidth: 250, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    appStoreImage: file(relativePath: { eq: "app-store-badge.png" }) {
      childImageSharp {
        fluid(maxWidth: 250, quality: 85) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
