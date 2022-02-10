import Dashboard from 'page/Dashboard'
import {routes} from 'routes'
import {Route, Routes} from 'react-router-dom'

export default function GuestRoutes() {
    return (
        <Routes>
            <Route path={routes.dashboard} element={<Dashboard />} />
        </Routes>
    )
}
