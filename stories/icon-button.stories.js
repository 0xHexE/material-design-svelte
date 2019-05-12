import {storiesOf} from "@storybook/svelte";
import {withKnobs} from "@storybook/addon-knobs";
import Fab from '../src/fab.svelte';
import {action} from "@storybook/addon-actions";

storiesOf('FAB', module)
    .addDecorator(withKnobs)
    .add('normal', () => {
        return ({
            Component: Fab,
            props: {
                icon: 'home'
            },
            on: {
                click: action('clicked')
            },
        });
    })
    .add('mini', () => {
        return ({
            Component: Fab,
            props: {
                icon: 'home',
                mini: true,
            },
            on: {
                click: action('clicked')
            },
        });
    })
    .add('extended', () => {
        return ({
            Component: Fab,
            props: {
                icon: 'home',
                isExtended: true,
                label: 'Create FAB'
            },
            on: {
                click: action('clicked')
            },
        });
    })
    .add('extended without icon', () => {
        return ({
            Component: Fab,
            props: {
                isExtended: true,
                label: 'Create FAB'
            },
            on: {
                click: action('clicked')
            },
        });
    });
