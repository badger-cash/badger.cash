// @flow

import styled, { css } from 'styled-components'

const Text = styled.p`
  font-size: 18px;
  line-height: 1.5em;
  margin: 0;
  ${props =>
    props.center &&
    css`
      text-align: center;
    `}
  ${props =>
    props.bold &&
    css`
      font-weight: 700;
    `}
`

export default Text
