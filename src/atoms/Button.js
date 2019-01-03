// @flow

import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  outline: none;
  width: 100%;
  border: 2px solid ${props => props.theme.heroText};
  border-radius: 4px;
  transition: all 0.2s;
  background-color: ${props => props.theme.heroText};
  &:hover {
    background-color: ${props => props.theme.fg900};
    color: ${props => props.theme.brand};
    border-color: ${props => props.theme.brand};
  }
`

export default Button
