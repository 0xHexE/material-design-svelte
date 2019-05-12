import {storiesOf} from "@storybook/svelte";
import {withKnobs} from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";
import IconButton from '../src/icon-button.svelte';

storiesOf('Icon Button', module)
    .addDecorator(withKnobs)
    .add('extended without icon', () => {
        return ({
            Component: IconButton,
            props: {
                ariaLabel: 'Create FAB',
                icon: 'add',
            },
            on: {
                click: action('clicked')
            },
        });
    });
