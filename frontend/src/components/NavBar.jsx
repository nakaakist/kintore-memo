import React from "react"
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'
import { DataImportModal } from './DataImportModal'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))

export default function NavBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Kintore Memo
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        </div>
    )
}