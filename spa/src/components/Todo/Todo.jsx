import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {
    card: {
        margin: 10,
    },
}

const Todo = ({ description, createdAt, classes, onDoneClick }) => (
    <Card className={classes.card}>
        <CardContent>
            <Typography variant="h5" component="h2">
                {description}
            </Typography>
            <Typography color="textSecondary">
                {createdAt.toLocaleString()}
            </Typography>
        </CardContent>
        <CardActions>
            <Button
                size="small"
                variant="outlined"
                color="primary"
                onClick={onDoneClick}
            >
                Done
            </Button>
        </CardActions>
    </Card>
)

export default withStyles(styles)(Todo)
