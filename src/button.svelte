<script context="module">
	let buttonUniqueIdCounter = 0;
</script>

<script>
    import { MDCRipple } from '@material/ripple';
    import { onMount } from 'svelte';
    import Icon from './icon.svelte';

    export let ripple = true;
    export let variant = '';
    export let disabled = false;
    export let classList = '';
    export let dense = false;
    export let icon = '';

    const _uniqueId = `mdc-button-svelte-id-${ buttonUniqueIdCounter++ }`;

    if (ripple) {
        onMount(() => {
            new MDCRipple(document.querySelector(`#${ _uniqueId }`));
        });
    }

    $: variantMatch = `${ variant || '' }`.toLowerCase();

</script>

<button id={_uniqueId} class="{`mdc-button ${ classList }`}"
        class:mdc-button--outlined="{variantMatch === 'outline'}"
        class:mdc-button--raised="{variantMatch === 'raised'}"
        class:mdc-button--unelevated="{variantMatch === 'unelevated'}"
        class:mdc-button--dense="{dense}"
        class:mdc-button__icon="{!!icon}"
        on:click
        {disabled}
        {...$$props}>
    {#if icon}
        <Icon icon="{icon}"></Icon>
    {/if}
    <span class="mdc-button__label"><slot></slot></span>
</button>
