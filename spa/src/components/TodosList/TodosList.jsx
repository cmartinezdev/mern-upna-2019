import React from 'react'

import Todo from '../Todo'

const TodosList = ({ todos, onTodoDoneClick }) => {
    if (!todos || !todos.length) {
        return null
    }

    return todos.map(({ _id, description, createdAt }) => (
        <Todo
            key={_id}
            description={description}
            createdAt={createdAt}
            onDoneClick={() => onTodoDoneClick(_id)}
        />
    ))
}

export default TodosList
