// @flow

// Large title, used in the hero

import styled from 'styled-components'

import media from '../styles/media'

const Title = styled.h1`
  font-size: ${18 * 4}px;
  line-height: 1em;
  margin-top: 0;
  margin-bottom: 0.2em;
  color: ${props => props.theme.brand};
  ${media.large`
    font-size: ${18 * 6.5}px;
  `}
`

export default Title
