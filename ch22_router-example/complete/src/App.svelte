<script>
	import { Router, Route } from "svelte-routing";
	import Title from "./components/Title.svelte";
	import BestListPage from "./components/BestListPage.svelte";
	import BestPage from "./components/BestPage.svelte";

	export let url = '';
</script>

<div class="bestbox">
	<Title name="BEST TOUR" />
	<Router {url}>
		<Route path="/" component={BestListPage} />
		<Route path="/:id" component={BestPage} />
	</Router>
</div>
