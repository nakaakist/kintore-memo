import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './pages/Home'
import NavBar from './components/NavBar'

class App extends React.Component {
    render() {
        return (
            <Router>              
                <NavBar />
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))