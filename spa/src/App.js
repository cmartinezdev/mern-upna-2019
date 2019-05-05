import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'

import Header from './components/Header'
import Container from './components/Container'
import Loading from './components/Loading'
import Error from './components/Error'
import TodosList from './components/TodosList'
import AddTodoModal from './components/AddTodoModal'

import { getTodos } from './core/todos'

class App extends React.Component {
    state = {
        todos: [],
        isLoading: false,
        error: false,
        isAddTodoModalOpen: false,
    }

    componentDidMount() {
        this.loadTodos()
    }

    render() {
        return (
            <>
                <CssBaseline />
                <Header onAddTodoClick={this.handleOnAddTodoClick} />

                {this.state.isLoading && <Loading />}
                {this.state.error && (
                    <Error errorMessage="An error has occurred loading todos..." />
                )}

                <Container>
                    <TodosList
                        todos={this.state.todos}
                        onTodoDoneClick={this.handleOnTodoDoneClick}
                    />
                </Container>
                <AddTodoModal
                    isOpen={this.state.isAddTodoModalOpen}
                    onClose={this.handleOnAddTodoModalClose}
                    onTodoAdded={this.handleOnTodoAdded}
                />
            </>
        )
    }

    handleOnAddTodoClick = () => this.setState({ isAddTodoModalOpen: true })

    handleOnAddTodoModalClose = () =>
        this.setState({ isAddTodoModalOpen: false })

    handleOnTodoAdded = () => {
        this.setState({ isAddTodoModalOpen: false })
        this.loadTodos()
    }

    handleOnTodoDoneClick = id => {
        console.log('handleOnAddTodoClick', id)
    }

    loadTodos = () => {
        this.setState({ isLoading: true, todos: [], error: false })
        getTodos()
            .then(todos =>
                this.setState({ todos, isLoading: false, error: false })
            )
            .catch(() =>
                this.setState({ todos: [], error: true, isLoading: false })
            )
    }
}

export default App
