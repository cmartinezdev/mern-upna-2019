const apiUrl = 'http://localhost:3001'

export const getTodos = async () => {
    const response = await fetch(`${apiUrl}/todos`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
    const { result, message } = await response.json()

    if (response.status >= 400) {
        throw new Error(message)
    }

    if (!result || !result.length) {
        return []
    }

    return result.map(todo => ({
        ...todo,
        createdAt: new Date(todo.createdAt),
    }))
}

export const addTodo = async description => {
    const response = await fetch(`${apiUrl}/todos`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description }),
    })
    const { result, message } = await response.json()

    if (response.status >= 400) {
        throw new Error(message)
    }

    return result
}
