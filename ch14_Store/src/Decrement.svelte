<script>
	import { count } from './store01';

	const decrement = () => {
		count.update((n) => n - 1);
	}
</script>

<button on:click={decrement}> - </button>
