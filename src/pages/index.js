// @flow

import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChrome, faFirefox } from '@fortawesome/free-brands-svg-icons'

import SmartLink from '../atoms/SmartLink'
import Title from '../atoms/Title'
import H3 from '../atoms/H3'
import Button from '../atoms/Button'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const Content = styled.div`
  text-align: center;
  z-index: 1;
  padding-bottom: 35px;
`

const Text = styled.p`
  font-size: 18px;
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
      <Content>
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
      </Content>
    </Hero>
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
