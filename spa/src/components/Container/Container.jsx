import React from 'react'

import { withStyles } from '@material-ui/core/styles'

const styles = {
    container: {
        padding: '20px 0',
        maxWidth: 450,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}

const Container = ({ classes, children }) => (
    <div className={classes.container}>{children}</div>
)

export default withStyles(styles)(Container)
