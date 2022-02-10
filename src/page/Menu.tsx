import React from 'react'
import styled from 'styled-components'

import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, {SelectChangeEvent} from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import IconButton from 'lib/ui/IconButton'
import MenuOption from 'lib/ui/MenuOption'

import AllIcon from 'assets/images/all-button.png'
import BuyIcon from 'assets/images/buy-button.png'
import SellIcon from 'assets/images/sell-button.png'

export const currencies = ['BTCUSDT', 'BTCUSD', 'ETHUSDT', 'DOGEUSDT']

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        },
    },
}

export default function Menu(props: {onCurrencyChange: (value: string) => void; onViewTypeChange: (value: number) => void}) {
    const [currency, setCurrency] = React.useState(currencies[0])

    const handleChange = (event: SelectChangeEvent) => {
        setCurrency(event.target.value as string)
        props.onCurrencyChange(event.target.value)
    }
    const handleViewType = (type: number) => {
        /**
         * view type (0: all, 1: sell, 2: buy)
         * for a given component element.
         *
         * @param type
         */
        props.onViewTypeChange(type)
    }

    return (
        <Box sx={{width: '100%'}} my={4} display="flex" justifyContent="space-between">
            <LeftContent>
                <IconButton onClick={() => handleViewType(0)}>
                    <MenuOption icon={AllIcon} title="AllIcon" />
                </IconButton>
                <IconButton onClick={() => handleViewType(1)}>
                    <MenuOption icon={BuyIcon} title="BuyIcon" />
                </IconButton>
                <IconButton onClick={() => handleViewType(2)}>
                    <MenuOption icon={SellIcon} title="SellIcon" />
                </IconButton>
            </LeftContent>
            <StyledFormControl>
                <InputLabel>Currency</InputLabel>
                <Select value={currency} onChange={handleChange} MenuProps={MenuProps}>
                    {currencies.map((cur) => (
                        <MenuItem key={cur} value={cur}>
                            {cur}
                        </MenuItem>
                    ))}
                </Select>
            </StyledFormControl>
        </Box>
    )
}

const LeftContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
`
const StyledFormControl = styled(FormControl)`
    min-width: ${(props) => props.theme.spacing[50]};
`
