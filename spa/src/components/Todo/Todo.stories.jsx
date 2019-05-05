import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, date, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Todo from '.'

storiesOf('Todo', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <Todo
            description={text('description', 'A todo to do')}
            createdAt={myDateKnob('createdAt', new Date(2019, 2, 4, 12, 32))}
            onDoneClick={action('onDoneClick')}
        />
    ))

function myDateKnob(name, defaultValue) {
    const stringTimestamp = date(name, defaultValue)
    return new Date(stringTimestamp)
}
