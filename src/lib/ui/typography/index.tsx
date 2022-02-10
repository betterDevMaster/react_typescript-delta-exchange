import React from 'react'
import styled from 'styled-components'

type TypographyProps = {
    fontWeight?: number | string
    fontSize?: number
    lineHeight?: number
    color?: string
    children: React.ReactNode | string
}

export const Title = styled.h1<TypographyProps>`
    font-weight: bold;
    font-size: 36px;
    line-height: 43px;
    color: ${(props) => (props.color ? props.color : '#000000')};
    margin-block-start: 0;
    margin-block-end: 0;
`

export const Description = styled.p<TypographyProps>`
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: ${(props) => (props.color ? props.color : '#939393')};
    margin-block-start: 0;
    margin-block-end: 0;
`
