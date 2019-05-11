<script >
    import Button from '../../src/button.svelte';
    import Icon from '../../src/icon.svelte';

    export let label = '';
</script>

<Button {...$$props} on:click>
    { label }
</Button>
<Button {...$$props} icon="home" on:click>
    { label }
</Button>
<Button {...$$props} dense="{true}" on:click>
    { label }
</Button>

<Button {...$$props} on:click disabled="false">
    { label }
</Button>
