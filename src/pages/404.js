// @flow

import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

import H2 from '../atoms/H2'
import Text from '../atoms/Text'
import SmartLink from '../atoms/SmartLink'

const FullCenter = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  min-height: 75vh;
`
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <FullCenter>
      <H2>404 - Page not found</H2>
      <Text>
        You found a page which doesn&#39;t exist...{' '}
        <SmartLink to="/">Click here to go back to safety</SmartLink>
      </Text>
    </FullCenter>
  </Layout>
)

export default NotFoundPage
