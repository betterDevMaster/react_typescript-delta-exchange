import styled from 'styled-components'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'

export type ItemMenuOptionProps = {
    icon?: string
    alt?: string
    color?: string
    className?: string
    title?: string
    onClick?: () => void
}

export default function ItemMenuOption(props: ItemMenuOptionProps) {
    const {icon, alt, className, title, onClick} = props

    const MenuIcon = () => {
        if (icon) {
            return <img src={icon} alt={alt} title={title} />
        }
        return null
    }

    return (
        <StyledMenuItem className={className} onClick={onClick}>
            <OptionInner>
                <MenuIcon />
            </OptionInner>
        </StyledMenuItem>
    )
}

const StyledMenuItem = styled(MenuItem)`
    padding: 0 !important;
    border: 1px solid #c4c4c4;
`
const OptionInner = styled(Box)`
    display: flex;
    align-items: center;
    img {
        width: 48px;
        height: 48px;
    }
`
