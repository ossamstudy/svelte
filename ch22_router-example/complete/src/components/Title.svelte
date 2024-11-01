<script>
    import { link } from "svelte-routing"; 
    export let name;
</script>

<h2><a use:link href="/">{name}</a></h2>