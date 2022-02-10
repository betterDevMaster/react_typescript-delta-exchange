import React from 'react'
import Typography from '@mui/material/Typography'

import Center from 'lib/ui/layout/Center'
import spinner from 'assets/images/spinner_80.gif'
import styled from 'styled-components'

export default function FullPageLoader() {
    return (
        <Center>
            <div>
                <Spinner />
                <Typography>loading...</Typography>
            </div>
        </Center>
    )
}

export function Spinner() {
    return <StyledImage src={spinner} alt="loading" />
}

export const StyledImage = styled.img`
    width: 64px;
`
