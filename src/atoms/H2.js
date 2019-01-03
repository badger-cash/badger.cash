// @flow

import styled, { css } from 'styled-components'

const H2 = styled.h2`
  font-size: 48px;
  font-weight: 400;
  margin: 0;
  ${props =>
    props.center &&
    css`
      text-align: center;
    `}
`

export default H2
