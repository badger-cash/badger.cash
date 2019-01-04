// @flow

import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import { config } from '@fortawesome/fontawesome-svg-core'

import SEO from './Seo'

import defaultTheme from '../styles/themes'
import Favicon from '../images/favicon.png'
import './layout.css'

import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

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
          <script
            type="text/javascript"
            src="https://menu.cdn.bitcoindotcom.net/the-menu/dist/universal-menu.js"
          />
        </SEO>
        <ThemeProvider theme={defaultTheme}>
          <>{children}</>
        </ThemeProvider>
      </>
    )}
  />
)

export default Layout
