import React from 'react'

import {Title, Description} from 'lib/ui/typography'

import Page from 'page/Page'
import Menu, {currencies} from 'page/Menu'
import List from 'page/List'

export default function Dashboard() {
    const [currency, setCurrency] = React.useState<string>(currencies[0])
    const [viewType, setViewType] = React.useState<number>(0)

    return (
        <Page>
            <Title>WELCOME</Title>
            <Description>"l2_orderbook" orderbook channel</Description>
            <Menu onCurrencyChange={(currency: string) => setCurrency(currency)} onViewTypeChange={(type: number) => setViewType(type)} />
            <List currency={currency} viewType={viewType} />
        </Page>
    )
}
