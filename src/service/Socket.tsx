import {useState, useEffect} from 'react'

type Inner = {
    depth: string
    limit_price: string
    size: number
}

export interface MessageProps {
    buy: Inner[]
    last_sequence_no: number
    last_updated_at: number
    product_id: number
    sell: Inner[]
    symbol: string
    timestamp: number
    type: string
}

export default function Socket(currency: string) {
    const [session, setSession] = useState(null as unknown as WebSocket)
    const [message, setMessage] = useState<MessageProps | null>(null)
    const ENDPOINT = process.env.REACT_APP_SOCKET_URL

    useEffect(() => {
        const ws = new WebSocket(ENDPOINT!)
        setSession(ws)

        return () => ws.close()
    }, [ENDPOINT, currency])

    useEffect(() => {
        if (!session) return

        const subscription = {
            type: 'subscribe',
            payload: {
                channels: [
                    {
                        name: 'l2_orderbook',
                        symbols: [currency],
                    },
                ],
            },
        }
        session.onopen = () => session.send(JSON.stringify(subscription))

        session.onmessage = (ev: MessageEvent<any>) => {
            if (ev.data && ev.data !== message) setMessage(JSON.parse(ev.data))
        }

        session.onerror = function () {
            session.close()
            setTimeout(function () {
                Socket(currency)
            }, 1000)
        }
    }, [currency, message, session])

    return {message}
}
