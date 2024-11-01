<script>
	export let data;
</script>
<h1>Map</h1>
<p>여기는 오시는길페이지입니다.</p>
<ul>
	{#each data.stores as { id, name }}
		<li><a href="/map/{id}">{name}</a></li>
	{/each}
</ul>
