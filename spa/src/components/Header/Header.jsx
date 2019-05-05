import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = {
    grow: {
        flexGrow: 1,
    },
}

const Header = ({ classes, onAddTodoClick }) => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
                MERN UPNA 2019
            </Typography>
            <Button color="inherit" onClick={onAddTodoClick}>
                Add ToDo
            </Button>
        </Toolbar>
    </AppBar>
)

export default withStyles(styles)(Header)
