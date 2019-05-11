import { storiesOf } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';
import {withKnobs, boolean, text, select} from '@storybook/addon-knobs';

import Button from './components/button.svelte';

import './style.css';

const props = {
    group: () => ({
        disabled: boolean('Disabled', false),
        ripple: boolean('Disabled', true),
        variant: select(['outline', 'raised', 'unelevated'], 'unelevated'),
        classList: text('', ''),
    }),
};

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('with variant outline', () => {
        return ({
            Component: Button,
            on: {
                click: action('clicked')
            },
            withKnobs: {
                ...props.group(),
            },
            props: {
                label: 'Button',
                ...props.group(),
                variant: 'outline',
            },
        });
    })
    .add('with variant raised', () => {
        return ({
            Component: Button,
            on: {
                click: action('clicked')
            },
            withKnobs: {
                ...props.group(),
            },
            props: {
                label: 'Button',
                ...props.group(),
                variant: 'raised',
            },
        });
    })
    .add('with variant unelevated', () => {
        return ({
            Component: Button,
            on: {
                click: action('clicked')
            },
            withKnobs: {
                ...props.group(),
            },
            props: {
                label: 'Button',
                ...props.group(),
                variant: 'unelevated',
            },
        });
    });
