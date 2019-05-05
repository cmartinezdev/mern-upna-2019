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
    <Typography variant="h6" className={classes.error}>
        {errorMessage || 'An error has occurred'}
    </Typography>
)

export default withStyles(styles)(Error)
