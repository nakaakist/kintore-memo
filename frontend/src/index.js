import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'

class App extends React.Component {

    render() {
        return (
            <>
                <NavBar />
                <Home />
            </>
        )
    }
}


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
  document.getElementById('root')
)