// @flow

import styled, { css } from 'styled-components'

const Text = styled.p`
  font-size: 18px;
  line-height: 1.5em;
  ${props =>
    props.center &&
    css`
      text-align: center;
    `}
`

export default Text
