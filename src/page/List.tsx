import React, {createRef, useEffect, useState} from 'react'
import styled from 'styled-components'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import green from '@mui/material/colors/green'
import red from '@mui/material/colors/red'
import {Typography} from '@mui/material'

import PopoverMenuItems from 'lib/ui/Sidebar/PopoverMenuItems'
import FullPageLoader from 'lib/ui/layout/FullPageLoader'

import SocketService, {MessageProps} from 'service/Socket'

export default function List(props: {currency: string; viewType: number}) {
    const {currency, viewType} = props
    const {message} = SocketService(currency)
    // console.log('message -----', message)

    if (!message || !message.buy) {
        return <FullPageLoader />
    }
    return (
        <TableContainer
            sx={{
                overflow: 'auto',
            }}
            component={Paper}
        >
            <Table
                sx={{
                    tableLayout: 'fixed',
                }}
            >
                <TableHead>
                    <TableRow
                        sx={{
                            backgroundColor: '#f5f5f5',
                        }}
                    >
                        <TableCell>Price</TableCell>
                        <TableCell>Quantity</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
            <SellContent message={message} viewType={viewType} />
            <BuyContent message={message} viewType={viewType} />
        </TableContainer>
    )
}

function SellContent(props: {message: MessageProps; viewType: number}) {
    const {message, viewType} = props
    const buyRef = createRef<HTMLDivElement>()
    const [popoverEl, setPopoverEl] = useState<HTMLElement | null>(null)
    const [mouseHoverIndex, setMouseHoverIndex] = useState(-1)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        buyRef.current?.scrollIntoView()
    }, [buyRef])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (mouseHoverIndex !== -1) {
        }
    }, [mouseHoverIndex])

    const handleMouseOver = (index: number) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setPopoverEl(event.currentTarget)
        setMouseHoverIndex(index)
    }

    const handleMouseLeave = () => {
        setPopoverEl(null)
        setMouseHoverIndex(-1)
    }

    if (viewType === 1) return null

    return (
        <Body viewType={viewType}>
            <Table sx={{tableLayout: 'fixed'}}>
                <TableBody>
                    {message.sell.map((entry, index) => (
                        <TableRow key={index} onMouseEnter={handleMouseOver(index)} onMouseLeave={() => handleMouseLeave()}>
                            <TableCell sx={{color: red[500]}}>{entry.limit_price}</TableCell>
                            <TableCell>{entry.size}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div ref={buyRef} />
            <PopoverMenuItems anchorEl={popoverEl} list={message.sell} mouseHoverIndex={mouseHoverIndex} show={true} />
        </Body>
    )
}

function BuyContent(props: {message: MessageProps; viewType: number}) {
    const {message, viewType} = props
    const [popoverEl, setPopoverEl] = useState<HTMLElement | null>(null)
    const [mouseHoverIndex, setMouseHoverIndex] = useState(-1)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (mouseHoverIndex !== -1) {
        }
    }, [mouseHoverIndex])

    const handleMouseOver = (index: number) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setPopoverEl(event.currentTarget)
        setMouseHoverIndex(index)
    }

    const handleMouseLeave = () => {
        setPopoverEl(null)
        setMouseHoverIndex(-1)
    }

    if (viewType === 2) return null

    return (
        <Body viewType={viewType}>
            <Typography sx={{color: green[500], margin: '20px 0 10px 15px'}}>
                {message.symbol} {message.product_id}
            </Typography>
            <Table sx={{tableLayout: 'fixed'}}>
                <TableBody>
                    {message.buy.map((entry, index) => (
                        <TableRow key={index} onMouseEnter={handleMouseOver(index)} onMouseLeave={() => handleMouseLeave()}>
                            <TableCell sx={{color: green[500]}}>{entry.limit_price}</TableCell>
                            <TableCell>{entry.size}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <PopoverMenuItems anchorEl={popoverEl} list={message.sell} mouseHoverIndex={mouseHoverIndex} show={true} />
        </Body>
    )
}

const Body = styled.div<{
    viewType: number
}>`
    overflow: auto;
    height: ${(props) => (props.viewType !== 0 ? '522px' : '266px')};
    border: 1px solid #e0e0e0;
`
