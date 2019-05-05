import React from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import Loading from '../Loading'
import Error from '../Error'

class AddTodoModal extends React.Component {
    state = {
        description: '',
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.isOpen && prevProps.isOpen !== this.props.isOpen) {
            this.setState({ description: '' })
        }
    }

    render() {
        const { isOpen, onClose, isLoading, error } = this.props

        return (
            <Dialog
                open={isOpen}
                onClose={onClose}
                onBackdropClick={onClose}
                fullWidth
            >
                <DialogTitle>Add ToDo</DialogTitle>
                <DialogContent>
                    {isLoading ? (
                        <Loading />
                    ) : (
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
                    )}
                </DialogContent>
                {error && (
                    <Error
                        errorMessage={`An error has occurred adding todo... ${error}`}
                    />
                )}
                <DialogActions>
                    <Button onClick={onClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={this.handleAddClick}
                        color="primary"
                        disabled={!this.state.description || isLoading}
                    >
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }

    handleDescriptionChange = event =>
        this.setState({ description: event.target.value })

    handleAddClick = () => this.props.onTodoAdd(this.state.description)
}

export default AddTodoModal
