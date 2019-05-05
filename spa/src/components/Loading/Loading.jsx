import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = {
    loadingContainer: {
        padding: 10,
        textAlign: 'center',
    },
}

const Loading = ({ classes }) => (
    <div className={classes.loadingContainer}>
        <CircularProgress disableShrink />
    </div>
)

export default withStyles(styles)(Loading)
