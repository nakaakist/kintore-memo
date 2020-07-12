import React from "react"
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'

export class NavBar extends React.Component {
    render () {
        return (
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default NavBar