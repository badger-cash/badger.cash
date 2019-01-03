// @flow

import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Title from '../atoms/Title'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const Content = styled.div`
  text-align: center;
  z-index: 1;
`

const Text = styled.p``

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
        <Text>
          Your gateway into the world of Bitcoin Cash (BCH) distributed
          applications
        </Text>
      </Content>
    </Hero>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
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
