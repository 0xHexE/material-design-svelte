<script context="module">
	let fabUniqueIdCounter = 0;
</script>

<script>
    import { MDCRipple } from '@material/ripple';
    import { onMount } from 'svelte';
    import Icon from './icon.svelte';

    export let ariaLabel = '';
    export let classList = '';
    export let icon = '';
    export let iconClassList = '';

    /**
    * TODO: add support for the toggle icon
    * */

    export let ripple = true;
    const _uniqueId = `mdc-icon-button-svelte-id-${ fabUniqueIdCounter++ }`;
    if (ripple) {
        onMount(() => {
            new MDCRipple(document.querySelector(`#${ _uniqueId }`));
        });
    }
</script>

<button class="mdc-icon-button material-icons {classList}" aria-label="{ariaLabel}" id="{_uniqueId}" on:click>
    <slot>
        {icon}
    </slot>
</button>
