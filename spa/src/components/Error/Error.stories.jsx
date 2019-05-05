import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Error from '.'

storiesOf('Error', module)
    .addDecorator(withKnobs)
    .add('default', () => <Error />)
    .add('custom', () => (
        <Error errorMessage={text('errorMessage', 'Custom error')} />
    ))
