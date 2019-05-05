import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'

import Header from './components/Header'
import Container from './components/Container'
import Loading from './components/Loading'
import Error from './components/Error'
import TodosList from './components/TodosList'
import AddTodoModal from './components/AddTodoModal'

import { getTodos, addTodo } from './core/todos'

class App extends React.Component {
    state = {
        todos: [],
        isLoading: false,
        error: '',
        isAddTodoModalOpen: false,
        isAddTodoModalLoading: false,
        addTodoModalError: '',
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
                    <Error
                        errorMessage={`An error has occurred loading todos... ${
                            this.state.error
                        }`}
                    />
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
                    onTodoAdd={this.handleOnTodoAdd}
                    error={this.state.addTodoModalError}
                    isLoading={this.state.isAddTodoModalLoading}
                />
            </>
        )
    }

    handleOnAddTodoClick = () => this.setState({ isAddTodoModalOpen: true })

    handleOnAddTodoModalClose = () =>
        this.setState({ isAddTodoModalOpen: false })

    handleOnTodoAdd = description => {
        this.setState({ isAddTodoModalLoading: true, addTodoModalError: '' })

        addTodo(description)
            .then(() => {
                this.setState({
                    isAddTodoModalOpen: false,
                    isAddTodoModalLoading: false,
                })
                this.loadTodos()
            })
            .catch(error =>
                this.setState({
                    isAddTodoModalLoading: false,
                    addTodoModalError: error.message,
                })
            )
    }

    handleOnTodoDoneClick = id => {
        console.log('handleOnAddTodoClick', id)
    }

    loadTodos = () => {
        this.setState({ isLoading: true, todos: [], error: '' })
        getTodos()
            .then(todos =>
                this.setState({ todos, isLoading: false, error: '' })
            )
            .catch(error =>
                this.setState({
                    todos: [],
                    error: error.message,
                    isLoading: false,
                })
            )
    }
}

export default App
