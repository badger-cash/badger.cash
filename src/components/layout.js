// @flow

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import SEO from './seo'

import Favicon from '../images/favicon.png'
import './layout.css'

type Props = {
  children: React.Node,
  location: Object,
}

type Data = {
  site: { siteMetadata: { title: string } },
}

const Layout = ({ children, location }: Props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data: Data) => (
      <>
        <SEO
          title={data.site.siteMetadata.title}
          description={
            'Badger Wallet is your gateway to the Bitcoin Cash (BCH) ecosystem'
          }
          keywords={
            'Badger wallet, developer tools, bitcoin, bitcoin cash, BCH, bitcoin wallet, sdk, api'
          }
          location={location}
          image={Favicon}
        >
          <meta charSet="utf-8" />
          <script>
            var BitcoinMenuWidth = 1152; var BitcoinMenuLang = 'en';
          </script>
          <script
            type="text/javascript"
            src="https://menu.cdn.bitcoindotcom.net/the-footer/dist/universal-footer.js"
          />
          <script src="https://menu.cdn.bitcoindotcom.net/the-menu/dist/universal-menu.js" />
        </SEO>

        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
          <footer>
            © {+new Date()}, Built wit.h <a href="https://www.gatsbyjs.org" />
          </footer>
        </div>
      </>
    )}
  />
)

export default Layout
