<script>
	import { count } from './store01';

	const reset = () => {
		count.set(0);
	}
</script>

<button on:click={reset}>reset</button>