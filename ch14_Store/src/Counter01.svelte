<script>
	import { count } from './store01';
	import Increment from './Increment.svelte';
	import Decrement from './Decrement.svelte';
	import Reset from './Reset.svelte';
</script>

<h1>count값:  {$count}</h1>

<Increment />
<Decrement />
<Reset />
