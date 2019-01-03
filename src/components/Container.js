// @flow
import styled, { css } from 'styled-components'

import media from '../styles/media'

const Container = styled.div`
  width: 98%;
  padding: 0 1%;

  ${media.large`
    width: 1140px;
    padding: 0;
    margin: 0 auto;
    ${props =>
      props.thin &&
      css`
        width: 730px;
      `}
  `};
`

export default Container
