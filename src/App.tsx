import {BrowserRouter as Router} from 'react-router-dom'
import {StyledEngineProvider} from '@mui/material/styles'

import {GlobalStyles} from 'lib/ui/theme/GlobalStyles'
import ScrollOnNav from 'lib/ScrollOnNav'
import ThemeProvider from 'lib/ui/theme/ThemeProvider'

import Routes from 'routes'

export default function App() {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider>
                <GlobalStyles />
                <Router>
                    <Routes />
                    <ScrollOnNav />
                </Router>
            </ThemeProvider>
        </StyledEngineProvider>
    )
}
