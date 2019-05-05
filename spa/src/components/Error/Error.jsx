import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = {
    error: {
        textAlign: 'center',
        padding: 10,
    },
}

const Error = ({ errorMessage, classes }) => (
    <Typography variant="caption" className={classes.error} color="error">
        {errorMessage || 'An error has occurred'}
    </Typography>
)

export default withStyles(styles)(Error)
