import {createRoutes} from 'lib/url'
import GuestRoutes from 'routes/GuestRoutes'

export const routes = createRoutes({
    dashboard: '/',
})

export default function Routes() {
    return <GuestRoutes />
}
