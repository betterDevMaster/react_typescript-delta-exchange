import React from 'react'
import styled from 'styled-components'
import MuiButton from '@mui/material/Button/Button'
import MuiTextField, {TextFieldProps} from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import {makeStyles, withStyles} from '@mui/styles'

import {spacing} from 'lib/ui/theme'
import Center from 'lib/ui/layout/Center'

import backgroundImg from 'assets/images/background_login.png'

export default function Page(props: {children: React.ReactElement | React.ReactElement[]}) {
    return (
        <Background>
            <Container>{props.children}</Container>
        </Background>
    )
}

export function Error(props: {children?: string}) {
    if (!props.children) {
        return null
    }

    return <ErrorText color="error">{props.children}</ErrorText>
}

export const Description = styled.div`
    color: ${(props) => props.theme.colors.secondary};
    font-size: 20px;
    font-weight: 500;
    margin-bottom: ${(props) => props.theme.spacing[8]};
`

const Background = styled(Center)`
    background: url(${backgroundImg});
    background-size: cover;
    background-position: center;
`

export function TextField(props: TextFieldProps) {
    const useStyles = makeStyles({
        root: {
            backgroundColor: '#f2f5f9',
            borderRadius: spacing[14],
        },
        outline: {
            border: 'none',
        },
    })

    const classes = useStyles()

    return (
        <MuiTextField
            {...props}
            variant="outlined"
            InputProps={{
                classes: {
                    root: classes.root,
                    notchedOutline: classes.outline,
                },
            }}
        />
    )
}

const Container = styled.div`
    width: 100%;
    padding: ${(props) => props.theme.spacing[4]};
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
        width: 600px;
    }
`

const ErrorText = styled(Typography)`
    margin-bottom: ${(props) => props.theme.spacing[3]};
`

const buttonHeight = 50
const buttonBorderRadius = 16

export const Button = withStyles({
    root: {
        borderRadius: buttonBorderRadius,
        height: buttonHeight,
    },
})(MuiButton)

export const BackButton = withStyles({
    root: {
        borderRadius: buttonBorderRadius,
        height: buttonHeight,
        marginTop: spacing[3],
    },
})(MuiButton)
