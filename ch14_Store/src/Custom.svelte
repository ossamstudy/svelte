<script>
	import { count } from './store04';
</script>

<h1>현재 값: {$count}</h1>

<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>reset</button>