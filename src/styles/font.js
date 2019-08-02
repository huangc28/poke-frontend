import styled, { css } from 'styled-components'

export const boldMixin = css`
  font-weight: 700;
`

export const size12Mixin = css`
  font-size: 12px;
  font-size: 0.75rem;
`

export const size14Mixin = css`
  font-size: 14px;
  font-size: 0.875rem;
`

export const size16Mixin = css`
  font-size: 16px;
  font-size: 1rem;
`

export const size18Mixin = css`
  font-size: 18px;
  font-size: 1.125rem;
`

export const size20Mixin = css`
  font-size: 20px;
  font-size: 1.25rem;
`

export const size26Mixin = css`
  font-size: 26px;
  font-size: 1.625rem;
`

export const bold = component => styled(component)`
  ${boldMixin}
`

export const normal = component => styled(component)`
  font-weight: 400;
`

export const size10 = component => styled(component)`
  font-size: 10px;
  font-size: 0.625rem;
`
export const size12 = component => styled(component)`
  ${size12Mixin}
`

export const size14 = component => styled(component)`
  ${size14Mixin}
`

export const size16 = component => styled(component)`
  ${size16Mixin}
`

export const size18 = component => styled(component)`
  ${size18Mixin}
`

export const size20 = component => styled(component)`
  ${size20Mixin}
`

export const size26 = component => styled(component)`
  ${size26Mixin}
`

