const apiUrl = 'http://localhost:3001'

export const getTodos = () =>
    fetch(`${apiUrl}/todos`)
        .then(response => response.json())
        .then(({ result }) => {
            if (!result || !result.length) {
                return []
            }

            return result.map(todo => ({
                ...todo,
                createdAt: new Date(todo.createdAt),
            }))
        })
