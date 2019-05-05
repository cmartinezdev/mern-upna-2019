import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import AddTodoModal from '.'

storiesOf('AddTodoModal', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <AddTodoModal
            isOpen={boolean('isOpen', 'true')}
            onClose={action('onClose')}
            onTodoAdded={action('onTodoAdded')}
        />
    ))
