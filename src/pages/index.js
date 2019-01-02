// @flow

import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = ({ location }) => (
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

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
