import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import Dashboard from './pages/Dashboard'
import NavBar from './components/NavBar'
import Button from '@material-ui/core/Button'


class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Router>              
                    <NavBar />
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/dashboard" component={Dashboard} />
                </Router>
            </ThemeProvider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))