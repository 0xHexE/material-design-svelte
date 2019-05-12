<script context="module">
	let fabUniqueIdCounter = 0;
</script>

<script>
    import { MDCRipple } from '@material/ripple';
    import { onMount } from 'svelte';
    import Icon from './icon.svelte';

    export let ripple = true;
    export let mini = false;
    export let icon;
    export let ariaLabel;
    export let label = '';
    export let classList = '';
    /**
    * Reverse the icon and the text
    * @type {boolean}
    * TODO: In next release
    */
    export let reverseIconText = false;

    export let isExtended = false;

    const _uniqueId = `mdc-fab-svelte-id-${ fabUniqueIdCounter++ }`;

    if (ripple) {
        onMount(() => {
            new MDCRipple(document.querySelector(`#${ _uniqueId }`));
        });
    }
</script>

<button class="mdc-fab {classList}" aria-label="{ ariaLabel }"
        id="{_uniqueId}"
        on:click
        class:mdc-fab--extended="{isExtended}"
        class:mdc-fab--mini="{mini}">
    {#if icon}
        <Icon icon="{icon}" classList="mdc-fab__icon"></Icon>
    {/if}
    {#if label}
        <span class="mdc-fab__label">{ label }</span>
    {/if}
</button>

<style>
    .reverse-element {

    }
</style>
