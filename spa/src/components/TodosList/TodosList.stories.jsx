import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import TodosList from '.'

storiesOf('TodosList', module).add('default', () => (
    <TodosList
        todos={[
            {
                description: 'todo 1',
                createdAt: new Date(2019, 4, 4),
                _id: '1',
            },
            {
                description: 'todo 2',
                createdAt: new Date(2019, 4, 5),
                _id: '2',
            },
            {
                description: 'todo 3',
                createdAt: new Date(2019, 4, 6),
                _id: '3',
            },
        ]}
        onTodoDoneClick={action('onTodoDoneClick')}
    />
))
