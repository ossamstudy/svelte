<script>
	import { page } from '$app/stores';
	import { stores } from '../data.js';
  	const id= Number($page.params.id);
</script>

<h2>점포별 오시는길 안내</h2>
<h3>{ stores[id-1].name }</h3>
<p>{ stores[id-1].addr }</p>
