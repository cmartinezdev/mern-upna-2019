import React from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

class AddTodoModal extends React.Component {
    state = {
        description: '',
    }

    render() {
        const { isOpen, onClose, onTodoAdded } = this.props

        return (
            <Dialog
                open={isOpen}
                onClose={onClose}
                onBackdropClick={onClose}
                fullWidth
            >
                <DialogTitle>Add ToDo</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        fullWidth
                        value={this.state.description}
                        onChange={this.handleDescriptionChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onTodoAdded} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }

    handleDescriptionChange = event =>
        this.setState({ description: event.target.value })
}

export default AddTodoModal
