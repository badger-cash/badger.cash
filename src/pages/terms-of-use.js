// @flow

import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Container from '../components/Container'

import SmartLink from '../atoms/SmartLink'
import Title from '../atoms/Title'
import Text from '../atoms/Text'
import H3 from '../atoms/H3'

const BackContainer = styled.div`
  margin: 20px 0;
`

type Props = { location: any, data: any }

const TermsOfUsePage = ({ location, data }: Props) => {
  const { html } = data.markdownRemark
  return (
    <Layout location={location}>
      <SEO
        title="Terms of Use - badger.bitcoin.com"
        keywords={[`Badger wallet`, `terms of use`, `ToU`]}
      />
      <Container>
        <BackContainer>
          <SmartLink to="/">
            <H3>
              <FontAwesomeIcon icon={faChevronLeft} /> Badger Home
            </H3>
          </SmartLink>
        </BackContainer>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </Layout>
  )
}

export default TermsOfUsePage

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "terms-of-use" } }) {
      html
    }
  }
`
