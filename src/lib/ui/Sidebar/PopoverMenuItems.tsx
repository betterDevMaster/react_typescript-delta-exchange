import Popover from '@mui/material/Popover'

import styled from 'styled-components'
import Box from 'lib/ui/Box'
import {Typography} from '@mui/material'

/**
 * It is the same with the Socket Message Inner type
 */
type Inner = {
    depth: string
    limit_price: string
    size: number
}

// eslint-disable-next-line no-extend-native

const sum = (array: number[]) => {
    return array.reduce((a: number, b: number) => a + b, 0)
}
// eslint-disable-next-line no-extend-native
const avg = (array: number[]) => {
    return !array.length ? 0 : sum(array) / array.length
}
/**
 * It will show up the menu items when the mouse hovers any item in collapsed mode on Desktop View.
 */
export default function PopoverMenuItems(props: {anchorEl: HTMLElement | null; mouseHoverIndex: number; list: Inner[]; show: boolean}) {
    if (props.mouseHoverIndex < 0 || props.show === false) {
        return null
    }
    const subList = props.list.filter((l, index) => index >= props.mouseHoverIndex)
    const avgDepth = avg(subList.map((l) => +l.depth)).toFixed(3)
    const avgSize = avg(subList.map((l) => +l.size)).toFixed(3)

    return (
        <StyledPopover
            open={Boolean(props.anchorEl)}
            anchorEl={props.anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            disableRestoreFocus
        >
            <Box p={1} display="flex" justifyContent="space-around">
                <Typography>Avg Price</Typography>
                <Typography>{avgDepth}</Typography>
            </Box>
            <Box p={1} display="flex" justifyContent="space-around">
                <Typography>Avg Quantity</Typography>
                <Typography>{avgSize}</Typography>
            </Box>
        </StyledPopover>
    )
}

const StyledPopover = styled(Popover)`
    pointer-events: none;
    .MuiPaper-root {
        background: #e7e7e7;
        min-width: 250px;
        margin-left: ${(props) => props.theme.spacing[2]};
    }
`
